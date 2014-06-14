
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


/*
 * redirect to smg.
 */

exports.smg = function(req, res){
    res.send("respond with a resource");
};