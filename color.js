var img = document.createElement("img");
 
img.src = "list.jpg";
var src = document.getElementById("background");



var words=['purple', 'pink','yellow','red','blue','green'];
var s;
var answerArray = [];

var word = words[Math.floor(Math.random() * words.length)];
console.log(word);




	for ( var i=0;i<word.length;i++){

		answerArray[i]="_";
		console.log(answerArray[i]);

		
	s = answerArray.join(" ");
	document.getElementById('underscore').innerHTML = s;

}
	console.log(s);	

function Letter(){
	var letter = document.getElementById('letter').value;

	if(letter.length>0){
		for(var i=0; i<randomWord.length;i++){
			if (words[i]===letter){
				answerArray[i] = letter;
			}
			count++;
		}
	}
}

	
var remainingLetters = word.length;

console.log(remainingLetters);

 // The game loop
 /*
 while (remainingLetters > 0) {
 // Show the player their progress
/ alert(answerArray.join(" "));
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
  }
 // Show the answer and congratulate the player
 //alert(answerArray.join(" "));
 //alert("Good job! The answer was " + word);
*/
