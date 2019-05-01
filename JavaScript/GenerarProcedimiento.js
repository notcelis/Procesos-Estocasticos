$(document).ready(function(){
  $('div[name="politicas"]').on('click', 'table.politicas tr', function(){
    n = $('input[name="n"]').val();
    // Mostrar la politica seleccionada
    $('div[name="procedimiento"]').html($(this).clone());
    // Generar la tabla de probabilidades y costos
    tablaProb = $('table.lectura[name="probabilidades"]');
    htmlTablaProbabilidades = '<table>';
    for(var i = 0; i < n; i++){
      var indexTable = parseInt($(this).children().eq(i).html()) - 1;
      htmlTablaProbabilidades += '<tr>';
      for(var j = 0; j < n; j++){
        htmlTablaProbabilidades += '<td>';
        htmlTablaProbabilidades += tablaProb.eq(indexTable).find('tr').eq(i).find('input').eq(j).val();
        htmlTablaProbabilidades += '</td>';
      }
      htmlTablaProbabilidades += '</tr>';
    }
    htmlTablaProbabilidades += '</table>';

    $('div[name="procedimiento"]').append(htmlTablaProbabilidades);
  });
});
