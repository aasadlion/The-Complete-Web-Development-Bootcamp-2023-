import randomInteger from 'random-int';
import PromptSync from 'prompt-sync';

const prompt=PromptSync();

let ranNumber=randomInteger(5)
console.log(ranNumber)
let correct = false;

while (!correct) {
    let guess=prompt("Guess a Number 1 - 5 ");
    if (ranNumber== guess) {
        correct = true;
        console.log("You got it " + ranNumber);
    } else if(ranNumber>guess){
        console.log("Too Low");
    }
    else{
        console.log("Too High");

    }
}