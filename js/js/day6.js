// 문제: 1초마다 한번씩 실행하며 현재 시간을 표시하는 clock() 함수를 작성하라.
// 단, 시간은 반드시 두자리로 표시해야 한다. 예를 들어 9시 50분 9초라면 09:50:09로 표시한다.
// 사용예: clock();
// 힌트: 시간은 document.title = 시간문자열; 과 같이 작성하면 표시할 수 있다.

function clock() {
    var date = new Date(), h, m, s;
    
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    
    if (h < 10) {
        h = '0' + h
    }
    if (m < 10) {
        m = '0' + m
    }
    if (s < 10) {
        s = '0' + s
    }
    
    var str = h+':'+m+':'+s
    // 여기에 내용을 채우세요
    
    document.title = str;
    setTimeout(arguments.callee, 1)
}
clock();

// 1부터 10까지 콘솔에 출력하는 코드
var i=1;
for (; i <= 10; ) {
    console.log(i);
    i++
}

// 문제: 인수로 전달한 숫자의 단을 콘솔에 출력하는 구구단() 함수를 작성하라.
function 구구단(num) {
    for (i=1; i <10; i++) {
        if (i === num) {
            continue;
        }
        console.log(num+" x "+i+' = '+(num * i));
    }
}
구구단(3); //

// 문제: 2단부터 9단까지 포함한 <table> 문자열을 반환하는 함수
function 구구단전부() {
    var html = '<table>';
    
    
    
    for (var i=0; i < 10; i++) {
        if (i === 3) {
            continue;
        }
        for (var j=2; j < 10; j++) {
            if (j === 3) {
//                html += '<th>&nbsp;</th>';
                continue;
            }
            if (i === 0) {
                    html += '<th>' + j + '단</th>';
                } else {
                    html += '<td>' + j + ' x ' + i + ' = ' + (j * i) + '</td>';
                } 
            
        }
        html += '</tr>'
    }
        
    
//    var fl = ''
//    for (i=2, k=1; i<10; i++) {
//        fl = fl +'<td>'+i+' x '+k+' = '+(i*i)+'</td>'
//    }
//    for (; k<=10; k++) {
//        html = html + '<tr>'+fl+'</tr>'
//    }
    html += '</html>';
    
    return html;
}

window.onload = function() {
        document.getElementById('box').innerHTML = 구구단전부();
}

// 문제: 전달된 인수 중 숫자만 모드 더한 값을 반환하는 함수 sum() 을 작성하라.
// 사용예: console.log(sum(1, 5, '+', 8)); // 14 출력

function sum() {
    var k = 0
    for (var i=0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number' ) {
            k += arguments[i];
        }
    }
    return k;
}
console.log(sum(1, 5, '+', 8));
console.log(sum(1, 5, '+', 8, 10, 20, 40));

// 문제: 첫 번째 인수로 전달된 배열에 나머지 인수를 모두 추가하는 함수 push()를 작성하라.
function push() {
    for (var i= 1; i < arguments.length; i++) {
        arguments[0].push(arguments[i])
    }
}
var arr = ['a', 'b']
push(arr, 1, 2, 3);
console.log(arr); // 출력결과 : ['a', 'b', 1, 2, 3]
push(arr, 1, 2, 3, 4);
console.log(arr); // 출력결과 : ['a', 'b', 1, 2, 3, 1, 2, 3, 4]

// break 문 : 반복문이 break 문을 만나면 즉시 반복을 멈춘다.

// continue 문 : 반복문이 continue문을 만나면 현재의 코드 블럭을 건너뛴다.

// 내장 타입의 기능을 확장할 때는 생성자.prototype.메소드이름 = function(){ ... } 형태를 사용한다.
String.prototype.toNumber = function() {
    return parseInt(this);
}

'123'.toNumber();
'abc'.toNumber();

// 문제: 배열에서 가장 큰 숫자를 반환하는 prototype 메소드 max()를 정의하라.
Array.prototype.max = function() {
    var max = 0;
    for (var i=0; i < this.length; i++) {
        if (typeof this[i] !== 'number') {
            continue;
        }
        if ( max < this[i] ) {
            max = this[i]
        }
    }
    return max;
}


console.log([1,3,5].max()); //5
console.log([10,3, '+', -2].max()); //10

// 문제: 날짜와 객체에서 가리키는 시각이 오전인지 오후인지 문자열로 반환하는
// prototype 메소드 ampm 을 작성하라
Date.prototype.ampm = function() {
    if (this.getHours() < 12) {
        return '오전';
    } else {
        return '오후';
    }
}

var date = new Date();
date.ampm(); // 오후
var date1 = new Date(2015, 4, 12, 9);
date1.ampm(); // 오전
