
//1
const person = {
    fersname: 'Dima',
    lastname: 'Qodirov',
    age: 32,
    addAge(){
        this.age = 33;
        console.log(this)


    }
};

person.addAge();


// 2

/* const arrey = [1, 5, 'boll', 2.5, 'dog']

const transforObject = arr => {
    let obj = {};

    arr.forEach(el => {
        obj[el] = el;
    })
    return obj;
}

const result = transforObject(arrey)
 console.log(result)
 */

 // 3 

//  const person = {
//         fersname: 'Dima',
//         lastname: 'Qodirov',
//         age: 32
//     };

//     for(key in person){
//         console.log(person[key]);
//     }

// 4 

// const person = {
//     fersname: 'Dima',
//     lastname: 'Qodirov',
//     age: 32
// };

// const concatProps = obj => {
//     const arr = [];

//     for(key in obj){
//         arr.push(obj[key]);
//     }
//     return arr;
// }

// const natija = concatProps(person);

// console.log(natija);


// 5
// const frents = {
//     'Jasorat': 33,
//     'Ixtiyor': 34,
//     'Oybek': 32
// };

// const getAduls = frentObj => {
//     // {'Jasorat': 33, 'Ixtiyor': 34, 'Oybek': 32} => [ ['Jasorat': 33], ['Ixtiyor': 34], ['Oybek': 32] ]
//     const frentArray = Object.entries(frentObj);

//     // [ ['Jasorat': 33], ['Ixtiyor': 34], ['Oybek': 32] ] >= ['Jasorat': 33], ['Ixtiyor': 34]
//     const filterFrentsArray = frentArray.filter(frent => frent[1] >= 33);
    
//     // ['Jasorat': 33], ['Ixtiyor': 34] => ['Jasorat'], ['Ixtiyor']
//     const frentsName = filterFrentsArray.map(frent => frent[0]);

//     return frentsName;
// }

// console.log(getAduls(frents));  // ['Jasorat'], ['Ixtiyor']

// 6
// const users = {
//     'Oyko': 32,
//     'Rasul': 33
// }

// const user = {
//     'Bek': 34,
//     'Rasul': 35
// }

// const res = Object.assign(users, user);

// console.log(res === users);

// 6 kopi obejct

// const user = {
//         'Bek': 34,
//         'Rasul': 35
//     }

//     const copeObj = obj => Object.assign({}, obj);

//     console.log(copeObj(user))


    // 7

    // const user = {
    //     'Bek': 34,
    //     'Rasul': 35
    // }

    // const copeObj = {...user};

    // console.log(copeObj)

    const  dostlar = [
        {name: 'Jasorat', age: 32},
        {name: 'Ixtiyor', age: 31},
        {name: 'Rasul', age: 30},
        {name: 'Ruslon', age: 29},

    ]

    const ageAdd = dostlar.map((dost) => {
        return {name: dost.name, age: dost.age + 1}
    });
    console.log(ageAdd);
    console.log(dostlar);