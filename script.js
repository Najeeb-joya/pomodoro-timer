let timer_show = document.querySelector('.timer-show');
let start_btn = document.querySelector('.start-btn');
let pomodoro = document.querySelector('.pomodoro');
let shortbreak = document.querySelector('.shortbreak');
let longbreak = document.querySelector('.longbreak');
let shortbreak_minute;
let shortbreak_second; 


pomodoro.addEventListener('click', e => {
    timer_show.textContent="25:00";
    pomodoro.style.backgroundColor = "lightslategray";
    shortbreak.style.backgroundColor = "rgb(59, 56, 56)";
    longbreak.style.backgroundColor = "rgb(59, 56, 56)";

});
shortbreak.addEventListener('click', e => {

    timer_show.innerHTML = "05:00";
    shortbreak.style.backgroundColor = "lightslategray";
    pomodoro.style.backgroundColor = "rgb(59, 56, 56)";
    longbreak.style.backgroundColor = "rgb(59, 56, 56)";

});
longbreak.addEventListener('click',e => {

    timer_show.innerHTML="15:00"
    longbreak.style.backgroundColor = "lightslategray";
    shortbreak.style.backgroundColor = "rgb(59, 56, 56)";
    pomodoro.style.backgroundColor = "rgb(59, 56, 56)";
});


start_btn.addEventListener('click', e => {

        console.log(e);
    if(timer_show.textContent == "05:00"){
        start_btn.textContent ="Stop";
        shortbreak_minute=4;
        shortbreak_second=59;
        const intr = setInterval(() => {
            if(shortbreak_minute === 0 && shortbreak_second === 1){
                clearInterval(intr);
            }else{
                shortbreak_second--;
                if(shortbreak_second === 0){
                    shortbreak_minute--; 
                    shortbreak_second=59;    
                }
                if(shortbreak_second < 10){
                    timer_show.textContent = "0"+shortbreak_minute + ":" +"0"+shortbreak_second;

                }else{
                    timer_show.textContent = "0"+shortbreak_minute + ":" +shortbreak_second;
                }
                
            }
        }, 1000);

    }else{
        console.log("LongBreak or Pomodoro");
    }
    


});
