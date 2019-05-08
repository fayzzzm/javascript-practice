$('div:nth-child(2)').hide();

setTimeout(function() {
  $('div:nth-child(2)').show();
  sortFunction(words);
  console.log(words);
}, 1000);

var words = [{
  word: 'abandon',
  meaning: 'forsake; leave behind'
}, {
  word: 'adversely',
  meaning: 'in an opposing manner'
}, {
  word: 'aggregate',
  meaning: 'a sum total of many heterogeneous things taken together'
}, {
  word: 'gather',
  meaning: 'assemble or get together'
}, {
  word: 'cultivation',
  meaning: 'production of food by preparing the land to grow crops'
}, {
  word: 'fertilize',
  meaning: 'provide with fertilizers or add nutrients to'
}, {
  word: 'nourish',
  meaning: 'provide with sustenance'
}, {
  word: 'intensify',
  meaning: 'increase in extent'
}, {
  word: 'irrigation',
  meaning: 'supplying dry land with water by artificial means'
}, {
  word: 'obtain',
  meaning: 'come into possession of'
}]

var add = [];
function sortFunction(Object) {
    Object.sort(function(a, b){
           var x = a.word.toLowerCase();
           var y = b.word.toLowerCase();
           if (x < y) {return -1;}
           if (x > y) {return 1;}
           return 0;
    });
}

function addWord() {
     var word = $('.thin').html();
     var meaning = $('.meaning-word').html();

     var firstIndex  = 0,
         lastIndex   = add.length - 1,
         middleIndex = Math.floor((lastIndex + firstIndex)/2);
     while(firstIndex <= lastIndex) {
           if(add[middleIndex].word > word)
                  lastIndex = middleIndex - 1;
           else
                  firstIndex = middleIndex + 1;
           if(add[middleIndex].word == word) {
                 alert("You've already saved it. Please try to find another word!")
                 return ;
           }
           middleIndex = Math.floor((lastIndex + firstIndex)/2);
     }
     $('#save').html('Saved');
     $('.ion-ios-star-outline').addClass('red');

     add.push({
         word: word,
         meaning: meaning
     });
     sortFunction(add);

}

$('#show-button').click(function() {
    $('main').hide();
    $('.box-container').hide();
    for(var i = 0; i < words.length; ++ i) {
           $('.box-container').append(
             '<div class="card" id="card" style="width: 18rem;">' +
             '<div class="card-body">' +
             '<h5 class="card-title">' + '<span id="word-title">' + words[i].word + '</span>' + '</h5>' +
             '<h6 class="card-subtitle mb-2 text-muted">' + '</h6>' +
             '<p class="card-text">' + '<span id="word-meaning">' + words[i].meaning + '</span>' + '</p>' +
             '<a href="#" class="card-link">' + '<i class="far fa-heart">' + 'Add' + '</i>' + '</a>' +
             '</div>' +
             '</div>');
           }
    $('.box-container').fadeIn('fast');
    $('.box-container').show();
})

$('#search').keyup(function() {
    var input = $('#search').val();
    $('.ion-ios-star-outline').removeClass('red');
    $('main').hide();
    $('#save').html('Save');

    if(input == '') {
          $('#search').addClass('wrong')
          $('.box-container').html('');
          $('main').show();
          return ;
    }

    $('.box-container').html('');
    $('#search').removeClass('wrong');
    var firstIndex  = 0,
        lastIndex   = words.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(firstIndex <= lastIndex) {
          if(words[middleIndex].word > input)
                 lastIndex = middleIndex - 1;
          else
                 firstIndex = `1 `, middleIndex + 1;
          if(words[middleIndex].word == input) {
                $('.thin').html(words[middleIndex].word);
                $('.meaning-word').html(words[middleIndex].meaning);
                $('main').show();
                return ;
          }
          middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }
    $('.box-container').append('<div class="error">'
                                  + 'There is no such this word!'
                         + '</div>')
})

$('#added-button').click(function(){
    var size = add.length;
    $('main').fadeOut('fast');
    if (!size) {
      setTimeout(function() {
        $('.box-container').html('').append('<h1>' + 'There is no such this word' + '</h1>');
      }, 500);
    }
    else {
      setTimeout(function() {
        $('.box-container').html('');
        $('main').hide();

        for (var i = 0; i < add.length; ++i) {
          $('.box-container').append(
            '<div class="card" id="card" style="width: 18rem;">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + '<span id="word-title">' + add[i].word + '</span>' + '</h5>' +
            '<h6 class="card-subtitle mb-2 text-muted">' + '</h6>' +
            '<p class="card-text">' + '<span id="word-meaning">' + add[i].meaning + '</span>' + '</p>' +
            '<a href="#" class="card-link">' + '<i class="far fa-heart">' + 'Add' + '</i>' + '</a>' +
            '</div>' +
            '</div>');
        }
      }, 500);

    }
});
