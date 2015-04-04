Array.isArray([]) //배열인지 여부 확인
//복합 타입과 원시 타입은 복사할때 차이가 남

var str = '문자열';
var str2 = str;
str = '문자열 수정';
console.log(str2);

var arr = ['A', 'B', 'C'];
var arr2 = arr;
arr.push('D');
console.log(arr2);
arr2= null;
console.log(arr);
console.log(arr2);

var 변수 = 1;
function 함수(첫번째, 두번째) {
//    console.log(arguments[2]);
    var 변수 = 2;
    console.log(변수)
}

함수('가', '나', '다');

var person = {
    name : '김태곤',
    sayName : function() {
        console.log(this.name);    
    }
};
var shin = {
    name : '신승엽',
    sayName : person.sayName
};
//shin.sayName = person.sayName;
person.sayName();
shin.sayName();

// 문제: 다음 함수를 작성하여 결과를 완성하라.

function fn(rect) {
    return[this.width * this.height]
};

var rect1 = {
    width : 30,
    height : 10,
    getArea : fn
};
console.log ( rect1.getArea() ); // 300

var rect2 = {
    width : 20,
    height : 10,
    getArea : fn
}
console.log (rect2.getArea() ); // 200

// 익명(anonymous) 함수
/*function fn()

var fn = function () {
    
};*/
(function(str){
    console.log(str);
})('aaa');

// callback 함수 = 특정한 사오항이 되었을 때 실행하기 위해 전달하는 함수
// 용도에 의해 구분되는 것이므로 평범하게 만들어진 함수도 콜백 함수가 될 수 있다
var timerId = setTimeout(function(){
    console.log('5초 지남')
}, 5000);
//clearTimeout(timerId)
function 사초뒤() {
    console.log('4초 지남');
}
setTimeout(사초뒤, 4000);

//setTimeout('사초뒤', 6000)

//이름이 있는 함수
function fn1() {
    console.log(arguments.callee)
}
fn1();