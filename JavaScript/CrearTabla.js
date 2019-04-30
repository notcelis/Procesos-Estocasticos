// Cada vez que se modifique el tamaño de la tabla
// ésta se acopla a los argumentos
$(document).ready(function(){
    var n = 3;
    var m = 3;
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
    for(var j = 1; j <= m; j++){
        htmlProbCosto += '<tr><table>';
        htmlProbCosto += '<td><p>' + j + '</p></td>';
        for(var k = 0; k < 2; k++){
            htmlProbCosto +=
              '<td>'
            + '<p>' + nombres[k] + ':</p>'
            + '</td>'
            + '<td>'
            + '<table class="lectura" name="' + nombres[k] + '">'
            + (k == 0 ? TablaNM(n, n) : TablaNM(n, m))
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
    htmlRow = '<tr>' + '<th><input type="number"></th>'.repeat(m) + '</tr>';
    return htmlRow.repeat(n);
}
