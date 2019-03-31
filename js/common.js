


$(document).ready(function() {


	var imglink, $linkNoRash;
	$(".tooltip-img").mouseenter(function() {
		imglink = $(this).attr("data-imglink");
		$linkNoRash = imglink;
		$linkNoRash = $linkNoRash.slice(0, -4);
		$(this).append('<span class="tooltip-content"><a class="image-link" href="' + imglink + '"><img src="' + $linkNoRash + '-small.jpg" alt="..." /></a></span>');
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