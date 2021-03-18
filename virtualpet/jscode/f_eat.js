//eat section [1]

//eat initial
function initHunger(){
    bar[1].style.width=maxLength;

    hunger_Timer=setInterval(hungerMinus_Func, 1000);

}

//getting hungry
function hungerMinus_Func(){
    
    if(hungerCount>0)
    {
        hungerCount-=2;
    }
    else{

        //too hungry
        console.log("too hungry!");
        clearInterval(hunger_Timer);        
    }
    bar[1].style.width=hungerCount*2+'px';
}

//eating
function hungerAdd_Func(){
    
    //!!
    stateNow=0;

    hungerCount+=50;
    if(hungerCount>100)
    {
        hungerCount=100;
    }
    clearTimeout(hunger_Timer);
    
    //pet!!
    pet.className="vacant";
    food.className="";
    
    hunger_Timer=setInterval(hungerMinus_Func, 1000);
       
    bar[1].style.width=hungerCount*2+'px';

    //poop after eating
    clearInterval(poop_Timer);
    poop_Timer=setTimeout(poopFunc,3000);
}

//feed btn
btns[1].onclick=function(){

    //!!
    stateCheck(1);

    //pet!!
    pet.className="eatingPet";
    food.className="declineFood";
    
    clearInterval(hunger_Timer);
    hunger_Timer=setTimeout(hungerAdd_Func, eatingTime);

    
    //if sleeping awake, no sleep timer until feeding is done
    if(sleepMode == false ){
        
        changeSleepMode(1,eatingTime);
    }
    
    
}
