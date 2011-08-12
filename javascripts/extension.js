(function($) {
  var shareUrl = function( params ) {
    return 'https://plus.google.com/?' + jQuery.param(params);
  },

  findLinkParams = function( entry ) {
    var link = entry.find('a.entry-title-link');
    return {
      title: link.text(),
      href: link.attr('href')
    }
  },

  createShareLink = function( actions ) {
    var entry = $(actions).closest('.entry');

    if ( !actions.find('span.google-plus').length ) {
      var link = $('<span class="link google-plus"></span>').html(
        $('<a/>', {
          target: '_blank',
          href: shareUrl(findLinkParams(entry))
        }).text('Share on Google+')
      );
      actions.append(link);
    }
  };

  $('body').delegate('div#entries', 'DOMNodeInserted', function(e) {
    var actions, target = $(e.target);
    if ( target.is('div.entry') ) {
      actions = target.find('div.entry-actions');
      if (actions.length > 0) {
        createShareLink( actions );
      }
    }
  });

  $('body').delegate('div.entry', 'DOMNodeInserted', function(e) {
    var target = $(e.target);
    if ( target.is('div.entry-actions') ) {
      createShareLink( target );
    }
  });

})(jQuery);
