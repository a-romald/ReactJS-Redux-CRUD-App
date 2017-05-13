import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from './actions';
import $ from 'jquery';
import all_notes from '../../xhr/xhrall';
import add_note from '../../xhr/xhradd';
import update_note from '../../xhr/xhrupdate';
import delete_note from '../../xhr/xhrdelete';


var initialState = {
    items: all_notes(),
    error: ''
};



function notesReducer(state = initialState, action) {
    switch (action.type) {        
        case ADD_NOTE:
            let items = state.items;
            //Insert to Database
            let note_id = add_note(action.title, action.description);

            items.push({ id: note_id, title: action.title, description: action.description });

            return Object.assign({}, state, {
                items
            });

        case EDIT_NOTE:

            var items = state.items;
            var idx = null;//порядковый номер элемента массива, не id в базе данных

            items.forEach(function(item, key, items) { 
                let val_id = parseInt(item.id);
                if (val_id == action.id) {
                    idx = key;                    
                }            
            }); 

            items[idx].title = action.title;
            items[idx].description = action.description;

            //Update in database
            update_note(action.id, action.title, action.description);
            
            return Object.assign({}, state, {
                items
            });

        case DELETE_NOTE:           

            var items = state.items;
            var i = null;

            items.forEach(function(item, key, items) { 
                let val_id = parseInt(item.id);
                if (val_id == action.id) {
                    i = key;                    
                }            
            });

            items.splice(i, 1);

            //Delete from Database
            delete_note(action.id);
        
        default:
            return state;
    }
}

const NotesReducer = {
    notes: notesReducer
};

export default NotesReducer;

