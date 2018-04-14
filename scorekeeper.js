var firstButton = document.querySelector("#buttonOne");
var secondButton = document.querySelector("#buttonTwo");
var firstCount = document.querySelector("#count");
var secondCount = document.querySelector("#countTwo");
var gameOver = !false;
var thirdButton = document.querySelector("#buttonThree");
var winning= 5;
var gameOver = false;
var thirdButton = document.querySelector("#buttonThree");
var numInput = document.querySelector("#inputOne");
var p =document.querySelector("p");
winningScoreDisplay = document.querySelector("p span")
var position = 0;
var positionTwo = 0;


firstButton.addEventListener("click", function(){
if(!gameOver){
  position++;
  console.log(position);}
  if(position === winning){
    gameOver = true;
    firstCount.classList.add("winner");
  }
   firstCount.textContent = position;
})

secondButton.addEventListener("click", function(){
if(!gameOver){

  positionTwo++;
  console.log(positionTwo);}
  if(positionTwo === winning)
  {
    gameOver = true;
    secondCount.classList.add("winner");
  }
  secondCount.textContent = positionTwo;
})

thirdButton.addEventListener("click", function(){
  firstCount.textContent = 0;
  secondCount.textContent= 0;
  gameOver = false;
  position = 0;
  positionTwo= 0;
});
function reset(){
  firstCount.textContent = 0;
  secondCount.textContent= 0;
  gameOver = false;
  position = 0;
  positionTwo= 0;
}

numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent= numInput.value;
  winning = Number(numInput.value);
  reset();
})
