// Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// a) отримує текст з параграфа з id "content"
let a = document.getElementById('content');
console.log(a);

// b) отримує текст з блоку з id "rules"
let b = document.getElementById('rules');
console.log(b);


//     c) замініть текст параграфа з id 'content' на будь-який інший

a.innerText = 'another text'

//     d) замініть текст параграфа з id 'rules' на будь-який інший
b.innerHTML = 'one more another text'

//     e) змініть кожному елементу колір фону на червоний

a.style.background = 'red';
b.style.background = 'red';
let li = document.getElementsByClassName('fc_rules');
for (let d of li) {
    d.style.background = 'red';
}


//     f) змініть кожному елементу колір тексту на синій
a.style.color = 'blue';
b.style.color = 'blue';

for (let d of li) {
    d.style.color = 'blue';
}
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
    let all = document.querySelectorAll('#rules');
    console.log(all);

//     h) отримати всі елементи з класом fc_rules
let getclass = document.querySelectorAll('ul > li')
console.log(getclass);

//     i) поміняти колір тексту у всіх елементів fc_rules на червоний

for (let d of li) {
    d.style.color = 'red';
}