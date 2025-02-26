parseinputtab = function(){
  inputtext = $("#input_textarea").val();
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
    
  if (inputtext=="") {return null}
  

  inputtable = aq.fromCSV(inputtext, {delimiter: delimiter,
                                      header: headerbool,
                                      autoType: false});

  //now clean up any blank cells and replace them with empty strings
  for (i=0; i < inputtable.columnNames().length; i++) {
    impute_dict = {};
    impute_dict[inputtable.columnNames()[i]] = () => "";
    inputtable = inputtable.impute(impute_dict)
  }

  refreshpagedtable("#inputpreview_table", inputtable);
  
  refreshcolumnoptions();
  try {createoutput()}
  catch{}
  
  matchinputdelimiter();
  
}

input_reset = function(){
    $("#input_textarea").val("");
    $("#delimiter_picker").selectpicker('val',"\t");
    $("#header_picker").selectpicker('val',"Yes");
    parseinputtab();
}
