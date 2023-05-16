

// functoon expreshin ishlashi
// const message = 'Qaysi IDE da ishlaysan'; // 1 - chi

// const sendMessage = (name) => { // 2 -chi
//     const sender = "VS code"; // 4- chi 

//     console.log(`${name}, ${message}. Men ${sender} da ishlayman!`); // 5 - chi
// }

// sendMessage('Begzot'); // 3-chi


// function declarationning ishlashi

// let messages = 'Qaysi IDE da ishlaysan'; // 1 - chi

// sendMessages('Begzot'); // 2-chi

// function sendMessages(name){ // 3 -chi
//     let sender = "VS code"; // 4- chi 
    
//     console.log(`${name}, ${messages}. Men ${sender} da ishlayman!`); // 5 - chi
// }

// messages = 'Qaysi dasturda ishlaysan';
// sender = 'Men Sablayimda ishlayman!';

// sendMessages('Jahongir')


// Funksiya ichidagi obyekt bilan ishlash 

// let message = 'salom';

// const creatMessage = () => {

//     function sendMessage(name){

//         const dastur = 'PayCharim';
    
//         console.log(`${name}, ${message}. Men ${dastur} dasturidan foydalanaman`);

//     }

//     function setMessage(text){
//         message = text;
//     }
//     return {
//         sendMessage, 
//         setMessage,
//     };
// };

// const messenger1 = creatMessage();

// messenger1.sendMessage('Bob');

// const messenger2 = creatMessage();

// messenger2.sendMessage('Tom')
// messenger2.setMessage('OK')
// messenger1.sendMessage('Jasorat')

// Xisoblagichlar 

// const makeCounter = () => {
    
//     let count = 0;

//     return function(){
//         return count++;
//     }
// };

// const cunter1 = makeCounter();
// const cunter2 = makeCounter();

// console.log(cunter1());
// console.log(cunter1());
// console.log(cunter1());
// console.log(cunter1());

// console.log(cunter2());
// console.log(cunter2());


// Faktaryalni hisoblash functsiyasi

// function factarial(n){
//     if(n === 0) return 1;

//     return n * factarial(n - 1)
// }

// console.log(factarial(4))

// 1-Zamikaniya 

// function hello(name){
//     const helloName = () => console.log('hello', name);
//     return helloName;
// }

// const helloWorld = hello('world');
// helloWorld()

// const helloDima = hello('Dima')
// helloDima()


// 2 - Zamikaniya
// function output() {
//     let counter = 0;

//     function incrementCounter() {
//         console.log(++counter)
//     }

//     return incrementCounter;
// }

// const myCounter1 = output()

// myCounter1()
// myCounter1()
// myCounter1()
// myCounter1()

// 1-Collbek function 

// const vaqt = {
//     name: 'Start',
//     sanash() {
//         const greeting = () => console.log(this.name);
         
//         setTimeout(greeting, 1000)
//     },

// }
// vaqt.sanash()
// console.log('1')
// console.log('2')
// console.log('3')

//2-Collbak funktion 

// function sensir() {
//     const censoreAdd = [];

//     return function(str1, str2 = '') {
//         if (str2) {
//             censoreAdd.push([str1, str2]);
//         } else {
//             for(let pair of censoreAdd) {
//                 str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1]);
//             }
//             return str1;
//         }
//     }
// }

// const changeScent = sensir();

// changeScent('PHP', "JS");
// changeScent('backend', 'frontend')

// console.log(changeScent('PHP dasturlash tili backendda ishlatiladi'));


// Sonlarning o'rta arimetigini topish 

// function urtaArifmetik(son1, son2){
//    return son1.reduce((acc, elm) => acc + elm, 0) / son1.length < son2
// }

// const natija = urtaArifmetik([2,3], 4)

// console.log(natija)

//  Raqamlarni massiv elementlariga aylantirish va teskari o'girish

function numMassiv(num){
return num.toString().split('').reverse().map(Number)
}

const natija  = numMassiv(1243325235252)
console.log(natija)

