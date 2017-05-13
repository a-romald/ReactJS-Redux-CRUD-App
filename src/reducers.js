import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { MainReducer } from './pages/main/index';
import { NotesReducer } from './pages/notes/index';


export default combineReducers({
    routing: routerReducer,
    ...MainReducer,
    ...NotesReducer
});
