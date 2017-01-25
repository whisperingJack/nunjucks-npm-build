(function() {
    var container = $('.slides');

    $('a').click(function() {
      var target = $($.attr(this, 'href'));
      container.animate({
          scrollTop: container.scrollTop() + target.offset().top
      }, 250);
      return false;
    });
  }());
