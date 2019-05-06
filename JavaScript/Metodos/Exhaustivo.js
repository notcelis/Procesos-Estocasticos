function Exhaustivo(n){
  $('div[name="politicas"]').on('click', 'table.politicas tr', function(){
    // Reiniciar
    $('div[name="politicas"]').nextAll().remove();
    // Mostrar la politica seleccionada
    $('div[name="procedimiento"]').append($(this).clone());
    // Generar la tabla de probabilidades y costos
    tablaProb = $('table.lectura[name="probabilidades"]');
    htmlTablaProbabilidades = '<table>';
    for(var i = 0; i < n; i++){
      var indexTable = parseInt($(this).children().eq(i).html()) - 1;
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
    $('div[name="procedimiento"]').append(htmlTablaProbabilidades);
    // Mostrar procedimiento e imagenes
    $('div[name="procedimiento"]').append(
        '<img src="img/estadoEstable.PNG">'
      + '<img src="img/estadoEstableUnidad.PNG">'
      + '<img src="img/valor.PNG">'
    );
  });
}
