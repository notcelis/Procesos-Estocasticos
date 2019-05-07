function Exhaustivo(n, m){
  GenerarCombinaciones(n, m);
  $('div[name="politicas"]').on('click', 'table.politicas tr', function(){
    TablaProbabilidades(n, m, $(this));
    $('div[name="procedimiento"]').append('<img src="img/estadoEstable.PNG">');
    $('div[name="procedimiento"]').append('<img src="img/estadoEstableUnidad.PNG">');
    // MatrizDespejada
    // Valor de las PIs
    $('div[name="procedimiento"]').append('<img src="img/valor.PNG">');

  });
}

function TablaProbabilidades(n, m, elem){
  // Reiniciar
  $('div[name="politicas"]').nextAll().remove();
  // Mostrar la politica seleccionada
  $('div[name="procedimiento"]').append(elem.clone());
  // Generar la tabla de probabilidades y costos
  tablaProb = $('table.lectura[name="probabilidades"]');
  htmlTablaProbabilidades = '<table>';
  for(var i = 0; i < n; i++){
    var indexTable = parseInt(elem.children().eq(i).html()) - 1;
    htmlTablaProbabilidades += '<tr>';
    for(var j = 0; j < n; j++){
      htmlTablaProbabilidades += '<td>';
      htmlTablaProbabilidades +=
      tablaProb.eq(indexTable)
      .find('tr').eq(i)
      .find('input').eq(j)
      .val();
      htmlTablaProbabilidades += '</td>';
    }
    htmlTablaProbabilidades += '</tr>';
  }
  htmlTablaProbabilidades += '</table>';
  // Agregar html
  $('div[name="procedimiento"]').append(htmlTablaProbabilidades);
}

function MatrizTranspuesta(arr){
  trans = [];
  for(var j = 0; j < arr[0].length; j++){
    trans.push(new Array());
    for(var i = 0; i < arr.length; i++){
      trans[j].push(arr[i][j]);
    }
  }
  return trans;
}

function MatrizDespejada(arr){
  for(var i = 0; i < arr.length; i++){
  	for(var j = 0; j < arr[i].length; j++){
  		arr[i][j] *= -1;
    }
  	arr[i][i] += 1;
  }
  return arr;
}
