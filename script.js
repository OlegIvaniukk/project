"use strict";

const bth = document.querySelector('button');

// bth.onclick = function() {
//       alert('click');
// };

// btn.addEventListener('click', () => {
//       alert('a');
// });

// btn.addEventListener('click', () => {
//       alert('b');
// });

bth.addEventListener('mouseenter', (e) => {
      console.log(e);
});




// const personalMovieDB = { 
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt(" Сколько фильмов вы уже посмотрели?", "");
    
//         while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt(" Сколько фильмов вы уже посмотрели?", "");
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt("Один из последних просмотренных фильмов?", ""),
//               b = prompt("На сколько оцените его?", "");
    
//               if (a != null && b != null && a !='' && b != null && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log("Done");
//               } else {
//                   console.log("Error");
//                   i--;
//               }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Ты класный зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Error");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ваш любимий жанра под номером ${i}`);

//             if (genre === "" || genre == null) {
//                 console.log('Ви ввели некоректние данние или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             }
//         // if (personalMovieDB.genres == "" || personalMovieDB.genres == null) {
//         //     personalMovieDB.genres = prompt(`Ваш любимий жанра под номером ${i}`);
//         //     console.log(personalMovieDB);
//         // }
//         // personalMovieDB.genres.forEach (function(item, j, )) {
//         //     console.log(`Любимий жанр ${j} - єто ${item}`);
//         // }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимий жанр ${i + 1} - це ${item}`);
//         });
//         }
//     }
// }; 
