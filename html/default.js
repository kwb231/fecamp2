jQuery(function($){
	$(".gnb>button").on("click", function(){
		$(".gnb>ul").slideToggle(200);
		// $(this).next("ul").slideToggle(200);
	});
});