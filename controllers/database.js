/*jshint esversion:6 */
const mongoose = require('mongoose');

// Connecting to databse //
mongoose.connect("mongodb://localhost/blog");

mongoose.connection.once("open",function(req,res){
  console.log("Connected to mongoDB");
});

const blogSchema = mongoose.Schema({
  name : String,
  email : String,
  Title : String,
  Post : String,
  tags : Array,
});

const blog = mongoose.model("blog",blogSchema);

module.exports = blog;
