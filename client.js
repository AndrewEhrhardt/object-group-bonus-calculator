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
  // let empBonus = 0;
  let empBonusPercentage = 0;
  let employeeBonusStatement = {
    name: employeeObj.name,
    totalCompensation: parseInt(employeeObj.annualSalary) + bonus,
    // do we need an if statement to contain total bonuses?
    
    bonusPercentage: 0, // add calculation here
    // will a switch statement work here? 
    totalBonus: 0, // add calculation here
  };
  // if (employeeObj.reviewRating  2){
  //   return employeeBonusStatement;
  // } 
  switch(employeeObj.reviewRating) {
    case 1:
    case 2:
      console.log('no change');// some code
      return employeeBonusStatement;
      break;
    case 3:
      employeeObj.bonusPercentage = .04; //some code
      break;
    case 4:
      employeeObj.bonusPercentage = .06; //some code
      break;
    case 5:
      employeeObj.bonusPercentage = .1; //some code
      break;
    default:
      console.log('default');
  }
  if ()
  
  return employeeBonusStatement;
}

console.log(accessEmployeeData(employees));

