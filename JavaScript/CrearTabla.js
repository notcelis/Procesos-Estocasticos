// Cada vez que se modifique el tamaño de la tabla
// ésta se acopla a los argumentos
$(document).ready(function(){
    var n = $('input[name="n"]').val();
    var m = $('input[name="m"]').val();
    CrearMTablas(n, m);
    $('input').on('click', function(){
        n = $('input[name="n"]').val();
        m = $('input[name="m"]').val();
        CrearMTablas(n, m);
    });
});

// Cargar M tablas
function CrearMTablas(n, m) {
    var nombres = ['probabilidades', 'costos']
    var htmlProbCosto = '<table>';
    for(var j = 0; j < m; j++){
        htmlProbCosto += '<tr><table>';
        num = j + 1;
        htmlProbCosto += '<td><p>' + num + '</p></td>';
        for(var k = 0; k < 2; k++){
            htmlProbCosto +=
              '<td>'
            + '<p>' + nombres[k] + ':</p>'
            + '</td>'
            + '<td>'
            + '<table class="lectura" name="' + nombres[k] + '">'
            + (k == 0 ? TablaNM(n, n) : TablaNM(n, m))
            //+ TablaNM(n, n)
            + '</table>'
            + '</td>';
        }
        htmlProbCosto += '</table></tr>';
    }
    htmlProbCosto += '</table>'
    $('div[name="TablasProbabilidadesCostos"]').html(htmlProbCosto);
}

// (int, int)
// Genera el codigo HTML para tener una tabla de NxM
function TablaNM(n, m){
    htmlRow = '<tr>' + '<td><input type="number"></td>'.repeat(m) + '</tr>';
    return htmlRow.repeat(n);
}
