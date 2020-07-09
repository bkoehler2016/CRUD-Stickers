const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res)=> {
    res.json({
        message: ' ✅'
    })
})

module.exports = router;