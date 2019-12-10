// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://proseconsult.umontpellier.fr/direct/?data=6e04da9212376a50dcd46bdf83c3daf04f51f7d91eb3648604d628113e82760dbed8d89011b8db3f565a6eba3fb421d313f6c63370d69630c73e5d47e7b4caa205b671755e2e313accf1c0ae7bea9fe2ffaaa69cbd14fea5a6d0111bfaa17a823cc1c3b4302fc5dd2762be0aa3a53986aa46015363b2752612a410752d15eaafd211eeb7936734e0cd7fd38213cedc0eec845302a004ead06829e11b88069c04e0a1249a51c245e3f446955c31272adc3aadabd893fde288b607171236fa2293,1
// @grant        none
// ==/UserScript==





function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function lou(){
	console.log("zefhç_f_h");
	var evAPrendre="ev0";
	var div=document.getElementById(evAPrendre);
	div=document.getElementById(evAPrendre);
	var url="url(https://www.thiswaifudoesnotexist.net/example-"+getRandomInt(10000).toString()+".jpg)";
	div.style.backgroundImage=url;
	div.style.backgroundSize= "100%";
	var i=1;
	while(evAPrendre!=null){
		evAPrendre="ev";
		evAPrendre+=i.toString();
		div=document.getElementById(evAPrendre);
		url="url(https://www.thiswaifudoesnotexist.net/example-"+getRandomInt(10000).toString()+".jpg)";
		div.style.backgroundImage=url;
		div.style.backgroundSize= "100%";
		i++;
	}
}

function lancer(){
    console.log(document.getElementById("ev0"));
        if(document.getElementById("ev0")===null){
            setTimeout(lancer, 490);
       }else{
       lou();
       }

}

window.onload=function(){
    lancer();
}
