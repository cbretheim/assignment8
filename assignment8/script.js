//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

/* AUTHOR AND YEAR FUNCTION */
  //Function accepts one data item from the speechesArray and returns a string telling the speech's author and year.

function getAuthorAndYearString (i) {
  var authoryear='This speech was written by ' + speechesArray[i].author + ' in ' + speechesArray[i].year + '<br>';
  document.getElementById('ConsoleDisplay').innerHTML = authoryear;
}

/* BCE FUNCTION */
  //Function passes in to the function the boolean value for whether each data object in the speechesArray is BCE or not.

function displayBCEString (a) {

  var bceBoolean=speechesArray[a].yearIsBCE;

  if(bceBoolean === true){
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era.<br>';
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.<br>';
  }
}

/*OLDEST OR MOST RECENT SPEECH FUNCTION */
  // Function sets up oldest and newest variables, runs through the speechesArray with a FOR loop, and then checks oldest or newest against the year property of a data object.

function getOldestOrYoungestString(dataObject) {
  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[dataObject].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.<br>';
  }
  else if(speechesArray[dataObject].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.<br>';
  }
  else {
    document.getElementById('ConsoleDisplay').innerHTML += 'This is neither the most recent or oldest speech on the page.<br>';
  }
}


////* CHURCHILL BUTTON *////
document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
//Call the Author and Year function using index value 0 for Churchill array
getAuthorAndYearString(0);

//Call the displayBCEString function using index value 0 for Churchill array
  displayBCEString(0);

//Call the getOldestOrYoungestString function using index value 0 for Churchill array
  getOldestOrYoungestString(0);
});


////* GHANDI BUTTON *////
document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
//Call the Author and Year function using index value 1 for Ghandi array
  getAuthorAndYearString(1);

//Call the displayBCEString function using index value 1 for Ghandi array
  displayBCEString(1);

//Call the getOldestOrYoungestString function using index value 1 for Ghandi array
  getOldestOrYoungestString(1);
});


////* DEMOSTHENES BUTTON *////
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
//Call the Author and Year function using index value 2 for Demosthenes array
 getAuthorAndYearString(2);

//Call the displayBCEString function using index value 2 for Demosthenes array
  displayBCEString(2);

//Call the getOldestOrYoungestString function using index value 2 for Demosthenes array
  getOldestOrYoungestString(2);
});
