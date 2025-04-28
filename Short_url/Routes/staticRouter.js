const express = require('express');
const URL = require('../Model/Model');
const router = express.Router();

// Routes/staticRouter.js
router.get("/", async (req, res) => {
    const allUrls = await URL.find({});
    return res.render('home', { urls: allUrls });
  });
  

module.exports = router;
