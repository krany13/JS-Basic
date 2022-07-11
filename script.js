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

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов")
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <=3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genre === ''|| genre == null) {
                console.log('Вы ввели некорректные данные / не ввели их вообще');
                i--
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        });
    }
};
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

////////////////// CallBack ФУНКЦИИ //////////////////////

// function first () {
//     // do smh
//     setTimeout(function() {
//         console.log(1);       
//     },500); 
// }

// function second () {
//     console.log(2);
// }

// first();
// second();

// function learnJS( lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done () {
//     console.log('Я прошел это урок')
// }

// learnJS('javascript', done)

////////////////// Методы объектов //////////////////////

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red'
//     },
//     makeTest: function() {
//         console.log('Test')
//     }
// };
// options.makeTest();

// const {border, background} = options.colors;
// console.log(border);
// console.log(Object.keys(options).length);

// console.log(options.name)

// delete options.name;
// console.log(options)
// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key])==='object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
//             counter++;
//         } 
//     } else {
//         console.log(`Свойство ${key}, имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

////////////////// Массивы и псевдомассивы //////////////////////

// const arr = [2, 45, 6, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum (a, b) {
//     return a - b;
// }
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('','');;
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

////////////////// Передача по ссылке или по значению //////////////////////

// let a = 5,
//     b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;
// copy.a = 10
// console.log(copy);
// console.log(obj);

// function copy (mainObj) {
//     let objCopy = {};
//     let key;

//     for (key in mainObj) {
//         objCopy[key] = mainObj;
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
// }

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log( numbers);

// const add = {
//     d: 17,
//     e: 20
// };

//  const clone = Object.assign({}, add);
//  clone.d = 20;
//  console.log(add);
//  console.log(clone); 

//  const oldArr = ['a', 'b', 'c'];
//  const newArr = oldArr.slice();
//  newArr[1] = 'gdfgdgd'
//  console.log(newArr);
//  console.log(oldArr); 

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['worldpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'tg'];
// console.log(internet);

// function log (a, b, c) {
//     console.log(a);
//     console.log(b)
//     console.log(c)
// }
// const num = [2, 5, 7];
// log(...num)

// const arr = ['a', 'b'];
// const newAarray = [...arr];
// console.log(newAarray)

// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {...q};
// console.log(newObj);

////////////////// ООП и Прототипно ориентированное программирование //////////////////////

// let str = 'some';
// let strObj = new String(str);
// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldeir = {
//     health: 400,
//     armor: 100,
//     sayHellow: function() {
//         console.log('hello');
//     }
// };
// const john = Object.create(soldeir)
// const john = {
//     health: 100
// }

// Object.setPrototypeOf(john, soldeir)
// console.log(john.armor);
// john.sayHellow();
