let timer_show = document.querySelector('.timer-show');
let start_btn = document.querySelector('.start-btn');
let pomodoro = document.querySelector('.pomodoro');
let shortbreak = document.querySelector('.shortbreak');
let longbreak = document.querySelector('.longbreak');


shortbreak.addEventListener('click', e => {

    timer_show.innerHTML = "05:00"
});
longbreak.addEventListener('click',e => {
    
    timer_show.innerHTML="15:00"
});


start_btn.addEventListener('click', e => {


});
