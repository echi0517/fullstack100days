const fs = require('fs')
const path = require('path')
const express = require('express')
const uuid = require('uuid')

const app = express()


app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')  //express 앱에 대한 특정 옵션을 설정할 수 있는 메서드

app.use(express.static('public')) //css js 가져오기위한 미들웨어
app.use(express.urlencoded({express: false})) // post 방식으로 들어오는 body에 데이터를 뿌리기 위해 필요


app.get('/', function(req, res) {
    // const htmlFilePath = path.join(__dirname,'views','index.html')
    // res.sendFile(htmlFilePath)
    res.render('index')
})  

app.get('/restaurants',function (req, res) {
    // const htmlFilePath = path.join(__dirname,'views','restaurants.html')
    // res.sendFile(htmlFilePath)
    const filePath = path.join(__dirname,'data','restaurants.json')
    const fileData = fs.readFileSync(filePath)
    const storedRestaurants = JSON.parse(fileData)
    

    res.render('restaurants',{ numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants })
})

app.get('/restaurants/:id',function(req,res) {
    const restaurantId =  req.params.id
    const filePath = path.join(__dirname,'data','restaurants.json')
    const fileData = fs.readFileSync(filePath)
    const storedRestaurants = JSON.parse(fileData)


    for (const restaurant of  storedRestaurants) {
        if (restaurant.id === restaurantId){
            return res.render('restaurant-detail',{ restaurant: restaurant})
        }
    }   
    res.render('404')

})  

app.get('/about',function (req, res) {
    // const htmlFilePath = path.join(__dirname,'views','about.html')
    // res.sendFile(htmlFilePath)
    res.render('about')
})

app.get('/confirm',function (req, res) {
    // const htmlFilePath = path.join(__dirname,'views','confirm.html')
    // res.sendFile(htmlFilePath)
    res.render('confirm')
})

app.post('/recommend',function (req, res) {
    const restaurant =  req.body
    restaurant.id = uuid.v4()

    const filePath = path.join(__dirname,'data','restaurants.json')
    const fileData = fs.readFileSync(filePath)
    const storedRestaurants = JSON.parse(fileData)
    storedRestaurants.push(restaurant)

    fs.writeFileSync(filePath,JSON.stringify(storedRestaurants))
    res.redirect('/confirm');
})


app.get('/recommend',function (req, res) {
    // const htmlFilePath = path.join(__dirname,'views','recommend.html')
    // res.sendFile(htmlFilePath)
    res.render('recommend')
})


app.use(function(req, res) {
    res.render('404')
})

app.listen(3000)