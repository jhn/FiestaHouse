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
  });
});
