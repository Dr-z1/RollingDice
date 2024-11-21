images=['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png']
var imgcounter = images.length
var randomNumber1 = Math.floor(Math.random() * imgcounter);
var randomNumber2 = Math.floor(Math.random() * imgcounter);
var A = document.querySelector(".img1").setAttribute("src",images[randomNumber1]);
var B = document.querySelector(".img2").setAttribute("src",images[randomNumber2]);

//var elements = document.getElementsByClassName("container");
//elements[0].innerHTML="Player 1 Won !";
//console.log(elements[0]);


//var player1=document.querySelector(".container h1").innerHTML=" 🚩player 1 won";
//var player2=document.querySelector(".container h1").innerHTML="player 2 won 🚩"; 
//var draw=document.querySelector(".container h1").innerHTML="draw"; 




if (randomNumber1 > randomNumber2) {
    var player1=document.querySelector(".container h1").innerHTML=" 🚩player 1 won";
    ;
} else if (randomNumber2 > randomNumber1) {
    var player2=document.querySelector(".container h1").innerHTML="player 2 won 🚩"; 
    ;
} else if (B===A){
    var draw=document.querySelector(".container h1").innerHTML="draw"; 
    ;
}










