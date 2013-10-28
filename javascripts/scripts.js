$(document).ready(function() {
	window.scrollTo($(window).width(), 0);

	$main = $('#main-container');

	$('#code').on('click', function() {
		$main.animate({
			left: '100%'
		}, 1000);
	});

	$('#git').on('click', function() {
		$main.animate({
			left: '-100%'
		}, 1000);
	});

	$('#mail').on('click', function() {
		$main.animate({
			top: '-100%'
		}, 1000);
	});
});