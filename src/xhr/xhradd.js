import $ from 'jquery';
import config from '../config.js';



export default function add_note(title, description) {

	let note_id = null;

    $.ajax({
	      url: config.remoteAddr.url + 'add_note.php',
	      type: 'POST',
	      data: {title: title, description: description},
	      dataType: "json",
	      async: false,
	      success:function(data) {
	      	if (data.result = 'ok') {
	      		note_id = data.note_id;
	      	}
	      }
    });

    return note_id;
}

