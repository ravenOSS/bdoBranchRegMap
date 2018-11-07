var express = require('express');
var Branch = require('../models/branch');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Banco del Oro' });
});

/* GET profile entry. */
router.get('/profiler', function (req, res, next) {
  res.render('profiler');
});

/* GET Locations Map. */
router.get('/locations', function (req, res, next) {
  res.render('locations');
});

/* render branch profile page. */
router.get('/branch-details', function (req, res, next) {
  res.render('branch-details', { title: 'Branch Profile' });
});

/* GET table data content. */
/*
router.get('/datatableusers', function (req, res, next) {
  Branch.find()
    .sort({ createdAt: 'descending' })
    .exec(function (err, branches) {
      if (err) { return next(err); }
      res.json(branches);
    });
});
*/

/* GET users listing. */
/*
router.get('/branches', function (req, res, next) {
  Branch.find()
    .sort({ createdAt: 'descending' })
    .exec(function (err, users) {
      if (err) { return next(err); }
      res.render('userlist', { users: users });
    });
});
*/

router.post('/profile', function (req, res, next) {
  var branch = req.body.branchNumber;
  var street = req.body.street;
  var city = req.body.city;
  var state = req.body.state;
  var state = req.body.state;
  var zip = req.body.zip;
  var telephone = req.body.telephone;
  var managerFirstName = req.body.managerFirstName;
  var managerLastName = req.body.managerLastName;
  var locLat = req.body.locLat;
  var locLng = req.body.locLng;
  var zip = req.body.zip;
});

/*
  Branch.findOne({ branch: branchNumber }, function (err, branch) {
    if (err) { return next(err); }
    if (branch) {
      req.flash('error', 'Branch already exists');
      return res.redirect('/');
    }

    var newUser = new User({
      username: username,
      password: password,
      fname: fname,
      lname: lname,
      email: email,
      telephone: telephone
    });
    newUser.save(next);
  });
}, passport.authenticate('login', {
  successRedirect: '/users',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.get('/branch/:number', function (req, res, next) {
  Branch.findOne({ branch: req.params.braanchNumber }, function (err, branch) {
    if (err) { return next(err); }
    if (!user) { return next(404); }
    res.render('profile', { branch: branch });
  });
});
*/

module.exports = router;