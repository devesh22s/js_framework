//  middlewares - it is a function that have access of req, res and next middleware or route, it runs on every req, res

const fs =  require('fs');
const express = require('express')
const app = express()


function logreqres(filename){
    return (req, res, next) => {
        fs.appendFile(filename, `${Date.now()}: ${req.ip} ${req.method}: ${req.path} \n`, (err) => {
            if (err) {
                console.error("Error logging request:", err);
            }
            next();  // Move to next middleware/route
        });
    };
}


module.exports = {logreqres}