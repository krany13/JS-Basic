/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"*/

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres*/

'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
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
    for (let i = 0; i < 2; i ++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
    
        if (a != '' && b != '' && a.length < 50 && a != null && b != null) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

console.log(personalMovieDB);



// Практита + теория 

////////////////// Условия //////////////////////
// if( 4 == 9) {
//     console.log('ok');
// } else {
//     console.log('error')
// }

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('so much');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');
// const num = 50;

// switch(num) {
//     case 49: 
//         console.log('error');
//         break;
//     case 100:
//         console.log('so much');
//         break;
//     case 50:
//         console.log('ok');
//         break;
//     default: 
//         console.log('not today')
//         break;
// }

////////////////// Циклы //////////////////////

// let num = 50;

// while(num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num < 55);

// for (let i = 1; i < 10; i++) {
//     if(i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

////////////////// Функции //////////////////////
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }
// showFirstMessage('hello world');
// console.log(num);

// function calc (a, b) {
//     return (a + b);
// }

// console.log(calc(4, 1));
// console.log(calc(4, 2));
// console.log(calc(4, 3));

// function ret () {
//     let num = 50;
//     return num;
// }

// const anotherNum  = ret();
// console.log(anotherNum)

// const logger = function () {
//     console.log('hello')
// };
// logger();

// const calc  = (a, b) => {
//    return a + b;
// }

////////////////// Методы //////////////////////

// const str = 'teSt';
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'some fruit';
// console.log(fruit.indexOf('t'))

// const logg = 'hello world';
// console.log(logg.slice(6))
// console.log(logg.substring(4, 11));
// console.log(logg.substr(6,5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.3px';
// console.log(parseInt(test))

