$(document).ready(function() {
	/////////////////////////////////
	// Initialize jQuery selectors //
	/////////////////////////////////
	// Containers/nav
	$main = $('#main-container');
	$project = $('#project-container')
	$nav_text = $('.nav-link');

	// Project page nav buttons
	$project_1_nav = $('#project-1');
	$project_2_nav = $('#project-2');
	$project_3_nav = $('#project-3');

	// Project page displays
	$project_1 = $('#a');
	$project_2 = $('#b');
	$project_3 = $('#c');

	// Project overlays
	$proj1 = $('#proj1');
	$proj2 = $('#proj2');
	$proj3 = $('#proj3');


	//////////////////
	// Home page JS //
	//////////////////
	// Start page button animation
	$('#start-btn').on('click', function() {
		$main.stop().animate({
			left: '-100%'
		}, 500, function() {
			setTimeout(function() {
				$project_1.fadeIn(1000);
			}, 500);

			$project_1_nav.fadeIn(1000);
			$project_2_nav.fadeIn(1000);
			$project_3_nav.fadeIn(1000);
		});

		$nav_text.stop().animate({
			color: '#9b7db0'
		}, 500)
	});


	/////////////////////
	// Project page JS //
	/////////////////////
	// Animates project selectors
	$('.project-overlay')
		.mouseenter(function(e) {
			$(e.target).stop().animate({
				opacity: 0.8
			}, 500)
		})
		.mouseleave(function(e) {
			$(e.target).stop().animate({
				opacity: 0
			}, 500)
		});

	// Animate correct project
	$proj1.on('click', function() {
		$project_2.fadeOut(1000);
		$project_3.fadeOut(1000);
		setTimeout(function() {
			$project_1.fadeIn(1000);
		}, 1000);
	});

	$proj2.on('click', function() {
		$project_1.fadeOut(1000);
		$project_3.fadeOut(1000);
		setTimeout(function() {
			$project_2.fadeIn(1000);
		}, 1000);
	});

	$proj3.on('click', function() {
		$project_1.fadeOut(1000);
		$project_2.fadeOut(1000);
		setTimeout(function() {
			$project_3.fadeIn(1000);
		}, 1000);
	});


	////////////////
	// Nav bar JS //
	////////////////
	// About Me Navigation
	$('#about-me-nav').on('click', function() {
		$main.animate({
			left: '0',
			top: '0'
		}, 500);

		$nav_text.stop().animate({
			color: '#65C3C1'
		}, 500);

		$project_1.fadeOut();
		$project_2.fadeOut();
		$project_3.fadeOut();

		$project_1_nav.fadeOut();
		$project_2_nav.fadeOut();
		$project_3_nav.fadeOut();
	});

	// My Work Navigation
	$('#work-nav').on('click', function() {
		$main.stop().animate({
			left: '-100%',
			top: '0'
		}, 500, function() {
			setTimeout(function() {
				$project_1.fadeIn(1000);
			}, 500);

			$project_1_nav.fadeIn(1000);
			$project_2_nav.fadeIn(1000);
			$project_3_nav.fadeIn(1000);
		});

		$nav_text.stop().animate({
			color: '#9b7db0'
		}, 500)
	});

	// Contact Me Navigation
	$('#contact-nav').on('click', function() {
		$main.stop().animate({
			left: '-100%',
			top: '-100%'
		}, 400);

		$nav_text.stop().animate({
			color: '#6dd6a4'
		}, 400);

		$project_1.fadeOut();
		$project_2.fadeOut();
		$project_3.fadeOut();

		$project_1_nav.fadeOut();
		$project_2_nav.fadeOut();
		$project_3_nav.fadeOut();
	});

	// Extras Navigation
	// $('#extras-nav').on('click', function() {
	// 	$main.animate({
	// 		left: '100%',
	// 		top: '0'
	// 	})
	// });
});