$("div.entry").live('click', function( e ) {
  var link, href, item = $(e.target).closest('.entry');

  if (!item.find('.entry-actions span.google-plus').length) {
    href = 'https://plus.google.com/?status=' + item.find('a.entry-title-link').attr('href');
    link = $('<a target="_blank">Share to Google+</a>').attr('href', href);
    item.find(".entry-actions span.tag").after($('<span class="link google-plus"></span>').html(link));
  }
});
