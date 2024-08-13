const express = require('express'); //创建路由实例
const router = express.Router();

router.get('/views/index',function(req,res){
    res.render('/views/index.html');
});

router.get('/views/about',function(req,res){
    res.render('/views/about.html');
});

router.get('/views/news',function(req, res){
    res.render('/views/news.html');
});

router.get('/views/site', function(req, res){
    res.render('/views/site.html');
});

router.get('/views/login',function(req,res){
    res.render('/views/login.html')
})

module.exports = router  //暴露接口
