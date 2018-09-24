// Todo SERVER RECIBE IMAGE
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var http = require('http');
var multer = require('multer');

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST");
    // res.setHeader("Access-Control-Allow-Origin", "http://192.168.0.101:4200/");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

/** Serving from the same express Server
 No cors required */
app.use(express.static('../client'));
app.use(bodyParser.json());

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, '../assets-projects/transport/lines-img/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.originalname);
        // cb(null, 'veremos' + file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

/** API path that will upload the files */
app.post('/uploadlineperfil', function(req, res) {
    upload(req,res,function(err){
        console.log(req.file);
        if(err){
            res.json({error_code:1,err_desc:err});
            return;
        }
        res.json({error_code:0,err_desc:null});
    });
});
app.listen('3001', function(){
    console.log('running on 3001...');
    console.log('VEREMOS AHORA on 3001...');
    console.log("Express server listening on port %d", this.address().port);
});