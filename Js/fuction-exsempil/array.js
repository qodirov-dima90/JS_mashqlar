//  const arraynum = [12, 34, 45, 56, 67, 78];

// function getArrayBound(arr){
//     let jami = 0
//   for(let i  of arr){
//     jami += i;
//   }
//   return jami;
// }
//================================================================
// const arrayBound = getArrayBound(arraynum);

// console.log(arrayBound);

// function getSortNum(from, to){
//     const arrNatija = [];

//     for (let i = from; i < to; i++){
//         if(i % 2 === 0){
//             arrNatija.push(i);
//         }
//     }
//     return arrNatija;
// }

// const natijaArr = getSortNum(10, 50);
//  console.log(natijaArr)
//==============================================================
// map metoda

// const array  = [1, 3, 4, 5, 6, 8, 9,]

// function print(el){
//   console.log(el)
// }

// const resault  = array.map(num => num * 2);
// console.log(resault);
// console.log(array);
//==============================================================
// filter metodi

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const arr2 = []

// const toqSon = arr.filter(num => num % 2 !== 0);
// const juftSon = arr.filter(num => num%2 ===0);

// console.log(toqSon);
// console.log(juftSon);
// console.log(arr)
//===========================================================
// Reduce

// const staff = [
//     {
//         id: 1,
//         name: 'Jasorat Duschanov',
//         oylik: 2000000,
//     },
//     {
//         id: 2,
//         name: 'Jamol matyakuboy',
//         oylik: 800000,
//     },
//     {
//         id: 3,
//         name: 'Mansuz O\'razmetov',
//         oylik: 1500000,
//     },
//     {
//         id: 4,
//         name: 'Dilmurod Allaberganov',
//         oylik: 2000000,
//     },
//     {
//         id: 5,
//         name: 'Dilshod Boboniyozov',
//         oylik: 4000000,
//     },
//     {
//         id: 1,
//         name: 'O\'ktam Pirimmatov',
//         oylik: 2500000,
//     }
// ];

// const kattaOylik = staff.reduce((acc, user) => {
//     return acc + user.oylik;

// }, 0);

// console.log(kattaOylik);

//     const kamOylik = staff.reduce((acc, user) => {
//         if (user.oylik < 1000000){
//             return acc + user.oylik;
//         }

//         return acc;
//     }, 0)

//     console.log(kamOylik);

//     const oyliklar = staff.reduce((acc, user) => {
//         return [...acc, user.oylik]
//     },[])

//     console.log(oyliklar);

//==========================================================
// 3- find method

// const devloper = [
//     {
//         id: 1,
//         name: 'Jasorat Duschanov',
//         skills: ['HTML', 'CSS', 'javascript'],
//         mutaxasis: 'frontend',
//         oylik: 2000000,
//     },
//     {
//         id: 2,
//         name: 'Jamol matyakuboy',
//         skills: ['HTML', 'CSS', 'javascript', 'React'],
//         mutaxasis: 'frontend',
//         oylik: 800000,
//     },
//     {
//         id: 3,
//         name: 'Mansuz O\'razmetov',
//         skills: ['HTML', 'PHP', 'Laravel'],
//         mutaxasis: 'backend',
//         oylik: 1500000,
//     },
//     {
//         id: 4,
//         name: 'Dilmurod Allaberganov',
//         skills: ['HTML', 'CSS', 'javascript', 'PHP'],
//         mutaxasis: 'backent',
//         oylik: 2000000,
//     },
//     {
//         id: 5,
//         name: 'Dilshod Boboniyozov',
//         skills: ['HTML', 'CSS', 'javascript'],
//         mutaxasis: 'fullstak',
//         oylik: 4000000,
//     },
//     {
//         id: 6,
//         name: 'O\'ktam Pirimmatov',
//         skills: ['HTML', 'CSS', 'javascript'],
//         mutaxasis: 'frontend',
//         oylik: 2500000,
//     }
// ];

// // console.log(devloper.find((item) => item.mutaxasis === 'backent'))
// console.log(devloper.find((item) => item.skills.includes('React') ))

//=========================================================================

// 4- sort method

// const number = [12, 34, 54, 6, 76, 56, 87, 4];
// const citiys = ["Toshkent", "Samarqand", "Buxoro", "Jizzax", "Nukus"];

// number.sort((a, b) => a - b); // 4,  6, 12, 34, 54, 56, 76, 87
// console.log(number);

