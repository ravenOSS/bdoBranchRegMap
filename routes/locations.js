var express = require('express');
var router = express.Router();

/* GET Locations Map. */
router.get('/', function (req, res, next) {
  res.render('locations');
});

module.exports = router;
