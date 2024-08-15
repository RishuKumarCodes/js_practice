let gameSeq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let hiScore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", startGame);
document.addEventListener("touchstart", startGame);

function startGame(){
    if(started == false){
        document.querySelector("body").style.backgroundColor = "#141414";
        started = true;
        userseq = [];
        levelUp();
    }
}
    function btnFlash(btn){
        setTimeout(() => {
            btn.classList.add("flash");
        }, 150);
        setTimeout(() => {
            btn.classList.remove("flash");
        }, 500);
    }

    function levelUp(){
        userseq = [];
        level++;
        h2.innerHTML = `Level: ${level} &nbsp &nbsp &nbsp Hi-score: ${hiScore} <hr> &nbsp`;


        let randIdx = Math.floor(Math.random() *3);
        let randColor= btns[randIdx];
        let randBtn = document.querySelector(`.${randColor}`);
        gameSeq.push(randColor);
        btnFlash(randBtn);
    }

    function checkAns(idx){

        if(userseq[idx] === gameSeq[idx]){
            if(userseq.length == gameSeq.length){
                levelUp();
            }
        }else{
            hiScore = Math.max(hiScore, level);
            h2.innerHTML = `score: ${level} &nbsp &nbsp &nbsp Hi-score: ${hiScore} <hr> GAME OVER! Press any key to start`;
            document.querySelector("body").style.backgroundColor = "#67191D";
            started = false;
            level = 0;
            gameSeq = [];
            userseq = [];
        }
    }

    function btnPress(){
        let btn = this;
        btn.classList.add("clicked")
        setTimeout(()=>{
            btn.classList.remove("clicked")
        }, 100)
        
        let userColor = btn.getAttribute("id");
        userseq.push(userColor);
        checkAns(userseq.length-1);
    }

    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click", btnPress)
    }

