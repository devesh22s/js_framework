const mongoose = require('mongoose')


//  connections
async function connectMongoDB(url){
   return mongoose.connect(url)
    
}

module.exports = {connectMongoDB}