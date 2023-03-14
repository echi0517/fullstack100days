const fs = require('fs/promises')

async function readFile() {

    // 동기 비동기
//     const fileData =  fs.readFile('data.txt', function(error, fileData) {   //콜백함수는  try catch 안됨 error 로 파악
        // if(error) {
            // // ...
        // }
//         console.log('파일 파싱중')
//         console.log(fileData.toString())
//     })
//     console.log('Hi there')

    //프로미스
    // fs.readFile('data.txt').then(function(fileData) {
    //     console.log('파일 파싱중')
    //     console.log(fileData.toString())
    // }).then(function() {})
    // .catch(function(error){
    //     console.log(error)
    // });


    // async await
    fileData = await fs.readFile('data.txt')
    console.log('파일 파싱중')
    console.log(fileData.toString())
    console.log('Hi there')

}
readFile()
