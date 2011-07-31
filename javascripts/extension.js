$("div.entry").live('click', function( e ) {
  var item = $(e.target).closest('.entry');

  if (!item.find('.entry-actions span.google-plus').length) {
    item.find(".entry-actions span.tag").after($('<span class="link google-plus">Share to Google+</span>'));
  }
});
