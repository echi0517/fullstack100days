// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice
// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)
// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice
// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice


// 운동 시간!

// 1. "DOM으로 드릴링"하여 <h1> 요소를 선택하고
// 원하는 이름으로 변수에 저장

let headerTitle = document.body.children[0]
console.log(headerTitle)

// 2. (1)의 변수를 사용하고 "부모"에 대한 액세스 권한을 얻습니다.
// 저장된 <h1> 요소의 요소(즉, <body> 요소로)
// 보너스: (1)의 변수를 사용하여
// 형제 요소(즉, <h1> 요소 옆에 있는 <p> 요소)

let bodyDom = headerTitle.parentElement
console.log(bodyDom)

console.log(headerTitle.nextElementSibling)

// 3. getElementById로 <h1> 요소를 선택하고 저장합니다.
// 동일하거나 새로운 변수(당신에게 달려 있음)
headerTitle = document.getElementById('headerTitle')
console.log(headerTitle)

// 4. querySelector로 두 번째 <p> 요소를 선택합니다.
// HTML 코드에 무언가를 추가해야 합니다. 클래스)
// 선택한 이름으로 새 변수에 저장합니다.
let secondP = document.querySelector('.secondP')
// 5. 보너스 작업: <p> 요소의 텍스트 콘텐츠를 변경해 보세요.
// (4)에서 선택하고 선택한 다른 텍스트로 설정합니다.
secondP.textContent = '하하하'
console.log(secondP)




