const express = require('express')
const { handleGenerateURL, handleGetAnalyticCount,  } = require('../Controller/Controller')
const router = express.Router()

router.post('/', handleGenerateURL)

router.get('/analytics/:shortid',handleGetAnalyticCount)

module.exports = router;















