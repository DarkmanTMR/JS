// Організувати розпорядок дня з 10 подій за допомогою Promise, then. 

function morning(wakeUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeUp) {
                resolve('Good Morning, nice day for fishing aint it');
            } else {
                reject ('Morning')
            }
        }, 2000)
    })
}

function goToWashUp(waterHere) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (waterHere) {
                resolve('юху, можна прийняти душ)');
            } else {
                reject('супер... води нема')
            }
        },5000)
    })
}

function goEat(FoodPresent) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (FoodPresent) {
                resolve('ням ням ням, смачний сніданок)');
            } else {
                reject('то капець, навіть їсти нема що')
            }
        },3000)
    })
}
    
function roadToWork(vehicle) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(vehicle) {
                resolve('їде маршрутка, як собача будка..');
            } else {
                reject('де та мартрутка?')
            }
        }, 5000)
    })
}

function goToWork(completeJob) {
    return new Promise((resolve) => {
        setTimeout( () => {
            if(completeJob) {
                resolve('час обіду')
            }   
        }, 7000)
    })
}

function lunch(Lunch) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (Lunch) {
                resolve('ням ням ням, обід вдався');
            } else {
                reject ('сьогодні без обіду')
            }
        }, 2000)
    })
}

function restOfWork(completeJob) {
    return new Promise((resolve) => {
        setTimeout( () => {
            if(completeJob) {
                resolve('хух, нарешті кінець робочого дня')
            }
        }, 3000)
    })
}

function roadToHome(vehicle1) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(vehicle1) {
                resolve('я їду додому..');
            } else {
                reject('де та мартрутка?')
            }
        }, 5000)
    })
}

function ToHome(getToHome) {
    return new Promise((resolve) => {
        setTimeout( () => {
            if(getToHome){
                resolve('сходи, сходи, сходи')
            }
     }, 3000)
    })
}

let homeSweetHome = function(atHome) {
    return new Promise((resolve) => {
        setTimeout( () => {
            if(atHome){
                resolve('Honey Im hooome!!!')
            }
            
        },3000)
    })
}
 
// morning(true)
// .then((result) => {
//     console.log(result);
// return goToWashUp(false)
// })
// .then((result) => {
//     console.log(result);
// return goEat(true)
// })
// .then((result) => {
//     console.log(result);
// return roadToWork(true)
// })
// .then((result) => {
//     console.log(result);
// return goToWork(true)
// })
// .then((result) => {
//     console.log(result);
// return lunch(true)
// })
// .then((result) => {
//     console.log(result);
// return restOfWork(true)
// })
// .then((result) => {
//     console.log(result);
// return roadToHome(true)
// })
// .then((result) => {
//     console.log(result);
// return ToHome(true)
// })
// .then((result) => {
//     console.log(result);
// return homeSweetHome(true)
// })
// .then((result) => {
//     console.log(result);
//         })
//    .catch(reason => {
//         console.log(reason);
//      })

//       .finally(() => {
//         console.log('THE END')
//       })

  
  
      // використовуючи   async await.

async function WorkDay() {
    try {
let resultMorning = await morning(true);
console.log(resultMorning, 'resultMorning');

let shower = await goToWashUp(true);
console.log(shower, 'shower');

let breackfast = await goEat(true);
console.log(breackfast, 'breackfest');

let marshrutka = await roadToWork(true);
console.log(marshrutka,'marshrutka');

let firstHalf = await goToWork(true);
console.log(firstHalf, 'firstHalf');
    
let LunchTime = await lunch(true);
console.log(LunchTime);

let secondHalf = await restOfWork(true);
console.log(secondHalf);

let marshrutkaToHome = await roadToHome(true);
console.log(marshrutkaToHome);

let lastPart = await ToHome(true);
console.log(lastPart);

let Home = await homeSweetHome(true);
console.log(Home);
    } catch(e) { 
        console.log(e);
    }
   }

WorkDay();