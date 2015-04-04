// 문자열을 표현하는 법
'문자열'
"문자열"
"string"
"문'자열"
'문\'자열' // 작은 따옴표를 이스케이프(escape)한 문자열.
console.log('문\\자열');
// 다른 이스케이프 문자로는 \n, \r, ]t 등이 있다. 콘솔에 입력해 확인해봅시다.
console.log('문\n자열'); // \n: 줄바꿈 (newline)
console.log('문\r자열'); // \r: 캐리지 리턴 (carriage return)
console.log('문\t자열'); // \t: 탭(tab)
            

// 숫자를 표현하는 법
100
100.5
100.6789
0.6
.6 // 정수부가 0일 때는 생략 가능하다.
012 // 8진법 표현
0x12 // 16진법 표현
parseInt('012')
/*
 * 오래된 브라주저에서 문제가 발생하는 것을 막기 위해
 * parseInt 두 번째 인수에는 사용할 진법을 명시적으로 표시한다.
 */
console.log(parseInt('12', 10))
// 두 번째 인수를 사용하면 16진수를 10진법으로 변환할 수 있다.
// 문제 16진수 c5f는 10진수로 얼마일까/

console.log(parseInt('c5f', 16))
// 숫자를 다른 진법으로 변환할 때는 toString 메소드를 사용한다.
console.log((35).toString(16)); // 10진수 35를 16진법으로 변환하면?
35.0.toString(16); // 명시적으로 소수자리 추가
35..toString(16); // 소수점자리 0은 생략가능

// 배열
    var fruits = ['Apple', 'Banana','Cherry'];
    console.log(fruits[0]); //배열 이름 뒤에 여는 대골호, 인덱스 번호, 닫는 대골호를 입력하면 배열의 원소에 접근할 수 있다.
    console.log(fruits[2]);

    // 배열에 값을 추가할 때는
    fruits[3] = 'Durian'
    console.log(fruits[3]);

// 객체
    var obj = {
        name : '백권우',
        age : 29
    };

    console.log(obj);

    // 객체 프로퍼티의 접근법 1 - 각괄호 표기법
    obj['name'];


    // 객체 프로퍼티의 접근법2 - 점 문법
    obj.age;

// 함수

    //함수 만드는 방법1 - 선언식

        function 라면요리(라면종류, 물의양) {
            //여기 동작할 코드
            console.log(라면종류 + '을 끓입니다');
            console.log('보글보글');
            console.log('후루루짭짭 후루루짭짭');
            console.log('맛좋은 라면');
        }
        라면요리('신라면', 400);
        라면요리('너구리', 500);

        // 함수를 실행할 때 전달받는 값을 가리켜 인수 (argument) 라고 한다.
        // 인수는 몇 개든 선언할 수 있다.

        // 문제: 실행할 때 이름을 전달하면 "안녕하세요, 김태곤님"과 같이 콘솔에 출력하는 함수 hello를 선언하라.
        function hello(name) {
            console.log('안녕하세요, ' + name + '님')
        }

        hello('백권우');
        hello('신승엽')

        // return을 사용하면 함수 안의 값을 밖으로 반환(또는 리턴)한다.
        function 더하기(num1, num2) {
            return(num1 + num2);
        }
        var num = 더하기(3, 5); //8
        console.log(num);

        // 문제: 전달한 숫자를 제곱한 값을 반환하는 함수
        function 제곱(num1) {
            return(num1 * num1);
        }
        var num = 제곱(5);

        // 자바스크립트에서는 함수도 하나의 값이다.
        var 제곱다시 = 제곱;
        제곱다시(5);

    // 함수를 만드는 방법 2
    
    var fn = function(n) {
        return n * n;
    };
    fn(5);

    var num = (function(n){
        return n * n;
    })(5);

// 변수의 스코프 (scope) = 유효범위
    //var 변수 = 10
    // 호이스팅(hoisting)
    function 함수() {
        안쪽함수();
        console.log(변수);

        var 변수 = 1;
        변수 = 변수 + 1;

        function 안쪽함수() {
            console.log('안쪽');
        }

    }
// 메소드는 함수를 값으로 가진 프로퍼티

    var car = {
        color : 'silver',
        start : function() {
            console.log('부릉');
        }
    };

    car.start();

// 문자열의 프로퍼티와 메소드
    var str = '동해물과 백두산이 마르고 닳도록 백두산아';
    //몇글자?
    console.log(str.length);
    // 특정 문자열을 포함하고 있나?
    var idx =str.indexOf('마르고');
    str.lastIndexOf('백두산')

    console.log(idx);
    // 문자열 자르기 - substr(시작위치, 길이)
    var 새문자열 = str.substr(0, 7);
    console.log(새문자열)

    var 백두산이 = str.substr(5);
    console.log(백두산이)
    //문자열 자르기 - substring(시작위치, 끝x위치)
    var 백두산 = str.substring(5, 8);
    console.log(백두산)

// 숫자의 메소드
    var num = 1234.555
    // 소수점 아래 자리수를 맞추는 (반올림)
    console.log(num.toFixed(2))

// 배열의 메소드
    var fruits = ['Apple', 'Banana','Cherry'];
    fruits.length; // fruits 배열의 원소의 개수
    //배열에 원소를 추가하는 방법1
    fruits[fruits.length] = 'Blueberry '
    //배열 마지막에 원소를 추가하는 방법2
    fruits.push('Mango');
    console.log(fruits.join());

console.log(fruits)

//문제 : 배열에 포함된 원소 갯수를 알아내서 반환하는 함수 arraySize()

var 배열의크기 = arraySize(['a','b','c','d','e'])

function arraySize(배열) {
    return 배열.length;
}
console.log(배열의크기)

// 문제: 배열 첫 번째 원소의 값을 반환하는 arrayFirst() 함수를 작성하라.

var 첫번째원소 = arrayFirst (['a','b','c'])

function arrayFirst(배열) {
    return 배열[0];
}

console.log(첫번째원소)

// 문제: 배열 마지막 원소의 값을 반환하는 arrayLast() 함수를 작성하라.

var 마지막원소 = arrayLast (['a','b','c'])
function arrayLast(배열) {
    return 배열[배열.length - 1]
}

console.log(마지막원소)