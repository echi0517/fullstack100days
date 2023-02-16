let age = 32;
let userName = `Max`;
let hobbies = ['축구','농구','배구'];

let job = { 
    title: 'Developer',
    place: 'New York',
    salary: 50000
};


let adultYears;
function calculateAdultYears(userAge) {
    return userAge - 18
}
adultYears = calculateAdultYears(age)
// alert(adultYears)
console.log(adultYears);


let person = {
    name:'Max',
    greet(){
        console.log('Hello!');
    }

}

person.greet()