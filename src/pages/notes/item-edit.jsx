import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import Input from '../../components/form/input/index.jsx';
import Textarea from '../../components/form/textarea/index.jsx';
import { editNote } from './actions';
import './styles.less';



class ItemEdit extends React.Component {
    
    
    static propTypes = {
        routeParams: PropTypes.any.isRequired,
        dispatch: PropTypes.func.isRequired  
    };


    //To create redirect
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }


    constructor(props) {
        super(props);        

        this.state = {
            id: '',
            title: '',
            description: '',
            errors: {
                title: '',
                description: ''
            }
        };

        bindAll(this, ['changeTitle', 'changeDescription', 'save']);
        
    }


    componentDidMount() {
        this.currentNote(this.props.routeParams.id);        
    }





    currentNote(id) {

        let record = null;
        const { items } = this.props.notes;

        //alert(items[1].id);
        items.forEach(function(item, key, items) { 
            let val_id = parseInt(item.id);
            if (val_id == id) {
                record = items[key];                                
            }            
        });

        this.setState({
            id: parseInt(record.id),
            title: record.title,
            description: record.description
        });
    }





    changeTitle(title) {
        this.setState({ title });
    }



    changeDescription(description) {
        this.setState({ description });
    }



    save(event) {
        event.preventDefault();

        const { id, title, description } = this.state;
        const errorTitle = 'Field Title could not be empty!';
        const errorDescription = 'Field Description could not be empty!';
        const errors = {
            name: '',
            description: ''
        };
        if (title === '') {
            errors.title = errorTitle;
        }
        if (description === '') {
            errors.description = errorDescription;
        }

        this.setState({ errors });

        if (errors.title || errors.description) {
            return;
        }

        this.props.dispatch( editNote(id, title, description) );

        this.setState({
            title: '',
            description: ''
        });

        //Redirect to /notes
        this.context.router.push('/notes');
        
    }


    

    
    render() {        

        return (
            <div className='row b-list-details'>            
                <div className='col-xs-8'>
                    <div className='panel panel-primary'>
                        <div className='panel-heading'>
                            <b>Edit Note ID: {this.props.routeParams.id}</b>
                        </div>
                        <div className='panel-body'>
                            <label className='control-label col-sm-3' style={{float: 'left'}}>Title</label>                            
                            <Input onChange={ this.changeTitle } value={ this.state.title } error={ this.state.errors.title } className="col-sm-6" />

                            <label className="control-label col-sm-3" style={{float: 'left'}}>Description</label>
                            <Textarea onChange={ this.changeDescription } value={ this.state.description } error={ this.state.errors.description } />
                        </div>                        
                        <div className='modal-footer'>
                            <button className='btn btn-success' onClick={ this.save }>Update Note</button>
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

export default connect(mapStateToProps)(ItemEdit);