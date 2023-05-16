//====================1-Misol======================
// uchta arrayydan string taypining indexini toping

/*-----------------for orqali aniqlash------------*/
// const arrayStr = [[false, true], 1,2 ,99, 'Salom']
// //const arrayStr = [-1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8]

// const array = []
// for(let i = 0; i < arrayStr.length; i++){
//     if(!(typeof arrayStr[i] === 'number')){
//         console.log("boshqatdan kiriting")
//     }else{
//         array.push(arrayStr[i])

//     }

// }
// console.log(array)

// /*---------------forEach yordamida aniqlash-----------*/
// arrayStr.forEach((item, i) =>{
//     if(typeof(item[i]) === 'string'){
//         console.log(`String indexi`, i)
//     }
// })

/*----------------------2-Mashiq-------------------------------*/
// Array ichidagi faqat array elementlarini ajartib olish

// const data = [[1,2,4], 'sdsdsd', [3,5,6], false]
// const newData = []
// data.forEach((item) =>{
//     const rest = Array.isArray(item)
//     if(rest){
//         item.forEach((num) => {
//             newData.push(num)
//         })
//     }
// })
// console.log(newData)

/*-----------------------------3-Misol-----------------------*/
// Array ichidagi
// [null, 0, false, undefined, ' ', NaN]  ajratib oladigan ko'd yozing
// const cheakData = [null, 0,99, false, undefined, ' ', NaN, '0']

// cheakData.forEach((item) =>{
//     if(!item)
//     console.log(item) // null, 0, false, undefined, NaN
//   })

/*-----------------------------4-Misol-----------------------*/
// Kiritilgan Qoraqolpog'iston so'zini teskari qiladigan ko'd yozing
// 1-usuli
//   let word = "Qoraqolpog'iston"
//   let wordReverst = word.split('').reverse().join('')
//   console.log(wordReverst)

// 2-usuli

// let word = "Qoraqolpog'iston"
// let wordRew = word.split('')
// let newWord = ''
// for(i = wordRew.length-1; i >= 0; i--){
//    newWord += wordRew[i]
// }
// console.log(newWord)

/*------------------5-Misol-----------------------*/
// prommptda kiritilgan so'zlarni katta va kichik hariflarga o'zgartiring
// masalan "aSSALOM aLEYKUM xUSH kELIBSIZ" kabi yozish kerak
// 1-usuli
// let word = "aSsAlOM aLEyKUM xUsH kElIBsIZ"
// let wordNew = word.charAt().toUpperCase() + word.slice(1).toLowerCase()
// console.log(wordNew)

// 2-usuli
// let word = "aSsAlOM aLEyKUM xUsH kElIBsIZ"
// let wordNew = word.split(' ')
// let newWord = ''
// wordNew.forEach((item) =>{
//     const bosh = item.charAt().toUpperCase()
//     const  davomi = item.slice(1).toLowerCase()
//     newWord += `${bosh}${davomi} `
// })
// console.log(newWord)

/*-----------------------6-Misol----------------------*/
// Arrayda natural sonlar yig'indisini xisoblaydigan cod yozing
// const number = [1, 2, -4, 4.5, 65, Infinity, 0, -11]
// let noturalNumber= 0;

// number.forEach((num) =>{
//     if(num >= 0.0 && num !== Infinity && Math.floor(num) === num && num !== 0){
//         noturalNumber += num
//     }
// })
// console.log(noturalNumber)

/*-----------------------7-Misol----------------------*/
// prommpt yordamida kiritilgan so'zning ichida "a" harifi necha marta ishtirok etganligini topuvchi dastur yozing

// let word = 'Barchaga assalom alaykum. Ishlaringiz yaxshima!'
// let splitWord = word.split('')
// let counter = 0;

// splitWord.forEach((item) => {
//     if(item == 'a' || item == 'A'){
//         counter++;
//     }
// })
// console.log(`Berilgan so'z ichida a harifi ${counter} ta ishtirok qilgam`)

/*-----------------------8-Misol----------------------*/
// Berilgan array ichidagi elementlarning data toypini aniqlovchi dastur tuzing

// let  type = [ 1.2, 's', true, null, undefined, NaN, ['true', true], BigInt]
// let newType = []

// type.forEach((item) => {
//       newType.push(typeof item)
// })

// console.log(newType)

/*-----------------------9-Misol----------------------*/
// Kiritilgan matinni nechtada elemetdan iboratligini aniqlang
//!!!! length dan foydalanmasdan

// let dewWord= "dasturchi"
// let newDewWord= dewWord.lastIndexOf(dewWord.slice(-1))+1

// console.log(newDewWord)

/*-----------------------10-Misol----------------------*/
/*Berilgan arreyning [1, 2, 3, 4, 5]ichidagi elementlarini o'z index(pozitsiyasidagi) 
elemetdan keingi elementga qo'shib yangi array xosil qiling*/

// let arraNum = [1, 2, 3, 4, 5]
// let newArray = []

// arraNum.forEach((item, i) => {
//     newArray.push(item + i)
// })
// console.log(newArray)

/*-----------------------11-Misol----------------------*/
// Brinbir raqam berilgan bo'lsa shu raqamgacha bo'lgan barcha sonlar yig'indisini chiqaring

// let num  = 10
// let counter = 0;
// for(let i = 0; i <= num; i++){
//     counter += i;
// }

// console.log(counter)

