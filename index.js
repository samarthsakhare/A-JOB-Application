const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
    var f = req.body.fname;
    var l = req.body.lname;
    var fn = f + l;
    res.write("Hello "+f+" "+l+".  ");
    res.write("Your data is sent to company.  ")
    res.write("Thank you...");
    res.send();
})

app.listen(3000, function(){
    console.log("Server is start on port 3000");
})