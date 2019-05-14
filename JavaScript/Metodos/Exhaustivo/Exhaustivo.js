function Exhaustivo(n, m){
  GenerarCombinaciones(n, m);
  // Resalta la politica optima
  $('td.valor').eq(BuscarMayor()).parent().css("background-color", "yellow");
  $('div[name="politicas"]').on('click', 'table.politicas tr', function(){
    // Reiniciar
    $('div[name="politicas"]').nextAll().remove();
    // Mostrar politica seleccionada
    $('div[name="procedimiento"]').append($(this).clone());
    var poli = TrToArray($(this));
    poli.pop();
    for(var i = 0; i < poli.length; i++){
      poli[i] -= 1;
    }
    // Mostrar matrices de probabilidades y costos con la politica seleccionada
    var prob = TablaPoliticas(n, m, poli, 'probabilidades', true);
    var cost = TablaPoliticas(n, m, poli, 'costos', true);
    // Mostrar formulas para sacar los valores de PI
    $('div[name="procedimiento"]').append('<img src="img/estadoEstable.PNG">');
    $('div[name="procedimiento"]').append('<img src="img/estadoEstableUnidad.PNG">');
    // Resolver valores de PI
    prob = MatrizDespejada(MatrizTranspuesta(prob));
    prob = GaussJordan(MatrizCompleta(prob));
    $('div[name="procedimiento"]').append(ArrHtmlTable(prob));
    // Mostrar formula para obtener valor de la politica
    $('div[name="procedimiento"]').append('<img src="img/valor.PNG">');
    // Obtener valor de la politica
    $('div[name="procedimiento"]').append('<p>' + ValorPolitica(poli, prob, cost) + '</p>');
  });
}

function TrToArray(htmlTr){
  arr = [];
  for(var i = 0; i < htmlTr.children().length; i++){
    arr.push(parseInt(htmlTr.children().eq(i).html()));
  }
  return arr;
}

function TablaPoliticas(n, m, poli, nombre, imprimir){
  var arr = [];
  // Generar la tabla de probabilidades y costos
  tablaPolitica = $('table.lectura[name="' + nombre + '"]');
  htmlTabla = '<table>';
  // Iteracion
  for(var i = 0; i < n; i++){
    var indexTable = poli[i];
    arr.push(new Array());
    htmlTabla += '<tr>';
    for(var j = 0; j < n; j++){
      number =
      tablaPolitica.eq(indexTable)
      .find('tr').eq(i)
      .find('input').eq(j)
      .val();
      htmlTabla += '<td>';
      htmlTabla += number;
      htmlTabla += '</td>';
      arr[i].push(number);
    }
    htmlTabla += '</tr>';
  }
  htmlTabla += '</table>';
  // Agregar html
  if(imprimir) {
    $('div[name="procedimiento"]').append(htmlTabla);
  }
  return arr;
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

function MatrizCompleta(arr){
    n = arr.length;
	for(var i = 0; i < n; i++){
        arr[i].push(0)
    }
    m = arr[0].length;
    for(var j = 0; j < m; j++){
        arr[n - 1][j] = 1
    }
    return arr
}

function GaussJordan(arr){
  var n = arr.length;
  var m = arr[0].length;
  for(var i = 0; i < n; i++){
    var pivote = arr[i][i];
    for(var j = 0; j < m; j++){
      arr[i][j] /= pivote;
    }
    for(var l = 0; l < n; l++){
      if(i == l){
        continue;
      }
      var pivote = -arr[l][i];
      for(var j = 0; j < m; j++){
        arr[l][j] += arr[i][j] * pivote;
      }
    }
  }
  var solucion = [];
  for(var i = 0; i < n; i++){
    solucion.push(arr[i][m - 1]);
  }
  return solucion;
}

function ValorPolitica(poli, prob, cost){
  var val = 0.0;
  for(var i = 0; i < prob.length; i++){
    val += cost[i][poli[i]] * prob[i];
  }
  return val;
}

function ValorPoliticaCompleto(n, m, poli){
  var prob = TablaPoliticas(n, m, poli, 'probabilidades', false);
  var cost = TablaPoliticas(n, m, poli, 'costos', false);
  prob = MatrizDespejada(MatrizTranspuesta(prob));
  prob = GaussJordan(MatrizCompleta(prob));
  return ValorPolitica(poli, prob, cost);
}

function BuscarMayor(){
  index = -1;
  val = -10000;
  for(var i = 0; i < $('td.valor').length; i++){
    num = parseInt($('td.valor').eq(i).html());
  	if(val < num){
  		index = i;
  		val = num;
    }
  }
  return index
}
