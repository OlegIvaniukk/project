"use strict";

// const arr = [1, 2, 3, 6, 8, 10];
// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// arr.pop();
// arr.push(10); 

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));


//ОБ"ЄКТИ І ДЕСТРУКТУРИЗАЦІЯ
// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);
// console.log(Object.keys(options).length);  

// console.log(options.name);

// delete options.name;

// console.log(options);






// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         } 
//     }else {
//             console.log(`Свойства ${key} имеет значение ${options[key]}`);
//             counter++;
//     }
// }
// console.log(counter);



/*function first () {
    //do smth
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я вчу: ${lang}`);
    callback();
}

function done() {
    console.log("Я пройшов цей урок!");

}
learnJS("JavaScript", done);*/







/*let numberOfFilms;

function start() {
    numberOfFilms = +prompt(" Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(" Сколько фильмов вы уже посмотрели?", "");

    }
}

start();

const personalMovieDB = { 
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
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
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Ты класный зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Error");
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


detectPersonalLevel();

function WriteYourGenres () {
    for (let j = 1; j < 4; j++) {
        let genre = prompt(`Ваш любимый жанр под номером ${j}`, "");
        personalMovieDB.genres[j - 1] = genre;
        //КОРОТКЫЙ ВАРИАНТ
        //personalMovieDB.genres[j - 1] = prompt(`Ваш любимый жанр под номером ${j}`, ""); 
    }
}
WriteYourGenres(); 

console.log(personalMovieDB);*/