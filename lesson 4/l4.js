// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User


//  function User (id, name, surname, email, phone){
//             this.id = id;
//             this.name = name;
//             this.surname = surname;
//             this.email = email;
//             this.phone = phone;
//         }
    
//     let mas = [];
   
//  let bob = new User(1, 'bob', 'benks', 'bob1@mail.com', '555-044')
//  let sam = new User(2, 'sam', 'smith', 'sam@mail.com', '555-474')
//  let rick = new User(3, 'rick', 'sanchez', 'rick@mail.com', '555-644')
//  let ron = new User(4, 'ron', 'hats', 'ronhat@mail.com', '555-454')
//  let any = new User(5, 'any', 'sets', 'anyset@mail.com', '555-484')
//  let amy = new User(6, 'amy', 'adams', 'amyad@mail.com', '555-494')
//  let sarah = new User(7, 'sarah', 'gellar', 'bafy@mail.com', '555-444')
//  let tom = new User(8, 'tom', 'redl', 'valandemor1@mail.com', '555-414')
//  let ken = new User(9, 'ken', 'block', 'kenblock1@mail.com', '555-443')
//  let amanda = new User(10, 'amanda', 'brings', 'amanda1@mail.com', '555-424')

//  mas.push(bob, sam, rick, ron, any, amy, sarah, tom, ken, amanda);
 
//  console.log(mas);



// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, mail, phone, [order]){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.mail = mail;
//     this.phone = phone;
//     this.order = order;
// }
// }
// let tobi = new Client(1, 'Tobi', 'Benks', 'tobi@com', 555-123, ['milk', 'bread', 'water'])
// let sam = new Client(2, 'Sam', 'Brown', 'sam1@com', 555-321, ['cola', 'chips', 'candies', 'water'])
// let bob = new Client(3, 'bob', 'Strong', 'sam2@com', 555-323, ['cola', 'chips', 'candies'])
// let rick = new Client(4, 'rick', 'Browning', 'sam3@com', 555-324, ['bread', 'chips', 'candies', 'soda', 'cookies'])
// let stacy = new Client(5, 'Stacy', 'Brown', 'sam4@com', 555-325, ['cola', 'chips', 'water'])
// let piper = new Client(6, 'Piper', 'Lin', 'sam5@com', 555-326, ['cola', 'water', 'candies'])
// let troy = new Client(7, 'Troy', 'Bin', 'sam6@com', 555-327, ['bread', 'milk', 'candies', 'fish'])
// let rich = new Client(8, 'Richard', 'Dems', 'sam7@com', 555-328, ['cola', 'chips', 'water', 'milk', 'garlic'])
// let samanta = new Client(9, 'Samanta', 'Crow', 'sam8@com', 555-329, ['cola', 'water', 'candies', 'meat'])
// let lisa = new Client(10, 'Lisa', 'Smith', 'sam9@com', 555-320, ['bread', 'chips', 'candies'])
// let mas2 =[tobi,sam,bob,rick,stacy,piper,troy,rich,samanta,lisa];
// console.log(mas2);

// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// class Car{
//     constructor(model, producer, year, maxSpeed, engine, driver) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         this.driver = driver;
//         }
//  // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     drive() {
//         console.log(`going with speed' ${this.maxSpeed} 'per hour`)
//     }
// // -- info () - яка виводить всю інформацію про автомобіль
//     info(){
//         console.log([this.model, this.producer, this.year, this.maxSpeed, this.engine])
//     }
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed(newSpeed){
//        this.maxSpeed = newSpeed;
//     }
// //  -- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear (newValue){
//       this.year = newValue;
//     }
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//     addDriver (shef){
//         this.driver = drive;
//     }
// }
// let reno = new Car('megan','renault', 2005, 130, 1.1 );
// //
// let drive = {
//     name: 'Roma',
//     age: 45,
//     level: 10
// }

// reno.drive();
// reno.info();
// reno.increaseMaxSpeed(120);
// reno.changeYear(2015);
// reno.addDriver(drive);
// console.log(reno);



// 4. Взяти масив з завдання 1.
// 
// 
// - Відсортувати його по id. по спаданню


// class User {
//             constructor(id, name, surname, email, phone){
//                 this.id = id;
//                 this.name = name;
//                 this.surname = surname;
//                 this.email = email;
//                 this.phone = phone;
//             }
//         }
//         let mas = [];
       
//      let bob = new User(1, 'bob', 'benks', 'bob1@mail.com', '555-044')
//      let sam = new User(2, 'sam', 'smith', 'sam@mail.com', '555-474')
//      let rick = new User(3, 'rick', 'sanchez', 'rick@mail.com', '555-644')
//      let ron = new User(4, 'ron', 'hats', 'ronhat@mail.com', '555-454')
//      let any = new User(5, 'any', 'sets', 'anyset@mail.com', '555-484')
//      let amy = new User(6, 'amy', 'adams', 'amyad@mail.com', '555-494')
//      let sarah = new User(7, 'sarah', 'gellar', 'bafy@mail.com', '555-444')
//      let tom = new User(8, 'tom', 'redl', 'valandemor1@mail.com', '555-414')
//      let ken = new User(9, 'ken', 'block', 'kenblock1@mail.com', '555-443')
//      let amanda = new User(10, 'amanda', 'brings', 'amanda1@mail.com', '555-424')
    
//      mas.push(bob, sam, rick, ron, any, amy, sarah, tom, ken, amanda);
     
     //  - Відфільтрувати , залишивши тільки об'єкти з парними id   
//  let filter = mas.filter(function(user){
//     return user.id%2===0;
// })
// console.log(filter);

// - Відсортувати його по id. по зростанню
// let sort = mas.sort(function(user1, user2){
//     return user1.id - user2.id;
// });
// console.log(sort);

// - Відсортувати його по id. по спаданню

// let sort = mas.sort(function(user1, user2){
//     return user2.id - user1.id;
// });
// console.log(sort);


// 5. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню 

// class Client {
//         constructor(id, name, surname, mail, phone, [order]){
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.mail = mail;
//         this.phone = phone;
//         this.order = order;
//     }
//     }
//     let tobi = new Client(1, 'Tobi', 'Benks', 'tobi@com', 555-123, ['milk', 'bread', 'water']);
//     let sam = new Client(2, 'Sam', 'Brown', 'sam1@com', 555-321, ['cola', 'chips', 'candies', 'water']);
//     let bob = new Client(3, 'bob', 'Strong', 'sam2@com', 555-323, ['cola', 'chips', 'candies']);
//     let rick = new Client(4, 'rick', 'Browning', 'sam3@com', 555-324, ['bread', 'chips', 'candies', 'soda', 'cookies']);
//     let stacy = new Client(5, 'Stacy', 'Brown', 'sam4@com', 555-325, ['cola', 'chips', 'water']);
//     let piper = new Client(6, 'Piper', 'Lin', 'sam5@com', 555-326, ['cola', 'water', 'candies']);
//     let troy = new Client(7, 'Troy', 'Bin', 'sam6@com', 555-327, ['bread', 'milk', 'candies', 'fish']);
//     let rich = new Client(8, 'Richard', 'Dems', 'sam7@com', 555-328, ['cookies', 'chips', 'water', 'milk', 'garlic']);
//     let samanta = new Client(9, 'Samanta', 'Crow', 'sam8@com', 555-329, ['cola', 'water', 'candies', 'meat']);
//     let lisa = new Client(10, 'Lisa', 'Smith', 'sam9@com', 555-320, ['bread', 'chips', 'candies']);
    
//     let mas2 =[tobi,sam,bob,rick,stacy,piper,troy,rich,samanta,lisa];
// let count = mas2.sort(function (user1, user2){
//     return user2.order.length - user1.order.length;
// });
// console.log(count);