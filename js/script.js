let num = 0;

function increase(){
 num++;
 showNumber();
}

function dicrease(){
    num--;

    if(num < 0){
        num = 0;
    }
    showNumber();
}

function zerar(){
    num = 0;

    showNumber();
}


function showNumber(){
    const counter = document.querySelector(".counter");
    counter.innerText = num;
}

showNumber();

