const URL = require('../Model/Model');
const shortid = require('shortid');

// Generate Short URL
// Controller/Controller.js
async function handleGenerateURL(req, res) {
    const body = req.body;
    if (!body.Url) {
      return res.status(400).json({ error: "URL is required" });
    }
  
    // create the short URL
    const shortID = shortid.generate();
    await URL.create({
      shortid: shortID,
      redirectUrl: body.Url,
      clickCount: []
    });
  
    // fetch all URLs so we can render the table
    const allUrls = await URL.find({});
  
    // pass both id and urls into the template
    return res.render('home', {
      id: shortID,
      urls: allUrls
    });
  }
  

// Get Analytics (Click Count)
async function handleGetAnalyticCount(req, res) {
    const shortId = req.params.shortid;
    const result = await URL.findOne({ shortid: shortId });
    if (!result) {
        return res.status(404).json({ error: 'Short URL not found' });
    }
    return res.json({
        totalClick: result.clickCount.length,
        analytics: result.clickCount
    });
}

module.exports = { handleGenerateURL, handleGetAnalyticCount };