// console.log(citiys.sort(sorting)); // [ 'Buxoro', 'Jizzax', 'Nukus', 'Samarqand', 'Toshkent' ]

// function sorting(a, b) {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
//   return 0;
// }

//======================================================================

// 5- (...) spred operatiri

// const devloper = [
//   {
//     id: 1,
//     name: "Jasorat Duschanov",
//     skills: ["HTML", "CSS", "javascript"],
//     mutaxasis: "frontend",
//     oylik: 2000000,
//   },
//   {
//     id: 2,
//     name: "Jamol matyakuboy",
//     skills: ["HTML", "CSS", "javascript", "React"],
//     mutaxasis: "frontend",
//     oylik: 800000,
//   },
//   {
//     id: 3,
//     name: "Mansuz O'razmetov",
//     skills: ["HTML", "PHP", "Laravel"],
//     mutaxasis: "backend",
//     oylik: 1500000,
//   },
//   {
//     id: 4,
//     name: "Dilmurod Allaberganov",
//     skills: ["HTML", "CSS", "javascript", "PHP"],
//     mutaxasis: "backent",
//     oylik: 2000000,
//   },
//   {
//     id: 5,
//     name: "Dilshod Boboniyozov",
//     skills: ["HTML", "CSS", "javascript"],
//     mutaxasis: "fullstak",
//     oylik: 4000000,
//   },
//   {
//     id: 6,
//     name: "O'ktam Pirimmatov",
//     skills: ["HTML", "CSS", "javascript"],
//     mutaxasis: "frontend",
//     oylik: 2500000,
//   },
// ];

// // const number = [12, 34, 54, 6, 76, 56, 87, 4];
// // const citiys = ["Toshkent", "Samarqand", "Buxoro", "Jizzax", "Nukus"];

// // const array = [...number, ...citiys];
// // console.log(array); // [ 12, 34, 54, 6, 76, 56, 87, 4,'Toshkent', 'Samarqand','Buxoro','Jizzax', 'Nukus' ]

// const array2 = [...devloper]
// console.log(array2)

//=====================================================================

// 6 - destructuring

//const number = [12, 34, 54, 6, 76, 56, 87, 4];
//const citiys = ["Toshkent", "Samarqand", "Buxoro", "Jizzax", "Nukus"];

//const [paytaht, tarixiy, ...shaxar] = citiys;
//console.log(paytaht, tarixiy, shaxar) // Toshkent Samarqand [ 'Buxoro', 'Jizzax', 'Nukus' ]

// const arrayBosh = null;

// const [
//     paytaxt = 'Toshkent',
//     tarixiy = 'Samarqand',
//     ...shaxr
// ] = arrayBosh  || [];

// console.log(paytaxt, tarixiy, shaxr); // Toshkent Samarqand []

// const number = [12, 34, [54, 6], 76, 56, 87, 4];
// const [a, b, [c, d]] = number
// console.log(a, b, c, d); // 12 34 54 6

// function chanArray(array, n){
// const r = []
//     for (let i = 0; i <= array.length - n; i++){
//         const chang = [];
//     for(let j = i; j < i + n; j++){
//         chang.push(array[j]);
//     }
//     r.push(chang);
//     }
//     console.log(r)
//     return r;
// }

// const natija  = chanArray([1,2,43,4,5,6], 3)

// console.log(natija);

//===========================================================

// Massiv ichidan eng kichigini topsish

// function arraykichik(arr){
//     let kichik = arr[0];
//     for (let i = 1; i < kichik.length; i++){
//         if (arr[i] < kichik) kichik = arr[i]
//     }
//     return kichik;
// }

// const natija = arraykichik([54, 545, 6, 77, 67]);
// console.log(natija)

//===========================================================

///Massiv ichidan o'rta qiymatini topish kerak

// function getAverrage(marks){
//     let  arr = 0;
// marks.forEach(el => arr += el)
//     return Math.floor(arr / marks.length)
// }
// const  natija = getAverrage([1,2,3,4,4,4,5,3,2,1,6])

// console.log(natija);

//=======================================================

// Berilgan sonni kamayish tartibida chiqaring

// function kamayish(n){
//     let arr = []
//     for(let i = n; i > 0; i--){
//         arr.push(i);
//     }
//     return arr;
// }

// const natija = kamayish(7)
// console.log(natija)

// ========================================================

// ikkita massiv berilgan ikkinchi massivadan birinchi massivdagi farqli sonni toping?

