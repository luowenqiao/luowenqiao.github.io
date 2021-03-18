//health section [4]

//health initial
function initHealth(){
    bar[4].style.width=maxLength;
    health_Timer=setInterval(healthMinus_Func, 1000);
    
}


//health minus
function healthMinus_Func(){
    if(sleepCount == 0 || hungerCount == 0 || cleanCount == 0 || happyCount == 0)
    {
        healthCount-=5;
    }
    if(healthCount <=0)
    {
        console.log("got sick!");
        clearInterval(health_Timer);
    }
    bar[4].style.width=healthCount*2+'px';
}


//feed medicine
//feed btn
btns[5].onclick=function(){

    //!!
    stateCheck(4);

    //pet!!
    pet.className="takingMedicinePet";
    medicine.className="declineMedicine";
    
    clearInterval(health_Timer);
    health_Timer=setTimeout(healthAdd_Func, 2000);

    //if sleeping awake, no sleep timer until feeding is done
    if(sleepMode == false ){
        changeSleepMode(4,2000);
    }
    
    
}

//after taking medicine
function healthAdd_Func(){

    //!!
    stateNow=0;

    healthCount+=50;
    if(healthCount>100)
    {
        healthCount=100;
    }
    clearTimeout(health_Timer);

    //pet!!
    pet.className="vacant";
    medicine.className="";
    
    health_Timer=setInterval(healthMinus_Func, 1000);
       
    bar[4].style.width=healthCount*2+'px';
}


