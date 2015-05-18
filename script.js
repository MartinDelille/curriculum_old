$(document).ready(function(){
	$('a#en').click(function(event){
		$('.fr').slideUp("slow");
		$('.en').slideDown("slow");
		event.preventDefault();
	});
	$('a#fr').click(function(event){
		$('.en').slideUp("slow");
		$('.fr').slideDown("slow");
		event.preventDefault();
	});
});

var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-35077843-1']);
	_gaq.push(['_trackPageview']);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();

