function IntersectarPoliticas(){
  var n = $('table.politicas').length;
  var set = $('table.politicas:first').children();
  for(var i = 1; i < n; i++){
    set = Interseccion(set, $('table.politicas').eq(i).children());
  }
  return set;
}

function Interseccion(a, b){
  var indexA = 0;
  var indexB = 0;
  var trSet = [];
  while(indexA < a.length && indexB < b.length){
    var aChildren = a.eq(indexA).children().not(':last');
    var bChildren = b.eq(indexB).children().not(':last');
    if(TrIgual(aChildren, bChildren)){
      trSet.push(bChildren.parent());
      indexA++;
      indexB++;
    }
    else if(TrMenor(aChildren, bChildren)){
      indexA++;
    }
    else{
      indexB++;
    }
  }
  return trSet;
}

function TrMenor(a, b){
  for(var i = 0; i < b.length; i++){
    if(parseInt(a.eq(i).html()) > parseInt(b.eq(i).html())){
      return false;
    }
  }
  return true;
}

function TrIgual(a, b){
  for(var i = 0; i < b.length; i++){
    if(a.eq(i).html() != b.eq(i).html()){
      return false;
    }
  }
  return true;
}
