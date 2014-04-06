

exports.getDetails = function(req, res) {
  res.render('planner/details', {
    title: 'Details'
  });
};
exports.postDetails = function(req, res) {
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
