
// 1-misol (this ishlashi)
// const user = {
//     name: 'Jasur',
//     age: 32,
// }

// user.work = function work() {
//     console.log('Men ishlayapman')
// };


// user.sayHi = function(){
//     console.log(`Salom, Men ${this.name}.`);
// }

// user.sayHi();

// 2 - misol (bind ishlash )

// const user = {
//     firsname: 'Jasur',
//     lastname: 'Urazimbetov',
//     getFullName(){
//         console.log(`${this.firsname} ${this.lastname}`);
//     }
// };

// const func = user.getFullName.bind(user);

// func();


// 3 - misol malum bir vaqitda ishlydigan funksiya

// const callbackPrompt = {
//     message: 'Telefon raqamingizni kiriting',
//     showPrompt() {
//         const phoneNumber = prompt(this.message);
//         console.log(phoneNumber);
//     },
//     showDeferredPrompt(ms) {
//         setTimeout(this.showPrompt.bind(this), ms);
//     }
// };

// callbackPrompt.showDeferredPrompt(1000);

// function defer(func, ms) {
//     return function() {
//         setTimeout(() => func(...arguments), ms);
//     }
// }

// const user = {
//     name: 'Ruslon',
//     age: 33,
//     seyHi(){
//         console.log(`Salom, Men ${this.name} ${this.age} yoshman`)
//     }

// }

// const deferreHi = defer(user.seyHi.bind(user), 1000);

// deferreHi();


// 4 - misol kantext xabarni emailga jo'natish

// const  event = {
//     mehmon: [
//         {name: 'Jasorat' , email: 'jasorat@gmail.com', age: 33},
//         {name: 'Ixtiyor' , email: 'ixtiyor@gmail.com', age: 34}

//     ],
//     message: 'Bayramga hush kelibsiz',
//     getInvintations() {
//         return this.mehmon.filter(({ age }) => age >= 34).map(({name, email }) => ({text: `Hi ${name}. ${this.message}`, email}));
//     }
// }

// console.log(event.getInvintations());


// 5- misol Aralsh metohtlardan foydalanish

// const  wallet = {
//     transacsiya: [1, 4, 7, 45, 55, 100, -5],
//     getMax(){
//         return Math.max(...this.transacsiya);
//     },
//     getMin(){
//         return Math.min(...this.transacsiya);
//     }
// };

// console.log(wallet.getMax());
// console.log(wallet.getMin());

// 6 - Massiv elementlarini olishda (...) spred operatiridan foydalanish 

function argsSum(){
    return [...arguments].reduce((acc, elem) => {
        return acc + elem;
    }, 0);
}

console.log(argsSum(1,3,5,8,44))