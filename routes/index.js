
/*
 * GET all the pages.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Kangulaskhan | Look at my cool list' });
};

exports.introductions = function(req, res){
    res.render('introductions', { title: 'Kangulaskhan | Who are you?' });
};