function ArrHtmlTable(arr){
  var n = arr.length;
  var m = arr[0].length;
  if(m == undefined){
    m = n;
    n = 1;
  }
  htmlTable = '<table>';
  for(var i = 0; i < n; i++){
    htmlTable += '<tr>';
    for(var j = 0; j < m; j++){
      if(n == 1){
        htmlTable += '<td>' + arr[j] + '</td>';
      }
      else{
        htmlTable += '<td>' + arr[i][j] + '</td>';
      }
    }
    htmlTable += '</tr>';
  }
  htmlTable += '</table>'
  return htmlTable;
}
