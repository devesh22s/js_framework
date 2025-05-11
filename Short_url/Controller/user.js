const {v4: uuidv4} = require('uuid')
const {setUser} = require('../services/auth')

const User = require('../Model/user')
const { response } = require('express')
async function handleSignup(req, res){
    const {name, email, password}= req.body
    await User.create({
        name,
        email,
        password
    })
    return res.redirect("/")


}
async function handleLogin(req, res){
    const { email, password}= req.body
    const user = await User.findOne({email, password})

    if(!user) return res.render('login',{
        error: "invalid username or password"
    })
    
    const token = setUser(user)
    res.cookie("uid", token)
    return res.redirect("/")
}
module.exports = {
    handleLogin,
    handleSignup
}