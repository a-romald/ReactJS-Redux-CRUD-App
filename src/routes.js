import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app.jsx';

import { MainPage, MainRoutes } from './pages/main/index';
import { NotesRoutes } from './pages/notes/index';
import ErrorPage from './pages/error/index.jsx';


export default (
    <Route component={ App } path={ App.path } >
        <IndexRoute component={ MainPage } />
        
        { NotesRoutes }

        <Route path='*' component={ ErrorPage } />
    </Route>
);
