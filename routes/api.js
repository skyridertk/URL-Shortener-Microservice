'use-strict'

const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

router.get("/hello", function (req, res) {
    res.json({greeting: 'hello API'});
});


router.post('/shorturl/new', (req, res)=>{
    Url.find().sort({_id: -1}).limit(1)
    .then(user => {
        if(user == undefined || user.length == 0){
            console.log('Then part');
            var urlObj = req.body;
            urlObj.createdOn = new Date().toLocaleString();
            //console.log(urlObj);
            Url.create(urlObj)
            .then(()=> console.log('user has been created'))
            .catch(err => console.log('failed to create user: '+err));
            res.send({"original_url":urlObj.url,"short_url":0});
        }else{
            console.log('Else parse');
            var urlObj = req.body;
            console.log(user[0]['_doc']['sId']);
            var sid = user[0]['_doc']['sId'];
            urlObj.createdOn = new Date().toLocaleString();
            urlObj.sId = parseInt(sid)+1;
            //console.log(urlObj);
            Url.create(urlObj)
            .then(()=> console.log('user has been created'))
            .catch(err => console.log('failed to create user: '+err));
            res.send({"original_url":urlObj.url,"short_url":urlObj.sId});
        }
    }).catch(err => console.log(err));

    
    //Url.create(req.)

});

//get 
router.get('/shorturl/:num', (req, res)=>{
    

    Url.findOne({sId: req.params.num})
    .then(urlObj =>{
        console.log(urlObj === null);
        if(urlObj === null){
            res.send( {"error":"invalid URL"} );
        }else{
            res.redirect(urlObj.url);
        }
        
    })
    .catch(err => console.log(err));
    
});
module.exports = router;