// 첫번째 : 합계표시 for

const calcSumBtnElement = document.body.querySelector('#calculator button')

function calcSum() {
    
    let inputElement = document.body.querySelector('#user-number')
    let maxValue = inputElement.value

    let returnValue = 0
    for (i=1; i <= parseInt(maxValue); i++) {
        returnValue += i
    }
    // console.log(returnValue)
    let preturnElement = document.body.querySelector('#calculated-sum')
    preturnElement.textContent = returnValue.toString()
    preturnElement.style.display = 'block'
}
calcSumBtnElement.addEventListener('click',calcSum)




// 두번째 for of

let highlightButton =  document.querySelector('#highlight-links button')


function highlight() {
    let aElements = document.querySelectorAll('#highlight-links a')
    console.log(aElements)

    for (let aElement of aElements) {
        aElement.classList.add('highlight')
    }
    
}
highlightButton.addEventListener('click',highlight)


// 세번째 for in
const dummyUserData = {
    firstNmae: '박',
    lastName: '수영',
    age: 31
}


let userDataButton = document.querySelector('#user-data button')


function userDataDisplay () {
    
    let ulElement = document.querySelector('#output-user-data')
    ulElement.innerHTML = ''

    for (const key in dummyUserData){
        let liElement = document.createElement('li')

        let outputText = key.toUpperCase() + ':' + dummyUserData[key]
        liElement.textContent = outputText

        
        ulElement.append(liElement)
    }
    
}
userDataButton.addEventListener('click',userDataDisplay)

// while


let diceButton = document.querySelector('#statistics button')


function randomeDice() {
    let targetValue = + document.querySelector('#user-target-number').value
    let ulElement =  document.querySelector('#dice-rolls')
    ulElement.innerHTML = ''

    if (targetValue > 6 || targetValue <1) {
        alert('제대로 입력')
        return
    } 
    let cnt = 0

    while (true) {
        cnt++
        let randomeValue = Math.floor(Math.random() * 6) +1
        let liElement = document.createElement('li')

        let outputText = 'Roll' + cnt + ':' + randomeValue
        liElement.textContent = outputText
        ulElement.append(liElement)

        if (randomeValue == targetValue){
            break
        }

        
    }

}

diceButton.addEventListener('click',randomeDice)


