
const secretNum = 10;
let tries = 0;

function guessNum(num){
    if(tries >= 2){
        return alert("O'yin tugadi ");
    }
    if( num === secretNum){
        alert("Siz yutdingiz");
        tries = 5;
    } else {
        alert("Siz notog'ri tanladingzi!");
        tries++;
    }
}