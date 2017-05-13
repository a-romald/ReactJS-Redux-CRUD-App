import $ from 'jquery';
import config from '../config.js';



export default function all_notes() {
	let notes = [];

	$.ajax({
      url: config.remoteAddr.url + 'all_notes.php',
      type: 'GET',
      dataType: "json",
      async: false,
      success:function(data) {
      	if (data.result == 'ok') {      		
           notes = data.notes; 
      	}
      }
   });

   return notes;   
}