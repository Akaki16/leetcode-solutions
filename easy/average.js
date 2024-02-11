"use strict";

const findRemainingSalaries = function (salary, minSalary, maxSalary) {
  const remainingSalaries = [];

  for (let i = 0; i < salary.length; i++) {
    if (salary[i] !== minSalary && salary[i] !== maxSalary) {
      remainingSalaries.push(salary[i]);
    }
  }

  return remainingSalaries;
};

const calcAverage = function (remainingSalaries) {
  let total = 0;

  for (let i = 0; i < remainingSalaries.length; i++) {
    total += remainingSalaries[i];
  }

  return total / remainingSalaries.length;
};

const average = function (salary) {
  const minSalary = Math.min(...salary);
  const maxSalary = Math.max(...salary);

  const remainingSalaries = findRemainingSalaries(salary, minSalary, maxSalary);

  const averageSalary = calcAverage(remainingSalaries);

  return averageSalary;
};

console.log(average([4000, 3000, 1000, 2000]));
