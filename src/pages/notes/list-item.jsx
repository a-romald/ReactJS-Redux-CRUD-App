import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class ListItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired
    };
    
    render() {
        return (
            <tr>
                <td>{ this.props.id }</td>
                <td><Link to={`/notes/${ this.props.id }`}> { this.props.title }</Link></td>
                <td>
                    <Link to={ `/notes/edit/${this.props.id}` }>
                        <button className='btn' >
                            <i className='glyphicon glyphicon-pencil' />
                        </button>
                    </Link>
                    &nbsp;&nbsp;
                    <Link to={ `/notes/delete/${this.props.id}` }>
                        <button className='btn' >
                            <i className='glyphicon glyphicon-remove' />
                        </button>
                    </Link>
                </td>
            </tr>
        );
    }
    
}
