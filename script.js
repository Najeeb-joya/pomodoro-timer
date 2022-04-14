let timer_show = document.querySelector('.timer-show');
let start_btn = document.querySelector('.start-btn');
let pause_btn = document.querySelector('.pause-btn');
let stop_btn = document.querySelector('.stop-btn');
let pomodoro = document.querySelector('.pomodoro');
let shortbreak = document.querySelector('.shortbreak');
let longbreak = document.querySelector('.longbreak');
let minute;
let second;
var intr; 
var flag;


function shrtbreak(){
    timer_show.innerHTML = "05:00";
    shortbreak.style.backgroundColor = "lightslategray";
    pomodoro.style.backgroundColor = "rgb(59, 56, 56)";
    longbreak.style.backgroundColor = "rgb(59, 56, 56)";
}

function pmodoro(){
    timer_show.textContent="25:00";
    pomodoro.style.backgroundColor = "lightslategray";
    shortbreak.style.backgroundColor = "rgb(59, 56, 56)";
    longbreak.style.backgroundColor = "rgb(59, 56, 56)";
}

function lngbreak(){
    timer_show.innerHTML="15:00";
    longbreak.style.backgroundColor = "lightslategray";
    shortbreak.style.backgroundColor = "rgb(59, 56, 56)";
    pomodoro.style.backgroundColor = "rgb(59, 56, 56)";
}

start_btn.addEventListener('click', e => {
    pause_btn.style.display="inline";
    stop_btn.style.display="inline";
    start_btn.disabled=true;
    pause_btn.disabled=false;
    
    if(timer_show.textContent === "25:00"){
        minute=24;
        second=59;
        flag="pomodoro";
    }if(timer_show.textContent === "15:00"){
        minute= 14; 
        second =59;
        flag="longbreak";
    } if(timer_show.textContent === "05:00"){
        minute=4;
        second=59;
        flag="shortbreak";
    }

    intr = setInterval(() => {
        if(minute === 0 && second === 1){
            clearInterval(intr);

            if(flag =="pomodoro"){
                shrtbreak();
                stop_btn.style.display="none";
                 pause_btn.style.display="none";
                 start_btn.disabled=false;
            }
            if(flag === "shortbreak"){ 
                lngbreak();
                stop_btn.style.display="none";
                pause_btn.style.display="none";
                start_btn.disabled=false;
            }
            if(flag === "longbreak"){
                pmodoro();
                stop_btn.style.display="none";
                pause_btn.style.display="none";
                start_btn.disabled=false;
            }

        }else{
            second--;
            if(second === 0){
                minute--; 
                second=59;    
            }if(minute <10){
                timer_show.textContent = "0" + minute + ":" + second;
                if(second < 10){
                    timer_show.textContent = "0" + minute + ":" + "0" + second;
                }
            }else{
                timer_show.textContent = minute + ":" + second;
                if(second <10){
                    timer_show.textContent = minute + ":" + "0" + second;
                }
            }
        }
    }, 10);
});
pause_btn.addEventListener('click', e => {
    clearInterval(intr);
    pause_btn.disabled=true;
    start_btn.disabled = false;
});
stop_btn.addEventListener('click', e =>{
    var confirm = window.confirm("Are you sure to end this round early");
    if(confirm === true){
       //location.reload();
       clearInterval(intr);
       timer_show.innerHTML = "05:00";
       shortbreak.style.backgroundColor = "lightslategray";
       pomodoro.style.backgroundColor = "rgb(59, 56, 56)";
       longbreak.style.backgroundColor = "rgb(59, 56, 56)";
       stop_btn.style.display="none";
       pause_btn.style.display="none";
       start_btn.disabled= false;


    }else{
        console.log("nothing");
    }
    
});


pomodoro.addEventListener('click', e => {
    pmodoro();
    clearInterval(intr);
    stop_btn.style.display="none";
    pause_btn.style.display="none";
    

});
shortbreak.addEventListener('click', e => {
    shrtbreak();
    clearInterval(intr)
    stop_btn.style.display="none";
    pause_btn.style.display="none";

});
longbreak.addEventListener('click',e => {
    lngbreak();
    clearInterval(intr);
    stop_btn.style.display="none";
    pause_btn.style.display="none";
});







