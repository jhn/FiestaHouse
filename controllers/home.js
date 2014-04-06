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
      res.json('[{"id":"N15","name":"1. Papadam","description":"Thin Indian crispy wafer.","min_qty":1,"max_qty":25,"price":1.95,"max_price":1.95,"increment":1,"type":"item","children":[]},{"id":"N16","name":"2. Tandoori Wings","description":"Chicken wings marinated in yogurt and mild spices, roasted in clay-oven.","min_qty":1,"max_qty":25,"price":5.95,"max_price":5.95,"increment":1,"type":"item","children":[]},{"id":"N17","name":"3. Grill Kebab Platter","description":"Assorted platter of chicken tikka, lamb tikka, and shish kebab and tandoori chicken wing).","min_qty":1,"max_qty":25,"price":9.95,"max_price":9.95,"increment":1,"type":"item","children":[]},{"id":"N18","name":"4. Chicken Pakora (Fritters)","description":"","min_qty":1,"max_qty":25,"price":7.95,"max_price":7.95,"increment":1,"type":"item","children":[]},{"id":"N19","name":"5. Shrimp Pakora (Fritters)","description":"","min_qty":1,"max_qty":25,"price":7.95,"max_price":7.95,"increment":1,"type":"item","children":[]},{"id":"N20","name":"6. Banana Pakora (Fritters)","description":"","min_qty":1,"max_qty":25,"price":4.95,"max_price":4.95,"increment":1,"type":"item","children":[]}]');
      // res.json(body);
    }
  });
};

exports.callDeliveryDotComBooze = function(req, res) {
  var deliveryBase = "https://sandbox.delivery.com/merchant/search/delivery?client_id=YmQ3ZWEzMTljOTdiMzRmMDM1NTQxYTY1MDc1YzU1YjBk&address=";
  var contactAddress = encodeURIComponent(req.body.partyAddress);
  var restaurants = "&merchant_type=W"
  var deliveryFull = deliveryBase + contactAddress + restaurants;
  request(deliveryFull, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    }
  });
};

exports.callDeliveryDotComItem = function(req, res) {
  var deliveryFull = "https://sandbox.delivery.com/merchant/" + req.body.id + "/menu?client_id=YmQ3ZWEzMTljOTdiMzRmMDM1NTQxYTY1MDc1YzU1YjBk";
  console.log(deliveryFull);
  console.log("about to do call");
  request(deliveryFull, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.json(body);
    }
  });
};
