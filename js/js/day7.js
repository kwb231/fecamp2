function Square(width, height)
{
    this.width = width;
    this.height = height;
    
}

Square.prototype.넓이 = function() {
    return this.width * this.height;
}

Square.prototype = {
    넓이 : function(a, b) {
            return this.width * this.height * a * b;
    },
    a : function() {
            return this.width * this.height;
    }
};

var 사각형1 = new Square(10, 5);
var 사각형2 = new Square(3, 4);

console.log( 사각형1.넓이.apply(사각형2, [2, 3]) === 사각형1.넓이.call(사각형2, 2, 3));
//
//function argarr() {
//    console.log(arguments);
//    var arr = [].concat.apply([], arguments);
//    console.log(arr);
}
argarr(1,2,3)

// 문제: 다음과 같이 동작하는 원(Circle) 데이터를 정의하라.
// var circle1 = new Circle(반지름숫자);
// var circle2 = new Circle(반지름숫자);
// console.log(circle.넓이()); // 원의 넓이 = 반지름제곱 * Math.PI
// console.log(circle.둘레()); // 원의 둘레 = 2 * MathPI * 반지름
// console.log(circle.지름()); // 원의 지름 = 2 * 반지름 

function Circle(반지름)
{
    this.반지름 = 반지름;
}

Circle.prototype = {
    넓이 : function() {
        return this.반지름 * Math.PI;
    },
    둘레 : function(){
        return 2 * Math.PI * this.반지름;   
    },
    지름 : function(){
        return 2 * this.반지름;
    }
}

var circle1 = new Circle(5);
var circle2 = new Circle(10);

console.log(circle1.넓이());
console.log(circle1.둘레());
console.log(circle1.지름());

console.log(circle2.넓이());
console.log(circle2.둘레());
console.log(circle2.지름());

function Triangle(width, height)
{
    this.width = width;
    this.height = height;
}

Triangle.prototype = {
    넓이 : function() {
        return this.width * this.height / 2
    }
}

var tri = new Triangle(5, 6);
console.log(tri.넓이());

// 인스턴스(instance) : 클래스(class) 또는 타입(type)을 사용해 구체적인 고유 데이터로 만든 것.
// 이 때, 인스턴스를 만드는 과정에는 new 연산자가 사용되며 이 과정을 가리켜 인스턴스화(instantiation)라고 한다.