// function findMissing(arr1, arr2){
//     let index;
//     for(let i = 0; i < arr1.length; i++){
//         index = arr2.indexOf(arr1[i])
//         if (index > -1){
//             arr2.slice(index, 1)
//         } else{
//             return arr1[i]
//         }
//     }
//     return 0;
// }

// const natija = findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])
// console.log(natija)

//  berilgan sondan nechta kichik toq son bor

// function toqSonlar(n){
//     return Math.floor(n/2)
// }

// console.log(toqSonlar(11))

// Berilgan massivni saralash va yig'indisini xisoblash

// function sortArray(arr){
//     const sorting = arr.sort((a,b) => b - a)
//         let sort = 0
//         for(let i = 1; i < sorting.length; i++){
//             console.log(sorting[i]);
//             sort += sorting[i-1] - sorting[i];
//         }
//         return sort;
// }

// const natija = sortArray([1,2,3,4,5])
// console.log(natija)

//  Massivni ichidagi elementlarni qo'shib chiqish

// const sorted = arr => arr.reduce((acc, e) => acc + e, 0) qisqa usuli

// const sortiArray = arr => arr.sort((a,b) => a - b) // Massivni saralash uchun
// // function addArray(arr){ // uzunroq va tushunarli usul
// //     let array2 = 0;
// //     for (let i = 0; i < arr.length; i++){
// //         array2+=arr[i]

// // }
// // return array2
// // }
//  const natija = sortiArray([1,2,3,4,5,5,6])
//  console.log(natija)

//  Sonning min va max ni topish funcsiyasini yozing

