const User = require('../models/user')
const file = require('../MOCK_DATA.json')

async function handleAllusers(req, res){
    const alldbuser = await User.find({})
    return res.json(alldbuser)
    console.log(alldbuser);
    

}


async function getuserbyid(req, res){
    const user = await User.findById(req.params.id)
    if(!user) return res.status(404).json({error: "user not found"}) 
    return res.json(user)
}


async function updateuserbyid(req, res){
    await User.findByIdAndUpdate(req.params.id, {lastName :"changed"})
    return res.json({status: "success"})

}

async function deleteuserbyid(req, res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "success"})

}


async function creatNewUser(req, res){ 
    const body = req.body;
    
        if(
            !body ||
            !body.first_name ||
            !body.last_name ||
            !body.email ||
            !body.gender ||
            !body.job_title
        ){
            return res.status(400).json({msg: "All fields are required"})
        }
        
        
        const result =await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender:body.gender,
            jobTitle: body.job_title
        })
        console.log(result);
        
        return res.status(201).json({msg: "success", id: result._id})
}

module.exports = {handleAllusers, getuserbyid, updateuserbyid, deleteuserbyid, creatNewUser}