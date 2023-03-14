function greetUser( greetPrefix ,userName = 'syp') {
    // console.log(greetPrefix + ' '+ userName);
    console.log(`${greetPrefix}  ${userName} !`)
}

greetUser('Hi' , 'Max')
greetUser('Hello')


function sumUp (...numbers) {
    let result =0

    for( const number of numbers) {
        result += number
    }
    return result
}

const inputNumbers = [1,4,56,7,8]

console.log(...inputNumbers)
console.log(sumUp( ...inputNumbers ))

console.log(sumUp)
