console.log('js is running');
$(document).ready(readyNow);

let answer = Math.ceil(Math.random() *10);

function readyNow() {
  console.log('jq is ready');

  addEventHandlers();
}

function addEventHandlers() {
  let counter = 0;
  $('#submit').on('click', function() {
    counter++;
    console.log(`counter`, counter);
    console.log(`guess`, $('#guess').val());
    console.log(`answer`, answer);
    if($('#guess').val() > answer) {
      $('.div').append('<p>Guess number ' + counter + ': Too high!</p>');
      $('.div').css('background-color', 'orange');
    } else if($('#guess').val() < answer) {
      $('.div').append('<p>Guess number ' + counter + ': Too low!</p>');
      $('.div').css('background-color', 'yellow');
    } else if($('#guess').val() == answer) {
      $('.div').append('<p>Guess number ' + counter + ': Correct!</p>');
      $('.div').css('background-color', 'lightblue');
    }
  })
}