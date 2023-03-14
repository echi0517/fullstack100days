const hobbies = ['sports','cooking'] // 배열에 대한 포인터로 저장
hobbies.push('Reading') // 값자체가 변수나 상수에 저장

console.log(hobbies) // 배열의 주소는 변경되지 않음

//객체는 자바스크립트 특별한 메모리에 저장됨


//원시값 : numbers , strings, booleans, more
//참조값 : Objects


const person = {age: 32}

function getAdultYears(p) {
    // p.age -= 18
    // return p.age   // 주소를 복사해서 age를 찾기 때문에 전역객체인 person의 age 값이 업데이트됨
    return p.age -18
}

console.log(getAdultYears(person))
console.log({...person})