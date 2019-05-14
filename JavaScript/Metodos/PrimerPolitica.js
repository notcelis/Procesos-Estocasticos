$(document).ready(function(){
  $('div[name="primerPolitica"]').hide();
  $('select[name="metodo"]').on('change', function() {
    $('div[name="procedimiento"]').html('');
  	if($(this).find('option:selected').html() == 'Exhaustivas'){
  		$('div[name="primerPolitica"]').hide();
      }
  	else{
  		$('div[name="primerPolitica"]').show();
      }
  });
});
