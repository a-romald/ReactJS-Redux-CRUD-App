import $ from 'jquery';
import config from '../config.js';



export default function update_note(id, title, description) {	

    $.ajax({
	      url: config.remoteAddr.url + 'update_note.php',
	      type: 'POST',
	      data: {id: id, title: title, description: description},
	      dataType: "json",
	      async: false,
	      success:function(data) {
	      	if (data.result = 'ok') {
	      	}
	      }
    });

    return;
}

