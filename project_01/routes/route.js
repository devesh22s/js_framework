const express = require('express')
// const group = require('./MOCK_DATA.json')
const router = express.Router()
const { handleAllusers, getuserbyid, updateuserbyid, deleteuserbyid,creatNewUser } = require('../Controller/controller')



    // html format
// router.get('/', async(req, res)=>{
    //     const alldbuser = await group.find({
        
    
    //     })
    //     const html = `  
    //     <ul>
    //     ${alldbuser.map((item)=> `<li>${item.firstName} - ${item.email}</li>`).join(" ")}    
    //     </ul>
    
    
    //     `                                                   
    
    
    
    //     return res.send(html)                     
// })
    



  
// json format

router.route('/').get(handleAllusers).post(creatNewUser)




// combine all in one

router.route('/:id').get(getuserbyid).patch(updateuserbyid).delete(deleteuserbyid)

module.exports = router