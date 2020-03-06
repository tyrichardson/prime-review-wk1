console.log('js is running');

const employees = [];

class Employee {
  constructor(name, employeeNumber, annualSalary, reviewRating) {
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  }
}

$(document).ready(readyNow);

function readyNow() {
  console.log('jQ is ready');
  $('.input').append('<input type="text" id="eName" placeholder="eName">');
  $('.input').append('<input type="text" id="eNumber" placeholder="eNumber">');
  $('.input').append('<input type="text" id="aSalary" placeholder="aSalary">');
  $('.input').append('<input type="text" id="rRating" placeholder="rRating">');
  $('.input').append('<button id="submitEmployee">submit e</button>');

  addEventHandlers();

}

function addEventHandlers() {
  $('#submitEmployee').on('click', addNewEmployee);
}

function addNewEmployee() {
  let name = $('#eName').val();
  let employeeNumber = $('#eNumber').val();
  let annualSalary = $('#aSalary').val();
  let reviewRating = parseInt($('#rRating').val());
  let employee0 = new Employee(name, employeeNumber, annualSalary, reviewRating);
  employees.push(employee0);
  displayEmployeeArray();
}

function displayEmployeeArray() {
  $('#eName').val('');
  $('#eNumber').val('');
  $('#aSalary').val('');
  $('#rRating').val('');
  $('#displayArr').text('');
  for (let i = 0; i < employees.length; i++) {
    $('.eArray').append(`<p id="displayArr">${employees[i].name} ${employees[i].employeeNumber} ${employees[i].annualSalary} ${employees[i].reviewRating}</p>`);
  }
}