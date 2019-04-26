$(document).ready(function(){
    $('button').click(function(){
        $('table.politicas').html('');
        var n = $('input').eq(0).val();
        var m = $('input').eq(1).val();
        MostrarPoliticas(n, m);
    });
});

function MostrarPoliticas(n, m){
    var a = new Array(n);
    GenerarPoliticas(0, n, m, a);
}

function GenerarPoliticas(i, n, m, a){
    if(i == n) {
        $('table.politicas').append(GenerarPoliticaTr(a));
        return;
    }
    for(var j = 0; j < m; j++){
        a[i] = j;
        GenerarPoliticas(i + 1, n, m, a);
    }
}

function GenerarPoliticaTr(a){
    htmlRow = '<tr>';
    for(i in a){
        htmlRow += '<td>' + a[i] + '</td>';
    }
    return htmlRow + '</tr>';
}
