console.log(`js is running`);

$(document).ready(readyNow);

function readyNow() {
  console.log('jQuery readyNow');
  //add inputs
  let inputs = $('<ul id="inputs"></ul>');
  let inputYear = $('<li><input id="inputYear" type="text" required> type year</input></li>');
  let inputMake = $('<li><input id="inputMake" type="text" required> type make</input></li>');
  let inputModel = $('<li><input id="inputModel" text="text" required> type model</input></li>');
  let inputImage = $('<li><input id="inputImage" type="text"> photo url</li>')
  let inputButton = $('<button>Add Car</button>');
  inputs.append(inputYear, inputMake, inputModel, inputImage, inputButton);
  $('body').append('<h2>Add Cars to Garage</h2>')
  $('body').append(inputs);
  //display cars in the garage
  $('body').append('<h2>Cars in Garage</h2>')
  let display = $('<ul id="display"></ul>');
  $('body').append(display);

  addEventHandlers();
};

function addEventHandlers() {
  $('button').on('click', addNewCar);
}

function addNewCar() {
  let userYear = $('#inputYear').val();
  let userMake = $('#inputMake').val();
  let userModel = $('#inputModel').val();
  let userSrc = $('#inputImage').val();
  console.log(userYear, userMake, userModel);
  if (userYear !== '' && userMake !== '' && userModel !== '') {
  newCar(userYear, userMake, userModel);
  let img = $('<img src=' + userSrc + '>');
  $('#display').append(img);
  displayCars();
  } else {
    alert('type a year, make, and model');
  }

}

function displayCars() {
  let counter = 0;
  let displayLI = $('<li class="car"></li>');
  for (let i = counter; i < garage.length; i++) {
    let car = garage[i];
    let year = car.year;
    let make = car.make;
    let model = car.model;
    displayLI.html(year + ', ' + make + ', ' + model);
    $('#display').append(displayLI);
    counter++;
    $('#inputYear').val('');
    $('#inputMake').val('');
    $('#inputModel').val('');
    $('#inputImage').val('');
  }
};

class Car {
  constructor(year, make, model) {
    this.year = year;
    this.make = make;
    this.model = model;
  } //end constructor
} // end Car class

let garage = [];

function newCar(year, make, model) {
  console.log('in newCar:', year, make, model);
  garage.push(new Car(year, make, model));
  return true;
} // end newCar