function CrearTabla() {
    $(document).ready(function(){
        $('table.lectura').html(TablaNM(3, 3));
        $('input').on('change', function(){
            var n = $('input').eq(0).val();
            var m = $('input').eq(1).val();
            $('table.lectura').html(TablaNM(n, m));
        });
    });
}

function TablaNM(n, m){
    htmlRow = '<tr>' + '<th><input type="number"></th>'.repeat(m) + '</tr>';
    return htmlRow.repeat(n);
}
