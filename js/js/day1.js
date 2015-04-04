// var는 변수를 선언할 때 사용하는 키워드 (variable)
var str = 'Hello, world!';
/*
 * @author 백권우
 */ 
console.log(str);

// 변수 여러 개 선언
var str = 'Hello', str2 = 'World';

// 변수 이름 규칙. 다음을 제외하면 모두 허용
// 1. 첫글자는 숫자 안됨
// 2. 공백, 엔터 등 툭수문자는 모두 안됨. 단, $, _는 제외
// 3. 자바스크립트의 키워드는 안됨

// 자바스크립트의 타입 (혹은 자료형)
var str = '문자열'; // 따옴표 또는 작은 따옴포로 감싼다.
var num = 1; // 숫자 (number) 정수 또는 실수 값
var num = 100.5;
var boo = true; // 블리언(Boolean), true 또는 false만 가질 수 있다.

var str2 = str; // str값을 str2에 복사
str = '문자열을 막 바꿔'; // var는 변수를 처음 만들 때만 사용한다.

// 숫자의 연산
var num1 = 100, num2 = 20;
/*
 * 사칙연산은 더하기(+), 빼기 (-), 곱하기(*), 나누기(/) 가능
 * 우선순위는 괄호 > 곱하기=나누기 > 더하기=빼기
 */
console.log( num1 + ( num1 / num2) + 5 );
console.log( 0 / num1 );
console.log( num1 / 0 ); // 무한 Infinity
// 나머지 연산자(%)
console.log( 5 % 2 );

// 문자열 더하기
var str1 = 'Hello', str2 = 'World', str3;
console.log( str1 + ',' + str2 + str3); // undefined
console.log ( str1 + num1 );
var 삼백 = '300abc';
console.log( 삼백 + num1 );

// parseInt는 문자열 타입을 숫자 타입으로 변환.
// 앞에서부터 확인해서 숫자인데까지만 변환.
// 숫자가 아닌 값을 변환하면 NaN (Not a Number)이 나옴.


var 숫자삼백 = parseInt(삼백);
console.log( 삼백 + num1 );
console.log( 숫자삼백 + num1 );
console.log( isNaN(숫자삼백) );

// 숫자를 문자열로 바꿀 때는 빈 문자열을 더한다.
var 숫자인가문자열인가 = 숫자삼백 + '';
console.log( typeof 숫자인가문자열인가 );

var 불리언 = false;

console.log(typeof 삼백);   // "string"
console.log(typeof 10);    // "number"
console.log(typeof false); // "boolean"

var 언디파인드;
console.log(typeof undefined); // "undefined"
console.log(typeof 언디파인드); // "undefined"

