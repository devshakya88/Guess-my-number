"use strict";

const secretNumber = Math.trunc(Math.random()) * 20 + 1;
document.querySelector(".number");.textContent = number

const checkBtn = document.querySelector(".check");
checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  }else if(guess===secretNumber){
    document.querySelector('.message').textContent = 'Correct Number 🥳🎉'
  }
  else if(guess > secretNumber){
    document.querySelector('.message').textContent = 'Too High! 📈'
  }else if(guess < secretNumber){
    document.querySelector('.message').textContent = 'Too Low📉'
  }
});
