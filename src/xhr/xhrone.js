import $ from 'jquery';
import config from '../config.js';



export default function one_notes(id) {
    return $.getJSON(config.remoteAddr.url + 'one_note.php?id=' + id);
}

