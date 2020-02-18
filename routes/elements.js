var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('elements'
  , { title: '한국 일렉스' });
});

module.exports = router;
