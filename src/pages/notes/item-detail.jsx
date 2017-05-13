import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { store } from '../../index';
import './styles.less';
import $ from 'jquery';
import config from '../../config.js';

export default class ItemDetails extends React.Component {
    
    static propTypes = {
        routeParams: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);        

        this.state = {
            id: '',
            title: '',
            description: ''
        };
    }


    componentDidMount() {
        this.noteOne(this.props.routeParams.id);
    }
    


    noteOne(id) {
        return $.getJSON(config.remoteAddr.url + 'one_note.php?id=' + id)
          .then((data) => {
            this.setState({ 
                id: data.id,
                title: data.title,
                description: data.description
            });
        });
    }

    
    
    render() {

        let spanStyle = {
          marginLeft: '43%'
        };

        return (
            <div className='row b-list-details'>
                <div className='col-xs-8'>
                    <div className='panel panel-primary'>
                        <div className='panel-heading'>
                            <b>ID: { this.state.id }</b> 
                            <span style={spanStyle}> { this.state.title } </span>
                        </div>
                        <div className='panel-body'>
                            { this.state.description }
                        </div>                       
                    </div>
                </div>
            </div>
        );
    }
    
}
