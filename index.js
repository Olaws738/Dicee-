
  var randomNumber1=Math.floor(Math.random()*6)+1; // 1-6

  var randomDice="dice" + randomNumber1 +".png" // dice1.png-dice6.pricing

  var randomImages="images/"+randomDice; // images/dice1.png-images/dice6.pricing

  var image1=document.querySelectorAll("img")[0];

  var result1=image1.setAttribute("src", randomImages );



  var randomNumber2=Math.floor(Math.random() *6)+1;

  var randomDice2="dice"+randomNumber2+".png"

  var randomImages2="images/"+randomDice2;

  var image2=document.querySelectorAll("img")[1];

  var result2=image2.setAttribute("src", randomImages2);



  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=("🚩 Player1 wins");
  }

  else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML=("Player2 wins🚩");
  }

  else{
    document.querySelector("h1").innerHTML=("Draw!");
  }
