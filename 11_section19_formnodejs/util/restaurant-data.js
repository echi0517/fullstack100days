const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname,'..' ,'data','restaurants.json')


function getStoredRestaurant () {
    const fileData = fs.readFileSync(filePath)
    const storedRestaurants = JSON.parse(fileData)

    return storedRestaurants
}

function storeRestaurant(storeabledRestaurant) {
    fs.writeFileSync(filePath,JSON.stringify(storeabledRestaurant))
}

module.exports = {
    getStoredRestaurant: getStoredRestaurant,
    storeRestaurant: storeRestaurant
}