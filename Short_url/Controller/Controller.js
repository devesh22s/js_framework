const nanoid = require('nanoid')
const URL = require('../Model/Model');
const shortid = require('shortid');

async function handleGenerateURL(req, res){
    const body = req.body
    if(!body.Url) return res.status(400).json({error: `url is required`})
    const shortID = shortid.generate();
   const result =  await URL.create({
        shortid: shortID,
        redirectUrl: body.Url,
        clickCount: []
    })
    console.log(result);
    
    return res.json({id: shortID})

}

async function handleGetAnalyticCount(req, res){
    const shortId = req.params.shortid;
    const result = await URL.findOne({shortId})
    return res.json({totalClick: result.clickCount.length, analytics: result.clickCount})

}

module.exports = {handleGenerateURL, handleGetAnalyticCount}