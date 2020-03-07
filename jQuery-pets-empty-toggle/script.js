// Feel free to add more data here
const petOne = {
  name: 'Charlie',
  type: 'dog',
  age: 6
};
const petTwo = {
  name: 'Thorin',
  type: 'rabbit',
  age: 4
};
const petThree = {
  name: 'Cedar',
  type: 'dog',
  age: 7
};
const petFour = {
  name: 'Juniper',
  type: 'cat',
  age: 3
};

const pets = [petOne, petTwo, petThree, petFour];

$(readyNow); // Shorthand for $(document).ready(readyNow);

function readyNow() {
  appendDom();
}

function appendDom() {
  let header = $('<h1>Challenge 170</h1>');
  $('.container').append(header);

  let table = $('<table></table>');
  table.append('<thead><tr><th>Name</th><th>Type</th><th>Age</th></thead>');

  let tbody = $('<tbody id="tableBody"></tbody>');
  table.append(tbody);

  $('.container').append(table);

  // YOUR CODE HERE
  // Remember, small steps!

  // Display each of the pets on the DOM.
  for (let i = 0; i < pets.length; i++) {
    let petRow = (`<tr><td>${pets[i].name}</td><td>${pets[i].type}</td><td>${pets[i].age}</td></tr>`);
    $('#tableBody').append(petRow);
  }
  // Add an input field that allows users to add new pets from the index page.
  $('.container').append('<div class="formDiv"></div>');
  $('.formDiv').css('margin', '1rem');
  let inputs = $('<label for="name">Pet\'s name: </label><input type="text" name="name" id="name"><label for="type">Pet\'s type: </label><input type="text" name="type" id="type"><label for="age">Pet\'s age: </label><input type="text" id="age"><button id="submitButton">Submit Pet</button>');
  $('.formDiv').append(inputs);

  $('#submitButton').on('click', function() {
  let name = $('#name').val();
  let type = $('#type').val();
  let age = $('#age').val();
  let inputPet = (`<tr><td>${name}</td><td>${type}</td><td>${age}</td></tr>`);
  $('#tableBody').append(inputPet);
  });

  //button that clears form
  $('.formDiv').append('<button id="clearForm">Clear form entries</button');
  $('#clearForm').on('click', function() {
  $('#name').val('');
  $('#type').val('');
  $('#age').val('');
  });

  // Add a button that clears out the list of pets.
  $('.formDiv').append('<button id="emptyTable">Clear data from table</button>');
  $('#emptyTable').on('click', function() {
    $('#tableBody').empty();//toggle()
  })

}