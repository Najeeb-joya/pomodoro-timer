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
                timer_show.innerHTML = "05:00";
                shortbreak.style.backgroundColor = "lightslategray";
                pomodoro.style.backgroundColor = "rgb(59, 56, 56)";
                longbreak.style.backgroundColor = "rgb(59, 56, 56)";
                stop_btn.style.display="none";
                 pause_btn.style.display="none";

            }
            if(flag === "shortbreak"){  
                timer_show.innerHTML="15:00";
                longbreak.style.backgroundColor = "lightslategray";
                shortbreak.style.backgroundColor = "rgb(59, 56, 56)";
                pomodoro.style.backgroundColor = "rgb(59, 56, 56)";
                stop_btn.style.display="none";
                pause_btn.style.display="none";
            }
            if(flag === "longbreak"){
                timer_show.textContent="25:00";
                pomodoro.style.backgroundColor = "lightslategray";
                shortbreak.style.backgroundColor = "rgb(59, 56, 56)";
                longbreak.style.backgroundColor = "rgb(59, 56, 56)";
                stop_btn.style.display="none";
                pause_btn.style.display="none";
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
            }
            
        }
    }, 1000);
});
pause_btn.addEventListener('click', e => {
    clearInterval(intr);
    pause_btn.disabled=true;
    start_btn.disabled = false;
});
stop_btn.addEventListener('click', e =>{
    location.reload();
});


pomodoro.addEventListener('click', e => {
    timer_show.textContent="25:00";
    pomodoro.style.backgroundColor = "lightslategray";
    shortbreak.style.backgroundColor = "rgb(59, 56, 56)";
    longbreak.style.backgroundColor = "rgb(59, 56, 56)";
    clearInterval(intr);
    stop_btn.style.display="none";
    pause_btn.style.display="none";
    

});
shortbreak.addEventListener('click', e => {
    timer_show.innerHTML = "05:00";
    shortbreak.style.backgroundColor = "lightslategray";
    pomodoro.style.backgroundColor = "rgb(59, 56, 56)";
    longbreak.style.backgroundColor = "rgb(59, 56, 56)";
    clearInterval(intr)
    stop_btn.style.display="none";
    pause_btn.style.display="none";

});
longbreak.addEventListener('click',e => {
   
    timer_show.innerHTML="15:00";
    longbreak.style.backgroundColor = "lightslategray";
    shortbreak.style.backgroundColor = "rgb(59, 56, 56)";
    pomodoro.style.backgroundColor = "rgb(59, 56, 56)";
    clearInterval(intr);
    stop_btn.style.display="none";
    pause_btn.style.display="none";
});







