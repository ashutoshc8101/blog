/* jshint esversion: 6 */

const express = require('express');

const app = express();

app.use(express.static("./public"));

app.set('port' , process.env.PORT || 8101);

app.get("/",function(req,res){
  res.send("Hello I am Blog");
});

app.listen(app.get('port'),function(){
  console.log(`Listening on port ${app.get('port')}`);
});
