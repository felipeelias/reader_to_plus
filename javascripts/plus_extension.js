function getParams() {
  var raw_params = document.URL.replace(document.baseURI + '?', ''),
      params = {};

  $.each(raw_params.split(/&/g), function() {
    var slice = this.split(/=/);
    params[slice[0]] = slice[1];
  });

  return params;
}

$(function() {
  var params = getParams();

  $(".n-Nd").trigger('click');

  var reloader = function() {
    var div = $("div[id=':3j.f']");
    if ( !div.length ) {
      setTimeout(reloader, 200);
    } else {
      div.text(params['status']);
    }
  };

  setTimeout(reloader, 200);
});
