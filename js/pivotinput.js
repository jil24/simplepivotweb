parseinputtab = function(){
  inputtext = $("#input_textarea").val();
  if (inputtext=="") {return null}
  if ($("#header_picker").val() == "Yes") {
    headerbool = true;
  } else {
    headerbool = false;
  }
    delimiter = $("#delimiter_picker").val();
    
    if (delimiter == "Other") {
      $(".other_delimiter").show();
      delimiter = $("#other_delimiter").val();
    } else {
      $(".other_delimiter").hide();
    }

  inputtable = aq.fromCSV(inputtext, {delimiter: delimiter,
                                      header: headerbool,
                                      autoType: false});

  refreshpagedtable("#inputpreview_table", inputtable);
  
  refreshcolumnoptions();
  try {createoutput()}
  catch{}
  
  matchinputdelimiter();
  
}