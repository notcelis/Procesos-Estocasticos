// Mostrar las politicas cuando se seleccione la opcion
function GenerarCombinaciones(n, m){
  $('div[name="procedimiento"]').append('<div name="politicas"></div>');
  CrearTablaPoliticas(m);
  var arr = new Array(n);
  for(var k = 0; k < m; k++){
    $('table.politicas').eq(k).html('');
    GenerarPoliticas(0, n, m, arr, k);
  }
  if(!TieneElementos()){
    $('div[name="politicas"]').remove();
  }
}

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
    var valorPoliticaCompleto = ValorPoliticaCompleto(n, m, arr);
    $('table.politicas').eq(k).append(GenerarPoliticaTr(arr, valorPoliticaCompleto));
    return;
  }
  for(var j = 0; j < m; j++){
    costosTd = $('[name="costos"]').eq(k)
               .find('tr').eq(i);
    costosTd = costosTd.children().eq(j);
    if(costosTd.children(':first').val() == ''){
      continue;
    }
    arr[i] = j;
    GenerarPoliticas(i + 1, n, m, arr, k);
  }
}

function GenerarPoliticaTr(arr, valor){
  htmlRow = '<tr>';
  for(i in arr){
    num = arr[i] + 1;
    htmlRow += '<td>' + num + '</td>';
  }
  htmlRow += '<td class="valor">' + valor + '</td>';
  return htmlRow + '</tr>';
}

function ArrayPlusInt(arr, c){
  for(var i = 0; i < arr.length; i++){
    arr[i] += c;
  }
  return arr;
}

function TieneElementos(){
  tablasPoliticas = $('table.politicas');
  for(var i = 0; i < tablasPoliticas.length; i++){
	   if(tablasPoliticas.eq(i).children().length > 0){
       return true;
     }
  }
  return false;
}
