var slugify = require('slugify');

function slugify(myString,separator) {
    if(separator){
        slugify(myString,separator);
    } else {
        slugify(myString);
    }
}

function sort(myArray) {
    myArray.sort();
}

function capitalize(myString){
    myString.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

function arrayRandom(myArray){
    let length = myArray.length;
    let rndInt = Math.floor(Math.random() * length)
    return myArray[rndInt];
}