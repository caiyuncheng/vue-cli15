/**
 * Created by Administrator on 2017/5/25.
 */
var express = require("express");
var bodyParser = require("body-parser");
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/user",function (req,res) {
     console.log(req.body);
     res.json({
        name:"蔡运成",
        txt:"下午好呀"
     });
});




app.listen(9090);
