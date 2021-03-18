//happiness section [3]

//happiness initial
function initHappiness(){
    bar[3].style.width=maxLength;
    happy_Timer=setInterval(happyMinus_Func, 1000);
}

//happiness minus
function happyMinus_Func(){
    happyCount--;
    if(sleepCount == 0 || hungerCount == 0 || cleanCount == 0)
    {
        happyCount-=5;
    }
    if(happyCount <=0)
    {
        console.log("too sad!");
        clearInterval(happy_Timer);
    }
    bar[3].style.width=happyCount*2+'px';
}


//happiness add
btns[4].onclick=function(){
    clearInterval(happy_Timer);

    //!!
    stateCheck(3);

    //if sleeping turn to awake
    if(sleepMode == false){
       
        changeSleepMode(3,happyLength*happyTime);
    }
    
    happy_Timer=setInterval(happyAdd_Func, happyTime);
}


function happyAdd_Func(){
    if(happyLength >0){

        //pet!
        pet.className="runningPet";
        ring.className="runningRing";

        happyCount+=5;
        if(happyCount >100)
        {
            //pet!!
            pet.className="vacant";
            ring.className="stopRing";

            happyCount=100;
            clearInterval(happy_Timer);
            happy_Timer=setInterval(happyMinus_Func, 1000);
        }
        happyLength--;
        bar[3].style.width=happyCount*2+'px';
    }
    else{
        //stop playing

        //!!
        stateNow=0;

        //pet!
        pet.className="vacant";
        ring.className="stopRing";

        happyLength=5;
        clearInterval(happy_Timer);
        happy_Timer=setInterval(happyMinus_Func, 1000);

       
    }

}

