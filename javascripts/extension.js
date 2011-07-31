$("div.entry").live('click', function( e ) {
  var item = $(e.target).closest('.entry');

  if (!item.find('.entry-actions span.google-plus').length) {
    item.find(".entry-actions span.tag").after($('<span class="link google-plus">Share to Google+</span>'));
  }
});

$(".entry-actions span.google-plus").live('click', function( e ) {
  var entry = $(e.target).closest('.entry');
  var link = entry.find('a.entry-original').attr('href');

  $("#gbg3").trigger('click');
});