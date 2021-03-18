//poop section [2]

//poop initial
function initClean(){
    bar[2].style.width=maxLength;
}

//A poop is added every time after eating
//clean-- if don't clean
function poopFunc(){
    cleanCount-=30;
    if(cleanCount>=0)
    {
       //console.log("A poop");
       poop.style.display="block";
       
    }
    else{
        cleanCount=0;
        console.log("too dirty!");
    }
    clearTimeout(poop_Timer);
    bar[2].style.width=cleanCount*2+'px';
}

//clean add after shower
function cleanAdd_Func(){
   if(showerLength >0){
       
        //pet!
        pet.className="cleaningPet";
        bubbles.style.display="block";
        //bubbles.ClassName="fadeIn";

        cleanCount+=5;
        if(cleanCount >100)
        {
            cleanCount=100;
            clearInterval(clean_Timer);
            
            //pet!
            pet.className="vacant";
            bubbles.style.display="none";
            //bubbles.className="";
        }
        showerLength--;
        bar[2].style.width=cleanCount*2+'px';
   }
   else{
        //pet!
        pet.className="vacant";
        bubbles.style.display="none";
        //bubbles.className="";

        showerLength=5;
        clearInterval(clean_Timer);

        //!!
        stateNow=0;
   }
}

//flush btn
btns[2].onclick=function(){
    if(poop.style.display=="block")
    {
        poop.style.display="none";
        
        cleanCount+=10;
        if(cleanCount >100)
        {
            cleanCount=100;
        }
        bar[2].style.width=cleanCount*2+'px';
    }
}

//shower btn
btns[3].onclick=function(){
    clearInterval(clean_Timer);

    //!!
    stateCheck(2);

    //if sleeping turn to awake
    if(sleepMode == false){
       
        changeSleepMode(2,showerLength*showerTime);
    }
    
    
    clean_Timer=setInterval(cleanAdd_Func,1000);

    
}