// function minNum(arr){
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++){
//         if (arr[i] < min){
//             min = arr[i]
//         }
//     }
//     return min;
// }

// const natija = minNum([1,23,4,5,6,8,9])
// console.log(natija)

// function maxNum(arr){
//     let max = arr[0];
//     for (let i =0; i < arr.length; i++){
//         if(arr[i] > max)
//         max = arr[i]
//     }
//     return max;
// }

// const natika2 = maxNum([1,23,4,5,6,8,9])
// console.log(natika2)

// const strArray = arr => arr.split(' ').reverse().join(' ')

// const natija = strArray('Salom dunyo')
// console.log(natija)

// const num = ['Jasorat', 'Ixtiyor', 'Ruslon']

// for(let i = 0; i < num.length; i++){
//     let str = num[i]+'bek'
//     console.log(str)
// }

//-----------------------1-misol------------------
// Ikkita berilgan massivni bir-biri bilan solishtiruvchi dastur yozing

// function towArray(arr1, arr2) {
//     // return arr1.sort().toString() + arr2.sort().toString() // Qisqa usuli

//     /* arr1.sort()     uzunroq usuli
//     arr2.sort()

//     for(let i = 0; i < arr1.length; i++){
//         if(arr1[i] == arr2[i]){
//             return false
//         }
//         return true
//     } */
// }

// const a = [1,23,4,5,6, true]
// const b = [3,45,67,7,8,'9']

// console.log(towArray(a, b));

/*-------------------------2-Misol---------------------------*/
// Berilgan array ichidagi elementlarni yig'indisini chiqarish dasturini tuzing
// array = [1, [4,5],[6,78,95],[4],4]

// function addArray(arr) {
//     let arrSort = arr.toString().split(',');
//     let b = 0
//     for(let i = 0;i < arrSort.length; i++){
//         b += Number.isNaN(Number(arrSort[i])) ? 0 : Number(arrSort[i]) // raqam yoki raqam emasligiga tekshiri
//     }
//     return b;
// }

// const array = [1, [4,5],[6,78,95],[4],4, true, false, 'dss']
// console.log(addArray(array));

/*-----------------------------3-Misol--------------------------*/

// berilgan massiv ichidagi takrorlangan elementlarni olib tashlab faqat bittasini qoldiradigan dastur tuzing
// Misoli array = [1, 3, 4, 4, 2, 1, 3]

// function arrRepeat(arr){
//     let arrSort  =  [...new Set(arr)]
//     return arrSort.sort((a, b) => a - b)
// }

// const array = [1, 3, 4, 4, 2, 1, 3]
// console.log(arrRepeat(array));

/*-----------------------------3-Misol-----------------------------------*/
// Berilgan arraydagi sonlarning yig'indisining o'rtacha arifmetikini toping
// array = [1, 3, 4, 4, 2, 1, 3]

// const avg = a => a.reduce((a, b) => a + b) / a.length

// array = [1, 3, 4, 4, 2, 1, 3]
// console.log(avg(array).toFixed(1));

/* Bizga berilgan '(' va ')' qavislar toplami shurarning orasidan ochiluvchi va yopiluvchi qavustlar juftiki bor 
bo'lsa true bo'masa false qaytaradigan dastur yozing?
Misol: '()' => true '())' => false , '(' => false, ')))(((' => true, chiqishi kerak */

// function qavsJufti(str) {
//   const stack = [],
//     opent = ["(", "{", "["],
//     close = [")", "}", "]"];
//   for (let i = 0; i < str.length; i++) {
//     if (opent.includes(str[i])) {
//       stack.push(str[i]);
//     } else {
//       if (close.includes(str[i]) === opent.indexOf(stack[stack.length - 1])) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }

// const qavs = ['((']
// console.log(qavsJufti(qavs));

/*2 - usuli */
// function qavsJufti(str) {
//   const arr = str.join('');
//   let a = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === '(' ) a = a + 1;
//     else if(arr[i] === ')') a = a -1;
//     if(a < 0) return false
// }

//   if(a === 0) return true
//   else return false
// }

// const qavs = ['(','(',')',')',')']
// console.log(qavsJufti(qavs));
/*--------------------------------4-Misol----------------------------*/
/* Berilgan satirdagi hariflarni katta va kichik hariflarga aylantirish 
misol ('Bugun ob-havo savuq va yomg'irli') => ('bUgUn Ob-HaVo sAvUq vA YoMg'iRlI')*/

// function kattaKichikHariflar(str){
//   let rest = ''
//   for(let i = 0; i < str.length; i++){
//   rest += (i % 2 === 0 ) ? str[i].toLowerCase() : str[i].toUpperCase()
// }
// return rest
// }

// console.log(kattaKichikHariflar(`Bugun ob-havo savuq va yomg'irli`));

/*--------------------------------5-Misol----------------------------*/
/* Raqamlardan iborat berilgan massiv elementlari ichida eng kichik qiymatdagisini topish dasturini tuzing*/

// function minValue(num){
//   let minCorent = num[0]
//   for(let i = 1; i < num.length; i++){
//     if(num[i] < minCorent) minCorent = num[i]
//   }
//   return minCorent
// }

// let arr = [1, 3, -4, 5, 56, -44]
// console.log(minValue(arr));

/*--------------------------------6-Misol----------------------------*/

/* Berilgan sonlarning o'rtacha arifmetigini topish dasturini yozing */

// function averageValue(value) {
//   let acc = 0;
//   value.forEach((el) => (acc += el));
//   return Math.floor(acc / value.length);
// }

// let arr = [1, 3, 4, 5, 56, -44];
// console.log(averageValue(arr));

/*--------------------------------7-Misol----------------------------*/
/* Berilgan sonning kamayish bo'yicha raqamlarini chiqaruvchi darstur yozing
misol: (5) => [4, 3, 2, 1] array ko'rinishida qaytsin */

// const reversSel = n =>{
//  let  arr = []
//  for(let i= n; i > 0; i--){
//   arr.push(i);
//  }
//  return arr
// }
// console.log(reversSel(5));

/*--------------------------------7-Misol----------------------------*/
/* Talabalarning imtixondan olgan natijalarni 4 ta toifa bo'yicha 
(100 - 90 = 10/ 90-75 = 5/ 75-50 = 2/ 50 - 0 = 0 ) xisoblovchi dastur tuzing */

// function greatStudent(i,b) {
//   if(i > 90 || b > 10) return 100;
//   else if(i > 75 && b >= 5) return 75
//   else if (i > 50 && b >= 2) return 50
//   else return 0
// }

// console.log(greatStudent(76, 10))

/*--------------------------------8-Misol----------------------------*/
/* Berilgan 10 lik sonni ikkilik songa o'tkazadigan dastur tuzing */

// function bayniri(n){
//   return Number(n.toString(2))
// }

// console.log(bayniri(10));

/*--------------------------------9-Misol----------------------------*/
/* Berilgan ikkita o'qshash raqamlardan tashkil topgan massiv elementlarini ko'rib chiqadigan va 
bir-birida yo'q elementlarni topib qaytaradigan dastur tuzing */

// function findMissing(arr1, arr2) {
//   let index;
//   for (let i = 0; i < arr1.length; i++) {
//     index = arr2.indexOf(arr1[i]);
//     if(index > - 1) {
//           arr2.splice(index, 1)
//     }else 
//     return arr1[i]
//   }
  
// }

// let array1 = [1,2,3,4,5,6,8]
// let array2 = [1,2,5,3,4,6,7,5]
// console.log(findMissing(array1, array2));

/*--------------------------------10-Misol----------------------------*/
/* Bizga raqamlar berilgan shu raqamlarni turgan joyini teskari qilib massivga joylab qaytaradigan ko'd yozing*/

// function reversNumber(n){
//   return n.toString().split('').reverse().map(el => Number(el))
// }

// console.log(reversNumber(123456789));

/*--------------------------------11-Misol----------------------------*/

/* Berilgan satirni teskari qilib qaytaruvchi dastur tuzing*/

// function reverseString(str){
  
//   let revStr = ''
//   for(let i = str.length - 1; i >= 0; i--){
//     revStr += str[i];
//   }
//   return revStr
//   // return str.split('').reverse().join(''); Qisqa kod methodlar yordamida
// }

// let string = 'traktaris'
// console.log(reverseString(string));

/*--------------------------------12-Misol----------------------------*/
/* Berilgan raqamli ikkita massiv elementlarini kubini chiqarib birinchi massivdan 
ikkinchi massiv kublari farqini qaytaruvchi dastur yozing*/

// function kubNumber(n1, n2) {
//   return Math.abs(n1[0] * n1[1] * n1[2]) - (n2[0] * n2[1] * n2[2])
// }

// const num = [2,3,4]
// const num2 = [1,2,5]
// console.log(kubNumber(num, num2));

/*--------------------------------13-Misol----------------------------*/
/* Berilgan raqamdan foydalanib 10 gacha bo'lgan ko'paytma karra jadvalini qaytaruvchi dastur yozing*/

// function karraJadval(n){
//   let res = ''
//   for(let i = 1; i <= 10; i++){
//     res += `${i} * ${n} = ${i * n}`
//     if(i < 10) res += `\n` // har bir qatorni bir pag'ona pastga tushirish uchun ishlatiladi 
//   }
//   return res
// }

// console.log(karraJadval(5));

/*--------------------------------14-Misol----------------------------*/
/* Berilgan aralash massivdagi elemetlarni bitta massivga oladigan va o'sish bo'yicha saralavchi dastur tuzing */
// 1-Misol

// function arraySort(arr){
//     let  res = []
//     arr.forEach((el) => {
//         if(Number.isInteger(el)) {
//             res.push(el)
//         } else if (Array.isArray(el) && el.length){
//             res = [...res, ...el]
//         }
//     })
//     return res.sort((a, b) => a-b)
// }
// const array1 = [[1,2,3], [4,6,8], 9,10, 14]
// console.log(arraySort(array1));

// 2-Misol
// const arrSort = (arr) => [].concat(...arr).sort((a, b) => a-b)
// const array2 = [[1,2,3], [4,6,8], 9,10, 14]
// console.log(arrSort(array2));

/*-------------------------------15-Misol---------------------------*/
/* Berilgan massiv ichidagi elementlarni qism massivlariga ajrating
Misol: arr = [[1,2,3,4] 2] => [[1,2], [2,3], [3,4]] shu ko'rinishda bo'lishi kerak*/ 

// function arrayCut(arr, n){
//     let res = [];
//     for(let i=0; i <= arr.length - n; i++){
//         const resArray = [];
//         for(let j = i; j < i+n; j++){
//             resArray.push(arr[j]);
//         }
//         res.push(resArray)

//     }
//     return res 
// }

// let result = arrayCut([1,2,3,4], 3)
// console.log(result);

/*-------------------------------16-Misol---------------------------*/
/* Berilgan massiv ichidagi takrorlanga ranglarni aniqalaydigan va va takrorlangan juft ranglarni 
hisoblaydigan dastur tuzing*/

// function arrColor(arr){
//     let hash = {};
//     for(let i =0; i< arr.length; i++){
//         if(!hash[arr[i]]) hash[arr[i]] = 1
//     else hash[arr[i]]++
// }
// let res = 0;
//     Object.keys(hash).forEach(el => res += Math.floor(hash[el]/2));
//     return res
// };

// const color = ['red', 'green', 'blue', 'red', 'blue', 'green', 'yellow', 'yellow', 'yellow']
// console.log(arrColor(color));

