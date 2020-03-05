console.log(`js is running`);

let collection = [{
  Title: "Veedon Fleece",
  Artist: "Van Morrison",
  Year: 1974
}, {
  Title: "Moondance",
  Artist: "Van Morrison",
  Year: 1970
}, {
  Title: "Astral Weeks",
  Artist: "Van Morrison",
  Year: 1968
}, {
  Title: "For the Roses",
  Artist: "Joni Mitchell",
  Year: 1972
}, {
  Title: "Blue",
  Artist: "Joni Mitchell",
  Year: 1971
}];

let addToCollection = (title, artist, year) => {
  let record = {
    Title: title,
    Artist: artist,
    Year: year
  };
  collection.push(record);
  return record;
};

let findRecord = (title) => {
  for (let i = 0; i < collection.length; i++) {
    if (title === collection[i].Title) {
      return i;
    }
  }
  return false;
};

let allByArtist = (artistName) => {
  let allByArtistArray = collection.filter(el => el.Artist === artistName);
  return allByArtistArray;
};

let search = (criteria) => {
  if (criteria === undefined) {
    return collection;
  }
  if (criteria !== undefined) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].Artist === criteria.artist && collection[i].Year === criteria.year) {
        let arr = collection.filter(el => el.Artist === criteria.artist && el.Year === criteria.year);
        return arr;
      }
    }
  }
  if (criteria !== undefined) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].Artist === criteria.artist) {
        let arr = collection.filter(el => el.Artist === criteria.artist);
        return arr;
      }
    }
  }
  if (criteria !== undefined) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].Year === criteria.year) {
        let arr = collection.filter(el => el.Year === criteria.year);
        return arr;
      }
    }
  } else {
    return false;
  }
}

let userInputArray = [];
let userTitle;
let userArtist;
let userYear;

let collectUserInput = () => {
  if (document.getElementById("addRecord").value !== undefined) {
    let userInputString = document.getElementById("addRecord").value;
    let comma = ",";
    //call function to split single string into array of 3 strings
    splitUserInputString(userInputString, comma);
    //make array of 3 stings into an array of 3 objects
    userInputArray[0] = {
      Title: userInputArray[0]
    };
    userInputArray[1] = {
      Artist: userInputArray[1]
    };
    userInputArray[2] = {
      Year: userInputArray[2]
    };
    //assign array object values to variable names
    userTitle = userInputArray[0].Title;
    userArtist = userInputArray[1].Artist;
    userYear = userInputArray[2].Year;
    //trim whitespace from variable values
    userArtist = userArtist.trimStart();
    userYear = userYear.trimStart();
    //call function to add values to collection
    addToCollection(userTitle, userArtist, userYear);
    console.log(collection);
    return true;
  } else {
    return false;
  }
}

let splitUserInputString = (stringToSplit, separator) => {
  userInputArray = stringToSplit.split(separator);
  return true;
}

let userButton = document.getElementById('button');
userButton.addEventListener('click', collectUserInput);