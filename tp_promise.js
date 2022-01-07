async function execute(){
    try {
        const firstPromise = await promiseLength('test');
        console.log(firstPromise);
        const secondPromise = await promiseLength('String de plus de vingt caractères');
        console.log(secondPromise);
        const thirdPromise = await promiseDifference(20,13);
        console.log(thirdPromise);
        let birthdate = new Date(1998,10,24);
        const fourthPromise = await fourthPromise(birthdate);
    } catch(e) {
        console.log(e);
    }
}
const promiseLength = (myString) => {
    return new Promise((resolve, failure) => {
        if(myString.length > 20) {
            resolve('OK');
        } else {
            failure ('failed');
        }
    });
}

const promiseDifference = (int1, int2) => {
    return new Promise((resolve, failure) => {
        if(int1 > int2) {
            resolve('OK');
            return int1 - int2;
        } else {
            failure ('failed');
        }
    });
}

const promiseAge = (birthdate) => {
    return new Promise((resolve, failure) => {
        birthdate.setFullYear(birthdate.getFullYear() + 18);
        if (birth_date >= new Date()) {
            resolve('OK');
            return true
        } else {
            failure ('failed');
        }
    });
}
execute();