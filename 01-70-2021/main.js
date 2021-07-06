let company = (function(){
    let salary;
    let allowance;
    // console.log(salary);
    return{
        director: function(){
            salary = 300000;
            allowance = 75000;
            return salary + allowance;
        },
        manager: function(){
            salary = 200000;
            allowance = 50000;
            return salary + allowance;
        },
        worker: function(){
            salary = 100000;
            allowance = 25000;
            return salary + allowance;
        }
    };
})();

// Write new function here