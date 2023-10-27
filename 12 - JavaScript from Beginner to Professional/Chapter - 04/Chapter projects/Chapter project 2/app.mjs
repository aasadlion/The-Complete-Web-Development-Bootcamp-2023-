// Rock Paper Scissors game
// This is a game between a player and the computer, where both will make a random 
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version 
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and 
// Scissors will beat out Paper. You can use JavaScript to create your own version of 
// this game, applying the logic with an if statement. Since this project is a little more 
// difficult, here are some suggested steps:
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then 
// do the same for the computer's selection. The number represents the index 
// values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the 
// random results for the player and then also the result for the computer of the 
// matching item from the array. 
// 4. Create a condition to handle the player and computer selections. If both are 
// the same, this results in a tie. 
// 5. Use conditions to apply the game logic and return the correct results. 
// There are several ways to do this with the condition statements, but you 
// could check which player's index value is bigger and assign the victory 
// accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the 
// computer selection and the result of the game

import randomInteger from "random-int";
import PromptSync from "prompt-sync";

var prompt =PromptSync();
let selection=["Paper","Rock","Scissors"];
let randomNumberGenerate=randomInteger(0,2);
let computerChoose=selection[randomNumberGenerate]
let realPlayer=selection[prompt("0 for Paper 1 for Rock 2 for Scissors ")];
let overcome="Ready to play";

console.log(overcome);
if (realPlayer == computerChoose) {
    overcome="Draw";
} else if(computerChoose==="Rock" && realPlayer==="Scissors"){

    overcome="Computer win!";
} else if(computerChoose==="Scissors" && realPlayer==="Rock"){
    overcome="Player win!";
} else if(computerChoose==="Paper" && realPlayer==="Rock"){
    overcome="Computer win!";
}
else if(computerChoose==="Rock" && realPlayer==="Paper"){
    overcome="Player win!";
} else if(computerChoose==="Scissors" && realPlayer==="Paper"){
    overcome="Computer win!";
} else if(computerChoose==="Paper" && realPlayer==="Scissors"){
    overcome=" Player win!";
}
else{
    overcome=" please Choose 0 for Paper 1 for Rock 2 for Scissors ";
}

console.log(`Computer Choose ${computerChoose}`);
console.log(`Real player Choose ${realPlayer}`);
console.log("-----------------------------------------------------------")
console.log(overcome);
console.log("-----------------------------------------------------------")