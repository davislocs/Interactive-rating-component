var collection = document.getElementsByClassName('rating__star');
var userRating = 0;

document.getElementById("one").addEventListener("mouseover", function(){ colorChange(this); });
document.getElementById("two").addEventListener("mouseover", function(){ colorChange(this); });
document.getElementById("three").addEventListener("mouseover", function(){ colorChange(this); });
document.getElementById("four").addEventListener("mouseover", function() { colorChange(this)} );
document.getElementById("five").addEventListener("mouseover", function(){ colorChange(this); });

function colorChange(star){
    //resets colors
    for (let j = 0; j < 5; j++) {
        collection[j].style.color = "rgba(124, 135, 152, 1)";
        collection[j].style.backgroundColor = "rgba(38, 46, 56, 1)";
    }
    //resets user rating
    userRating = 0;
    //changes colors on hover     
    for (let j = 0; j < star.value; j++) {
        collection[j].style.color = "rgba(255, 255, 255, 1)";
        collection[j].style.backgroundColor = "rgba(124, 135, 152, 1)";
    }   
}

document.getElementById("one").addEventListener("click", function(){ select(this); });
document.getElementById("two").addEventListener("click", function(){ select(this); });
document.getElementById("three").addEventListener("click", function(){ select(this); });
document.getElementById("four").addEventListener("click", function() { select(this)} );
document.getElementById("five").addEventListener("click", function(){ select(this); });

function select(star){     
    for (let j = 0; j < star.value; j++) {
        collection[j].style.color = "rgba(255, 255, 255, 1)";
        collection[j].style.backgroundColor = "rgba(252, 118, 20, 1)";
    }
    
    userRating = star.value;
}

document.getElementById("one").addEventListener("mouseout", function(){ colorChangeBack(this); });
document.getElementById("two").addEventListener("mouseout", function(){ colorChangeBack(this); });
document.getElementById("three").addEventListener("mouseout", function(){ colorChangeBack(this); });
document.getElementById("four").addEventListener("mouseout", function() { colorChangeBack(this)} );
document.getElementById("five").addEventListener("mouseout", function(){ colorChangeBack(this); });

function colorChangeBack(star){
    console.log(star.style.backgroundColor);
    if(star.style.backgroundColor != "rgb(252, 118, 20)"){
        console.log(star.style.backgroundColor);
        for (let j = 0; j < star.value; j++) {
            collection[j].style.color = "rgba(124, 135, 152, 1)";
            collection[j].style.backgroundColor = "rgba(38, 46, 56, 1)";
        }
        
    }
    console.log(star.style.backgroundColor);
}

function submit(){

    if(userRating != 0){
        document.getElementById("rating-section").style.display = "none";
        document.getElementById("thankyou-section").style.display = "flex";
        let someText = document.getElementById("result");
        someText.textContent = userRating;   // userRating
    }
    else{
        alert ("Please choose your rating!");
    }
}


