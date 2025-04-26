const mongoose = require('mongoose')
mongoose.set("strictQuery", true)
async function myConnection(url){
    return mongoose.connect(url)
}

module.exports = {myConnection}