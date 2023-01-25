//you age in days
function ageInDays(){
    var  Nacimiento  =  prompt ('what year were your born?....');
      var birthyear = (1985 - Nacimiento)*365;
       var h1 =document.createElement('h1');
       var textanswer = document.createTextNode("you are" + " " +  Nacimiento +" "+ "years old");
       h1.setAttribute("id","ageInDays");
       h1.appendChild(textanswer);
       document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.getElementById("ageInDays").remove();

}

function generatecat(){
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//prueba 3 
function rpsGame(yourchoice){
console.log(yourchoice);
var humanchoice, botchoice
humanchoice=yourchoice.id;

botchoice=numbertochoice(randtorpsint());
console.log("computer choice:",  botchoice);

result=decideWiner(humanchoice, botchoice); //[0,1]  human lost bot won
console.log(result);

message =finalmessage(result); //{"message", "you won",  "color","green"}
console.log(message)
rpsFrontEnd(yourchoice.id, botchoice, message);
}


function randtorpsint(){
    return Math.floor(Math.random()*3);

}

function  numbertochoice(number){
    return["random-rocks","paper-waterworld", "michael-scott"][number];
}

function decideWiner(yourchoice, computerchoice){
    var rpsDatabase={
        'random-rocks': { 'michael-scott':1, 'random-rocks':0.5, 'paper-waterworld':0},
        'paper-waterworld':{ 'random-rocks':1,  'paper-waterworld':0.5,   'michael-scott':0},
        'michael-scott':{'paper-waterworld':1,  'michael-scott':0.5, 'random-rocks':0}
    };

    var yourscore  =  rpsDatabase[yourchoice][computerchoice];
    var computerscore= rpsDatabase[computerchoice][yourchoice];

return  [yourscore, computerscore];

}

function finalmessage([yourscore, computerscore]) {
    if (yourscore ===0){
        return {'message':'perdiste', 'color':'red'};
    } else if (yourscore===0.5) {
        return{'message':'empate',  'color':'yellow'};
    } else {
        return {'message':'Ganaste!', 'color':'green'};
    }
}

function  rpsFrontEnd (humanchoice, botchoice, finalmessage){
    var imagesDatabase={
        "random-rocks": document.getElementById("random-rocks").src,
        "paper-waterworld": document.getElementById("paper-waterworld").src,
        "michael-scott": document.getElementById("michael-scott").src,
    }

    document.getElementById("random-rocks").remove();
    document.getElementById("paper-waterworld").remove();
    document.getElementById("michael-scott").remove();
    
    var humanDiv=document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv=document.createElement("div");

    
    humanDiv.innerHTML="<img src='"+ imagesDatabase[humanchoice]+ "' height=150 width=150;'>"
    messageDiv.innerHTML="<h1 style='color: " + finalmessage ['color']+ "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"
    botDiv.innerHTML="<img src='"+ imagesDatabase[botchoice]+ "' height=150 width=150;'>"




    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


}


