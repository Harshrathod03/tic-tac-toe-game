let boxes=document.querySelectorAll(".box");
let turn0=true;
let msgContainer=document.querySelector(".msg-container");
let newBtn=document.querySelector(".new-btn");
let msg=document.querySelector("#msg");
let resetBtn=document.querySelector(".btn");
let modeBtn=document.querySelector(".mode-btn");
let mode="light";
let body=document.querySelector("body");
modeBtn.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        body.classList.add("dark");
        body.classList.remove("white");
        resetBtn.style.backgroundColor="White";
        resetBtn.style.color="black";
        modeBtn.style.backgroundColor="White";
        modeBtn.style.color="black";
        modeBtn.innerText="Light mode";
    }
    else{
        mode="light";
        body.classList.add("white");
        body.classList.remove("dark");
        resetBtn.style.backgroundColor="black";
        resetBtn.style.color="white";
        modeBtn.style.backgroundColor="black";
        modeBtn.style.color="white";
        modeBtn.innerText="Dark mode";
       color();
    }
})
const color=()=>{
    for(let box of boxes){
        box.style.backgroundColor="gray";
       
    }
}
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];
const enabledBtn=()=>{
    turn0=true;
    msgContainer.classList.add("hide");
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }


}
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turn0===true){
        box.innerText="0";
        box.style.color="black";
        turn0=false;
    }
    else{
        box.innerText='X';
        turn0=true;
        box.style.color="black";
        }
    box.disabled=true;
    winner();
})
    
});
// const disabledBtn=()=>{
// for (let box of boxes){
//     box.disabled=true;
// }
// }
const showWinner=(winner)=>{
    msg.innerText=`The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
    }
const winner=()=>{
     for(pattern of winPattern){
        let post0 =boxes[pattern[0]].innerText;
        let post1 =boxes[pattern[1]].innerText;
        let post2 =boxes[pattern[2]].innerText;
        if(post0!=""&&post1!=""&&post2!=""){
            if(post0==post1&&post1==post2){
                console.log("winner",post0);
                showWinner(post0);
                
            }
         }
     }
     
   
};
newBtn.addEventListener("click",enabledBtn);
resetBtn.addEventListener("click",enabledBtn);