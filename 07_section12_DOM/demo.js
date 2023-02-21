
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




remainElement = document.querySelector('#remaining-chars')
productNameElement = document.querySelector('#product-name')

productNameElement.addEventListener('input',productName)

function productName(event) {
    let getLength = productNameElement.value.length
    let remain = 60 - getLength
    remainElement.textContent = remain

    let maxlength =  productNameElement.maxLength

    getLength = event.target.value.length
    remain = maxlength - getLength
    remainElement.textContent = remain

    if (remain === 0) {
        productNameElement.classList.add('error')
        remainElement.classList.add('error')
    } else if (remain <= 10){
        // productNameElement.className = 'warning'
        productNameElement.classList.add('warning')
        remainElement.classList.add('warning')
        productNameElement.classList.remove('error')
        remainElement.classList.remove('error')
    } else {
        // productNameElement.className = ''
        productNameElement.classList.remove('warning')
        remainElement.classList.remove('warning')

    }
    
}