/*--------------------12-Misol----------------------*/
// Berilgan sonni n ga ko'paytirib 1 ni qo'shib natijasini chiqaradigan dastur yozing
// let  n = 9;
// let result;
// for(let i = 1; i <= 10; i++){
//     result = n*i+1;
// }
// console.log(result)

/*--------------------13-Misol----------------------*/
// Funksiya parametiriga array kiritsak array ichidagi
// elementlar ishorasini teskariga aylantirib beradigan dastur yozing
// Misol uchun [1, 2, 4, 5 ,6] => [-1, -2, -4, -5, -6]
// yoki [7, -3, -5, 9, -6] => [-7, 3, 5, -9, 6]

// let number = [7, -3, -5, 9, -6]
// let result = [];
// function reverseArray(arr){
//  for(let i=0; i<arr.length; i++){
//    let newArray = arr[i]*-1
//    result.push(newArray)
//  }
//  return result
// }

// console.log(reverseArray(number))

/*------------------------14-Misol---------------------------*/
/*funksiya 0 dan boshlab n gaacha bo'lgan raqamlarni 3, 5 va 15 ga bo'linadigan raqamlarni tekshirsin
Agar shu oralaiqdagi sonlar:
3 ga bo'linsa  = 'fizz'
5 ga bo'linsa = 'buzz'
15 ga bo'linsa = 'fizzbuzz' degan xabar chiqsin */

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 15 == 0) {
//       console.log(i+" fizzbuzz");
//     } else if (i % 5 == 0) {
//       console.log(i+" buzz");
//     } else if(i % 3 == 0) { 
//       console.log(i+" fizz");
//     }
//   } return 0;
// }
// console.log(fizzBuzz(25))


/*---------------------15-Misol----------------------*/

const  dilmurodObj = {
    firstName: 'Dilmurod',
    lastName: 'Qodirov',
    age: 32,
    regiyon: 'Xorazim',
    isMarried: true,
    job: function(){
        return `
        Assalom alaykum. Mening ismim ${this.firstName} ${this.lastName} men ${this.age} yoshdaman
        va ${this.regiyon}da yashayman. Men ${this.isMarried ? "uylanganman" : "uylanmaganman"} ikkita 
        o'g'lim bor`
    }

}

console.log(dilmurodObj.job())
/*--------------------16-Misol----------------------*/
/* Foydalanuvchi tamonidan 1 dan 10 gacha bo'lgan sonlarni kiritishni ro'raydigan va 
kiritilgan sonni 1 dan 10 gacha bo'lgan random qilingan taxminiy son bilan solishtiradigan dastur 
tuzing. Dasturingiz kiritgan son bilan random qilingan sonni tekshirib teng bo'lsa topdingiz 
teng bo'masa topolmadingzi degan xabrni topuvchi dastur tuzing */

// 1-usuli

// function gessNumber() {
//   let number = Math.floor(Math.random() * 10) + 1;
//   let guess = prompt(`1 dan 10 gacha bo'lgan sonlarni kiriting`);

//   number == guess ? alert('Siz topdingiz') : alert(`Raqam mos kelmadi ${number}`);

// }
//2-usuli

// function random (input){
//   let number = Math.ceil(Math.random() * 10) ;
//   console.log(number)
//   if (number == input){
//   console.log("very good")
//   }
//   else{
//   console.log("not this time you have entered "+input)
//   }
//   }
//   let customer = prompt("hi please enter a number from 1 -10")
//   random(customer)

/*--------------------------------17------------------------------*/
// Haroratni Selsiy va Farengeytga aylantirish uchun JavaScript dasturini yozing.

//1-usuli
// function cToF(celsius)
// {
//   const cTemp = celsius;
//   const cToFahr = cTemp * 9 / 5 + 32;
//   const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
//     console.log(message);
// }

// function fToC(fahrenheit)
// {
//   const fTemp = fahrenheit;
//   const fToCel = (fTemp - 32) * 5 / 9;
//   const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
//     console.log(message);
// }
// cToF(60);
// fToC(45);

// 2-Usuli

//let temp = prompt("please enter the value: ")
// //let fahrenheit = prompt("please enter the fahrenheit value ")
// let formulaCtoF = temp * 9/5 + 32;
// let formulaFtoC = (temp - 32) * 5/9;
// console.log(`the temp in fahrenheit is ${formulaCtoF}`)
// console.log(`the temp in celsius is ${formulaFtoC}`)
//

/*-------------------------18-Misol-----------------------------*/
// JavaScript: Fayl nomi kengaytmasini chiqaradigan dastur yozing
// Misol script.js consolda "js" chiqishi kerak

// filename = "system.php"
// console.log(filename.split('.').pop());
// filename = "abc.js"
// console.log(filename.split('.').pop());

// File types
// 1. styles.css
// 2. config.inc.php
// 3. index.html.twig

// let file = 'config.inc.php';
// let extension = file.lastIndexOf('.');

// // Extension with dot
// console.log(file.substring(extension));

// // Extension without dot
// console.log(file.substring(extension+1));

// let a = 10, b = 9, c = 11, d = 10, y = 9, z = 11;

//   if (a > b, c < a , d = a) {
//     console.log("a is bigger than b AND smaller than c AND equal to d");
//   }
//   if (z > y || z > a)
//   {
//     console.log("z OR y are bigger than a");
//   }

/// ?
//   function detonation_in(seconds_left){

//        console.log("detonation in... "+seconds_left+" secondes.")
//   }

//  for(let timer = 10; timer > 0; timer--){
//           detonation_in(timer);
//  }

//  index = 0;

//  while (index <= 100) {
//    console.log(index+".I want to code");
//    index++
//  }
