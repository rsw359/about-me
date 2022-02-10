'use strict'

//ask for the user's name//
let userName = prompt('What is your name?')
alert(`Welcome, ${userName}. Let me tell you about myself`)

// //Quest. 1//
//   let answerOne = prompt('Do I have a BMC road bike?').toLowerCase();

//   if (answerOne === 'yes' || answerOne === 'y') {
//     alert(`That\'s correct, ${userName}. I do.`);

//   } else if (answerOne === 'no' || answerOne === 'n') {
//     alert(`No, that\'s not correct, ${userName}. I do have a BMC.`);
//   }


// //Quest. 2//
//   let answerTwo = prompt('Do I live in Japan or China').toLowerCase();

//   if (answerTwo === 'japan') {
//     alert(`That\'s correct, ${userName}. I do.`);

//   } else {
//     alert(`No, I got you on that one, ${userName}. I live in Japan.`);
//   }


// //Quest. 3//
//   let answerThree = prompt('Was I born in Seattle?').toLowerCase();
//   if (answerThree === 'no' || answerThree === 'n') {
//     alert(`That\'s right, ${userName}. I was born in San Diego.`); 

//   } else if (answerThree === 'yes' || answerThree=== 'y') {
//     alert(`No, that\'s not quite right, ${userName}. I was born in San Diego.`);
//   }
  
// //Quest. 4//
// let answerFour = prompt('Was I born in 1982?').toLowerCase();

// if (answerFour === 'yes' || answerFour === 'y') {
//   alert(`That\'s correct, ${userName}. I was.`);

// } else if (answerFour === 'no' || answerFour === 'n') {
//   alert(`No, ${userName}. I actually was born in '82.`);
// }


// //Quest 5.//
// let answerFive = prompt('Do I enjoy photography?').toLowerCase();

// if (answerFive === 'yes' || answerFive === 'y') {
//   alert(`That\'s correct, ${userName}. I do!`);

// } else if (answerFive === 'no' || answerFive === 'n') {
//   alert(`No, that\'s not correct, ${userName}. I do enjoy photography.`);
// }

// alert(`Thanks for the answers, ${userName}. Let's get to know each other a bit.`);

// //Quest 6.//
// let vinylGuess = 4
// let myVinyl = 100
// // let answerSix = prompt('How many Lp records do you think I own?').toLowerCase();

// for(let i = 0; i<= 3; i++){
  
//   let answerSix = prompt('How many Lp records do you think I own?').toLowerCase();
//   if (answerSix == myVinyl) {
//     alert(`You got it ${userName}. That\'s exactly right!`);
//   break;  

//   } else if (answerSix > myVinyl) {
//   alert(`No, that\'s too many, ${userName}. Lower.`);
    
//   } else if(answerSix < myVinyl) {
//   alert(`Higher, ${userName}. Higher!`);
// }
// }

//Quest 7.//
let cofMeth = ['V60','Clever','Aeropress'];
let tries = 6
let coffeeGuess = false



while(tries-- && !coffeeGuess) {
  let answerSeven = prompt('I own a V60, Kalita Wave, Clever, Chemex, Aeropress, Moka Pot, French Press. Which do you think is my favorite?').toLowerCase();
  
  for(let i = 0; i < cofMeth.length; i++){
    if(answerSeven === cofMeth[i].toLowerCase()){
        alert(`You got it ${userName}. That\'s exactly right!`);
          coffeeGuess = true;
          break

        } else if(tries > 0 && !coffeeGuess){
          alert(`All your base are belong to us, ${userName}! Try again! You have ${tries} tries left!`)
         
        
        } else if(tries === 0 && !coffeeGuess) alert(`Aww, no more tries! the correct answers were V60,Clever, or Aeropress.`); 
          break;     
  }
}
 
    // if(answerSeven != myFav){
    //   alert(`All your base are belong to us, ${userName}! Try again! You have ${tries} tries left!`)
    //   tries--;}
    
    //   else if(answerSeven == cofMeth[i]){

    //   if(tries < 1){
    //     alert(`Aww, no more tries! it was ${myFav}.`);
    //     break;

      // }
    








  // V60', 'Kalita Wave', 'Clever', 'Chemex', 'Aeropress', 'Moka Pot', 'French Press'
// if (answerOne === 'yes' || answerOne === 'y') {
//   console.log(`You got \#1 ${userName}`)
// }

// if (answerTwo === 'japan'){
//   console.log(`Keep it up\, ${userName}! \#2 was right`)
// }

// if (answerThree === 'no' || answerThree === 'n') {
//  console.log(`\#3 was right \' too ${userName}`)
// }

// if (answerFour === 'yes' || answerFour === 'y') {
//   console.log(`I bet you feel real smart\, ${userName}. Good, you are, #4 was right!`)
// }

// if (answerFive === 'yes' || answerFive === 'y') {
//   console.log(`You got question 5 right\,too\, ${userName}`)

// } else if (answerOne === 'yes' || answerOne === 'y' &&
//     answerTwo === 'japan' && 
//     answerThree === 'no' || answerThree === 'n' &&
//     answerFour === 'yes' || answerFour === 'y' &&
//     answerFive === 'yes' || answerFive === 'y'){

//       console.log(`YOU GOT THEM ALL RIGHT\, ${userName}. 
//       Maybe it was worth staying up all night to build this after all!`)
//   } else {
//       console.log('After you read my page\, you can try again')
//   }





