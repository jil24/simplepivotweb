performpivotwider = function(){
  key = $("#names_column_picker").val();
  value = $("#values_column_picker").val();
  drop = $("#drop_column_picker").val();
  aggregate_delimiter = ", "
  
  functionstring = 'op.join(op.array_agg_distinct(d["' + value + '"]),"'+ aggregate_delimiter +'")'
  
  outputtable = inputtable.groupby(
      aq.not(key,value,drop)).pivot(
        key, {valuestring: functionstring});
  return outputtable;
  
}

performpivot = function(){return performpivotwider()};