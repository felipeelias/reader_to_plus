(function($) {
  var params = (function() {
    var url_tokens = ('' + document.location.search).replace(/\?/, '').split(/&/g),
        params = {};

    for(piece in url_tokens) {
      var slice = url_tokens[piece].split(/=/);
      params[slice[0]] = decodeURIComponent(slice[1]);
    }

    return params;
  })();

  $(function() {
    $("#contentPane div:first div:eq(1)").trigger('click');

    var reloader = function() {
      var div = $("#contentPane div[contenteditable]");
      if ( !div.length ) {
        setTimeout(reloader, 200);
      } else {
        var text = params['title'].replace(/\+/g, ' ') + ': ' + params['href'];
        div.text(text);
      }
    };

    setTimeout(reloader, 200);
  });
})(jQuery);

