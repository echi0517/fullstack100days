let PElement =  document.querySelector('p')

function clickEvent () {
    PElement.textContent = 'clicked'
  
}


PElement.addEventListener('click', clickEvent)




function getText (event) {
    // console.log(inputElement.value)
    // console.log(event.target.value)
    // console.log(event.data )
    console.log(event)
}
let inputElement = document.querySelector('input')

inputElement.addEventListener('input',getText)
