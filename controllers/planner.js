var User = require('../models/User');
var Party = require('../models/Party');

exports.getDetails = function(req, res) {

  if (!req.user.party) {
    var party = new Party({
      email: req.user.email,
      title: '',
      address: ''
    });
    party.save();
    User.findById(req.user.id, function(err, user) {
      if (err) return next(err);
      user.party = party;
      user.save();
    });
  };

  res.json(req.user.party);
};

exports.postDetails = function(req, res) {
  User.findById(req.user.id, function(err, user) {
    if (err) return next(err);
    user.email = req.body.email || '';
    user.profile.name = req.body.name || '';
    user.profile.gender = req.body.gender || '';
    user.profile.location = req.body.location || '';
    user.profile.website = req.body.website || '';

    user.save(function(err) {
      if (err) return next(err);
      req.flash('success', { msg: 'Profile information updated.' });
      res.redirect('/account');
    });
  });
  res.json({ success: true });
};


exports.getFood = function(req, res) {
  res.render('planner/food', {
    title: 'Food'
  });
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
