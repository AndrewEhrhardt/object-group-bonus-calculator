const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

// Hi Andy
/*
Those who have a rating of a 2 or below should not receive a bonus.
Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
No bonus can be above 13% or below 0% total.
*/

// 
// function that takes in the employee object as an argument, returns modified object. 
// New object should have 
// name 
// bonusPercentage, 
// totalCompensation 
// total bonus
// Loop through the array passed into the function to access each employee
// Then call a new function to access employeeNumber, annual salary and review rating of each object passed in
// 
//
//

function accessEmployeeData(employeeList){
  console.log('in accessEmployeeData');
  let employeeBonusArray = []; // empy array to store new objects
  for (let employee of employeeList){
    console.table(employee);
    // call function to create new object
    // push new object into employeeBonusArray
    employeeBonusArray.push(bonusCalculator(employee));
  }
  return employeeBonusArray;
}

function bonusCalculator(employeeObj){
  console.log('in bonus');
  let empBonus = 0;
  let empSalary = parseInt(employeeObj.annualSalary);
  let empBonusPercentage = 0;
  let employeeBonusStatement = {
    name: employeeObj.name,
    totalCompensation: empSalary, // + empBonus,
    bonusPercentage: empBonusPercentage, 
    // will a switch statement work here? 
    totalBonus: empBonus 
  };

  switch(employeeObj.reviewRating) {
    case 1:
    case 2:
      console.log('no change');// some code
      return employeeBonusStatement;
      break;
    case 3:
      employeeBonusStatement.bonusPercentage = 4; //some code
      break;
    case 4:
      employeeBonusStatement.bonusPercentage = 6; //some code
      break;
    case 5:
      employeeBonusStatement.bonusPercentage = 10; //some code
      break;
    default:
      console.log('default');
  }
  if (employeeObj.employeeNumber.length === 4){
    employeeBonusStatement.bonusPercentage += 5;
  }
  if (empSalary > 65000){
    employeeBonusStatement.bonusPercentage -= 1;
  }
  if (employeeBonusStatement.bonusPercentage > 13){
    employeeBonusStatement.bonusPercentage = 13;
  }
  employeeBonusStatement.totalCompensation = parseInt((employeeBonusStatement.bonusPercentage/100 + 1) * empSalary);
  employeeBonusStatement.totalBonus = employeeBonusStatement.totalCompensation - employeeObj.annualSalary;
  return employeeBonusStatement;
}

console.log(accessEmployeeData(employees));

