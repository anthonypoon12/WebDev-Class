var score = 10
var highscore = 0
var answer = Math.floor(Math.random()*101)
console.log(answer);
var guesses = [];
var won = false;
$("#check").click(function(){
    var input = $("#userInput").val();
    if (won===true)
        alert("Press Reset to Play Again!");
    else{
        if (input==="")
            alert("no input");
            else if (isNaN(parseInt(input)))
            alert("invalid value");
            else{
                var innum = parseInt(input);
                if(score===0){
                    alert("Gameover! Press Reset to play again!")
                }
                else if (guesses.indexOf(innum)!==-1){
                    alert("You already guessed this!");
                }
                else{
                    guesses.push(innum);
                    if (innum > answer){
                        alert("Too high");
                        score--;
                        $("#score").text(score)
                        $("#log").append(`<li>${innum}</li>`)
                    }
                    else if (innum <answer){
                        score--;
                        $("#score").text(score)
                        if (score!==0)
                        alert("Too low");
                        $("#log").append(`<li>${innum}</li>`)
                    }
                    else{
                        won=true;
                        $("body").css("background-color","green")
                        if (score>highscore)
                        highscore=score;
                        $("#highscore").text(highscore);
                        $("#log").append(`<li>${innum}</li>`).css("flex-direction","column-reverse")
                        alert("You're a winner champ!")
                        alert("Please press reset to play again!")
                    }
                }
            }
    }
})
 
$("#reset").click(function(){
    won=false;
    score = 10
    $("#score").text(score)
    $("body").css("background-color","#b6e9ea")
    answer = Math.floor(Math.random()*101)
    console.log(answer);
    $("li").remove()
    guesses=[];
})
