createoutput = function(){
  try { outputtable = performpivot();
    $(".invalid_pivot_alert").hide();
    $(".pivot_success_alert").show();
    $('.outputtabformelement').show();
  }
  
  catch(error) {
    outputtable = null;
    $(".invalid_pivot_alert").show();
    $(".pivot_success_alert").hide();
    $('#outputpreview_table').empty();
    $('.outputtabformelement').hide();
    throw(error);
    return null
  }
  
  
  
  
    delimiter = $("#output_delimiter_picker").val();
    
    if (delimiter == "Other") {
      $(".output_other_delimiter").show();
      delimiter = $("#output_other_delimiter").val();
    } else {
      $(".output_other_delimiter").hide();
    }
   
  refreshpagedtable('#outputpreview_table',outputtable)
    $("#output_textarea").val(outputtable.toCSV({delimiter: delimiter}));

}