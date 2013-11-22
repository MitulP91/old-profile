$(document).ready(function() {
	// Sidebar Panel Transitions
	$('#about-me').on('click', function() {
		// Sidebar
		$('#about-me').stop().animate({
			color: '#FA4B2A'
		}, 400);
		$('#work').stop().animate({
			color: '#000000'
		}, 400);
		$('#contact').stop().animate({
			color: '#000000'
		}, 400);

		// Content
		$('#work-container').stop().fadeOut();
		$('#contact-container').stop().fadeOut();

		setTimeout(function() {
			$('#about-container').stop().fadeIn();
		}, 500);
	});

	$('#work').on('click', function() {
		// Sidebar
		$('#work').stop().animate({
			color: '#FA4B2A'
		}, 400);
		$('#about-me').stop().animate({
			color: '#000000'
		}, 400);	
		$('#contact').stop().animate({
			color: '#000000'
		}, 400);

		// Content
		$('#about-container').stop().fadeOut();
		$('#contact-container').stop().fadeOut();
		setTimeout(function() {
			$('#work-container').stop().fadeIn();
		}, 500);
	});

	$('#contact').on('click', function() {
		// Sidebar
		$('#contact').stop().animate({
			color: '#FA4B2A'
		}, 400);
		$('#about-me').stop().animate({
			color: '#000000'
		}, 400);
		$('#work').stop().animate({
			color: '#000000'
		}, 400);

		// Content
		$('#work-container').stop().fadeOut();
		$('#about-container').stop().fadeOut();
		setTimeout(function() {
			$('#contact-container').stop().fadeIn();
		}, 500);
	});

	// Work Page Link Transitions
	$('.project-link').on('mouseenter', function() {
		$(this).stop().animate({
			color: '#FA4B2A'
		}, 300);
	});

	$('.project-link').on('mouseleave', function() {
		$(this).stop().animate({
			color: 'white'
		}, 300);
	});
});





