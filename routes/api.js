'use-strict'

const express = require('express');
const router = express.Router();

router.get("/hello", function (req, res) {
    res.json({greeting: 'hello API'});
});

router.post('/shorturl/new', (req, res)=>{
   
    res.end();
});
module.exports = router;