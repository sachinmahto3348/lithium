const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();




router.get('/student/index', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    res.send('Dummy response')
})

module.exports = router;

/**
 * get
 * 
 */