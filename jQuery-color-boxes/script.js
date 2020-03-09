console.log('js is running');

  let redCount = 0;
  let blueCount = 0;
  let greenCount = 0;
  let yellowCount = 0;

$(document).ready(readyNow);

function readyNow() {
  console.log('jQ is ready');
  $('.container').on('click', 'h1', h1Function);

  let counterSection = $('<section class="counterSection"></section>');
  let counters = $(`<p id="redCounter">Red Count: ${redCount}</p><p id="blueCounter">Blue Count: ${blueCount}</p><p id="greenCounter">Green Count: ${greenCount}</p><p id="yellowCounter">Yellow Count: ${yellowCount}</p>`);
  counterSection.append(counters);
  $('.h1Div').append(counterSection);
  let buttonSection = $('<section class="buttonSection"></section>');
  let buttons = $('<p>To add one color box at a time, click a button.</p><button id="redButton">Red</button><button id="blueButton">Blue</button><button id="greenButton">Green</button><button id="yellowButton">Yellow</button>');
  buttonSection.append(buttons);
  $('.h1Div').append(buttonSection);
  $('.h1Div').append('<p>To add multiple boxes at once, type a number and a color, then press Enter.</p><input id="input" placeholder="#,Color"></input>');
  $(buttonSection).on('click', 'button', addBox);
  $('#colorBlocks').on('click', 'div', removeBox);
  $('#input').on('change', inputBoxes);

}

function h1Function() {
  console.log($(this).text());
  console.log($(this).data());
  console.log($(this).data('info'));
}

function addBox() {
  console.log('addBox');
  console.log($(this).text());
  switch ($(this).text()) {
    case "Red":
      $('#colorBlocks').append('<div id="red" data-color="Red"></div>');
      redCount++;
      $('#redCounter').html(`Red Count: ${redCount}`);
      break;
    case "Blue":
      $('#colorBlocks').append('<div id="blue" data-color="Blue"></div>');
      blueCount++;
      $('#blueCounter').html(`Blue Count: ${blueCount}`);
      break;
    case "Green":
      $('#colorBlocks').append('<div id="green" data-color="Green"></div>');
      greenCount++;
      $('#greenCounter').html(`Green Count: ${greenCount}`);
      break;
    case "Yellow":
      $('#colorBlocks').append('<div id="yellow" data-color="Yellow"></div>');
      yellowCount++;
      $('#yellowCounter').html(`Yellow Count: ${yellowCount}`);
      break;
  }
}

function removeBox() {
  console.log($(this).data('color'));
  switch ($(this).data('color')) {
    case "Red":
      $(this).remove();
      redCount--;
      $('#redCounter').html(`Red Count: ${redCount}`);
      break;
    case "Blue":
      $(this).remove();
      blueCount--;
      $('#blueCounter').html(`Blue Count: ${blueCount}`);
      break;
    case "Green":
      $(this).remove();
      greenCount--;
      $('#greenCounter').html(`Green Count: ${greenCount}`);
      break;
    case "Yellow":
      $(this).remove();
      yellowCount--;
      $('#yellowCounter').html(`Yellow Count: ${yellowCount}`);
      break;
  };
}

function inputBoxes() {
  let array = $('#input').val().split(',');
  console.log(array);
  let number = parseInt(array[0]);
  let color = array[1].trim();
  for (let i = 1; i <= number; i++) {
    switch (color) {
      case "Red":
        $('#colorBlocks').append('<div id="red" data-color="Red"></div>');
        redCount++;
        $('#redCounter').html(`Red Count: ${redCount}`);
        break;
      case "Blue":
        $('#colorBlocks').append('<div id="blue" data-color="Blue"></div>');
        blueCount++;
        $('#blueCounter').html(`Blue Count: ${blueCount}`);
        break;
      case "Green":
        $('#colorBlocks').append('<div id="green" data-color="Green"></div>');
        greenCount++;
        $('#greenCounter').html(`Green Count: ${greenCount}`);
        break;
      case "Yellow":
        $('#colorBlocks').append('<div id="yellow" data-color="Yellow"></div>');
        yellowCount++;
        $('#yellowCounter').html(`Yellow Count: ${yellowCount}`);
        break;
    }
    $('#input').val('');
  }
}
