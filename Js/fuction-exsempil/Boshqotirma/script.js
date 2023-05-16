
const riddle = {
    question: "Yer taqiga oltin qozziq",
    correctAnswer:'sabzi',
    hints: ['Yesa bo\'ladi', 'Sabzovot'],
    tries: 3,
    checkAnswer(str){
        // tog'ri javobni ekranga chiqaruvchi javobni chirqaruvchi ko'dni yozish
        // tog'ri yoki notog'riligai xaqida brovserda alert orqali ogoxlantirish!
        if (this.tries < 1){
            console.log("Oxirgi O'yin");
            return alert("O'yin tugadi");
        }

        if (str.toLowerCase().includes(this.correctAnswer)) {
            alert("Tog'ri javob");
            console.log("Tog'ri javob");
            this.tries = 0;
        } else {
            alert("Notog'ri javob");
            console.log("Notog'ri javob");
            this.tries--;

            const hint = this.hints[this.tries === 2 ? 0 : 1];
            if (this.tries){

                alert('Yordam: ' + hint);
            }
        }
    },
}

window.onload = function() {
    document.getElementById('riddle').innerHTML = riddle.question;
}

function check(){
    const input = document.getElementsByTagName('input')[0];

    const guessedAnswer = input.value;

    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer);
    }
};