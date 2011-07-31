(function($) {
  var share_url = function( params ) {
    var status = jQuery.param({
      status: [params['title'], params['href']].join(' ')
    });
    return 'https://plus.google.com/?' + status;
  },

  find_link_params = function( entry ) {
    var link = entry.find('a.entry-title-link');
    return {
      title: link.text(),
      href: link.attr('href')
    }
  };

  $("div.entry").live('click', function( e ) {
    var entry   = $(e.target).closest('.entry'),
        actions = entry.find('.entry-actions');

    if ( !actions.find('span.google-plus').length ) {
      var link = $('<span class="link google-plus"></span>').html(
        $('<a/>', {
          target: '_blank',
          href: share_url(find_link_params(entry))
        }).text('Share to Google')
      );

      actions.append(link);
    }
  });
})(jQuery)
