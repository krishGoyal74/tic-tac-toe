let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.getElementById("new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.getElementById("msg");


let turn0=true //playerx, player0;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{*
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        boxes.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();    
}



const checkWinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText
        let pos2val= boxes[pattern[1]].innerText
        let pos3val= boxes[pattern[2]].innerText

        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
}

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);