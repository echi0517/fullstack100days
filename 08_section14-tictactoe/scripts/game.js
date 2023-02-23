function resetGameStatus() {
    activePlayer = 0
    currentRound = 1
    gameIsOver = false
    gameOverEmelemt.style.display = 'none'
    gameOverEmelemt.firstElementChild.innerHTML = '<h2>You won! <span id="winner-name">Player Name</span></h2>'

    let gameBoardIndex = 0
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
            gameData[i][j] = 0
            gameBoardElement.children[gameBoardIndex].textContent = ''
            gameBoardElement.children[gameBoardIndex].classList.remove('disabled')
            gameBoardIndex++
        }
    }

}

function startNewGame() {

    if (players[0].name === '' || players[1].name === '') {
        alert('플레이어 명을 입력하세요')
        return
    }

    resetGameStatus()
    activePlayerNameElement.textContent = players[activePlayer].name
    gameAreaElement.style.display='block'
}



function switchPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    activePlayerNameElement.textContent = players[activePlayer].name
}

function selectGameField(event) {

    // li 태그 입력시에만 선택 || 게임오버여부
    if (event.target.tagName !== 'LI' || gameIsOver) return

    const selectedField = event.target

    const selectedColumn = + selectedField.dataset.col  -1
    const selectedRow = + selectedField.dataset.row -1

    // 이미 선택 필드가 입력되어 있으면 메세지 처리
    if (gameData[selectedRow][selectedColumn]) {
        alert('빈곳을 선택하세요')
        return
    }

    // 필드에 마크처리 및 색상 변경
    selectedField.textContent = players[activePlayer].symbol
    selectedField.classList.add('disabled')


    gameData[selectedRow][selectedColumn] = activePlayer + 1
    // console.log(gameData)
    
    // 승자 가져오기
    const winnerId = checkForGameOver()
    console.log(winnerId)
    if (winnerId !== 0){
        endGame(winnerId)
    }


    currentRound++
    switchPlayer()
}

// 게임오버 체크
function checkForGameOver() {
    
    // 행 게임오버 체크
    for (let i =0; i<3; i++){
        if (gameData[i][0] !== 0 && gameData[i][0] ===  gameData[i][1]  && gameData[i][1]  == gameData[i][2]) {
            return gameData[i][0]
        }
        
    }

    // 열 게임오버 체크
    for (let i =0; i<3; i++){
        if (gameData[0][i] !== 0 && gameData[0][i] ===  gameData[1][i]  && gameData[1][i]  == gameData[2][i]) {
            return gameData[i][0]
        }
    }

    // 대각선 게임오버 체크
    if (gameData[0][0]!==0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]){
        return gameData[0][0]
    }

    if (gameData[0][2]!==0 && gameData[0][2] === gameData[1][1] && gameData[1][1] === gameData[2][0]){
        return gameData[0][2]
    }

    if (currentRound === 9){
        return -1
    }

    return 0 
}

// 게임종료
function endGame(winnerId) {
    gameOverEmelemt.style.display = 'block'
    gameIsOver = true

    if (winnerId > 0){
        gameOverEmelemt.firstElementChild.firstElementChild.textContent = players[winnerId-1].name
    } else {
        gameOverEmelemt.firstElementChild.textContent = 'It\'s a draw'
    }

}