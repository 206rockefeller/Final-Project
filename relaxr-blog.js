$(document).ready(function() {
	console.log("ready!");
});

$('#sign-up-btn').click(function() {
	event.preventDefault();
	alert(
		"Alert Test"
		);
});


$(document).ready(function () {
   $('.hide').hide();

   $('.readmore').click(function (event) {
       event.preventDefault();
       $(this).parent().find('#show-this-on-click').slideToggle('slow');
       $(this).text($(this).text() == 'Read less >' ? 'Read more >' : 'Read less >');
   });


$(document).ready(function() {
	$('.hide').hide();

	$('.learnmore').click(function (event) {
		event.preventDefault();
		$(this).parent().find('#learnmoretext').slideToggle('slow');
		$(this).text($(this).text() == 'Close' ? 'Learn more >' : 'Close');
	});

	});

});

