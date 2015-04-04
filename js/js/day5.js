

// 문제: 생일을 입력하며 만 나이에 따라 '어린이', '청소년, '청년', '장년이상'으로 출력하는 함수
// 연령대()를 작성하라
// 사용예: 연령대(1976,3,22) // 1976년 3월 22일인 사람의 연령대는?
// 조건: 10살 미만은 어린이, 10~18살은 청소년, 19~40살은 청년, 41살 이상은 장년이상

//function age(y, m, d) {
//    var date = new Date(y, m-1, d);
//    var today = new Date();
//    if ((today.getMonth() < date.getMonth()) || (today.getDate() < date.getDate())) {
//        var 나이 = ((today.getFullYear() - date.getFullYear()) - 1)
//    } else {
//        var 나이 = (today.getFullYear() - date.getFullYear())
//    }
//    return 나이
//} 
//console.log(age(1987,3,26));
//console.log(age(2014,3,26));
//console.log(age(2014,3,27));

function age(y, m, d) {
    var 오늘 = new Date(), 오늘달, 오늘일;
        
        오늘달 = 오늘.getMonth()+1;
        오늘일 = 오늘.getDate();
    
    var 나이 = 오늘.getFullYear() - y
    
    if ((오늘달 < m) || (오늘일 < d)) {
        나이 -= 1;
    }
    return 나이
} 
console.log(age(1987,3,29));
console.log(age(1987,3,26));
console.log(age(1987,4,27));





function 연령대(y, m, d) {
    var a = age(y, m, d);
    if (a > 40) {
        console.log('장년이상')
    } else if (a > 18) {
        console.log('청년')
    } else if (a > 10) {
        console.log('청소년')
    } else {
        console.log('어린이')
    }
}

console.log(연령대(2010,3,2))