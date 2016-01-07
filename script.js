//get info from server.js and set it in variable
window.onload = function() {
request.get('http://localhost:3000').end(function(err, res){
	document.getElementById("stash").innerHTML = res.body 
}) 
}