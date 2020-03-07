console.log('js is running');
$(document).ready(readyNow);

//State, annual revenue, # of locations
let data1 = ["IL", 7000000, 12];
let data2 = ["MN", 2500000, 3];
let data3 = ["IA", 674000, 1];
let data4 = ["WI", 6800000, 15];
let IL;
let MN;
let IA;
let WI;

function readyNow() {
  console.log('jQ is ready');
  let dataEntrySection = $('<section id="data-entry"></section>');
  $('#wrapper').append(dataEntrySection);
  $('#data-entry').append('<p>Data set</p>');
  $('#data-entry').append('<button id="construct">Constuct dataset and run revenue report</button>');

  eventHandlers();

}

function eventHandlers() {
  $('#construct').on('click', constructObjects);

}

function constructObjects() {
  IL = new State(data1[0], data1[1],data1[2]);
  MN = new State(data2[0], data2[1], data2[2]);
  IA = new State(data3[0], data3[1], data3[2]);
  WI = new State(data4[0], data4[1], data4[2]);
  let dataToEnter = $('<ol></ol>');
  dataToEnter.append(`<li>${IL.state} ${IL.annualRevenue} ${IL.locationCount}</li>`);
  dataToEnter.append(`<li>${MN.state} ${MN.annualRevenue} ${MN.locationCount}</li>`);
  dataToEnter.append(`<li>${IA.state} ${IA.annualRevenue} ${IA.locationCount}</li>`);
  dataToEnter.append(`<li>${WI.state} ${WI.annualRevenue} ${WI.locationCount}</li>`);
  $('#data-entry').append(dataToEnter);
  $('#data-entry').append('<p>Object contruction completed.</p>');
  $('#data-entry').append('<p id="pending-p">Annual revenue per location pending...</p>');
  setTimeout(function() {averageRevenuePerLocation()}, 4000);

}

function averageRevenuePerLocation() {
  let val = IL.averageRevenue();
  $('#data-entry').append(`<p class="report">Illinois revenue per location: $${val} </p>`);
  val = MN.averageRevenue();
  $('#data-entry').append(`<p class ="report">Minnesota revenue per location: $${val} </p>`);
  val = IA.averageRevenue();
  $('#data-entry').append(`<p class="report">Iowa revenue per location: $${val} </p>`);
  val = WI.averageRevenue();
  $('#data-entry').append(`<p class="report">Wisconsin revenue per location: $${val} </p>`);
}

class State {
  constructor(state, annualRevenue, locationCount) {
    this.state = state;
    this.annualRevenue = annualRevenue;
    this.locationCount = locationCount;
  }
  averageRevenue() {
    let annualRevenue = Math.ceil(this.annualRevenue / this.locationCount);
    console.log(annualRevenue);
    return annualRevenue;
  }
}