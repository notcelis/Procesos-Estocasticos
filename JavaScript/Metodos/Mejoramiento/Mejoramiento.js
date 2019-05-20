function Mejoramiento(n, m){
  if(!PrimerPoliticaValida()){
    $('div[name="procedimiento"]').append('<p>Politica invalida</p>');
    return;
  }
  var iter = 1;
  var maxIter = 10;
  var politica = PrimerPolitica();
  do{
    $('div[name="procedimiento"]').append('<p>Iteracion ' + iter++ + '</p>');
    $('div[name="procedimiento"]').append(ArrHtmlTable(politica));
    $('div[name="procedimiento"]').append('<img src="img/mejoramiento.PNG">');
    var valoresV = ValoresVMejoramiento(n, politica);
    $('div[name="procedimiento"]').append(ArrHtmlTable(valoresV));
    $('div[name="procedimiento"]').append('<img src="img/mejoramientoOptimo.PNG">');
    valoresV = SumaVMejoramiento(n, m, valoresV);
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

function PrimerPoliticaValida(){
  var arr = $('div[name="primerPolitica"]').find('input');
  for(var i in arr){
    var j = arr.eq(i).val() - 1;
    var trPolitica = $('table.lectura[name="costos"]').eq(j).find('tr').eq(i);
    for(j in arr){
      if(trPolitica.find('input').eq(j).val() == ''){
        return false;
      }
    }
  }
  return true;
}

function PrimerPolitica(){
  var arr = [];
  var politica = $('div[name="primerPolitica"] table.lectura').find('input');
  for(var i = 0; i < politica.length; i++){
    arr.push(parseInt(politica.eq(i).val()));
  }
  return arr;
}

function ValoresVMejoramiento(n, politica){
  var arr = [];
  for(var i = 0; i < n; i++){
    var k = politica[i] - 1;
    var tablaProb = $('table.lectura[name="probabilidades"]').eq(k).find('tr').eq(i).find('input');
    var tablaCost = $('table.lectura[name="costos"]').eq(k).find('tr').eq(i).find('input');
    arr.push(new Array());
    arr[i].push(1);
    for(var j = 0; j < n - 1; j++){
      arr[i].push(-tablaProb.eq(j).val());
    }
    arr[i].push(parseFloat(tablaCost.eq(k).val()));
  }
  for(var i = 1; i < n; i++){
    arr[i - 1][i] += 1;
  }
  arr = GaussJordan(arr);
  arr.shift();
  return arr;
}

function SumaVMejoramiento(n, m, valoresV){
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
        suma += parseFloat(fila.eq(j).val()) * valoresV[j];
      }
      if(i < valoresV.length){
        suma -= valoresV[i];
      }
      arr[i].push(suma);
    }
  }
  return arr;
}

function SiguientePolitica(arr){
  var politica = [];
  for(var i = 0; i < arr.length; i++){
    var index = -1;
    var valor = -10000;
    for(var j = 0; j < arr[i].length; j++){
      if(valor < arr[i][j]){
        valor = arr[i][j];
        index = j;
      }
    }
    politica.push(index + 1);
  }
  return politica;
}

function IgualArr(a, b){
  if(a.length != b.length){
    return false;
  }
  for(var i = 0; i < a.length; i++){
    if(a[i] != b[i]){
      return false;
    }
  }
  return true;
}
