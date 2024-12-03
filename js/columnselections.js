var columnusage = {};

resetcolumnusage = function() {
  columnnames = inputtable.columnNames();
  columnusage = {};
  for (var i = 0; i < columnnames.length; i++) {
     columnusage[columnnames[i]] = null;
  }
}




refreshcolumnoptions = function() {
  
  resetcolumnusage();
  $("select.selecttabformelement").each(function(i, select) {
    eachselect = $(select);  
    eachselect.empty();
    for (var j = 0; j < columnnames.length; j++) {
       eachselect.append($('<option>', {value:columnnames[j] ,text:columnnames[j]}));
    }
    eachselect.selectpicker('refresh');
  });
}



refreshcolumnselections = function() {
  //first get all selections from all fields
  resetcolumnusage();
  $("select.selecttabformelement").each(function(i, select) {
    eachselect = $(select);  
    selection = eachselect.val();
    if (selection === null) {
      // do nothing
    }
    else if (selection.constructor === Array) {
        for (var i = 0; i < selection.length; i++) {
          columnusage[selection[i]] = eachselect.attr('id');
        }
    }
    else {
      columnusage[selection] = eachselect.attr('id');
    }
  });
  
  //now disable the options that are already used
  $("select.selecttabformelement").each(function(i, select) {
    eachselect = $(select);  
    eachselect.children().each(function(i, option) {
      eachoption = $(option);
      if (columnusage[eachoption.text()] && (columnusage[eachoption.text()] != eachselect.attr('id'))) {
        // disable options used by other controls
        eachoption.attr('disabled','disabled');
      } else {
        //make sure it's enabled
        eachoption.removeAttr('disabled');
      }
    });
    eachselect.selectpicker('refresh');
  });
}

