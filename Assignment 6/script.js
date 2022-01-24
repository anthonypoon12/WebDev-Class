"use strict;"
const PartAbtn=document.getElementById("PartA");
PartAbtn.addEventListener('click', PartA);
const PartBbtn=document.getElementById("PartB");
PartBbtn.addEventListener('click', PartB);
const testc1 = 100;
const testc2 = 0;
const testc3 = 10;
const testf1 = 32;
const testf2 = 10;
const testf3 = 102;
function PartA(){
    const scores = [];
    scores[0] = document.getElementById("Nets1").value;
    scores[1] = document.getElementById("Nets2").value;
    scores[2] = document.getElementById("Nets3").value;
    scores[3] = document.getElementById("Knicks1").value;
    scores[4] = document.getElementById("Knicks2").value;
    scores[5] = document.getElementById("Knicks3").value;
    let message = "";
    if (scores.includes(""))
    message += "Please enter in all values\n";
    for (let i=0; i < 5; i++)
    if (isNaN(parseFloat(scores[i]))){
        message+="Please only use numbers";
        break;
    }
    if (message!=="")
    alert(message);
    else{
        var Navg = 0;
        var Kavg = 0;
        for (let i = 0; i<3; i++){
            Navg+=parseFloat(scores[i]);
        }
        Navg/=3;
        for (let i = 3; i<6; i++){
            Kavg+=parseFloat(scores[i]);
        }
        Kavg/=3;
        if (Navg<100 && Kavg<100)
        alert("Everyone's score was too low so no one wins.");
        else{
            if (Navg>Kavg)
            alert("Nets won a trophy!");
            else if (Navg<Kavg)
            alert("Knicks won a trophy!");
            else
            alert("Draw! Both teams win a trophy!");
        }
    }
}
function PartB(){
    var price = parseFloat(document.getElementById("price").value);
    price = Math.round(price*100)/100
    var tip = 0;
    isNaN(price) || price<0 ? alert("Please enter a valid price")
    :price>30 && price <100 ? tip=0.15*price
    :tip=0.2 * price;
    tip = Math.round(tip*100)/100;
    !isNaN(price) ? alert(`The bill was ${price}, the tip was ${tip}, and the total value ${tip+price}`):tip=0;
}
const ConvertCelsiusToFahrenheit = (temp) => {
    let newtemp = temp * 9 / 5 + 32;
    console.log(`${temp}°C is ${newtemp.toFixed(1)}°F`)
}
const ConvertFahrenheitToCelsius = (temp) => {
    let newtemp = (temp - 32) * 5 / 9;
    console.log(`${temp}°C is ${newtemp.toFixed(1)}°F`)
}
ConvertCelsiusToFahrenheit(testc1);
ConvertCelsiusToFahrenheit(testc2);
ConvertCelsiusToFahrenheit(testc3);
ConvertFahrenheitToCelsius(testf1);
ConvertFahrenheitToCelsius(testf2);
ConvertFahrenheitToCelsius(testf3);