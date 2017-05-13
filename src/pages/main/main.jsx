import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import classnames from 'classnames';


class MainPage extends React.Component {
    
    static path = '/';

    static propTypes = {
        main: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            
        };       
        
    }

    

    render() {        

        return (
            <div>
                <h1>Welcome to Notes Application!</h1>
            </div>
        );
    }



    
}



function mapStateToProps(state) {
    return {
        main: state.main
    };
}


export default connect(mapStateToProps)(MainPage);
