export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';


export function addNote(title, description) {    

    return {
        type: ADD_NOTE,
        title, description
    };
}



export function editNote(id, title, description) {    

    return {
        type: EDIT_NOTE,
        id, title, description
    };
}






export function deleteNote(id) {
    return {
        type: DELETE_NOTE,
        id
    };
}



