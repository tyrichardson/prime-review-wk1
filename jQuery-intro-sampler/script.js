console.log(`js is running`);

let readyNow = () => {
  console.log(`jQuery is ready`);
  $('h2').mouseenter(h2MouseOver);
  $('h2').mouseleave(h2MouseLeave);
  $('#color-changer').on('click', h2changeColor);
  $('#hide').on('click', h2Hide);
  $('#show').on('click', h2Show);
  $('#toggler').on('click', h2Toggler);
  $('.fadeIn').click(function () {
    $('h1').fadeIn('slow', function () {});
  });
  $('#all-button').on('click', allClicked);
  $('#odd-button').on('click', oddClicked);
  $('#even-button').on('click', evenClicked);
  $('#first-button').on('click', firstClicked);
  $('#last-button').on('click', lastClicked);
  $('.changer').on('click', changeNow);
}

$(document).ready(readyNow);

let h2MouseOver = (event) => {
  $(event.target).css('background-color', 'lightblue');
}

let h2MouseLeave = (event) => {
  $(event.target).css('background-color', 'bisque');
}

let h2changeColor = () => {
  $('h2').css('background-color', 'yellow');
}

let h2Hide = () => {
  $('h2').hide();
}

let h2Show = () => {
  $('h2').show();
}

let h2Toggler = () => {
  $('h2').fadeToggle();
}

let allClicked = () => {
  $('li').css('color', 'purple');
}

let oddClicked = () => {
  $('li:odd').css('color', 'red');
}

let evenClicked = () => {
  $('li:even').css('color', 'green');
}

let firstClicked = () => {
  $('li:first').css('color', 'hotpink');
}

let lastClicked = () => {
  $('li:last').toggle();
}

let changeNow = (event) => {
  $(event.target).next().css('color', 'white');
}