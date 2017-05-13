import React from 'react';
import { Route } from 'react-router';
import NotesPage from './notes.jsx';
import ItemDetail from './item-detail.jsx';
import ItemNew from './item-new.jsx';
import ItemEdit from './item-edit.jsx';
import ItemDelete from './item-delete.jsx';

export default (
    <Route>
        <Route component={ NotesPage } path={ NotesPage.path } />
        <Route component={ ItemNew } path={ NotesPage.path + '/new' } />
        <Route component={ ItemEdit } path={ NotesPage.path + '/edit' + '/:id' } />
        <Route component={ ItemDelete } path={ NotesPage.path + '/delete' + '/:id' } />
        <Route component={ ItemDetail } path={ NotesPage.path + '/:id' } />
    </Route>
);
