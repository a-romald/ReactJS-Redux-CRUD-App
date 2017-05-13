import $ from 'jquery';
import config from '../config.js';



export default function delete_note(id) {	

    $.ajax({
	      url: config.remoteAddr.url + 'delete_note.php',
	      type: 'GET',
	      data: {id: id},
	      dataType: "json",
	      async: false,
	      success:function(data) {
	      	if (data.result = 'ok') {
	      	}
	      }
    });

    return;
}

