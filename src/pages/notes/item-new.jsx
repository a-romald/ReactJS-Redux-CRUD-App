import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import Input from '../../components/form/input/index.jsx';
import Textarea from '../../components/form/textarea/index.jsx';
import { addNote } from './actions';
import './styles.less';



class ItemNew extends React.Component {
    
    static path = '/notes/new';

    static propTypes = {
        dispatch: PropTypes.func.isRequired  
    };


    //To create redirect
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }


    constructor(props) {
        super(props);        

        this.state = {
            title: '',
            description: '',
            errors: {
                title: '',
                description: ''
            }
        };

        bindAll(this, ['changeTitle', 'changeDescription', 'save']);
        
    }



    changeTitle(title) {
        this.setState({ title });
    }



    changeDescription(description) {
        this.setState({ description });
    }



    save(event) {
        event.preventDefault();

        const { title, description } = this.state;
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

        this.props.dispatch( addNote(title, description) );

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
                            <b>Add New Note</b>
                        </div>
                        <div className='panel-body'>
                            <label className='control-label col-sm-3' style={{float: 'left'}}>Title</label>                            
                            <Input onChange={ this.changeTitle } value={ this.state.title } error={ this.state.errors.title } className="col-sm-6" />

                            <label className="control-label col-sm-3" style={{float: 'left'}}>Description</label>
                            <Textarea onChange={ this.changeDescription } value={ this.state.description } error={ this.state.errors.description } cols='30' rows='8' />
                        </div>                        
                        <div className='modal-footer'>
                            <button className='btn btn-success' onClick={ this.save }>Add Note</button>
                        </div>                     
                    </div>
                </div>
            </div>
        );
    }
    
}



function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ItemNew);