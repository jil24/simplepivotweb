var tableoverridestyle = document.createElement( 'style' )
tableoverridestyle.innerHTML = 'table {border-collapse: collapse;border-style: hidden;} table td, div.pagedtable table th {border: 1px solid #BBBBBB;}'

refreshpagedtable = function(selector, aqtable) {
  
  // we need to construct the data to be fed to pagedtable like so in order to prevent it from reordering the columns based on javascript object properties ordering, which always puts integers first.
  column_order = [];
  for(i=0;i<aqtable.columnNames().length;i++){
      column_order.push({"name": aqtable.columnName(i)})
  };
  pagedtable_data_with_columns_ordered = {
      columns: column_order,
      data: aqtable.objects()
  };
  
  
  tableparent = $(selector).parent();
  id = $(selector).attr('id');
  $(selector).remove();
  tableparent.append('<div id="' + id + '" class="h-100"></div>');
  pagedtable.create(pagedtable_data_with_columns_ordered, id, {"shadowDOM": true});
  $(selector)[0].shadowRoot.appendChild( tableoverridestyle );
}

matchinputdelimiter = function() {
  $("#output_delimiter_picker").selectpicker('val', $("#delimiter_picker").val());
  $("#output_other_delimiter").val($("#other_delimiter").val());
}