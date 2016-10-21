var express = require('express')
  , router = express.Router()
  
// middleware that is specific to this router
router.use(function log(req, res, next) {
  console.log('url: ' + req.originalUrl + '  Time: ' + Date.now());
  next();
});

var Comments = require('../models/comments')

router.get('/all', function(req, res) {
  Comments.all(function(err, docs) {
    if (err) throw err
    res.render('comments', {comments: docs}, function(err, html){
      if (err) throw err
      res.send(html)
    });
    // res.send(docs)
  })
})

router.get('/recent', function(req, res) {
  Comments.recent(function(err, docs) {
    if (err) throw err;
    // res.render('comments', {comments: docs})
    res.send(docs)
  })
})

router.get('/insert', function(req, res) {
  var data = [{"c":"comment 1"},{"c":"comment 2"},{"c":"comment 2"}]
  Comments.insert(data, function(err, docs) {
    if (err) throw err;
    res.render('comments', {comments: docs})
  })
})

module.exports = router