//sleep section [0]

//sleep initial

function initSleep(){
    bar[0].style.width=maxLength;
    
    sleepMode=true;//awake at first

    
    sleep_Timer=setInterval(sleepMinus_Func, 1500);
}

//awake pattern
function sleepMinus_Func(){
    if(sleepCount>0)
    {
        //keeping awake
        sleepCount--;
    }
    else{
        // sleep automatically after everything is done
        console.log("too sleepy");
        clearInterval(sleep_Timer);
        //changeSleepMode(0,0);
    }
    bar[0].style.width=sleepCount*2+'px';
}

//sleeping pattern
function sleepAdd_Func(){
    if(sleepCount<100){
        sleepCount+=10;
    }
    else{
        //awake!
        changeSleepMode(0,0);
    }
    bar[0].style.width=sleepCount*2+'px';
}

//sleepMode true --> sleep after click (awake now)
//sleepMode flase --> awake after click (sleeping now)
function changeSleepMode(states,waitTime){
    clearInterval(sleep_Timer);
    if(sleepMode==true)
    {   
        //turn into sleep mode
        //console.log("sleep");
        sleep_Timer=setInterval(sleepAdd_Func, 1000);
        sleepMode = false;

        //pet!!
        pet.className="sleepingPet";
        
    }
    else{ //sleepMode==false the pet is sleeping
        //turn to awake
        if(states > 0){
            //wait until other things done
            //console.log("awake wait");
            sleep_Timer=setTimeout(sleepWait_Func, waitTime);
        }
        else{   //0 sleep immediately
            //console.log("awake imm");

            //pet!!
            pet.className="vacant";
            sleep_Timer=setInterval(sleepMinus_Func, 1500);
        }
        
        sleepMode = true;
        
        //sleepReal.innerHTML="Awake";
    }
}

function sleepWait_Func(){
    clearTimeout(sleep_Timer);

    //pet!
    pet.className="vacant";
     
    sleep_Timer=setInterval(sleepMinus_Func, 1500);
}

//sleep btn 
btns[0].onclick=changeSleepMode;



