// const mgs1 = document.getElementById("message1");
// const mgs2 = document.getElementById("message2");
// const mgs3 = document.getElementById("message3");

// const answer = Math.floor(Math.random()*100) + 1;
// const no_of_guesses = 0;
// const guessed_nums = [];

// function play() {
//   const user_guess = document.getElementById("guess").value;
//   if(user_guess < 1 || user_guess > 100) {
//     alert("please enter a number between 1 and 100.");
//   }
//     else {
//       guessed_nums.push(user_guess):
//       no_of_guesses += 1;

//     if(user_guess < answer) {
//     	mgs1.textContent = "Your guess is too low."
//     	mgs2.textContent = "No. of guesses: " + no_of_guesses;
//     	mgs3.textContent = "Guessed numbers are: " + guessed_nums;
//     }
//     else if(user_guess > answer) {
//     	mgs1.textContent = "Your guess is too high."
//     	mgs2.textContent = "No. of guesses: " + no_of_guesses;
//     	mgs3.textContent = "Guessed numbers are: " + guessed_nums;
//     }
// 		else if (user_guess == answer) {
// 			mgs1.textContent = "yeeehhhhh you win!";
// 			mgs2.textContent = "The right guess was: " + answer;
// 			mgs3.textContent = "You guessed it in "+ no_of_guesses + "guesses"
// 			document.getElementById("my_btn").disabled = true;
// 		}
//   }
// }