// console.log('You can ignore single and double quotes this: \\\' \\\' \\\" \\\"');

// let userName = prompt('What\'s you name?', 'Name');
// alert(`Your name is: ${userName}`);

// let userSurname = prompt('What\'s you Surname?', 'Surname');
// alert(`Your fullname is: ${userName} ${userSurname}`);

// let age = prompt('How old are you?', 'Age');
// alert(`Your fullname is: ${userName} ${userSurname}, your age is: ${age}`);

// let access = confirm('Are you admin?');
// alert(`Your fullname is: ${userName} ${userSurname}, your age is: ${age}, admin status is: ${access}`);

// console.log (Boolean (alert('5')));
// console.log (true > false);
// console.log (true > 5);
// console.log (true < '5');
// console.log (true > null);

// Lesson 19 Operators and operations
let minSalary = 2000;
let salaryMonth1 = parseFloat(prompt('Enter first month salary', '1'));
let salaryMonth2 = parseFloat(prompt('Enter second month salary', '2'));
let totalSalary = salaryMonth1 + salaryMonth2;
let bonusSalary = totalSalary + 1;
// let isLowMinSalary = bonusSalary < minSalary;
// let isAboveMinSalary = bonusSalary >= minSalary;
let finish = bonusSalary < minSalary ? `I\'m out`:` I\'m ready to work`;
alert(`You have extra bonus! Your total salary was: ${totalSalary}$ It\'s increase for 1$ and now it is: ${bonusSalary}$`);
// let continueWorking = confirm('Will you work next?');
alert(finish);


