// Question: 02 - Farenhite to Celsius convertor
function temperature(){
    var farenhite = Number(prompt("Enter temperature in Farenhite"));
    var celsius = 0;
    isNaN(farenhite) ? 
    console.log("Error: Enter a number.")
    : 
    celsius = (farenhite - 32) * 5/9;
    // console.log(farenhite + "℉ in Celsius is "+ celsius + "℃");
    console.log(`${farenhite}℉ in Celsius is ${celsius}℃`);
    ;

}
