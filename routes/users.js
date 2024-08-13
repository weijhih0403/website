var express = require('express');
var router = express.Router();
var multer = require('multer');

router.post('/views/login.html',function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
});

