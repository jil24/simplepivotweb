performpivotlonger = function(){
  pivotcolumns = $("#input_columns_picker").val();
  keycolname = $("#key_column_name").val();
  valuecolname = $("#value_column_name").val();
  drop = $("#drop_column_picker").val();
  
  //fold actually will just return the original table if nothing is provided to it. for consistency we'll throw an error
  
  if (pivotcolumns.length === 0) {throw("no columns selected to pivot")}
  
  outputtable = inputtable.select(aq.not(drop)).fold(pivotcolumns,{as:[keycolname,valuecolname]})
  return outputtable;
  
}

performpivot = function(){return performpivotlonger()};