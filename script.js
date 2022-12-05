const boxs = document.querySelectorAll(".box");
var turn = "X";
var gameover = false;

function changeTurn(){
    return turn === "X"? "O" : "X";
}

function checkWin(){
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e =>{
        if((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML !== "")){
            document.querySelector("#turn").innerHTML = boxtext[e[0]].innerHTML + " win";
            gameover = true;
            document.querySelector(".info").getElementsByTagName('img')[0].style.height = '200px';
            document.getElementById('turn').style.backgroundColor = "yellow";
            document.getElementById('turn').style.border = "1px solid black";
            document.getElementById('turn').style.borderRadius = "10px";
        }
    })
}


// SELECT EACHBOX AND CHANGE INNER HTML,CHECKWIN,CHANGETURN
boxs.forEach(function(element){
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click",()=> {
        if(boxtext.innerHTML == "" && gameover === false){
            boxtext.innerHTML = turn;
            turn = changeTurn();
            checkWin();
            if(!gameover){
                document.getElementById("turn").innerHTML = "Turn of "+turn;
            }
        }
    })
})


// RESET BUTTON
const reset = document.getElementById("reset");
reset.addEventListener("click",()=>{
    boxs.forEach(function(element){
        let  boxtext = element.querySelector(".boxtext");
        boxtext.innerHTML = "";
        document.querySelector(".info").getElementsByTagName('img')[0].style.height = '0';
        document.getElementById('turn').style.backgroundColor = "";
        document.getElementById('turn').style.border = "";
        document.getElementById('turn').style.borderRadius = "";
    })
})
