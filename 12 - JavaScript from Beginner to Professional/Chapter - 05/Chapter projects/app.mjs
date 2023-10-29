// 
// Chapter project Math multiplication table

let multiplicationTable=[];

for (let i = 0; i <11; i++) {

    let temp=[];
    for (let j = 0; j < 11; j++) {
        
        temp.push(i*j);
        
    }

    multiplicationTable.push(temp)
}
console.table(multiplicationTable);