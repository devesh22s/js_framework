const express = require('express');
const { handleGenerateURL, handleGetAnalyticCount } = require('../Controller/Controller');
const router = express.Router();

// Handle URL creation
router.post('/', handleGenerateURL);

// Handle analytics request for short URL
router.get('/analytics/:shortid', handleGetAnalyticCount);

module.exports = router;
