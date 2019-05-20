function Descuento(n, m){
  if(!PrimerPoliticaValida()){
    $('div[name="procedimiento"]').append('<p>Politica invalida</p>');
    return;
  }
  var alpha = parseInt($('input[name="alpha"]').val());
  var iter = 1;
  var maxIter = 4;
  var politica = PrimerPolitica();
  do{
    $('div[name="procedimiento"]').append('<p>Iteracion ' + iter++ + '</p>');
    $('div[name="procedimiento"]').append(ArrHtmlTable(politica));
    $('div[name="procedimiento"]').append('<img src="img/descuento.PNG">');
    var valoresV = ValoresVDescuento(n, politica, alpha);
    $('div[name="procedimiento"]').append(ArrHtmlTable(valoresV));
    $('div[name="procedimiento"]').append('<img src="img/descuentoOptimo.PNG">');
    valoresV = SumaVDescuento(n, m, valoresV, alpha);
    $('div[name="procedimiento"]').append(ArrHtmlTable(valoresV));
    var sigPolitica = SiguientePolitica(valoresV);
    if(IgualArr(politica, sigPolitica)){
      $('div[name="procedimiento"]').append('<p>Solucion</p>');
      $('div[name="procedimiento"]').append(ArrHtmlTable(politica));
      break;
    }
    politica = sigPolitica;
  }while(iter < maxIter);
}

function ValoresVDescuento(n, politica, alpha){
  var arr = [];
  for(var i = 0; i < n; i++){
    var k = politica[i] - 1;
    var tablaProb = $('table.lectura[name="probabilidades"]').eq(k).find('tr').eq(i).find('input');
    var tablaCost = $('table.lectura[name="costos"]').eq(k).find('tr').eq(i).find('input');
    arr.push(new Array());
    for(var j = 0; j < n; j++){
      arr[i].push(-tablaProb.eq(j).val() * alpha);
    }
    arr[i].push(parseFloat(tablaCost.eq(k).val()));
  }
  for(var i = 0; i < n; i++){
    arr[i][i] += 1;
  }
  arr = GaussJordan(arr);
  return arr;
}

function SumaVDescuento(n, m, valoresV, alpha){
  var arr = [];
  var probabilidades = $('table.lectura[name="probabilidades"]');
  var costos = $('table.lectura[name="costos"]');
  for(var i = 0; i < n; i++){
    arr.push(new Array());
    for(var k = 0; k < m; k++){
      var suma = parseFloat(costos.eq(i).find('tr').eq(i).find('input').eq(k).val());
      if(isNaN(suma)){
        arr[i].push('-');
        continue;
      }
      var fila = probabilidades.eq(k).find('tr').eq(i).find('input');
      for(var j = 0; j < valoresV.length; j++){
        suma += parseFloat(fila.eq(j).val()) * valoresV[j] * alpha;
      }
      arr[i].push(suma);
    }
  }
  return arr;
}
