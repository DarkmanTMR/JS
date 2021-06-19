// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let m = [4, 5, 6, 7, 8];
// let n = ['spoon', 'plate', 'cup', 'fork', 'knife'];
// let k = ['door', 5, 'road', 8, true, false];

// console.log(m);
// console.log(n);
// console.log(k);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let empty = [];

// empty[0] = 1;
// empty[1] = 5;
// empty[2] = 'spoon';
// empty[3] = true;

// console.log(empty);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++){
//     document.write('<div>довільний текст))</div>')
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>текст : '+i+'</div>');
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0
// while (i < 20) {
// document.write('<h1> довільний текст </h1>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20){
//     document.write('<h1> довільний текст '+i+'</h1>'); 
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     for (let number of num) {
//         console.log(number);
//     }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (let word of words) {
//     console.log(word);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
 
// let mas = [1, 5, 7, 4, true, 'word', 'lala', 'two', false, 9];
// for (let go of mas) {
//     console.log(go);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let mas = [1, 5, 7, 4, true, 'word', 'lala', 'two', false, 9];
// for (let i = 0; i < mas.length; i++) {
//     if (typeof mas[i] === 'boolean'){
//         console.log(mas[i]);
//      } else{
//   }
// }



// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let mas = [1, 5, 7, 4, true, 'word', 'lala', 'two', false, 9];
// for (let i = 0; i < mas.length; i++) {
//     if (typeof mas[i] === 'number'){
//         console.log(mas[i]);
//      } else{
//   }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let mas = [1, 5, 7, 4, true, 'word', 'lala', 'two', false, 9];
// for (let i = 0; i < mas.length; i++) {
//     if (typeof mas[i] === 'string'){
//         console.log(mas[i]);
//      } else{
//   }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
     
    // let empty = [];

    // empty[0] = 10; 
    // empty[1] = 'word';
    // empty[2] = true;
    // empty[3] = 15;
    // empty[4] = false;
    // empty[5] = 'yo';
    // empty[6] = 4;
    // empty[7] = 2;
    // empty[8] = 12;
    // empty[9] = 'hello';
    //        for (let full of empty) {
    //           console.log(full);
    //       }
      
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 10; i++) {
//     console.log('step: ',i);
//     document.write('step: ',i);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 100; i++) {
//         console.log('step: ',i);
//         document.write('step: ',i);
//     }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 200; i=i+2) {
//         console.log('step: ',i);
//         document.write('step: ',i);
//     }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (i = 0; i < 100; i++) {
//    if (i%2 == 0){
//     console.log(i);
//    document.write(i);
//    }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (i = 0; i < 100; i++) {
//        if (i%2 == 1){
//         console.log(i);
//        document.write(i);
//        }
//     }


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
    // TO BE CONTINUED .....
// ]


let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];
    
    let citiesWithId = [
        {user_id: 3, country: 'USA', city: 'Portland'},
        {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
        {user_id: 2, country: 'Poland', city: 'Krakow'},
        {user_id: 4, country: 'USA', city: 'Miami'}
    ];

    for (man of usersWithId) {
        for (city of citiesWithId){
            if (man.id === city.user_id){
                man.city = city;
                break;
            }
        }
    }
console.log(usersWithId);