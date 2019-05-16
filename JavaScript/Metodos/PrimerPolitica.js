$(document).ready(function(){
  $('select[name="metodo"]').on('change', function() {
    $('div[name="procedimiento"]').html('');
    if($(this).find('option:selected').html() == 'Exhaustivas'){
      $('div[name="primerPolitica"]').html('');
    }
    else{
      n = $('input[name="n"]').val();
      $('div[name="primerPolitica"]').html(CrearTrPolitica(n));
    }
  });
});

function CrearTrPolitica(n){
  htmlTr = '<table class="lectura"><tr>';
  htmlTr += '<td><input type="number"></td>'.repeat(n);
  return htmlTr + '</tr></table>';
}
