let num = 0;

function increase(){
 num++;
 showNumber();
}

function dicrease(){
    num--;
    showNumber();
}

function showNumber(){
    const counter = document.querySelector(".counter");
    counter.innerText = num;
}

showNumber();

