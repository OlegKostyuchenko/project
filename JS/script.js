'use strict';

const personalMoviDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMoviDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMoviDB.count == '' || 
        personalMoviDB.count == null ||
              isNaN(personalMoviDB.count)) {
                personalMoviDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMoviDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMoviDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
             console.log(personalMoviDB);
        } 
    },
    toggleVisibleMyDB: function() {
        if (personalMoviDB.privat == false) {
            personalMoviDB.privat = true;
        } else if (personalMoviDB.privat == true) {
            personalMoviDB.privat = false;
        }
    },
    writeYourGeneres: function() {
        for (let i = 1; i <= 3; i++ ) {
            let generNum = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (generNum == '' || generNum == null ) {
                i--;
            } else { 
                personalMoviDB.genres[i - 1] = generNum;
            }
        }
        personalMoviDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
    
};
// personalMoviDB.toggleVisibleMyDB();
// personalMoviDB.toggleVisibleMyDB();
// personalMoviDB.start();
// personalMoviDB.rememberMyFilms();
// personalMoviDB.detectPersonalLevel();
// personalMoviDB.showMyDB(personalMoviDB.privat);
// personalMoviDB.writeYourGeneres();

