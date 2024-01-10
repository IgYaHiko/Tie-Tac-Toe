let boxes = document.querySelectorAll(".box");
let resBtn = document.querySelector(".reset-btn");
let playerO = true;
let newBtn = document.querySelector(".new-btn");
let msgCon = document.querySelector(".msg-box");
let msgText = document.querySelector("#msg");

const winnerPattern = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6],
];



boxes.forEach((box) => {
     box.addEventListener("click",() => {
        if(playerO === true) {
            box.innerText = "O";
            playerO = false;
        }  else {
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;

        winnerCheck();
     });
});

const resetGame = () => {
    playerO = true;
    enabledBoxes();
    msgCon.classList.add("hide");
}

const enabledBoxes = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disabledBoxes = () => {
    for(box of boxes) {
        box.disabled = true;
    }
}

 
       

const showWinner = (winner) => {
    msgText.innerText = `Congratulation,the winner is  ${winner}`;
    msgCon.classList.remove("hide");
    disabledBoxes();
}


const winnerCheck = () => {
    for(let ptn of winnerPattern) {
      let pos1 = boxes[ptn[0]].innerText;
      let pos2 = boxes[ptn[1]].innerText;
      let pos3 = boxes[ptn[2]].innerText;
      
      if(pos1 != "" && pos2 != "" && pos3 != "") {
        if(pos1 === pos2 && pos2 === pos3) {
            console.log("Winner",pos1);
            showWinner(pos1);
        }
      }
    
 
    }
};

newBtn.addEventListener("click",resetGame);
resBtn.addEventListener("click",resetGame);

