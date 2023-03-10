
const express = require('express')
const uuid = require('uuid')

const resData = require('../util/restaurant-data')


const router = express.Router()


router.get('/restaurants',function (req, res) {
    // const htmlFilePath = path.join(__dirname,'views','restaurants.html')
    // res.sendFile(htmlFilePath)

    let order = req.query.order
    let nextOrder = 'desc'

    if(order === 'desc') {
        nextOrder = 'asc'
    }

    if (order !== 'asc' && order !== 'desc') {
        order = 'asc'
    }

    const storedRestaurants = resData.getStoredRestaurant()

    storedRestaurants.sort(function(resA, resB) {
        if ( (order === 'asc' && resA.name > resB.name) || (order === 'desc' && resA.name < resB.name)) {
            return 1 
        }
        return -1
    })
    

    res.render('restaurants',{ numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants, nextOrder: nextOrder })
})

router.get('/restaurants/:id',function(req,res) {
    const restaurantId =  req.params.id


    const storedRestaurants = resData.getStoredRestaurant()
  

    for (const restaurant of  storedRestaurants) {
        if (restaurant.id === restaurantId){
            return res.render('restaurant-detail',{ restaurant: restaurant})
        }
    }   
    res.status(404).render('404')

})  



router.get('/confirm',function (req, res) {
    // const htmlFilePath = path.join(__dirname,'views','confirm.html')
    // res.sendFile(htmlFilePath)
    res.render('confirm')
})

router.post('/recommend',function (req, res) {
    const restaurant =  req.body
    restaurant.id = uuid.v4()

    const storedRestaurants = resData.getStoredRestaurant()
    

    storedRestaurants.push(restaurant)

    resData.storeRestaurant(storedRestaurants)

    res.redirect('/confirm');
})


router.get('/recommend',function (req, res) {
    // const htmlFilePath = path.join(__dirname,'views','recommend.html')
    // res.sendFile(htmlFilePath)
    res.render('recommend')
})

module.exports = router