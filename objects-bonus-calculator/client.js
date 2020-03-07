console.log('js is running');

/*const employees = [{
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];
*/
const employees = [];
let bonusArray = [];

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
  $('.calcBonus').append('<button id="calculateBonus")>calc bonus</button>');

  addEventHandlers();

}

function addEventHandlers() {
  $('#submitEmployee').on('click', addNewEmployee);
  $('#calculateBonus').on('click', makeBonusObject);
}

function addNewEmployee() {
  let name = $('#eName').val();
  let employeeNumber = $('#eNumber').val();
  let annualSalary = parseInt($('#aSalary').val());
  let reviewRating = parseInt($('#rRating').val());
  let employee0 = new Employee(name, employeeNumber, annualSalary, reviewRating);
  employees.push(employee0);
  displayEmployeeArray();
}

function displayEmployeeArray() {
  console.log(employees);
  $('.eArray').children().remove();
  $('#eName').val('');
  $('#eNumber').val('');
  $('#aSalary').val('');
  $('#rRating').val('');
  for (let i = 0; i < employees.length; i++) {
    $('.eArray').append(`<p id="displayArr">${employees[i].name} ${employees[i].employeeNumber} ${employees[i].annualSalary} ${employees[i].reviewRating}</p>`);
  }
}

function makeBonusObject() {
  for (let i = 0; i < employees.length; i++) {
    let name = '';
    let bonus = 0;
    name = employees[i].name;
    if (employees[i].reviewRating <= 2) {
      bonusArray.push({"name": name, "bonus": bonus});
    }
    else if (employees[i].reviewRating === 3) {
      bonus = employees[i].annualSalary * 0.04;
      bonusArray.push({"name": name, "bonus": bonus});
    }
    else if (employees[i].reviewRating === 4) {
      bonus = employees[i].annualSalary * 0.06;
      bonusArray.push({"name": name, "bonus": bonus});
    }
    else if (employees[i].reviewRating === 5) {
      bonus = employees[i].annualSalary * 0.1;
      bonusArray.push({"name": name, "bonus": bonus});
   }
  }
    console.log(`bonus`, bonusArray);
    setTimeout(function() { normalizeBonus(); }, 1000);
}

  function normalizeBonus() {
    for (let i = 0; i < bonusArray.length; i++) {
      //let name;
      let bonus = 0;
      //name = bonusArray[i].name;
      if (employees[i].employeeNumber.length === 4 && employees[i].annualSalary <= 65000 && employees[i].reviewRating < 5) {
        bonus = bonusArray[i].bonus + employees[i].annualSalary * 0.05;
        bonusArray[i].bonus = bonus;
      } else if (employees[i].employeeNumber.length === 4 && employees[i].annualSalary > 65000 && employees[i].reviewRating < 5) {
        bonus = bonusArray[i].bonus + employees[i].annualSalary * 0.04;
        bonusArray[i].bonus = bonus;
      } else if (employees[i].employeeNumber.length === 4 && employees[i].reviewRating === 5) { 
        bonus = bonusArray[i].bonus + employees[i].annualSalary * 0.03;
        bonusArray[i].bonus = bonus;
    }
  }
     console.log('normalizeBonus', bonusArray);
     displayBonusCalc();
}

function displayBonusCalc() {
  console.log(bonusArray);
  $('.bonusArray').children().remove();
  for (let i = 0; i < bonusArray.length; i++) {
    $('.bonusArray').append(`<p id="displayBonusArr"> ${bonusArray[i].name}'s bonus = $${bonusArray[i].bonus} </p>`);
  }
}