var str1 = 'A regular expression is a special sequence of characters that helps you match or find other strings or sets of strings, using a specialized syntax held in a pattern.';
var str2 = '국내지점 서울/인천/경기 공항 지점. 인천지점. 지도보기. 주소, 인천광역시 남동구 미래로 49 제일은혜빌딩 2층. 연락처, TEL : 1588-8000. FAX : 032-437-0367.';
var str3 = '<h1>블리자드 엔터테인먼트: 연락처</h1><p>(한국) 대표 번호: 1644-0727</p><p>US Account & Billing: 1-800-592-5499</p><p>Australia Account & Billing: 1-800-041-378</p><p>Singapore Account & Billing: 1-800-2549-9273</p><p>Mexico Account & Billing: 001-888-578-7628</p><p>Argentina Account & Billing: 0800-333-0778</p><p>Chile Account & Billing: 1230-020-5554</p><p>Technical Support: 1-949-955-1382</p>';

var regex = new RegExp('[0-9]{4}-[0-9]{4}');
//console.log( regex.exec(str3) );

var regex = /\d{2}[01]\d{3}-[1-4]\d{6}/; //주민번호
var regex = /\d+(\-\d+)+/g;
console.log(str3.replace(regex, '<em>$&</em>'));

var regex = /<(\/?)p>/g;
console.log( str3.replace(regex, '<$1div>'));


//var elems = document.querySelectorAll('h2');
//for (i=0; i< elems.length; i++) {
//    elems[i].addEventListener('click', function(event){
//        console.log(event);
//        event.stopPropagation();
//        alert(this.innerHTML)
//    });
//}

//var body = document.querySelector('body');
//body.addEventListener('click', function(event){
//    alert('click')
//})

// jQuery는 크게 두단계로 사용된다.
// 1. 원하는 엘리먼트를 선탁하고
//jQuery('p')
// 2. 원하는 기능을 사용한다.
jQuery(function($){ // 문서를 모두 읽어들인 다음에 코드를 실행한다.
    var codeColor = $('p code').css('color');
    console.log(codeColor);
    
    $('#box').on('click', function(event){
        event.shiftKey; // 시프트 키가 눌렸는지 안눌렸는지 체크하는 프로퍼티
        //문제 : 시프트키를 누르고 클릭하면 가로/세로가 10픽셀씩 줄어들고
        //시프트키를 누르지 않고 클릭하면 가로/세로가 10픽셀씩 증가하는 코드를 작성하라
        var width = $(this).width();
        var height = $(this).height();
        if (event.shiftKey) {
            $(this).width(width-10)
            $(this).height(height-10)
        } else {    
            $(this).width(width+10)
            $(this).height(height+10)
        }
    });
});
jQuery.noConflict(); // 다른 라이브러리와 $ 변수의 충돌을 일으키지 않는다.
