# simplepivotweb
Simple data transformations in the browser: pivot data to long or wide format in seconds

Try it [here.](https://jil24.github.io/simplepivotweb)

## Simple data format changes in your browser.
Convert long format to wide format data with a few clicks. The data never leaves your local machine, and everything is done in javascript. Run it from the web or download the web pages to run offline if you like. 

## An Annoying Problem
I've often been frustrated at how annoying simple data reshaping is when I'm working with modest amounts of data in Excel. PivotTables only support aggregating data in crosstab formats using summary statistics, not simple reshaping of the original data, and powerquery is a bit too complex for novice users. I generally just fire up R and reshape the data there, but it's such a simple task that I need to do so often in isolation that I felt a dedicated web app would be worthwhile.

## Keep it Local
We should all be wary of submitting data to remotely hosted services. That's why I was so excited to find [Arquero](https://idl.uw.edu/arquero/), a javascript library that makes data parsing, reshaping, and reexport trivial, and it all runs in the browser. 

Simply copy cells from your favorite spreadsheet into the input tab, set the appropriate parameters, and copy the output back to your desired spreadsheet. 

## Built With:
- [Arquero](https://idl.uw.edu/arquero/)
- [Bootstrap 4](https://getbootstrap.com/) with [bootstrap-select](https://developer.snapappointments.com/bootstrap-select/)
- [pagedtable.js](https://mlverse.github.io/pagedtablejs/#/) for data previews

## See also:
- [ConvertCSV](https://www.convertcsv.com/pivot-csv.htm) - many flatfile conversion tools including pivot (closely simulates excel). most tools appear to work in local javascipt without submission of data to server.