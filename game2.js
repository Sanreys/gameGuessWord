// let userWordGame = prompt("Please enter your word", "abc");

// let userLetter1 = prompt("Please enter your letter", "a - z");
//GAME POLE CHUDES

function game() {
  let userWordGame = prompt("Please enter your word", "abc");
  let wordOfgame = magicWord(userWordGame);
  let wordOfUser = stars(wordOfgame);
  let count = 0;
  console.log(wordOfgame);
  for (let i = 0; i < 10; i++) {
    let letter = userLetterBig();
    count++;
    let indexArray = searchArrayIndex(wordOfgame, letter);
    if (indexArray.length) {
      for (let index of indexArray) {
        wordOfUser[index] = letter;
      }
      alert(wordOfUser.join(""));
      if (wordOfUser.indexOf("_") === -1) {
        break;
      }
    } else {
      alert("no, try more");
    }
  }
  alert("YOU RIGHT : " + wordOfUser.join("") + " attempts " + count);
}
//SOZDALO MASSIV BUKV
function magicWord(userWordForGame) {
  let wordGame = [];
  for (let char of userWordForGame) {
    let capitalLetter = char.charAt(0).toUpperCase();
    wordGame.push(capitalLetter);
  }

  return wordGame;
}
//vsegda bolwaya bukva
function userLetterBig() {
  let userLetter1 = prompt("Please enter your letter", "a - z");
  return userLetter1.charAt(0).toUpperCase();
}

//proverka bukvi v massive
function inArray(arr, elem) {
  return arr.indexOf(elem) !== -1;
}

function searchArrayIndex(currentArray, value) {
  let indexArray = [];
  for (let i = 0; i <= currentArray.length; i++) {
    if (value === currentArray[i]) {
      indexArray.push(i);
    }
  }
  return indexArray;
}

function stars(wordOfgame) {
  let starsArray = [];
  for (let index = 0; index < wordOfgame.length; index++) {
    starsArray.push("_");
  }
  return starsArray;
}
game();
