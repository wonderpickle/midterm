var img = document.createElement("img");
 
img.src = "list.jpg";
var src = document.getElementById("background");




var words=['purple', 'pink','yellow','red','blue','green','orange','violet','turquoise','gold','lime','aqua','navy','coral','teal','brown','white','black'];	
var word = words[Math.floor(Math.random() * words.length)];
var singleLetter = word.split("");
const charsList = document.querySelector("underscore");
var x = " X"
var answerArray = [];
var wrongArray =[];
console.log(singleLetter);


// generating underscores
for ( var i=0;i<word.length;i++){

		answerArray[i]="_";
		console.log(answerArray[i]);

		
var	s = answerArray.join(" ");
	document.getElementById('update').innerHTML = s;
}	

	var lives =5;
	var textbox= document.getElementById('letter');
	textbox.addEventListener("keyup", function(){

	    var input = this.value;

	    console.log(singleLetter.indexOf(input));

	  // if the result of indexof is less than zero == you are wrong
	    // else 

	    for(var j =0; j<singleLetter.length;j++){
	    	if(singleLetter[j] === input){
	    		console.log('right')
	    		answerArray[j]=input;
				document.getElementById('update').innerHTML = input;
	    	} else {
	    		console.log('wrong')
	    		wrongArray[j]=input;
				document.getElementById('wrongLetters').innerHTML=  input ;
				document.getElementById('xes').innerHTML = x ;
				lives--;
	    	}

	    }
	    
			}, false);

var remainingLetters = word.length;	




 // The game loop
 /*
 while (remainingLetters > 0) {
 // Show the player their progress
 alert(answerArray.join(" "));
 // Get a guess from the player
 var guess = prompt("Guess a letter, or click Cancel to stop playing.");
 if (guess === null) {
 // Exit the game loop
 break;
 } else if (guess.length !== 1) {
 alert("Please enter a single letter.");
 } else {
 // Update the game state with the guess
 for (var j = 0; j < word.length; j++) {
 if (word[j] === guess) {
 answerArray[j] = guess;
 remainingLetters--;
 }
 }
 }
  /*/
 // Show the answer and congratulate the player
 //alert(answerArray.join(" "));
 //alert("Good job! The answer was " + word);

