const numberOfEmployeesWhoMetTarget = function(hours, target) {
    let employees = 0;

    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            employees++;
        }
    }

    return employees;
};

console.log(numberOfEmployeesWhoMetTarget([1, 2, 3, 4, 5, 6], 5));
