var express = require('express');
var router = express.Router();
var fs = require('fs')


var AipFaceClient = require("baidu-aip-sdk").face;

// 设置APPID/AK/SK
var APP_ID = "17637722";
var API_KEY = "3sa4WjQ6TA2ObyGGcOAe6GXy";
var SECRET_KEY = "ad8xNYkMvS34IrkBlUV8x8kTKq5KIypV";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);


// 带参数调用人脸检测
client.match([{
    image: new Buffer(fs.readFileSync('./public/images/19.jpg')).toString('base64'),
    image_type: 'BASE64'
},{
    image: new Buffer(fs.readFileSync('./public/images/20.jpg')).toString('base64'),
    image_type: 'BASE64'
}]).then(function (result) {
    console.log('匹配结果<match>: ' + JSON.stringify(result));
});


/* GET facejc page. */
router.get('/facedb', function(req, res, next) {
  res.render('index', { title: '人脸对比' });
});

module.exports = router;
