"use strict";


const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log('basik', 'rest', 'operator', 'usage');

function calcODouble (number, basis = 2) {
    console.log(number * basis);

}

calcODouble(3);














// class Rectangle {
//     constructor(height, weidth) {
//         this.height = height;
//         this.weidth = weidth;
//     }
//     calcArea() {
//         return this.height * this.weidth;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, weidth, text, bgColor) {
//         super();
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }
// const div = new ColoredRectangleWithText(25, 10, "Hello", 'red');

// div.showMyProps();
// console.log(div.calcArea());
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());











//  function showThis(a, b) {
//      console.log(this);
//      function sum() {
//          console.log(sum);
//          return a + b;
//      }
//      console.log(sum()); 
//  }

//  showThis(4, 5);

//  const obj = {
//      a: 20,
//      b: 15,
//      sum: function() {
//          console.log(this);
//      }
//  };
// obj.sum();

// function sayName() {
//     console.log(this);
//     console.log(this.name);
// }
// const user = {
//     name: 'Jhon'
// };

// sayName.call(user);
// sayName.apply(user);

// 1) Звичайна функція: this = window, але якшо use strict - undefined
// 2) Контекст у методів обєкта - сам обєкт
// 3) this в конструкторах і класах - це новий екземпляр обєкта
// 4) Ручна привязка this: call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this);
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         };
//         say();
//     }   
// };
// obj.sayNumber();


// const double = a => a * 2;
// console.log(double(4));


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);


