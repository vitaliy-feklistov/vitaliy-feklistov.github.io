


$(document).ready(function() {


	var imglink;
	$(".tooltip-img").mouseenter(function() {
		imglink = $(this).attr("data-imglink");
		$(this).append('<span class="tooltip-content"><a class="image-link" href="' + imglink + '"><img src="' + imglink + '" alt="..." /></a></span>');
		$('.image-link').magnificPopup({
			type: 'image',

		});
	}).mouseleave(function() {
		$(this).find(".tooltip-content").remove();
	});

	$('.image-link').magnificPopup({
		type: 'image',
	});


});