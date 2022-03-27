'use strict';

// // lesson 20 Объект его свойства и методы
// let histiry = {
//     name: '"Сказания о легендарном санине"',
//     age: '2000 y.o.',
//     country: 'China',
//     genres: {
//         comedy: true,
//         horror: false,
//         historys:true
//     },
//     newMetod: function laugh () {
//         console.log('Hahahahah, lol, this is very funny');
//     }
// };

// delete histiry.genres.historys;
// console.log(histiry);

// for (let key in histiry) {
//     if (typeof(histiry[key]) === 'object') {
//         for (let i in histiry[key]) {
//             console.log(`Свойства ${i} имеет значение ${histiry[key][i]}`);
            
//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение ${histiry[key]}`); 
//     }
// }

// console.log(Object.keys(histiry).length);
// histiry.newMetod();

// const {comedy, histirys} = histiry.genres;
// console.log(comedy);
////----------------------------------------------------------------------------------------------------------------


// lesson 21 Массивы и псевдомассивы

// const arr = [1, 2, 3, 6, 8];

// arr.pop();
// console.log(arr); 

//-------------------------------------------------------------------------------------------------------------------

// lesson 22 Создвние копий массивов, объектов и т.п.

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     } 
// };

// const newNumbers = copy(numbers); 

// newNumbers.a = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// }; 

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);  
// // console.log(clone);  

// const oldArry = ['a', 'b', 'c'];
// const newArry = oldArry.slice();

// newArry[1] = 'ababsbabsba';

// console.log(newArry); 
// console.log(oldArry); 

// // Оператор разворота 

// const video = ['YOUTUBE', 'VIMEO', 'RUTUBE'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet); 


// //-------------------------------------------------------------------------------------------------------------------

// // lesson 23 Основы ООП, прототипоно-ориентрированное наследование

// const solider = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const jonh = Object.create(solider );
// jonh.sayHello();

// Object.setPrototypeOf(jonh, solider);

// //-------------------------------------------------------------------------------------------------------------------

// // lesson 25 Отладка в браузерной консоли

// function Hello () {
//     console.log('Hello)');
// }

// Hello();

// function hi () {
//     console.log('Say hi!)');
// }

// hi();

// const arr = [1, 14, 4, 30, 54],
//       sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }      

// console.log(sorted);

// //-------------------------------------------------------------------------------------------------------------------

// // lesson 26  Динамическая типизация

// //to string

// //1)
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// // 2) Конгкритинация сложение чегото со строкой
// console.log(typeof((5 + '')));

// const fontSize = 26 + 'px';

// // To number

// //1)
// console.log(typeof(Number('4')));

// //2) 
// console.log(typeof(+'5'));

// //3)
// console.log(typeof(parseInt('15px', 10)));

// //4)

// let answer = +prompt('', '');

// // to boolean 

// // false
// // 0, '', null, undefined, NaN;

// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// //2)

// console.log(typeof(Boolean('4')));

// // 3)
// console.log(typeof(!!'4'));


// //-------------------------------------------------------------------------------------------------------------------

// // lesson 28  Получение данных со страницы

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// //-------------------------------------------------------------------------------------------------------------------

// // lesson 29  Действия с элементами на странице

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';

});

const div = document.createElement('div');
// const text = document.createTextNode('тут был я');

div.classList.add('black'); 

wrapper.append(div); //помещает элемент в конец родителя
//     .prepend(div);   //начало соответственно

// hearts[0].before(div);   //добавляет после
// hearts[0].after(div);    //добавляет до

// circle[0].remove(); //удаляет элемент

// hearts[0].replaceWith(circle[0]); //Заменяет элемент (другим элементом)

div.innerHTML ='<h1>Hello World</h1>';
// div.textContent = 'Hello';

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
