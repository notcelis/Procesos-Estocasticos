$(document).ready(function(){
  $('select[name="metodo"]').on('change', function() {
    $('div[name="procedimiento"]').html('');
    var metodo = $(this).find('option:selected').html();
    if(metodo == 'Exhaustivas'){
      $('div[name="primerPolitica"]').html('');
    }
    else{
      n = $('input[name="n"]').val();
      $('div[name="primerPolitica"]').html(CrearTrPolitica(n));
      if(metodo == 'Descuentos'){
        alpha = '<input type="number" min="0" max="1" value="0.9" name="alpha">';
        $('div[name="primerPolitica"]').append(alpha);
      }
    }
  });
});

function CrearTrPolitica(n){
  htmlTr = '<table class="lectura"><tr>';
  htmlTr += '<td><input type="number"></td>'.repeat(n);
  return htmlTr + '</tr></table>';
}
