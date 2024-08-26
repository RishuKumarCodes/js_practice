let music = new Audio ("music.mp3")
music.volume = 0.5;
let audioTurn= new Audio("ting.mp3")
let gameover = new Audio ("gameover.mp3")
let turn = "X";
let isgameover = false;
let xscore = 0;
let yscore = 0;
const soundsvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64pt" height="64pt" viewBox="0 0 64 64" style="isolation:isolate" id="sound"><defs><clipPath id="a"><rect width="64" height="64"></rect></clipPath></defs><g clip-path="url(#a)"><path d=" M 6.667 44.207 L 16.434 44.207 C 17.108 44.207 18.042 44.594 18.518 45.07 L 29.715 56.268 C 31.145 57.697 32.305 57.216 32.305 55.195 L 32.305 8.801 C 32.305 6.78 31.145 6.299 29.715 7.729 L 18.518 18.926 C 18.042 19.403 17.108 19.789 16.434 19.789 L 6.667 19.789 C 4.645 19.789 3.004 21.431 3.004 23.452 L 3.004 40.544 C 3.004 42.566 4.645 44.207 6.667 44.207 Z "></path><path fill-rule="evenodd" d=" M 56.112 32 L 56.112 32 L 56.112 32 C 56.112 32 56.112 32 56.112 32 C 56.112 26.482 54.366 21.098 51.119 16.629 C 47.932 12.234 43.476 8.901 38.361 7.082 L 37.204 6.672 C 36.569 6.447 36.237 5.748 36.462 5.114 L 37.28 2.812 C 37.506 2.177 38.205 1.845 38.839 2.071 L 39.985 2.479 C 46.04 4.628 51.302 8.559 55.075 13.76 C 58.92 19.059 60.996 25.444 60.996 32 C 60.996 32 60.996 32 60.996 32 C 60.996 32 60.996 32 60.996 32 C 60.996 38.544 58.92 44.929 55.075 50.228 C 51.302 55.429 46.04 59.372 39.985 61.521 L 38.839 61.929 C 38.205 62.155 37.506 61.823 37.28 61.188 L 36.462 58.886 C 36.237 58.252 36.569 57.553 37.204 57.328 L 38.361 56.918 C 43.476 55.099 47.932 51.766 51.119 47.371 C 54.366 42.902 56.112 37.518 56.112 32 Z  M 60.996 32 C 60.996 32 60.996 32 60.996 32 L 60.996 32 Z  M 60.996 32"></path><path d=" M 38.08 19.486 L 36.985 18.936 C 36.383 18.633 36.14 17.898 36.443 17.296 L 37.544 15.107 C 37.846 14.505 38.58 14.263 39.182 14.567 L 40.265 15.115 C 43.452 16.715 46.162 19.095 48.164 22.038 C 50.142 24.98 51.217 28.447 51.229 32 C 51.217 35.553 50.142 39.008 48.164 41.95 C 46.162 44.892 43.452 47.273 40.265 48.873 L 39.182 49.42 C 38.58 49.724 37.846 49.483 37.543 48.881 L 36.444 46.703 C 36.141 46.101 36.383 45.367 36.985 45.064 L 38.08 44.514 C 40.51 43.293 42.585 41.462 44.123 39.215 C 45.552 37.079 46.333 34.576 46.345 32 C 46.333 29.424 45.552 26.909 44.123 24.785 C 42.585 22.526 40.51 20.707 38.08 19.486 Z "></path></g></svg>ON`
const mutesvg =`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="volume-off"><path d="M672.52 568.35 728.87 512l-56.35-56.35 49.5-49.5 56.35 56.35 56.35-56.35 49.5 49.5L827.87 512l56.35 56.35-49.5 49.5-56.35-56.35-56.35 56.35zM536.33 814.5 323.71 662H201.27c-28.53 0-51.74-23.21-51.74-51.74V413.74c0-28.53 23.21-51.74 51.74-51.74h122.44l212.62-152.5c9.9-7.1 22.79-8.05 33.63-2.49 10.84 5.57 17.57 16.59 17.57 28.78v552.42c0 12.19-6.73 23.21-17.57 28.78-4.69 2.4-9.75 3.59-14.8 3.59-6.62 0-13.21-2.05-18.83-6.08z"></path></svg>OFF`

// play sound
let sound = document.getElementById("audio");
sound.addEventListener('click', ()=>{
    if(sound.innerHTML == soundsvg){
        sound.innerHTML = mutesvg;
        music.play();
    }else{
        sound.innerHTML = soundsvg
        music.pause();
    }
})

// fn to change the turn:
const changeTurn = ()=>{
    return turn ==="X"? "0" : "X";
}

// fn to check a win
const checkWin = ()=>{
    let val = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, -45],
    ]
    wins.forEach(e =>{
        if (val[e[0]].innerText !== '' && val[e[0]].innerText === val[e[1]].innerText && val[e[1]].innerText === val[e[2]].innerText) {
            document.querySelector('.info').innerText = val[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector('.line').style.width = '20vw';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            if(val[e[0]].innerText === 'X'){
                xscore+=1;
                document.getElementById("xscore").innerHTML = `X score : ${xscore}`
            }else{
                yscore+=1;
                document.getElementById('yscore').innerHTML = `Y score : ${yscore}`
            }
        }
    })
}

// game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '' && !isgameover){
            audioTurn.play();
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(isgameover == false){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//  reset button:
document.getElementById("reset").addEventListener('click', ()=>{
    let val = document.querySelectorAll('.boxtext');
    Array.from(val).forEach(e => {
        e.innerHTML = '';
    });
    document.querySelector('.line').style.width = '0vw';
    document.querySelector('.info').innerText = "Turn for " + turn;
    isgameover = false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})