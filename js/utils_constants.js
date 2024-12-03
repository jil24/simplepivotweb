var tableoverridestyle = document.createElement( 'style' )
tableoverridestyle.innerHTML = 'table {border-collapse: collapse;border-style: hidden;} table td, div.pagedtable table th {border: 1px solid #BBBBBB;}'

refreshpagedtable = function(selector, aqtable) {
  tableparent = $(selector).parent();
  id = $(selector).attr('id');
  $(selector).remove();
  tableparent.append('<div id="' + id + '" class="h-100"></div>');
  pagedtable.create(aqtable.objects(), id, {"shadowDOM": true});
  $(selector)[0].shadowRoot.appendChild( tableoverridestyle );
}

matchinputdelimiter = function() {
  $("#output_delimiter_picker").selectpicker('val', $("#delimiter_picker").val());
  $("#output_other_delimiter").val($("#other_delimiter").val());
}