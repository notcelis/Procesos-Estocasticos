$(document).ready(function(){
  $('button[name="politicas"]').on('click', function(){
    var n = parseInt($('input').eq(0).val());
    var m = parseInt($('input').eq(1).val());
    var arr = new Array(n);

    CrearTablaPoliticas(m);
    for(var k = 0; k < m; k++){
      $('table.politicas').eq(k).html('');
      GenerarPoliticas(0, n, m, arr, k);
    }
  });
});

function CrearTablaPoliticas(m) {
  htmlTablaPoliticas = '<p>Politicas:</p>';
  htmlTablaPoliticas += '<table><tr>';
  for(var it = 0; it < m; it++){
    num = it + 1;
    htmlTablaPoliticas += '<td>' + num + '</td>';
  }
  htmlTablaPoliticas += '</tr><tr>';
  for(var it = 0; it < m; it++){
    htmlTablaPoliticas += '<td><table class="politicas"></table></td>';
  }
  htmlTablaPoliticas += '</tr></table>';
  $('div[name="politicas"]').html(htmlTablaPoliticas);
}

function GenerarPoliticas(i, n, m, arr, k){
  if(i == n) {
    $('table.politicas').eq(k).append(GenerarPoliticaTr(arr));
    return;
  }
  for(var j = 0; j < m; j++){
    costosTd = $('[name="costos"]').eq(k).find('tr').eq(i);
    costosTd = costosTd.children().eq(j);
    if(costosTd.children().eq(0).val() == ''){
      continue;
    }
    arr[i] = j;
    GenerarPoliticas(i + 1, n, m, arr, k);
  }
}

function GenerarPoliticaTr(arr){
  htmlRow = '<tr>';
  for(i in arr){
    num = arr[i] + 1;
    htmlRow += '<td>' + num + '</td>';
  }
  return htmlRow + '</tr>';
}
