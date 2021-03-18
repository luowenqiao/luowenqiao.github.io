window.onload=function(){

    initSleep();
    initHunger();
    initClean();
    initHappiness();
    initHealth();
    
    extreme_Timer=setInterval(extremeSituation,100);

    //status btn
    btns[6].onclick=function(){
        if(statusCanvas.style.display=="none")
        {
            statusCanvas.style.display="block";
        }
        else{
            statusCanvas.style.display="none";
        }
    }

    /*
    enterBtn.click=function(){
        enterBtn.display="none";
        inputFrm.display="none";
        nameFrame.innerHTML=inputFrm.innerHTML;
    }
*/


}