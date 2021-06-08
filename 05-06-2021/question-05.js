// Question: 05 - Smallest and Highest value in a number list 
// TODO: Use string manipulation
function numberArray (){
    var input = prompt("Enter the number series in the following format: 2,1,1,4");
    var numberList = input.split(",");
    var smallest = numberList[0];
    var highest = 0;

    numberList.forEach(highestValue);
    numberList.forEach(lowestValue);

    function highestValue (value){
        if (Number(value) > highest){
            highest = value;
        }
    }
    function lowestValue(value){
        if (Number(value) < smallest){
            smallest = value;
        }
    }

    console.log(highest);
    console.log(smallest);
    alert("Biggest is "+ highest + " and Smallest is "+ smallest );
}
