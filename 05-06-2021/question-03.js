// Question: 03 - Number of days lived
function dateOfBirth () {
    var day = prompt("Enter your Birth Day (Example: 31)");
    var month = prompt("Enter your Birth Month (Example: 12)");
    var year = prompt("Enter your Birth Year (Example: 2002)");
    var dateOfBirth = new Date (year+"-"+month+"-"+day);
    var birthDayInMs = dateOfBirth.getTime();
    var daysBefore = (((birthDayInMs / 1000) / 60) / 60) / 24;
    var toDateMs = Date.now();
    console.log(toDateMs);
    var daysToDate = (((toDateMs / 1000) / 60) / 60) / 24;
    alert("Days lived: "+ Math.trunc(daysToDate - daysBefore));
}
