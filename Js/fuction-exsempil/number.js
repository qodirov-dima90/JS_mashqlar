
// 1 array ichidan eng katta qiymatni topish
// const getMaxAbesNumber = arr => {
//     const kattaQiymat = arr.map(num => Math.abs(num));

//     const max = Math.max(...kattaQiymat);
//     return max;
// }

// console.log(getMaxAbesNumber([3,-5,7,-9,4]));

// 2 - (So'zlarning birinchi harifini bosh harifga keltirish)

// const spitText = (text, len) => {
//     const strArr = []
//     let startPosition = 0;

//     while(true){
//         let chunk = text.substr(startPosition, len);
//         if(chunk.length === 0){
//             break;
//         }
//         strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//         startPosition += len; 
//     }

//     return strArr.join('\n');
// }

// console.log(spitText('sdfdsfsdf', 6))

// 3 (Kalkulyatir)

// const calc = expression => {
//     const [a, operatir, b] = expression.split(' ');
//     let result;

//     switch (operatir) {
//         case '+':
//             result = Number(a) + +b;
//             break;
//         case '-':
//             result = a - b;
//             break; 
//         case '*':
//             result = a * b;
//             break;
//         case '/':
//             result = a / b;
//             break;

//     }

//     return `${expression} = ${result}`;
// };

// console.log(calc('25 / 5'))