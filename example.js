$(document).ready(function() {
	window.favicon = new Favico({
		animation : 'popFade'
	});
	$('.favVideo').bind('click', function(e) {
		//images
		var favBadge = $(this).attr('favicon-action');
		var video = document.getElementById(favBadge);
		video.volume = 1;
		if (!video.paused && !video.ended) {
			video.pause();
			video.currentTime = 0;
			$(this).html('Play video');
			window.favicon.video('stop');
		} else {
			window.favicon.video(video);
			$(this).html('Stop video');
			video.play();
		}
	});
});
