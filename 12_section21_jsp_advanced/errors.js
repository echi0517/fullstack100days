const fs = require('fs')

function readFile() {
    let fileData
    try {

        const fileData =  fs.readFileSync('data.json')
    } catch (error) {
        console.log('에러다아아아!' + error)    
    }
    console.log('Hi there')
}

readFile()