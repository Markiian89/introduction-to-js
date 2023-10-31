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
// let minSalary = 2000;
// let salaryMonth1 = parseFloat(prompt('Enter first month salary', '1'));
// let salaryMonth2 = parseFloat(prompt('Enter second month salary', '2'));
// let totalSalary = salaryMonth1 + salaryMonth2;
// let bonusSalary = totalSalary + 1;
// // let isLowMinSalary = bonusSalary < minSalary;
// // let isAboveMinSalary = bonusSalary >= minSalary;
// let finish = bonusSalary < minSalary ? `I\'m out`:` I\'m ready to work`;
// alert(`You have extra bonus! Your total salary was: ${totalSalary}$ It\'s increase for 1$ and now it is: ${bonusSalary}$`);
// // let continueWorking = confirm('Will you work next?');
// alert(finish);

// Lesson 20 Operators and operations
// let age = parseInt(prompt("Enter your age:", "0"));

// if (age <= 17) {
//   let response = confirm("Do you study at school?");
// } else if (age > 17 && age < 25) {
//   let response = confirm("Do you study at university?");
// } else if (age >= 25 && age < 69) {
//   let response = confirm("Do you have a job?");
// } else {
//   let response = confirm("What are you doing?");
// }

// let displayValue = prompt("Введіть значення властивості display (block, flex, grid, inline, none):");

// switch (displayValue) {
//   case "block":
//     alert("display: block;");
//     break;
//   case "flex":
//     alert("display: flex;");
//     break;
//   case "grid":
//     alert("display: grid;");
//     break;
//   case "inline":
//     alert("display: inline;");
//     break;
//   case "none":
//     alert("display: none;");
//     break;
//   default:
//     alert("Set 'display: inline-block;'");
//     break;
// }

// function isNumericInput(inputValue) {
//     return /^\d+$/.test(inputValue);
//   }
  
//   function multiplyBy12() {
//     let numericValue;
  
//     do {
//       let inputValue = prompt("Enter a positive numeric value:");
  
//       if (isNumericInput(inputValue)) {
//         numericValue = parseFloat(inputValue);
  
//         if (!isNaN(numericValue) && numericValue > 0) {
//           let result = numericValue * 12;
//           alert(`${numericValue} by 12: ${result}`);
//         } else {
//           alert("Your number is incorect, please enter corect number");
//         }
//       } else {
//         alert("Your number is incorect, please enter corect number");
//       }
//     } while (!isNumericInput(inputValue) || isNaN(numericValue) || numericValue <= 0);
//   }
  
// multiplyBy12();
  
// for (let number = 2; number <= 50; number += 2) {
//     console.log(number);
// }

// Lesson 21 Локальні та зовнішні змінні, функції

// function maxNumber(a, b) {
//     if (a > b) {
//       return a;
//     } else if (b > a) {
//       return b;
//     } else {
//       return "a = b";
//     }
//   }
  
//   let a = parseFloat(prompt("Enter first number (a):"));
//   let b = parseFloat(prompt("Enter second number (b):"));
  
//   alert(maxNumber(a, b));


// function reverse(number) {
//     return -number;
//   }
  
//   let inputNumber = parseFloat(prompt("Enter the number"));
//   let reversedNumber = reverse(inputNumber);
//   alert(reversedNumber);
  
// function three(number, count) {
//     return number + 3 * count;
//     }
  
//     let number = parseFloat(prompt("Enter the number:"));
//     let count = parseInt(prompt("Enter the number of additions (count):"));
//     alert(three(+number, +count));
  
// function KmToM(km) {
//     return km * 1000;
//   }
  
//   function KmToCm(km) {
//     return km * 100000;
//   }
  
//   function getMetric(metric, km) {
//     if (metric === "m") {
//       return KmToM(km);
//     } else if (metric === "cm") {
//       return KmToCm(km);
//     } else {
//       return "Unknown unit of measurement";
//     }
//   }
  
//   let metric = prompt("Enter the unit of measurement (m or cm):");
//   let km = parseFloat(prompt("Enter the distance in kilometers:"));
  
//   if (typeof result === "number") {
//     alert(`Distance in the specified unit: ${result}`);
//   } else {
//     alert(getMetric(metric, km));;
//   }

// Lesson 22 Об'єкти
// let car = {
//     model: "Mazda",
//     year: 2019,
//     color: "red",
//     type: "electric",
//     signal: function() {
//       alert('fa! fa!');
//     }
// };
  
//   car.color = "blue";
  
//   car.signal();

// let salaries = {
//     frontend: 12000,
//     backend: 10000,
//     designer: 8000,
//     dayPay() {
//       alert('We must pay salary on Tuesday!');
//     },
//     total() {
//       let sum = 0;
//       for (let key in this) {
//         if (typeof this[key] === 'number') {
//           sum += this[key];
//         }
//       }
//       console.log(sum);
//     }
//   };
  
//   salaries.total();
//   salaries.manager = 5000;
//   salaries.total();

// function Laptop(brand, system, cost) {
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
//   }
  
//   let dell = new Laptop('Dell', 'Windows', 800);
//   let apple = new Laptop('Apple', 'MAC OS', 1700);
  
//   console.log(dell);
//   console.log(apple);
  
// function Laptop(brand, system, cost) {
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
  
//     this.valueOf = function () {
//       return this.cost;
//     };
  
//     this.toString = function () {
//       return `${this.brand} ${this.system} ${this.cost}`;
//     };
  
//     this[Symbol.toPrimitive] = function(hint) {
//       if (hint === 'string') {
//         return this.brand;
//       } else if (hint === 'number') {
//         return this.cost;
//       } else {
//         return `${this.brand} ${this.system} ${this.cost} // `;
//       }
//     };
//   }
  
//   let dell = new Laptop('Dell', 'Windows', 800);
//   let apple = new Laptop('Apple', 'MAC OS', 1700);
  
//   console.log(String(dell));
//   console.log(+apple);
//   console.log(dell + apple);
  
  
  
  
  
  



