// Practice exercise 3.5
// 1. Create an object named people that contains an empty array that is called 
// friends.
// 2. Create three variables, each containing an object, that contain one of your 
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console


let people={

    friends:[],

};
let firstNames={
    firstNames:"Asad",
}
let lastNames={

    lastNames:"Iqbal",

}
let ID={

  ID:181217,

}

// people.friends[0]=firstNames.firstNames;
// people.friends[1]=lastNames.lastNames;
// people.friends[2]=ID.ID;
people.friends.push(firstNames.firstNames,lastNames.lastNames,ID.ID)
console.log(people);