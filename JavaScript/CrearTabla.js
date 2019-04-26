// Cada vez que se modifique el tamaño de la tabla
// ésta se acopla a los argumentos
$(document).ready(function(){
    $('table.lectura').html(TablaNM(3, 3));
    $('input').on('change', function(){
        var n = $('input').eq(0).val();
        var m = $('input').eq(1).val();
        $('table.lectura[name="probabilidades"]').html(TablaNM(n, n));
        $('table.lectura[name="costos"]').html(TablaNM(n, m));
    });
});

// (int, int)
// Genera el codigo HTML para tener una tabla de NxM
function TablaNM(n, m){
    htmlRow = '<tr>' + '<th><input type="number"></th>'.repeat(m) + '</tr>';
    return htmlRow.repeat(n);
}
