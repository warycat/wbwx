'use strict';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$.getJSON('http://008.io/wbwx.json',null,function(data){
	var items = data.Items;
  shuffle(items);
  $.each(items,function(index, item){
    var f = item.f.S;
    // var s = item.s.N;
    var p = item.p.S;
    console.log(f,p);
    $('<img class="lazy span1" width=80 height=80 style="margin:1px"/>').attr('data-original','http://d3rxwe6s0h6k9s.cloudfront.net/'+f+'_').appendTo('#photos');
  });
  $('img.lazy').lazyload();
});

