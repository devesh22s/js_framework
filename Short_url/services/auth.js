// const sessionIdToUserMap = new Map();  // we use map so when we refresh the page the server will restart and the cookie will be deleted, we need to create new cookie again.
//  remove that one because now we will work on stateless, there is no need to maintain the state

import { use } from 'react'

const jwt = require('jsonwebtoken')
const secret = "devesh@333s"
function setUser(user){
  
   return jwt.sign({
    _id: user._id,
    email: user.email
   }, secret)
}
function getUser(id){
    if(!token) return null;
    return jwt.verify(token, secret)
    
}

module.exports ={
    setUser,
    getUser
}
//  as we know this is stateful authentiocation that store data on server memory so when we refresh the page the server will restart and the data in previous server is useless
//  so we use stateless authentication in which it works like stamp on the smae tickect, its tools are jwt token 