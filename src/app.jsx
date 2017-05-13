import React from 'react';
import { Nav } from './components/index';
import { DevTools } from './utils/index';


export default class App extends React.Component {	
    
    static path = '/';
    
    render() {
        return (
        	<div className='container-fluid'>
        	<Nav />        		
        		{ this.props.children }
        		{ process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
    
}
