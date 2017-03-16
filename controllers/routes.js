module.exports = function(app,blog){

  app.get("/",function(req,res){

    blog.find({},function(err,result){

      res.render("home", {blogs : result});

    });

  });

  app.get('/publish',function(req,res){
    res.render('publish',{errors : null});
  });

  app.post('/publish', function(req,res){

    var blog_A = new blog({
      name : req.body.name,
      email : req.body.email,
      Title : req.body.title,
      Post : req.body.blog,
    });

    blog_A.save(function(err,result){
      if(err) throw err;
      res.redirect("/");
    });

  });

  app.get("/blog",function(req,res){

    blog.findById(req.query.id,function(err,result){
      if(err) throw err;
      console.log(result);
      res.render('blog',{blog: result});
    });

  });

};
