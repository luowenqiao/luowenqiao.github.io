//state: 0,vacant  1,eating  2,showering  3,playing  4,taking medicine

function stateCheck(newState){

    //dealing with interruption

    //stateNow!=0 means pet is doing sth
    //stateNow != NewState means the new state is different

    if( stateNow != newState)
    {
        console.log(stateNow,newState);
        if(stateNow == 1){  // the pet is eating now, stop it
            clearTimeout(hunger_Timer);
            
            //eatReal.innerHTML="";
            food.className="";
            hunger_Timer=setInterval(hungerMinus_Func, 1000);
        }
        if(stateNow == 2){  // it is showering, stop it
            clearInterval(clean_Timer);
            //cleanReal.innerHTML="";
            bubbles.style.display="none";
            showerLength=5;
        }
        if(stateNow == 3){  // it is playing, stop it
            clearInterval(happy_Timer);
            //happyReal.innerHTML="";
            ring.className="";
            happyLength=5;
            happy_Timer=setInterval(happyMinus_Func, 1000);
        }
        if(stateNow == 4){  // it is taking medicine, stop it
            clearTimeout(health_Timer);
            //healthReal.innerHTML="";
            medicine.className="";
            health_Timer=setInterval(healthMinus_Func, 1000);
        }

        //start the new thing
        if(newState== 3)
        {
            ring.className="runningRing";
        }
        
        pet.className="";
        pet.className=stateStr[newState];
        stateNow = newState;
    }

}

function extremeSituation(){


    if(happyCount == 0 || hungerCount == 0 ||cleanCount == 0)
    {
        if(pet.className == 'vacant')
            {
                isExtreme=true;
                pet.className = "vacant angryPet";
            }
        //console.log("angry");
        isExtreme=true;
    }
    else{
        if(sleepCount ==0 || healthCount == 0)
        {
            if(pet.className == 'vacant')
            {
                isExtreme=true;
                pet.className = "vacant sickPet";
            }

                //console.log("sick");
        }
        else{
            isExtreme=false;
        }
    }  
    
    
       
}