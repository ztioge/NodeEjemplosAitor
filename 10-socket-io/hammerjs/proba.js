$(document).ready(function() {

	// alert("kaixo");
	var hammer1 = new Hammer(document.getElementById('bat'));
	var hammer2 = new Hammer(document.getElementById('bi'));
	var hammer3 = new Hammer(document.getElementById('hiru'));

	hammer1.on("tap", function(ev) {
	// hammer1.ontap = function(ev) {
		document.getElementById('bat').style.background = 'red';
		document.getElementById('bi').style.background = 'yellow';
		document.getElementById('hiru').style.background = 'yellow';

		// send the change
		send('bat');
	});

	hammer2.on("tap", function(ev) {
		document.getElementById('bi').style.background = 'red';
		document.getElementById('bat').style.background = 'yellow';
		document.getElementById('hiru').style.background = 'yellow';

		// send the change
		send('bi');
	});

	hammer3.on("tap", function(ev) {
		document.getElementById('hiru').style.background = 'red';
		document.getElementById('bat').style.background = 'yellow';
		document.getElementById('bi').style.background = 'yellow';

		// send the change
		send('hiru');

	});
	
	hammer1.on("onswipe", function(ev) {
		document.getElementById('bat').style.background = 'green';
		document.getElementById('bi').style.background = 'yellow';
		document.getElementById('hiru').style.background = 'yellow';
	});

});