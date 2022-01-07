function slugify(myString,separator) {
    if(separator){
        slugify(myString,separator);
    } else {
        slugify(myString);
    }
}

function capitalize(myString){
    myString.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

export {slugify,capitalize}