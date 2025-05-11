// const {getUser} = require('../services/auth')
async function restricedToLoggedInUserOnly(req, res, next){
    const UserUid = req.cookies?.uid
    if(!UserUid) return res.redirect('/login')

    const user = getUser(UserUid)
    if(!user) return res.redirect('/login')

    re.user = user;
    next();

}
module.exports = restricedToLoggedInUserOnly