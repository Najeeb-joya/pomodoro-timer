let timer_show = document.querySelector('.timer-show');
let start_btn = document.querySelector('.start-btn');
let pause_btn = document.querySelector('.pause-btn');
let stop_btn = document.querySelector('.stop-btn');
let pomodoro = document.querySelector('.pomodoro');
let shortbreak = document.querySelector('.shortbreak');
let longbreak = document.querySelector('.longbreak');
let addtask_btn = document.querySelector('.addtask-container');
var task_preview = document.querySelector('.tasks-preview');
var save_btn=document.querySelector('.save');
var cancel_btn= document.querySelector('.cancel');
let sub_menu_icon = document.querySelector('.sub-menu-icon');
var sub_menu_list = document.querySelector('.sub-menu-lists');

let alarm = new Audio('../sounds/alarm01.m4a');
let minute;
let second;
var intr; 
var flag;


function current_time() {
    let chour = document.querySelector('.hour');
    let cminute = document.querySelector('.minute');
    let csecond = document.querySelector('.second');
    let period = document.querySelector('.period');
    
    setInterval(() =>{
        const date = new Date();
        if(date.getHours() > 12){
            period.textContent = "PM";
        }
        chour.innerText = date.getHours() < 10? "0" + date.getHours() : date.getHours();
        cminute.innerText = date.getMinutes() < 10? "0" + date.getMinutes(): date.getMinutes();
        csecond.innerText = date.getSeconds() < 10 ? "0" + date.getSeconds():date.getSeconds();
    },1000);
};

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
function btn_visiblity(){
    stop_btn.style.display="none";
    pause_btn.style.display="none";
    start_btn.disabled=false;
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
                shrtbreak(); // call the shrtbreak() function to move to the shortbreak Tab
                btn_visiblity();
            }
            if(flag === "shortbreak"){ 
                lngbreak(); // call the lngbreak() function to move to the longbreak Tab
                btn_visiblity();
            }
            if(flag === "longbreak"){
                pmodoro(); // call the pmodoro() function to move to the pomodoro Tab
                btn_visiblity();
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
        if(flag === "pomodoro" && minute === 1 && second < 40){ // add alarm sound when timer reach to 1 minute
            alarm.play();
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
    if(flag === "pomodoro"){
        shrtbreak(); 
        btn_visiblity(); 
    }
     if(flag === "shortbreak"){
        pmodoro();
        btn_visiblity();
    }
    if(flag === "longbreak"){
        pmodoro();
        btn_visiblity();
    }
}
});
pomodoro.addEventListener('click', e => {
    pmodoro(); // call pmodoro() function to add style for Pomodoro tab. 
    clearInterval(intr);
    stop_btn.style.display="none";
    pause_btn.style.display="none";
    

});
shortbreak.addEventListener('click', e => {
    shrtbreak(); // call shrtbreak() function to add style for ShortBreak tab. 
    clearInterval(intr)
    stop_btn.style.display="none";
    pause_btn.style.display="none";
    start_btn.disabled=false;

});
longbreak.addEventListener('click',e => {
    lngbreak(); // call lngbreak() function to add style for LongBreak tab. 
    clearInterval(intr);
    stop_btn.style.display="none";
    pause_btn.style.display="none";
    start_btn.disabled=false;
});

sub_menu_icon.addEventListener('click', e =>{
    if(sub_menu_list.style.display === "none" || sub_menu_list.style.display ===""){
        sub_menu_list.style.display="block";
    }else{
        sub_menu_list.style.display ="none";
    }
});


addtask_btn.addEventListener('click', e => { // handle addtask button 
    let task_inputs = document.querySelector('.task-inputs');  // access the task input div
    let task_input = document.querySelector('.task-input');

    let inc_btn = document.querySelector('.inc-btn'); // access the pomodoro increment button
    let dec_btn = document.querySelector('.dec-btn');  // access the pomodor decrement button
    let pomo_counter= document.querySelector('.pomo-counter');
    let pomocounter =1; 
    
    inc_btn.addEventListener('click', e =>{
        console.log("Increment clicked");
        pomocounter++; 
        pomo_counter.textContent = pomocounter;
    });
    
    dec_btn.addEventListener('click', e =>{
        if(pomocounter > 1){
            pomocounter--;
        }
        pomo_counter.textContent = pomocounter;
    });

    task_inputs.style.display="block";

    cancel_btn.addEventListener('click', e => { // handle cancel button event which is inside task  input div 
        task_inputs.style.display="none"; 
        task_input.value="";
        
    });

    save_btn.disabled=true;
    task_input.addEventListener('keyup', e =>{
        save_btn.disabled=false;
    });
    save_btn.addEventListener('click', e => { // handle save button event which is inside task input div
        task_preview.style.display = "block";
        if(task_input.value !== ""){
            var task = document.createElement('p');
            task.textContent= task_input.value;
            task.setAttribute('class', 'task');
            task_preview.append(task);
            task_input.value="";   
        }
    });
});





