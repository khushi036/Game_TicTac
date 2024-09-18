let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
} else {
            box.innerText = "X";
            turnO = true;
        }

    box.disabled = true;
    count++;
    CheckWinner();
    if (count === 9) {
        gameDraw();
    }
     });
});

const gameDraw = () => {
    msg.innerText = `Game was a  Draw.` ;
    msgcontainer.classList.remove("hide");
    disableBoxes();
    };


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const ShowWinner = (Winner) => {
    msg.innerText = `congratulations, Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const CheckWinner = () => {
    for (let Pattern of winPatterns) {
        let pos1val = boxes[Pattern[0]].innerText;
        let pos2val = boxes[Pattern[1]].innerText;
        let pos3val = boxes[Pattern[2]].innerText;
 if (pos1val != "" && pos2val != "" && pos3val !=""){
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner",pos1val);
                ShowWinner(pos1val)
            }
        }
    }
};

newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



