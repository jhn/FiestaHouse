var request = require('request');
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

exports.callDeliveryDotCom = function(req, res) {
  var deliveryBase = "https://sandbox.delivery.com/merchant/search/delivery?client_id=YmQ3ZWEzMTljOTdiMzRmMDM1NTQxYTY1MDc1YzU1YjBk&address=";
  var contactAddress = encodeURIComponent(req.body.partyAddress);
  var restaurants = "&merchant_type=R"
  var deliveryFull = deliveryBase + contactAddress + restaurants;
  request(deliveryFull, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    }
  });
};
