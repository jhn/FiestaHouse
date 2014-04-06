var User = require('../models/User');
var Party = require('../models/Party');

exports.getDetails = function(req, res) {
  res.render('planner/cleaning', {
    title: 'Cleaning'
  });
};

exports.getCongrats = function(req, res) {
  res.render('congrats', {
    title: 'Cleaning'
  });
};

exports.postDetails = function(req, res) {
  User.findById(req.user.id, function(err, user) {
    if (err) return next(err);
    user.party.title = req.body.partyName;
    user.party.address = req.body.partyAddress;
    user.party.date = req.body.partyDate;

    user.save();
  });
  res.json({ success: true });
};

exports.getFood = function(req, res) {
  res.render('planner/food', {
    title: 'Food'
  });
};

exports.postFood = function(req, res) {
  User.findById(req.user.id, function(err, user) {
    if (err) return next(err);
    user.party.title = req.body.partyName;
    user.party.address = req.body.partyAddress;
    user.party.date = req.body.partyDate;
  });
  res.json({ success: true });
};

exports.getBooze = function(req, res) {
  res.render('planner/booze', {
    title: 'Booze'
  });
};

exports.getCleaning = function(req, res) {
  res.render('planner/cleaning', {
    title: 'Cleaning'
  });
};
