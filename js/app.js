'use strict'

//ask for the user's name//
let totalAnswers = 0
let userName = prompt('What is your name?')
alert(`Welcome, ${userName}. Let me tell you about myself`)

// //Quest. 1//
function questOne(){
  let answerOne = prompt('Do I have a BMC road bike?').toLowerCase();
  
  if (answerOne === 'yes' || answerOne === 'y') {
    alert(`That\'s correct, ${userName}. I do.`);
    totalAnswers++;   
    
  } else if (answerOne === 'no' || answerOne === 'n') {
    alert(`No, that\'s not correct, ${userName}. I do have a BMC.`);
  }
}
questOne();


//Quest. 2//
function questTwo(){
  let answerTwo = prompt('Do I live in Japan or China').toLowerCase();
  
    if (answerTwo === 'japan') {
      alert(`That\'s correct, ${userName}. I do.`);
      totalAnswers++;
  
    } else {
      alert(`No, I got you on that one, ${userName}. I live in Japan.`);
    }

}
questTwo();

//Quest. 3//
function questThree(){
  let answerThree = prompt('Was I born in Seattle?').toLowerCase();
  if (answerThree === 'no' || answerThree === 'n') {
    alert(`That\'s right, ${userName}. I was born in San Diego.`);
    totalAnswers++;
    
  } else if (answerThree === 'yes' || answerThree=== 'y') {
    alert(`No, that\'s not quite right, ${userName}. I was born in San Diego.`);
  }
}
questThree();

//Quest. 4//
function questFour(){
  let answerFour = prompt('Was I born in 1982?').toLowerCase();
  
  if (answerFour === 'yes' || answerFour === 'y') {
    alert(`That\'s correct, ${userName}. I was.`);
    totalAnswers++;
    
  } else if (answerFour === 'no' || answerFour === 'n') {
    alert(`No, ${userName}. I actually was born in '82.`);
  }
}
questFour();

//Quest 5.//
function questFive(){
  let answerFive = prompt('Do I enjoy photography?').toLowerCase();
  
  if (answerFive === 'yes' || answerFive === 'y') {
    alert(`That\'s correct, ${userName}. I do!`);
    totalAnswers++;
    
  } else if (answerFive === 'no' || answerFive === 'n') {
    alert(`No, that\'s not correct, ${userName}. I do enjoy photography.`);
  }
}
 questFive();

//Quest 6.//
function questSix(){
  let vinylGuess = 4
  let myVinyl = 100
  
  for(let i = 0; i <= 3; i++){
    
    let answerSix = prompt('How many Lp records do you think I own?').toLowerCase();
    if (answerSix == myVinyl) {
      alert(`You got it ${userName}. That\'s exactly right!`);
      totalAnswers++;
      break;  
      
    } else if(answerSix > myVinyl) {
      alert(`No, that\'s too many, ${userName}. Lower.`);
      

    } else if(answerSix < myVinyl) {
      alert(`Higher, ${userName}. Higher!`);
      
    
    
  }
  }
  }

questSix();

// Quest 7.//
function questSeven(){
  let cofMeth = ['V60','Clever','Aeropress'];//coffee methods
  let tries = 6
  let coffeeGuess = false
  
while(tries && !coffeeGuess) {
  let answerSeven = prompt('I own a V60, Kalita Wave, Clever, Chemex, Aeropress, Moka Pot, French Press. Which do you think is my favorite?').toLowerCase();
  
  for(let i = 0; i < cofMeth.length; i++){
    if(answerSeven === cofMeth[i].toLowerCase()){
      alert(`You got it ${userName}. That\'s exactly right!`);
      coffeeGuess = true;
      totalAnswers++;
    }
  }
  
  if(tries && !coffeeGuess){
    alert(`All your base are belong to us, ${userName}! Try again! You have ${tries} tries left!`);
    tries--
    
    } else if(!tries && !coffeeGuess) alert(`Anata ha mou, shindeiru! The correct answers were V60, Clever, or Aeropress.`); 
  }
}
questSeven();

alert(`Thanks for the answers, ${userName}. You got ${totalAnswers} correct.`);






