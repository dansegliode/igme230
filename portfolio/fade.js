document.addEventListener("DOMContentLoaded", function (event) {
	document.getElementById('fade1').className += ' fade';
	document.getElementById('fade2').className += ' fade';
	document.getElementById('fade3').className += ' fade';
	// document.getElementById('fade5').className += ' fade';
});

$(function () {
	$('#fade1').removeClass('fade');
	$('#fade2').removeClass('fade');
	$('#fade3').removeClass('fade');
	$('#fade5').removeClass('fade');
});

$(document).ready(function() {

	$('body').css('display', 'none');
	
	$('body').fadeIn(400);
	
	

$('a').click(function() {

	event.preventDefault();
	
	newLocation = this.href;

	$('body').fadeOut(300, newpage);
	
	function newpage() {
	
	window.location = newLocation;
	
	}
});
});