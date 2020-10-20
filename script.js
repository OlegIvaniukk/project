"use strict";
//завдання на урок 1
const numberOfFilms = +prompt(" Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = { 
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 

for (let i = 0; i <2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");

          if (a != null && b != null && a !='' && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("Done");
          } else {
              console.log("Error");
              i--;
          }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ты класный зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Error")
}

console.log(personalMovieDB);

/*if (4 == 9) {
    console.log("OK!");
} else {
    console.log("Error");
}

/*const num = 50;
if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Mnogo");
} else {
    console.log("OK!");
}

(num === 50) ? console.log("OK!") : console.log("Error"); */

/*const num = 50;
switch (num) {
    case 49:
        console.log("neverno");
        break;
    case 100:
        console.log("neverno");
        break;
    case 51:
        console.log("RIGHT");    
        break;    
    default: 
        console.log("Not today");
        break;    
}*/
//ПЕРШЫЙ ЦЫКЛ 1

/*while (num <= 55) {
    console.log(num);
    num++;
}*/
//ДРУГЫЙ ЦЫКЛ 2

/*do {
    console.log(num);
    num++;
}
while(num < 55);*/
//ТРЕТИЙ ЦЫКЛ 3
 
/*for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}*/
/*let num = 50;
for (let i = 1; i < 8; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}*/

/*let num = 50;
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}*/
