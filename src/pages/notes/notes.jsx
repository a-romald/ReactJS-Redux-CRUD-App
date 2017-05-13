import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router';
import ListItem from './list-item.jsx';



class NotesPage extends React.Component {
    
    static path = '/notes';

    static propTypes = {
        notes: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };


    constructor(props) {
        super(props);

        this.state = {
            
        };

        bindAll(this, ['renderItems']);        
    }


  


    renderItems(item, idx) {
        return (
            <ListItem 
                key={ idx }
                id={ item.id }
                title={ item.title }
            />
        );
    }

    


    render() {
        
        const { items } = this.props.notes;        

        let butStyle = {
            backgroundColor: '#8EC38D',
            cursor: 'pointer',
            padding: '2px 12px 3px 12px',
            textDecoration: 'none',
            padding: '10px',
            borderRadius: '5px'
        };

        return (
            <div>

                <p>
                    <span style={butStyle}><Link to='/notes/new'>ADD NOTE</Link></span>
                </p>

                <h2>Notes List:</h2>                

                <div className='row'>
                    <div className='col-xs-8'>
                        <table className='table table-bordered table-hover'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {do {
                                    if (items) {
                                      {items.map(this.renderItems)}
                                    } else {
                                      <span>No available notes.</span>
                                    }
                                }}                                
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }



    
}



function mapStateToProps(state) {
    return {
        notes: state.notes
    };
}


export default connect(mapStateToProps)(NotesPage);
