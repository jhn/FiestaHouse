$(document).ready(function() {

  $('#deliveryForm').submit(function (e) {
    // don't submit yet
    e.preventDefault();
    // make call to delivery.com
    $.post("/deliverydotcom", $( "#deliveryForm" ).serialize(), function(data) {
      var payload = $.parseJSON(data);

        var mydiv = document.createElement( "div" );
        var elemToAttach = "";

        $.each(payload, function(k, v) {
          elemToAttach += "<section><h3 class='fa fa-check'>" + v.name + "</h3><p>" + v.description + " " + "$" + v.price+".</p></section>";
        });
        mydiv.innerHTML = elemToAttach;
        $('#features .feature-list').append(mydiv);

      // debugger;
      // var allMerchants = payload.merchants;
      // var random = Math.floor(getRandomArbitrary(0, allMerchants.length));
      // var singleMerchant = allMerchants[random];
      // var randomMenu;
      // var itemPayload;
      // $.post("/deliverydotcomitem", { id: singleMerchant.id, _csrf: getCSRFToken()}, function(items) {
      //   itemPayload = $.parseJSON(items);
      //   randomMenu = itemPayload.menu.map(function(elem) {
      //     return elem.children;
      //   }).sort(function(a, b) {
      //     return b.length - a.length;
      //   })[0];
      //   debugger;
      //   if (randomMenu.length > 6) {
      //     randomMenu = randomMenu.slice(0, 6);
      //   }
      //   var mydiv = document.createElement( "div" );
      //   var elemToAttach = "";
      //   debugger;
      //   $.each(randomMenu, function(k, v) {
      //     elemToAttach += "<section><h3 class='fa fa-check'>" + v.name + "</h3><p>" + v.description + " " + "$" + v.price+".</p></section>";
      //   });
      //   mydiv.innerHTML = elemToAttach;
      //   $('#features .feature-list').append(mydiv);
      //   debugger;
      // });
    });

  $('#foodProceed').click(function (e) {
    // don't submit yet
    // e.preventDefault();
    $.post("/deliverydotcombooze", $( "#deliveryForm" ).serialize(), function(data) {
      var payload = $.parseJSON(data);
      var allMerchants = payload.merchants;
      var random = Math.floor(getRandomArbitrary(0, allMerchants.length));
      var singleMerchant = allMerchants[random];
      debugger;
      var randomMenu;
      var itemPayload;
    });
  });

    $.post( "/planner/details", $( "#deliveryForm" ).serialize(), function(data) {
       console.log("success!");
     });

    scrollToElement('#food');
  });

  function getCSRFToken() {
    return $('#deliveryForm input')[0].value;
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

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
