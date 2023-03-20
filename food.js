

document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();
	// Add the code to show the modal here
});
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
document.getElementById("btn").onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// Prevent form submission and show the modal
document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();
	modal.style.display = "block";
});





// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
document.getElementById("btn").onclick = function() {
	// Check if any form field has a value
	if (document.querySelector('form input[value!=""]').value !== null) {
		modal.style.display = "block";
	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// Prevent form submission and show the modal
document.querySelector('form').addEventListener('submit', function(event) {
	// Check if any form field has a value
	if (document.querySelector('form input[value!=""]').value !== null) {
		modal.style.display = "block";
		event.preventDefault();
	}
});