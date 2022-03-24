'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privnumberOfFilms: false
};

if (personalMoviDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMoviDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько вы оцените его?', '');

    if (a != null && b != null && a != '' && b != '' & a.length < 50) {
        personalMoviDB.movies[a] = b; 
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько вы оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' & a.length < 50) {
//         personalMoviDB.movies[a] = b; 
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }


// let i = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько вы оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' & a.length < 50) {
//         personalMoviDB.movies[a] = b; 
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// } while (i < 2);

console.log(personalMoviDB);