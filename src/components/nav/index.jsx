import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
    
    static path = '/';
    
    render() {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' href='#'>Notes App</a>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li><Link to='/'>Main</Link></li>
                        <li><Link to='/notes'>Notes</Link></li>
                        <li><Link to='/contacts'>Error page</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
    
}
