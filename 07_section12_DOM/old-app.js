// console.log(document)
// console.dir(document)

// document.body.children[1].children[0].href = "https://google.com"

let anchorElement =  document.getElementById('linkId')
anchorElement.href = "https://google.com"

anchorElement = document.querySelector('#linkId')
anchorElement.href = "https://naver.com"

// anchorElement = document.querySelectorAll('a')
// anchorElement[0].href = "https://google.com"
// anchorElement[1].href = "https://google.com"



// 요소 추가 방법
// 1. 새로운 요소를 만든다
let newAchorElement =  document.createElement('a');
newAchorElement.href = 'https://daum.net'
newAchorElement.textContent = '  this is daum'

// 2. 접근할 부모 요소에 접근
let firstPElement = document.querySelector('p');

// 3. 부모요소에 INSERT
firstPElement.append(newAchorElement);


// 요소 삭제 방법
// 1. 요소 찾기
let firstH1Element = document.querySelector('h1')

// 2. 요소 삭제
// firstH1Element.remove()
firstH1Element.parentElement.removeChild(firstH1Element) // 예전 브라우저 


// 요소 이동

firstPElement.parentElement.appendChild(firstPElement)


// innerHTML

console.log(firstPElement.innerHTML)
firstPElement.innerHTML = '안녕 이건 <br> <strong>정말 중요해</strong>'