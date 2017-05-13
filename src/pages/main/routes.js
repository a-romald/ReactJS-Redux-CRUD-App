import React from 'react';
import { Route } from 'react-router';
import MainPage from './main.jsx';

export default (
    <Route>
        <Route component={ MainPage } path={ MainPage.path } />        
    </Route>
);
