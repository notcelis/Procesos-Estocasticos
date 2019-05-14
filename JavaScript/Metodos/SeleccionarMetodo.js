// Generar el procedimiento del metodo
$(document).ready(function(){
  $('button[name="SeleccionarMetodo"]').on('click', function(){
    seleccion = $('select[name="metodo"] option:selected').index();
    $('div[name="procedimiento"]').html('');
    var n = parseInt($('input').eq(0).val());
    var m = parseInt($('input').eq(1).val());
    if(seleccion == 0){
      Exhaustivo(n, m);
    }
    else if(seleccion == 1){
      Mejoramiento(n, m);
    }
    else{
      Descuento();
    }
  });
});
