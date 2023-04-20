
// document.getElementById("my_btn").disabled = true;


const msg1 = document.getElementById("message1")
const msg2 = document.getElementById("message2") 
const msg3 = document.getElementById("message3") 
const answer = Math.floor(Math.random() * 100) + 1;
const no_of_guesses = 0;
const guesses_num = [];

function play() {
  const user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
    alert("Please Enter a number Between 1 to 100");
    } else {
    guesses_num.push(user_guess);
    no_of_guesses += 1;
    if (user_guess < answer) {
      msg1.textContent = "Your Guess is Too low"
      msg2.textContent = "No. Of Guesses : " + no_of_guesses;
      msg3.textContent = "Guessed Number Are: " + guesses_num;
    } else if (user_guess > answer) {
      msg1.textContent = "Your Guess is Too High"
      msg2.textContent = "No. Of Guesses : " + no_of_guesses;
      msg3.textContent = "Guessed Number Are: " + guesses_num;
    } else if (user_guess == answer) {
      msg1.textContent = "CONGRATULATIONS!!! you won"
      msg2.textContent = "the Number was " + answer 
      msg3.textContent = " You guessd it in " + no_of_guesses + "Guesses";
    }
  }
}






// const numguess = 1;

// if(numguess === 7){
	// 	displayguess(user_guess);
	// 	displayMessage(`Game over! Number was ${answer}`);
	// 	end-Game();
	// }
	// else{
	// 	displayguess(user_guess);
	// 	checkguess(user_guess);
	// }



