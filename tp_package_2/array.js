function sort(myArray) {
    myArray.sort();
}

function arrayRandom(myArray){
    let length = myArray.length;
    let rndInt = Math.floor(Math.random() * length)
    return myArray[rndInt];
}

export {sort,arrayRandom}