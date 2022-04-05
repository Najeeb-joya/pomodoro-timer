let timer_show = document.querySelector('.timer-show');
let start_btn = document.querySelector('.start-btn');
let pomodoro = document.querySelector('.pomodoro');
let shortbreak = document.querySelector('.shortbreak');
let longbreak = document.querySelector('.longbreak');


pomodoro.addEventListener('click', e => {
    timer_show.innerHTML="25:00";
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


});
