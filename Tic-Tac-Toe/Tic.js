let btns = document.querySelectorAll(".btn");
let rstbtn = document.querySelector("#resetbtn"); 
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //turn of player O.
let isGameOver = false; //game over flag


// Create 2-d array for winning possibilites of the game.
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

//adding eventlistener in the boxes
btns.forEach((btn)=>{
    btn.addEventListener("click",() => {
        if(turnO){ //playerO turn
            btn.innerText = "O";
            btn.style.color = "blue";
            turnO = false;
        } else { //Player X turn
            btn.innerText="X";
            btn.style.color = "red";
            turnO=true;
        }
        //After clicking the btn it should not fn again.        
        btn.disabled= true;
        checkWinner();
    });
});
  //chk the winner
  const checkWinner = () => {
    for (let  pattern of winPatterns) {

        let pos1Val = btns[pattern[0]].innerText;
        let pos2Val = btns[pattern[1]].innerText;        
        let pos3Val = btns[pattern[2]].innerText;        
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
          if(pos1Val==pos2Val && pos2Val == pos3Val){
                console.log("Winner!", pos1Val);
                showWinner(pos1Val);
                btns.forEach((btn) => {
                    btn.disabled = true; //disable all buttons
                });
            }
        }
    }
  };
    //Show the winner
  const showWinner = (winner) => {
    msg.innerText = `Congratulations! The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    msg.style.color = "#0008B";
  }

  //Reset the Game 
  const resetGame = () => {
      turnO=true;
      isGameOver = false; //reset the game over flag
      btns.forEach((btn) => {
          btn.disabled = false; //enable the buttons again
          btn.innerText = ""; //reset the button text
          
      });
  }
  rstbtn.addEventListener("click", resetGame); //reset button event listener