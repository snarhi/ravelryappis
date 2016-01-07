//get info from server.js and set it on the page

//ready function to make sure that whole page is loaded, specifically jquery.js
$(document).ready(function() {
	$.get('http://localhost:3000', function(data) {

		$(".stash").text(data.stash[0].color_family_name)

		})

}) 
