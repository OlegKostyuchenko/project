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

const arr = [1, 2, 3, 6, 8];

arr.pop();
console.log(arr); 