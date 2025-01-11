var audio = new Audio("./audio/dicesuffleaudio.mp3");
document.querySelector(".playbutton").addEventListener("click",play);
document.querySelector(".restartbutton").addEventListener("click",function (){
    document.querySelector(".restartbutton").classList.add("restartbuttonpressed");
    setTimeout(function() {  document.querySelector(".restartbutton").classList.remove("restartbuttonpressed"); }, 200);
    audio.currentTime = 0;
    audio.play();
    setTimeout(function() {audio.pause();},500);
    document.querySelector(".heading").classList.remove("heading2");
    document.querySelector("img.picture1").setAttribute("src","./pictures/dice6.png");
    document.querySelector("img.picture2").setAttribute("src","./pictures/dice6.png");
    document.querySelector(".heading").textContent= "Dice Game";
});

function play() {
    document.querySelector(".playbutton").classList.add("playbuttonpressed");
    setTimeout(function()  {document.querySelector(".playbutton").classList.remove("playbuttonpressed");}, 200);
    document.querySelector(".heading").classList.remove("heading2");
    document.querySelector(".heading").textContent= "wait.."
    audio.currentTime = 0;
    audio.play();
    var i= 1;
    while (i<15) {
    setTimeout(function() { document.querySelector(".dice1ImageContainer").classList.add("picture1down"); dice1suffle();}, 100* i++);
    setTimeout(function() { document.querySelector(".dice1ImageContainer").classList.remove("picture1down"); dice1suffle();},100* i++);
    setTimeout(function() { document.querySelector(".dice1ImageContainer").classList.add("picture1up"); dice1suffle();}, 100* i++);
    setTimeout(function() { document.querySelector(".dice1ImageContainer").classList.remove("picture1up"); dice1suffle();}, 100* i++);
      
    };
    i= 1
    while(i<15) {
        
        setTimeout(function() { document.querySelector(".dice2ImageContainer").classList.add("picture2up"); dice2suffle();}, 100* i++);
        setTimeout(function() { document.querySelector(".dice2ImageContainer").classList.remove("picture2up");dice2suffle(); },100* i++);
        setTimeout(function() { document.querySelector(".dice2ImageContainer").classList.add("picture2down");dice2suffle(); }, 100* i++);
        setTimeout(function() { document.querySelector(".dice2ImageContainer").classList.remove("picture2down");dice2suffle(); }, 100* i++);     
       
    };

    var randomdice1 , randomdice2;

    function dice1suffle() { 
        randomdice1=(Math.floor(Math.random()*6))+1;
        document.querySelector("img.picture1").setAttribute("src",`./pictures/dice${randomdice1}.png`);
       };
    
    function dice2suffle() {
        randomdice2=(Math.floor(Math.random()*6))+1;
        document.querySelector("img.picture2").setAttribute("src",`./pictures/dice${randomdice2}.png`);
       };

    setTimeout(function() {
        dice1suffle();
        dice2suffle();
        
        if (randomdice1>randomdice2) {
            var result = "Player 1 Wins!"
        } else if (randomdice1<randomdice2) {
            var result = "Player 2 Wins!"
        } else {
            var result = "Draw"
        }
        document.querySelector(".heading").textContent= `${result}`;
        audio.pause();
        setTimeout(function() { document.querySelector(".heading").classList.add("heading2");}, 50*i);
    }, 100*i);
};
