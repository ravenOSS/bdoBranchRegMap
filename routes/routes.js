var express = require('express');

var router = express.Router();
var Branch = require('../models/branch');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Banco del Oro' });
});

/* GET profiler */
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
  var branchNumber = req.body.branchNumber;
  var street = req.body.street;
  var city = req.body.city;
  var state = req.body.state;
  var zip = req.body.zip;
  var telephone = req.body.telephone;
  var managerFirstName = req.body.managerFirstName;
  var managerLastName = req.body.managerLastName;
  var locLat = req.body.locLat;
  var locLng = req.body.locLng;

  Branch.findOne({ branch: branchNumber }, function (err, branch) {
    if (err) { return next(err); }
    if (branch) {
      req.flash('error', 'Branch already exists');
      return res.redirect('/profiler');
    }

    var newBranch = new Branch({
      branchNumber: branchNumber,
      street: street,
      city: city,
      state: state,
      zip: zip,
      telephone: telephone,
      managerFirstName: managerFirstName,
      managerLastName: managerLastName,
      locLat: locLat,
      locLng: locLng
    });
    newBranch.save();
  });
});

/* GET branch listing. */
router.get('/branch-details', function (req, res, next) {
  Branch.find()
    .sort({ branchNumber: 'descending' })
    .exec(function (err, branches) {
      if (err) { return next(err); }
      console.log(branches);
      res.json(branches);
    });
});
/*
router.get('/branch/:number', function (req, res, next) {
  Branch.findOne({ branch: req.params.braanchNumber }, function (err, branch) {
    if (err) { return next(err); }
    if (!user) { return next(404); }
    res.render('profile', { branch: branch });
  });
});
*/

module.exports = router;
