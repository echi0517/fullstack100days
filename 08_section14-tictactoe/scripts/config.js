function openPlayerConfig(event) {
    const selectedPlayerId = +event.target.dataset.playerid // +'1' => 1
    // const clickButton = event.target.dataset['playerid']
    editedPlayer = selectedPlayerId;
    playerConfigOverlayElement.style.display = 'block'
    backdropElement.style.display='block'
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none'
    backdropElement.style.display = 'none'
    formElement.firstElementChild.classList.remove('error')
    errorsOutputElement.textContent = ''

    document.querySelector('#playername').value = ''
    
}

function savePlayerConfig(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const enteredPlatername = formData.get('playername').trim()

    if (!enteredPlatername) {
        event.target.firstElementChild.classList.add('error')
        errorsOutputElement.textContent = '플레이어 이름을 입력하세요'
        return
    }

    const UpdatedPlayerDataElement = document.getElementById('player-'+editedPlayer+'-data')
    UpdatedPlayerDataElement.children[1].textContent = enteredPlatername


    players[editedPlayer - 1].name = enteredPlatername
    
    
    closePlayerConfig()

     

}