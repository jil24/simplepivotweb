startup = function() {
  $(".simplepivot_alert").hide();
  if ($("#delimiter_picker").val() != "Other") {
    $(".other_delimiter").hide();
  }
  parseinputtab();
}

//events
window.onload = startup;

$('.inputtabformelement').change(parseinputtab);
$('.selecttabformelement').change(function(){refreshcolumnselections();createoutput()});
$('#column_selection_reset').click(refreshcolumnoptions);
$('.outputtabformelement').change(createoutput);
$('#load_long_example').click(load_long_example);
$('#load_wide_example').click(load_wide_example);
$('#input_reset').click(input_reset);