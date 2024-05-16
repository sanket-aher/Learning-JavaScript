let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;
let btns=["yellow","red","green","purple"];

let p=document.querySelector("p");

let highestScore=0;


document.addEventListener("keypress",function(){
    if(started == false){
        //console.log("Game is Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    p.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random() * 3);
    let randColor= btns[randIdx];
    let randBtnClass = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtnClass);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }else{
        p.innerHTML =`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;

        if(highestScore < level){
            highestScore = level;
            let h5=document.querySelector('h5');
            h5.innerText = `Your Highest Score is ${highestScore}`;
        }
        

        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        },150);
        reset();
    }
}

function btnPress(){
    let  btPress = this;
    userFlash(btPress);

    let userColor = btPress.getAttribute("id");
    userSeq.push(userColor);
    //console.log(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns=document.querySelectorAll(".btn");
for (bt of allBtns)
{
    bt.addEventListener("click",btnPress);    
}

function reset(){
    started=false;
    level = 0;
    gameSeq=[];
    userSeq=[];
}