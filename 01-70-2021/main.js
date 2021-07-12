let company = (function(){
    let salary;
    let allowance;
    function director(){
        salary = 300000;
        allowance = 75000;
        return salary + allowance;
    }
    function manager(){
        salary = 200000;
        allowance = 50000;
        return salary + allowance;
    }
    function worker(){
        salary = 100000;
        allowance = 25000;
        return salary + allowance;
    }
    return{
       manager: manager(),
       director: director(),
       worker: worker()
    };
})();

function main(person){
    console.log(`Rs.${company[person]}`);
}

main('manager');