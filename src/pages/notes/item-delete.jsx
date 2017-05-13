import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { deleteNote } from './actions';


class ItemDelete extends React.Component {
    

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: ''            
        };

        bindAll(this, ['cancel', 'deleteItem']);
    }


    static propTypes = {
        routeParams: PropTypes.any.isRequired,
        dispatch: PropTypes.func.isRequired  
    };


    //To create redirect
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }



    componentDidMount() {
        this.currentNote(this.props.routeParams.id);        
    }


    currentNote(id) {

        let record = null;
        const { items } = this.props.notes;

        items.forEach(function(item, key, items) { 
            let val_id = parseInt(item.id);
            if (val_id == id) {
                record = items[key];                                
            }            
        });

        this.setState({
            id: parseInt(record.id),
            title: record.title
        });
    }



    cancel() {
        //Redirect to /notes
        this.context.router.push('/notes');
    }



    deleteItem() {
        this.props.dispatch( deleteNote(this.state.id) );
        this.context.router.push('/notes');
    }




    render() {

        let spanStyle = {
          marginLeft: '20px'
        };

        return (
            <div className='row b-list-details'>
                <div className='col-xs-8'>
                    <div className='panel panel-primary'>
                        <div className='panel-heading'>
                            <b>Are you sure to delete note with ID: { this.state.id }</b> 
                            <span style={spanStyle}> { this.state.title } </span>
                        </div>                        
                        <div className='modal-footer'>
                            <button className='btn btn-default' onClick={ this.cancel }>Cancel</button>
                            <button className='btn btn-danger' onClick={ this.deleteItem }>Delete</button>
                        </div>                      
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

export default connect(mapStateToProps)(ItemDelete);

