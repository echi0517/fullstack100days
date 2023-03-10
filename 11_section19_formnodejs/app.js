const path = require('path')
const express = require('express')



const defaultRouter = require('./routes/default')
const restaurantRouter = require('./routes/restaurants')

const app = express()


app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')  //express 앱에 대한 특정 옵션을 설정할 수 있는 메서드

app.use(express.static('public')) //css js 가져오기위한 미들웨어
app.use(express.urlencoded({express: false})) // post 방식으로 들어오는 body에 데이터를 뿌리기 위해 필요



app.use('/',defaultRouter) // 다른 라우터를 지정하여 가져올수 있게 처리
app.use('/',restaurantRouter)


app.use(function(req, res) {            // 400 에러에 대한 처리
    res.status(404).render('404')
})

app.use(function(error, req, res, next) {            //500 에러 처리
    res.status(500).render('500')
})

app.listen(3000)