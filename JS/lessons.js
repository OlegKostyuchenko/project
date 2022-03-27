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