// Mostrar las politicas cuando se seleccione la opcion
function GenerarCombinaciones(n, m){
  $('div[name="procedimiento"]').append('<div name="politicas"></div>');
  CrearTablaPoliticas(m);
  var arr = new Array(n);
  $('table.politicas').html('');
  GenerarPoliticas(0, n, m, arr);
  if(!TieneElementos()){
    $('div[name="politicas"]').remove();
  }
}

function CrearTablaPoliticas(m) {
  htmlTablaPoliticas = '<p>Politicas:</p>';
  htmlTablaPoliticas += '<table class="politicas"></table>';
  $('div[name="politicas"]').html(htmlTablaPoliticas);
}

function GenerarPoliticas(position, n, m, arr){
  if(position == n) {
    var valorPoliticaCompleto = ValorPoliticaCompleto(n, m, arr);
    $('table.politicas').append(GenerarPoliticaTr(arr, valorPoliticaCompleto));
    return;
  }
  for(var j = 0; j < m; j++){
    costosTd = $('[name="costos"]').eq(position)
               .find('tr').eq(j).find('input');
    if(ElementoNulo(costosTd)){
      continue;
    }
    arr[position] = j;
    GenerarPoliticas(position + 1, n, m, arr);
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

function ElementoNulo(td){
  for(var i = 0; i < td.length; i++){
    if(td.eq(i).val() == ''){
      return true;
    }
  }
  return false;
}

function ArrayPlusInt(arr, c){
  for(var i = 0; i < arr.length; i++){
    arr[i] += c;
  }
  return arr;
}

function TieneElementos(){
  tablaPolitica = $('table.politicas');
  for(var i = 0; i < tablaPolitica.length; i++){
	   if(tablaPolitica.children().length > 0){
       return true;
     }
  }
  return false;
}
