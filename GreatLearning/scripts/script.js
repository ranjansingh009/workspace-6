$(document).ready(function(){

    //Login 
    $('#loginForm').click(function() {
        var userName = $("#userName").val();
        var password = $("#password").val();
       if(password == "123"){
           
            location.href = "home.html";
       }
       else{
        alert("Please enter correct username and password");
        return false;
       }
    });

    //logout
    $('#logout').click(function(){
        location.href = "index.html";
    });

    //redirect to Roll the dice page
    $("#rollADice").click(function(){
        location.href = "rollADice.html";
    });
    
    //Random Number Generator
    var randomNumber = Math.floor(Math.random() * 101);
    $("#randomNumber").text(randomNumber);

});

function rollDice(){
    var userInput = document.getElementById("userInput");
    var num = Math.floor(Math.random() * 6) + 1;
    userInput.innerHTML = num;
    var turnText = document.getElementById("turnText");
    turnText.innerHTML = "System Turn";
    document.getElementById("rollDice").disabled = true;
    setTimeout(function(){
         systemMove();
    },5000)
   

}

function systemMove(){
    var systemInput = document.getElementById("systemInput");
    var systemNum = Math.floor(Math.random() * 6) + 1;
    systemInput.innerHTML = systemNum;
    var turnText = document.getElementById("turnText");
    turnText.innerHTML = "Your Turn";
    document.getElementById("rollDice").disabled = false;
    
}

