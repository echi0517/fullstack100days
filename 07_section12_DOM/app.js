
inputElement = document.querySelector('input')
pElement = document.querySelector('p')

console.dir(inputElement)
console.dir(pElement)


inputElement.addEventListener('input', getInputLength)

function getInputLength() {
    let getLength = inputElement.value.length
    let remainLength = 20 - getLength
    pElement.textContent = remainLength.toString() + '/20'

    if (remainLength <= 10){
        inputElement.style.backgroundColor = 'bisque'
    }else {
        inputElement.style.backgroundColor = 'white'
    }
    
}
