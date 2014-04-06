$(document).ready(function() {
  $('#deliveryForm').submit(function (e) {
    // don't submit yet
    e.preventDefault();
    // make call to delivery.com

    $.post("/deliverydotcom", $( "#deliveryForm" ).serialize(), function(data) {
      console.log(data);
    });

    $.post( "/planner/details", $( "#deliveryForm" ).serialize(), function(data) {
       console.log("success!");
     });

    scrollToElement('#food');
  });

  function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 1000;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    $('html, body').animate({
        scrollTop: offsetTop
    }, time);
  }
});
