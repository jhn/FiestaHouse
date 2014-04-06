$(document).ready(function() {

  $('#deliveryForm').submit(function (e) {
    // don't submit yet
    e.preventDefault();
    // make call to delivery.com

    $.post("/deliverydotcom", $( "#deliveryForm" ).serialize(), function(data) {
      var payload = $.parseJSON(data);
      var some_merchants = payload.merchants.slice(1,6);
      $.each(some_merchants, function(k, v) {

      });
      debugger;
      console.log(payload);

    });

    $.post( "/planner/details", $( "#deliveryForm" ).serialize(), function(data) {
       console.log("success!");
     });

    scrollToElement('#food');
  });

  $('#foodProceed').click(function(e) {
    scrollToElement('#booze');
  });

  $('#boozeProceed').click(function(e) {
    scrollToElement('#cleanUp');
  });

  function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 500;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    $('html, body').animate({
        scrollTop: offsetTop
    }, time);
  }
});
