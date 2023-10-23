let prize="10"
prize=parseInt(prize);
console.log(`My Selection: ${prize}`)

switch (prize) {
    case 10:
        console.log("congratulations! You win the 5 lac")
        break;
    case 9:
            console.log("congratulations! You win the 4 lac")
            break;
    case 7:
             console.log("congratulations! You win the 3 lac")
            break;
    case 6:
             console.log("congratulations! You win the 2 lac")
            break;
    case 5:
             console.log("congratulations! You win the 1 lac")
            break;
    case 4:
            console.log("congratulations! You win the 50000")
            break;
    case 3:
            console.log("congratulations! You win the 30000")
            break;
    case 2:
            console.log("congratulations! You win the 20000")
            break;
    case 1:
            console.log("congratulations! You win the 10000")
            break;
    default:
        console.log("Please select the correct number")
        break;
}