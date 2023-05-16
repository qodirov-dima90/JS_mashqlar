

// 1- satirdagi so'zni o'zgartirsh

// const str = 'Javascript eng yaxshi dasturlash tili, u PHP dan yaxshi'
// console.log(/javascript/i.test(str));

// console.log(str.replace(/PHP/gi, 'Phyton'))

// 2- Templayd string 

// const firstName = 'Dilmurod'
// const lastName = 'Qodirov'

// console.log(`Meni ismim ${firstName}, familyam ${lastName}`)


// Berilgan so'zni teskari qilish 

// function teskariSoz(str){
//     let suz = ''
//     for(let i = str.length-1; i >= 0; i--){
//         suz += str[i]
//     }
//     return suz
// }
// const natija = teskariSoz('Salom')
// console.log(natija)

//  Berilgan ikkita so'z bir biriga to'gri bo'lsa kerakli natijani qaytarish

// function ikkitaSoz(ism, fam){
//     return ism === fam ? `Salom ${ism}`: `Hayir ${ism}`;
// }

// const natija = ikkitaSoz('Dilmurod', 'Qodirov')
// console.log(natija)

// let ism = prompt(`Ismingizni kiriting: `)
// let yosh = +prompt(`Yoshingizni kiriting: `)

// let yil = 2023 - yosh;
// let oy = yosh * 12
// let hafta = ((yosh * 360) / 7).toFixed(0)
// let kun = yosh * 365;
// let soat = kun * 24;
// let daqiqa = soat * 60
// let soniya = daqiqa * 60

// const result = `Sizning ismingiz ${ism}. Siz ${yil} yil ${oy} oy, ${hafta} hafta, ${kun} kun, ${soat} soat, ${daqiqa} daqiqa, ${soniya} soniya yashagansiz`

// console.log(result)

/*--------------------------------------1-Misol-------------------------------*/
/* berilgan satirdan quydagi ko'rinishdagi satir qaytarish lozim
misol: abc => "A - Bb - Ccc" bu misolda berilgan string hariflarini bosh harifga o'tkazish va turgan joyidagi index raqamiga qarab shuncha kichik harif qayterish kerak*/

// function strUpper(str){
//     let res = ''
//     for(let i = 0; i < str.length; i++){
//         res += str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + (i < str.length  - 1 ? '-' : '')  
//     }
//     return res;
// }

// let string = 'abcef'
// console.log(strUpper(string));

/*--------------------------------------2-Misol-------------------------------*/
/* Berilgan ma'lumot ichidan unli hariflarning joylashgan o'rnini topuvchi dastur tuzing */

function absStr(str){
    let harf = 'aeiuoAEIUO'
    const res= []
    for(let i = 0 ; i < str.length; i++){
        if(harf.includes(str[i])) res.push(i+1)
    }
    return res
}
let  natija  = absStr('asduod')

console.log(natija);