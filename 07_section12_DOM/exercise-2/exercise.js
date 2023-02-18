// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!



// 배운 내용을 연습하세요!

// 1) 두 개의 <button> 요소를 선택하고 두 개의 다른 변수에 저장합니다.
// - "id"를 추가하거나 사용하지 않고 첫 번째 버튼을 선택합니다.
// - "id"를 사용하여 두 번째 버튼을 선택합니다.
// 2) "클릭" 이벤트 리스너를 두 버튼에 추가합니다(두 가지 다른 기능 포함).
// 함수는 클릭된 버튼을 "console.dir()"해야 합니다.
// - 저장된 변수를 사용하여 첫 번째 버튼 출력
// - 저장된 변수를 사용하지 않고 두 번째 버튼 출력
// 3) 이제 페이지에 표시되는 텍스트에 언급된 단락을 선택하고 저장합니다.
// (첫 번째 및 세 번째 단락)
// - 문서를 드릴다운하고 "탐색"하여 두 단락을 모두 선택합니다.
// 언급된 요소
// - DOM 드릴링에 어려움을 겪고 있다면 대신 "ids"를 사용하되 해결책을 지켜보십시오!
// 4) (2)의 함수를 다음과 같이 변경합니다.
// - 첫 번째 버튼은 세 번째 단락을 제거합니다(즉, 그 앞에 있는 <p>).
// - 두 번째 버튼은 첫 번째 단락의 배경색을 파란색으로 변경합니다.
// 5) "인라인 스타일"을 변경하고 CSS 클래스를 추가하여 (4) 해결
// 참고: 먼저 해당 클래스를 styles.css 파일에 추가해야 합니다!


let firstButtonElement = document.body.children[2].children[4]
console.log(firstButtonElement)
let secondButtonElement = document.querySelector('#second-button')
console.log(secondButtonElement)


firstButtonElement.addEventListener('click',firstButtonEvent)

let firstP =  document.body.children[2].children[1]
let thirdP = document.body.children[2].children[3]



function firstButtonEvent() {
    console.dir(firstButtonElement)
    // thirdP.parentElement.removeChild(thirdP)
    thirdP.remove()
}

secondButtonElement.addEventListener('click',secondButtonEvent)
function secondButtonEvent( event) {
    console.dir(event.target)
    firstP.style.background = 'blue'
    firstP.classList.add('inlineclass') 
    // firstP.className = 'inlineclass'

}

