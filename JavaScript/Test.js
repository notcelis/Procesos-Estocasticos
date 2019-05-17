function test_exha_1(){
  n = 2;
  m = 2;
  prob = [
    [.8, .2, .3, .7],
    [.6, .4, .1, .9]
  ];
  cost = [
    [1, 3, 2, 4],
    [2, 4, 3, 5]
  ];
  Entrada(n, m, prob, cost);
  $('select[name="metodo"]').val('Exhaustivas');
  $('div[name="procedimiento"]').html('');
  Exhaustivo(n, m);
  // Seleccionar politica
  MetodoExhaustivo(n, m, PoliticaTr(3));
}

function test_exha_2(){
  n = 3;
  m = 2;
  prob = [
    [.2, .5, .3, 0, .5, .5, 0, 0, 1],
    [.3, .6, .1, .1, .6, .3, .05, .4, .55]
  ];
  cost = [
    [7, 6, 3, 0, 5, 1, 0, 0, -1],
    [6, 5, -1, 7, 4, 0, 6, 3, -2]
  ];
  Entrada(n, m, prob, cost);
  $('select[name="metodo"]').val('Exhaustivas');
  $('div[name="procedimiento"]').html('');
  Exhaustivo(n, m);
}

function test_exha_3(){
  n = 3;
  m = 3;
  prob = [
    [.2, .5, .3, 0, .5, .5, 0, 0, 1],
    [.3, .6, .1, .1, .6, .3, .05, .4, .55],
    [.2, .4, .4, .5, .1, .4, .1, .2, .7]
  ];
  cost = [
    [7, 6, 3, 0, 5, 1, 0, 0, -1],
    [6, 5, -1, 7, 4, 0, 6, 3, -2],
    [8, 7, 1, 6, 3, -1, 7, 4, -1]
  ];
  Entrada(n, m, prob, cost);
  $('select[name="metodo"]').val('Exhaustivas');
  $('div[name="procedimiento"]').html('');
  tablasCosto = $('table.lectura[name="costos"]');
  tablasCosto.eq(0).find('input').eq(2).val(''); // Primer fila
  tablasCosto.eq(1).find('input').eq(3).val(''); // Segunda fila
  tablasCosto.eq(2).find('input').eq(0).val(''); // Primer fila
  tablasCosto.eq(2).find('input').eq(8).val(''); // Tercer fila
  Exhaustivo(n, m);
}

function test_exha_4(){
  n = 2;
  m = 4;
  prob = [
    [.1, .1, .2, .6],
    [.2, .3, .3, .2],
    [.2, .1, .3, .4],
    [.1, .2, .3, .4]
  ];
  cost = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  Entrada(n, m, prob, cost);
  $('select[name="metodo"]').val('Exhaustivas');
  $('div[name="procedimiento"]').html('');
  Exhaustivo(n, m);
}

function test_mejo_1(){
  // probabilidades y costos
  n = 3;
  m = 3;
  prob = [
    [.2, .5, .3, 0, .5, .5, 0, 0, 1],
    [.3, .6, .1, .1, .6, .3, .05, .4, .55],
    [.2, .4, .4, .5, .1, .4, .1, .2, .7]
  ];
  cost = [
    [7, 6, 3, 0, 5, 1, 0, 0, -1],
    [6, 5, -1, 7, 4, 0, 6, 3, -2],
    [8, 7, 1, 6, 3, -1, 7, 4, -1]
  ];
  Entrada(n, m, prob, cost);
  tablasCosto = $('table.lectura[name="costos"]');
  tablasCosto.eq(0).find('input').eq(2).val(''); // Primer fila
  tablasCosto.eq(1).find('input').eq(3).val(''); // Segunda fila
  tablasCosto.eq(2).find('input').eq(0).val(''); // Primer fila
  tablasCosto.eq(2).find('input').eq(8).val(''); // Tercer fila
  // Metodo elegido
  $('select[name="metodo"]').val('Mejoramiento');
  $('div[name="primerPolitica"]').html(CrearTrPolitica(n));
  // Primer politica
  var politica = [2, 3, 1];
  for(var i in politica){
    $('div[name="primerPolitica"] table.lectura').find('input').eq(i).val(politica[i]);
  }
  // Solucion
  $('div[name="procedimiento"]').html('');
  Mejoramiento(n, m);
}

function test_desc_1(){
  // probabilidades y costos
  n = 3;
  m = 3;
  prob = [
    [.2, .5, .3, 0, .5, .5, 0, 0, 1],
    [.3, .6, .1, .1, .6, .3, .05, .4, .55],
    [.2, .4, .4, .5, .1, .4, .1, .2, .7]
  ];
  cost = [
    [7, 6, 3, 0, 5, 1, 0, 0, -1],
    [6, 5, -1, 7, 4, 0, 6, 3, -2],
    [8, 7, 1, 6, 3, -1, 7, 4, -1]
  ];
  Entrada(n, m, prob, cost);
  tablasCosto = $('table.lectura[name="costos"]');
  tablasCosto.eq(0).find('input').eq(2).val(''); // Primer fila
  tablasCosto.eq(1).find('input').eq(3).val(''); // Segunda fila
  tablasCosto.eq(2).find('input').eq(0).val(''); // Primer fila
  tablasCosto.eq(2).find('input').eq(8).val(''); // Tercer fila
  // Metodo elegido
  $('select[name="metodo"]').val('Descuentos');
  $('div[name="primerPolitica"]').html(CrearTrPolitica(n));
  $('div[name="primerPolitica"]').append('<input type="number" min="0" max="1" value="0.9" name="alpha">');
  // Primer politica
  var politica = [2, 3, 1];
  for(var i in politica){
    $('div[name="primerPolitica"] table.lectura').find('input').eq(i).val(politica[i]);
  }
  // Solucion
  $('div[name="procedimiento"]').html('');
  Descuento(n, m);
}

function Entrada(n, m, prob, cost){
  $('input[name="n"]').val(n);
  $('input[name="m"]').val(m);
  CrearMTablas(n, m);
  for(var j = 0; j < prob.length; j++){
      for(var i = 0; i < prob[j].length; i++){
          $('table.lectura[name="probabilidades"]').eq(j).find('input').eq(i).val(prob[j][i]);
  		$('table.lectura[name="costos"]').eq(j).find('input').eq(i).val(cost[j][i]);
      }
  }
}

function PoliticaTr(index){
  return $('div[name="politicas"] table.politicas tr').eq(index);
}
