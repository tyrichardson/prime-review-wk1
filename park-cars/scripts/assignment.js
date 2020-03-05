console.log(`js is running`);

let parkedCars = [];
const maxCars = 3;

let parkCar = (carName, color) => {
  if (parkedCars.length < maxCars) {
    parkedCars.push(carName, color);
    console.log(parkedCars);
    return true;
  } else {
    return false;
  }
};

let isParkedHere = (carName) => {
  if (parkedCars.includes(carName)) {
    console.log(parkedCars);
    return true;
  } else {
    return false;
  }
};

let takeForASpin = (param) => {
    if (parkedCars.includes(param)) {
      for (let value of parkedCars) {
        if (value === param) {
          let index = parkedCars.indexOf(value);
          return parkedCars.slice(index, index + 1);
        }
      }
        } else {
        return false;
      }
  
};