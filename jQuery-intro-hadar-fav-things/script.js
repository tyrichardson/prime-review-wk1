console.log(`js is running`);

let readyNow = () => {
  console.log(`jquery is running`);
  $('h1').append(' - jQuery is Great!');
  $('#food-list').append('<li class="foodItem">Cheese</li>');
  $('h1').text('Favorite Things');
  let headerText = $('h1').text();
  console.log(`current h1 text is ${headerText}`);
  let taco = $('<li class="foodItem"></li>');
  taco.text('Tacos');
  $('#food-list').append(taco);
  taco.append(` with cheese`);
  taco.prepend(`Crunchy `);

  let movies = $(`<ul></ul>`);
  movies.append(`<li>Matrix</li>`);
  movies.append(`<li>Driving Miss Daisy</li>`);
  movies.append(`<li>Spaceballs</li>`);
  $('.content').append(`<h2>Movies</h2>`);
  $('.content').append(movies);
  console.log(`food list children`, $('#food-list').children());
  console.log(movies.children()[0].append(`: Reloaded`));
  console.log(`chained find on food list`, $('.content').find('#food-list').find('.foodItem'));
  addEventHandlers();
};

$(document).ready(readyNow);

let addEventHandlers = () => {
  //$(`.foodItem`).on(`click`, function (event) {
  //console.log(`event is `, event.target);
  //flat text of html element
  //});
  //$(`.foodItem`).on('click', function () {
  //console.log(`this is `, $(this));
  //returns target as an object in an array
  //});
  $(`.foodItem`).on('click', foodItemClicked);
  $('MUST_EXIST_NOW').on('click', '.FUTURE_ITEMS', foodItemClicked); //what does this do???
  //$('#food-list').on('click', '.foodItem', foodItemClicked);
  $('#submitButton').on('click', addFoodItem);
  $('header').on('click', addButton);
};

function foodItemClicked() {
  console.log(`foodItem clicked this is`, $(this));
  //returns target as an object in an array (as above)
  //written as an arrow function returns the entire window object
  //not bound to the event
  //$(this).remove();
  //$(this).addClass('highlight');
  $(this).toggleClass('highlight');
}

function addFoodItem() {
  console.log(`called addFoodItem`);
  let whatTheUserTyped = $('#userInput').val();
  console.log(whatTheUserTyped);
  $('#food-list').append('<li class="foodItem">' + whatTheUserTyped + '</li>');
}

function addButton() {
  console.log(`header clicked, entered addButton`);
  let dynamicButton = $('<button id="dynamicallyCreatedButton">Dynamic Button</button>');

    $('#food-list').append(dynamicButton);

    $('#food-list').on('click', '.dynamicallyCreatedButton', function () {
      console.log(`clicked dynamicallyCreatedButton`)
      //does not work
    });
  }