"use strict;"

function tempconverter(){
    var intemp = document.getElementById('temp').value;
    while(isNaN(intemp))
        intemp = prompt("Please enter temperature in Celsius as a number");
    alert(`Your temperature in Fahrenheit is ${parseFloat(intemp) * 9 / 5 + 32} degrees`);
}
function BMI(){
    var lmass=parseFloat(document.getElementById('lmass').value);
    while(isNaN(lmass))
        lmass = prompt("Please enter a number for Lucas' mass");
    var lheight=parseFloat(document.getElementById('lheight').value);
    while(isNaN(lheight))
        lheight = prompt("Please enter a number for Lucas' height");
    var jmass=parseFloat(document.getElementById('jmass').value);
    while(isNaN(jmass))
        jmass = prompt("Please enter a number for John's mass");
    var jheight=parseFloat(document.getElementById('jheight').value);
    while(isNaN(jheight))
        jheight = prompt("Please enter a number for John's height");
    var johnBMI=jmass/jheight/jheight;
    var lucasBMI=lmass/lheight/lheight;
    var lucasHigherBMI = lucasBMI > johnBMI;
    if (!lucasHigherBMI)
        alert(`John's BMI(${johnBMI}) is higher than Lucas' BMI(${lucasBMI}) that is ${!lucasHigherBMI}`)
        else
        alert(`John's BMI(${johnBMI}) is lower than Lucas' BMI(${lucasBMI}) that is ${lucasHigherBMI}`)
}
function partC(){
    var input = prompt("Please enter a number");
    while(isNaN(input) || input===""){
        var input = prompt("Please enter a number");
        console.log("Please enter a number!");
    }
    if(parseFloat(input)===10)
        console.log("You win 10 point");
    else if (parseFloat(input)===8)
        console.log("You win 8 points");
    else
        console.log("NOT MATCHED!!");
}