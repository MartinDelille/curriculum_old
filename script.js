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

<!-- Piwik -->
<script type="text/javascript">
var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//piwik.phonations.com/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', 1]);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
</script>
<noscript><p><img src="//piwik.phonations.com/piwik.php?idsite=1" style="border:0;" alt="" /></p></noscript>
<!-- End Piwik Code -->

