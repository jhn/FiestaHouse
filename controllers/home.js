/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('escape-velocity', {
    title: 'Home'
  });
};

exports.escapeVelocity = function(req, res) {
  res.render('escape-velocity', {
    title: 'Landing Page'
  });
};
