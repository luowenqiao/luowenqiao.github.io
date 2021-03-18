var sleepCount=100;
var hungerCount=100;
var cleanCount=100;
var happyCount=100;
var healthCount=100;

var maxLength='200px';

//0,vacant  1,eating  2,showering  3,playing 4.taking medicine
//if pet is in other states, shift;
var stateNow=0;
var stateStr=["vacant","eatingPet","cleaningPet","runningPet","takingMedicinePet"];

//[sleepiness,hunger,cleanliness,happiness,health]
var bar=document.getElementsByClassName("innerBar");
var statusCanvas=document.getElementById("statusCanvas");
//[0sleep/awake,1feed,2flush,3shower,4play,5feedmedicine,6status]
var btns=document.getElementsByTagName("button");

var pet=document.getElementById("pet");
var poop=document.getElementById("dropping");
var ring=document.getElementById("playRing");
var food=document.getElementById("food");
var medicine=document.getElementById("medicine");
var bubbles=document.getElementById("bubbles");

//sleep
var sleep_Timer;
var sleepMode=true;

//hunger
var hunger_Timer;
var eatingTime = 2000;//ms

//clean
var poop_Timer;
var clean_Timer;
var showerLength=5;
var showerTime=1000;//ms

//happiness
var happy_Timer;
var happyLength = 5;
var happyTime = 1000;

//health
var health_Timer;

//extreme situation
var extreme_Timer;
var isExtreme= false;

// var enterBtn=document.getElementById("enterButton");
// var inputFrm=document.getElementById("inputFrame");
// var name=document.getElementById("nameFrame");