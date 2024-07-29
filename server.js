const mongo = require("mongoose");
const bp = require('body-parser'); 
var encoder = bp.urlencoded({ extended: true });
const express= require("express");
const path = require('path');
const app= express();

const mongoURI = 'mongodb+srv://admin:admin@cluster0.zcypud8.mongodb.net/reactfrom?retryWrites=true&w=majority';
mongo.connect(mongoURI ,{
  useNewUrlParser: true, 
  useUnifiedTopology: true 
                
              }).then(()=>{
  console.log("connected to database");

              }).catch((err)=>{

  console.log("error")
              })


app.get("/",(req,res)=>{

res.send("hello")
})
const user= require("./model/user.js");
const bodyParser = require("body-parser");
const data= new user({
 name:"sahil",
    email:"goyat@g.com",
    password:123,
    age:23,
    number:1561616

});
data.save()
.then((result) => {
  console.log('User saved:', result);
})
.catch((err) => {
  console.error('Error saving user:', err);
});


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/submit',encoder,(req,res)=>{
const newdata = new user(req.body)
newdata.save().then(()=>{
  console.log("done");
})
})


app.listen(3000,()=>{


  console.log("server running on port 3000");
  
})