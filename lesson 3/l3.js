// 1) створити функцію яка приймає масив та виводить його

// let a =[1, 2, 3, 4, 5, 6, 7, 8, 9];

// function mas(x) {
//     console.log(x)
// }
// mas(a);



// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function randomizer(length,min,max){
//     let fun = [];
//    for (let i = 0; i < length; i++) {
//     fun.push(Math.floor(Math.random()*10))
//    }
//      }
//        let bob = randomizer(10,10,100);
//    mas(bob);
// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

    
// const min = minfind(1, 2, 3);
// function minfind(a,b,c) {
//         let min;
//         if (a <= b && a <= c) min = a;
//         if (b <= a && b <= c) min = b;
//         if (c <= a && c <= b) min = c;
        
//         console.log(min);
//         return min;
//     }
    
    
   
// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const min = maxfind(1, 20, 3);
// function maxfind(a,b,c) {
//         let man;
//         if (a >= b && a >= c) max = a;
//         if (b >= a && b >= c) max= b;
//         if (c >= a && c >= b) max = c;
        
//         console.log(max);
//         return max;
//     }

// 5) створити функцію яка повертає найбільше число з масиву



// const boxy = (x) => {
//     let max = x[0];
//     for (const item of x) {
//         if (max < item) max = item 
//     }
//     return max;
// }
// const boxy1 = boxy([5,6,7,800,2,533,599,12]);
// console.log(boxy1);


// 6) створити функцію яка повертає найменше число з масиву

// const boxy = (x) => {
//         let min = x[0];
//         for (const item of x) {
//             if (min > item) min = item 
//         }
//         return min;
//     }
//     const boxy1 = boxy([5,6,7,800,2,533,599,12]);
//     console.log(boxy1);
    
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// const numbers = [20, 10, 15, 200];
// function sum () {
//     const total = numbers.reduce( (a, b) => a + b);
//     console.log(total);
// }
// sum();

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const numbers = [5, 50, 50, 5];
// function sum () {
//     const total = numbers.reduce( (a, b) => (a + b))/numbers.length;
//     console.log(total);
// }
// sum();

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let users = [
//     {name: 'Ron', age: 25, career: 'wizard'},
//     {name: 'Bob', age: 50, career: 'driver'},
//     {name: 'Sam', age: 35, career: 'hacker'},
//     {name: 'Don', age: 31, career: 'coder'},
//     {name: 'Pit', age: 30, career: 'runner'},
//     {name: 'Sam', age: 20, career: 'currier'}]
 
//     function lock (b) {
//     for (let a of b){
//         console.log(Object.keys(a));
//   }
//     }
//   lock(users);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let users = [
//         {name: 'Ron', age: 25, career: 'wizard'},
//         {name: 'Bob', age: 50, career: 'driver'},
//         {name: 'Sam', age: 35, career: 'hacker'},
//         {name: 'Don', age: 31, career: 'coder'},
//         {name: 'Pit', age: 30, career: 'runner'},
//         {name: 'Sam', age: 20, career: 'currier'}]


//      function lock (b) {
//     for (let a of b){
//         console.log(Object.values(a));
//   }
//     }
//   lock(users);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]



// function s (m1,m2) {
//     let m3 = [];

//     for (let i = 0; i < m1.length; i++) {
//         m3.push(m1[i]+m2[i]);

//         }
//     console.log(m3);
// }
//  const a = s([1,2,30,-40],[1,2,3,4]);
 