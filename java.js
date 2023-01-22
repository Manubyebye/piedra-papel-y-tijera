//you age in days
function ageInDays(){
    var  Nacimiento  =  prompt ('what year were your born?....');
      var birthyear = (1985 - Nacimiento)*365;
       var h1 =document.createElement('h1');
       var textanswer = document.createTextNode("you are" + " " +  Nacimiento +" "+ "yeras old");
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
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(image);
    
}

