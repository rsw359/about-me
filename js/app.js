'use strict'

//ask for the user's name//
let userName = prompt('What is your name?')
alert(`Welcome, ${userName} This is the place to be`)

//Quest. 1//
  let answerOne = prompt('Do I have a BMC').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    alert(`That\'s correct, ${userName}. I do.`);

  } else if (answerOne === 'no' || answerOne === 'n') {
    alert(`No, that\'s not correct, ${userName}. I do have a BMC.`);
  }


//Quest. 2//
  let answerTwo = prompt('Do I live in Japan or China').toLowerCase();

  if (answerTwo === 'japan') {
    alert(`That\'s correct, ${userName}. I do.`);

  } else {
    alert(`No, that\'s not correct, ${userName}. I live in Japan.`);
  }


//Quest. 3//
  let answerThree = prompt('Was I born in Seattle?').toLowerCase();
  if (answerThree === 'no' || answerThree === 'n') {
    alert(`That\'s right, ${userName}. I was born in San Diego.`); 

  } else if (answerThree === 'yes' || answerThree=== 'y') {
    alert(`No, that\'s not correct, ${userName}. I was born in San Diego.`);
  }
  
//Quest. 4//
let answerFour = prompt('Am I an English teacher?').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
  alert(`That\'s correct, ${userName}. I am.`);

} else if (answerFour === 'no' || answerFour === 'n') {
  alert(`No, that\'s not correct, ${userName}. I AM a teacher.`);
}


//Quest 5.//
let answerFive = prompt('Do I enjoy photography?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  alert(`That\'s correct, ${userName}. I do!`);

} else if (answerFive === 'no' || answerFive === 'n') {
  alert(`No, that\'s not correct, ${userName}. I do enjoy photography.`);
}

console.log('User entered' + ' ' + answerOne)
console.log('User entered' + ' ' + answerTwo)
console.log('User entered' + ' ' + answerThree)
console.log('User entered' + ' ' + answerFour)
console.log('User entered' + ' ' + answerFive)