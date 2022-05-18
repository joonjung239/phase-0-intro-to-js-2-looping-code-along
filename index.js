// Code your solutions in this file
const thankyoumessages = [];

function writeCards(names, events) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${events} gift!`); 
        thankyoumessages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)  
    }
    return thankyoumessages;
}

function countDown() {
    let counter = 10;
    while (counter >= 0) {
        console.log(counter--)
    }
}
