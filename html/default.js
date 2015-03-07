jQuery(function($){
	var $gnbBtn = $(".gnb>button");
	// 모바이 gnb 토글 버튼
	$gnbBtn.on("click", function(){
		// $(".gnb>ul").slideToggle(200);
		$(this).next("ul").slideToggle(100);

		if( $gnbBtn.text() === "메뉴 열기" ){
			// 메뉴 닫기 텍스트 표시
			$gnbBtn.text("메뉴 닫기");
		} else {
			// 메뉴 열기 텍스트 표시
			$gnbBtn.text("메뉴 열기");
		}
	});


	// 태블릿 + 데스트톱 gnb 메뉴
	$(".gnb>ul>li>a").on("mouseover focus", function(){
		$(this).parent().addClass("active").siblings().removeClass("active");

	});
});