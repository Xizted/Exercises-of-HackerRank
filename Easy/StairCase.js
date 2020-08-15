let step = 100;
let space = step - 1;

while(space >= 0){
    console.log(" ".repeat(space) + "#".repeat(step - space));
    space--;
}

