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
  
  
// Lesson 23 Масиви та методи роботи з ними
// let users = ["Mike", "Nicola", "Tom"];

// console.log(users[1]);

// users[1] = "Alex";

// users.pop();
// users.pop();

// console.log(users.length);



// function compareArrays(a, b) {
//     let sumA = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     let sumB = b.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
//     if (sumA > sumB) {
//       console.log("a > b");
//     } else if (sumA < sumB) {
//       console.log("a < b");
//     } else {
//       console.log("a == b");
//     }
//   }
  
//   let a = [5, 3, -4, 25, 32, -16, 6];
//   let b = [21, -30, 9, 5, 12, -19, 5, 25];
  
//   compareArrays(a, b);




// let phrase = 'I am learning JavaScript right now';
// let wordsArray = phrase.split(' ');

// console.log(wordsArray);




// let a = [5, 3, 8, 5, 3, 2, 1, 2];
// let b = [];

// a.forEach(function (element) {
//   if (b.indexOf(element) === -1) {
//     b.push(element);
//   }
// });

// console.log(b);



// function selectionAge(users) {
//     let result = [];
//     for (let i = 0; i < users.length; i++) {
//       let user = users[i];
//       if (user.age > 18 && user.age < 21) {
//         result.push(user.id);
//       }
//     }
//     console.log(result.join(', '));
//   }
  
//   let users = [
//     { id: 1, age: 17 },
//     { id: 2, age: 18 },
//     { id: 3, age: 19 },
//     { id: 4, age: 21 },
//     { id: 5, age: 17 },
//     { id: 6, age: 20 },
//     { id: 7, age: 25 }
//   ];
  
//   selectionAge(users);
  
// Lesson 24 Рекурсія та замикання
// Завдання 1
// function sumArray(arr) {
//     if (arr.length === 0) {
//       return 0;
//     } else {
//       let currentElement = arr.pop();
//       return currentElement + sumArray(arr);
//     }
//   }

//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(sumArray(arr));


//   function sumArray(arr) {
//     return arr.length === 0 ? 0 : arr.pop() + sumArray(arr);
//   }
  
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(sumArray(arr));


//   Завдання 2
// function deepCount(arr) {
//     let count = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         count += deepCount(arr[i]);
//       }
//       count++;
//     }
  
//     return count;
//   }
  
//   console.log(deepCount([]));
//   console.log(deepCount([1, 2, 3]));
//   console.log(deepCount(["x", "y", ["z"]]));
//   console.log(deepCount([1, 2, [3, 4, [5]]]));
//   console.log(deepCount([[[[]]]]));
  

// function deepCount(arr) {
//     let count = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       count += Array.isArray(arr[i]) ? deepCount(arr[i]) : 1;
//     }
  
//     return count;
//   }
  
  
//   console.log(deepCount([]));
//   console.log(deepCount([1, 2, 3]));
//   console.log(deepCount(["x", "y", ["z"]]));
//   console.log(deepCount([1, 2, [3, 4, [5]]]));
//   console.log(deepCount([[[[]]]]));

// Завдання 3

// const employees = {
//     development: {
//         backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
//         frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
//     },
//     sales: {
//         marketing: {
//             internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
//             promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
//         },
//         sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
//     },
//     designer: [{name: 'Kate', salary: 1800}]
// }

// function sumSallary(obj) {
//     let sum = 0;

//     (function calculateSum(obj) {
//         for (let key in obj) {
//             if (Array.isArray(obj[key])) {
//                 obj[key].forEach(employee => sum += employee.salary);
//             } else {
//                 calculateSum(obj[key]);
//             }
//         }
//     })(obj);

//     return sum;
// }

// const totalSalary = sumSallary(employees);
// console.log(totalSalary);

// Завдання 4

// let arr1 = [12, 15, 7, 31];
// let arr2 = [9, 3, 17, 12, 4, 81];
// let arr3 = [6, 11, 16, 15, 11];

// let maxOfAll = Math.max.apply(null, arr1.concat(arr2, arr3));

// console.log(maxOfAll);

// Lesson 25 ООП

// Завдання 1
// class User {
//     constructor(name, login, age) {
//       this._name = name;
//       this.login = login;
//       this.age = age;
//     }
//   }
  
//   let user1 = new User('Mike', 'MK_18', 18);
//   let user2 = new User('', 'NRG', 22);
  
//   console.log(user1.login);
//   console.log(user1.age);
//   console.log(user2.login);
//   console.log(user2.age);

// Завдання 2

// class User {
//     constructor(name, login, age) {
//       this._name = name;
//       this.login = login;
//       this.age = age;
//     }
  
//     getName(isAdmin) {
//       if (isAdmin) {
//         return this._name || this.login;
//       } else {
//         return 'Permission denied';
//       }
//     }
//   }
  
//   let user1 = new User('Mike', 'MK_18', 18);
//   let user2 = new User('', 'NRG', 22);
  
//   console.log(user1.getName(true));
//   console.log(user2.getName(true));
//   console.log(user2.getName(false));
  
// Завдання 3

// class User {
//     constructor(name, login, age) {
//       this.name = name;
//       this.login = login;
//       this.age = age;
//     }
  
//     ChangeName(newName, password) {
//       if (password === '123') {
//         const oldName = this.name;
//         this.name = newName;
//         console.log(`Name Changed from ${oldName} to ${this.name}.`);
//       } else {
//         console.log('Permission denied.');
//       }
//     }
//   }
  
//   let user1 = new User('Mike', 'MK_18', 18);
//   user1.ChangeName('Bill', '123');
//   user1.ChangeName('Tom', '456');
  
// Завдання 4
// class User {
//     constructor(name, login, age) {
//       this.name = name;
//       this.login = login;
//       this.age = age;
//     }
//   }
  
//   class Admin extends User {
//     #isAdmin = true;
  
//     getUserName(user) {
//       console.log(user.name);
//     }
//   }
  
//   let user1 = new User('Mike', 'MK_18', 18);
//   let admin = new Admin('Admin', 'admin_1', 30);
  
//   admin.getUserName(user1);

//   Завдання 5
// class User {
//     #phone;
  
//     constructor(name, phone) {
//       this.name = name;
//       this.#phone = phone;
//     }
  
//     getPhone(isAdmin) {
//       if (isAdmin) {
//         return this.#phone;
//       } else {
//         const [prefix, middle, suffix] = this.#phone.split('-');
//         const maskedPhone = `${prefix}-******-${suffix}`;
//         return maskedPhone;
//       }
//     }
//   }
  
//   let user1 = new User('Mike', '067-888-88-99');
//   let user2 = new User('Tom', '099-888-88-99');
  
//   console.log(user1.getPhone(false));
//   console.log(user2.getPhone(false));
//   console.log(user1.getPhone(true));
//   console.log(user2.getPhone(true));
  
  
//   Посилення задачі
// class User {
//     #phone;
  
//     constructor(name, phone) {
//       this.name = name;
//       this.#phone = phone;
//     }
  
//     getPhone(isAdmin) {
//       if (isAdmin) {
//         return this.#phone;
//       } else {
//         const phoneParts = this.#phone.split('-');
//         const middlePart = phoneParts[1];
  
//         // Замінюємо середню частину на зірочки (*)
//         for (let i = 0; i < middlePart.length; i++) {
//           phoneParts[1] = phoneParts[1].replace(phoneParts[1][i], '*');
//         }
  
//         const maskedPhone = phoneParts.join('-');
//         return maskedPhone;
//       }
//     }
//   }
  
//   let user1 = new User('Mike', '067-888-88-99');
//   let user2 = new User('Tom', '099-888-88-99');
  
//   console.log(user1.getPhone(false));
//   console.log(user2.getPhone(false));
//   console.log(user1.getPhone(true));
//   console.log(user2.getPhone(true));
  
// lesson 26. getter, setter методи

// 1 Завдання
// const user = {};

// Object.defineProperty(user, 'name', {
//   value: 'John',
//   writable: false,
//   enumerable: true,
//   configurable: false, 
// });

// Object.defineProperty(user, 'age', {
//   value: 30,
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });

// Object.defineProperty(user, 'id', {
//   value: 123,
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });


// console.log(user.name); // Виводимо ім'я (читання)
// console.log(user.age); // Виводимо вік (читання)
// console.log(user.id); // Виводимо ідентифікатор (читання)

// user.name = 'Tom'; // Спроба змінити ім'я - не вдається (запис заборонено)
// user.age = 35; // Спроба змінити вік - не вдається (запис заборонено)
// delete user.id; // Спроба видалити ідентифікатор - не вдається (видалення заборонено)

// Завдання 2
// let dataBase = {
//     dbName: 'user', 
//     dbType: 'MySQL'
// };

// let configurateDB = {
//     token: '123', 
//     password: '567',
//     user: 'admin'
// };

// Object.freeze(dataBase);

// Object.seal(configurateDB);

// dataBase.dbName = 'newUser'; // Спроба змінити значення властивості - не вдається (заморожено)
// dataBase.newProp = 'newProperty'; // Спроба додати нову властивість - не вдається (заморожено)
// delete dataBase.dbType; // Спроба видалити властивість - не вдається (заморожено)

// configurateDB.token = 'newToken'; // Спроба змінити значення властивості - дозволено (заморожено)
// configurateDB.newProp = 'newProperty'; // Спроба додати нову властивість - не вдається (заморожено)
// delete configurateDB.password; // Спроба видалити властивість - не вдається (заморожено)

// Завдання 3
// let salaries = {
//     frontend: 2000, 
//     backend: 1500, 
//     design: 1000,
//     get sum() {
//         let sum = 0;
//         for (salary in this){
//             if (!isNaN(this[salary])) {
//                 sum += this[salary];
//             }
//         }
//         return sum;
//     },
//     set addSalaries(salaryArray) {
//         for (let item of salaryArray) {
//             let parts = item.split(': ');
//             if (parts.length === 2) {
//                 let position = parts[0];
//                 let newSalary = parseFloat(parts[1]);
//                 if (!isNaN(newSalary)) {
//                     this[position] = newSalary;
//                 }
//             }
//         }
//     }
// };

// salaries.addSalaries = ['frontend: 2500', 'backend: 1750', 'design: 1300', 'manager: 800'];
// console.log(salaries);


// Завдання 4
// let user = {
//     name: 'Mike',
//     surname: 'Davis',
//     age: 25,
//     userInfo: function() {
//         const allProperties = Object.keys(this).map(key => `${key}: ${this[key]}`);
//         return allProperties.join(', ');
//     }
// };

// console.log(user.userInfo()); // name: Mike, surname: Davis, age: 25
// user.login = 'MK_18';
// console.log(user.userInfo()); // name: Mike, surname: Davis, age: 25, login: MK_18

// Lesson 27 Успадкування
// Завдання 1
// let car = {
//     type: electric,
//     wheels: 4,
// }

// let sportCar = {
// doors: 2
// }

// 1.1) Успадкування властивостей об'єкту car об'єктом sportCar:
// let sportCar = Object.create(car);
// sportCar.doors = 2;

// 1.2) Створення об'єкту passengerCar, який успадковує властивості від об'єкту car і має власну властивість doors:
// let passengerCar = Object.create(car);
// passengerCar.doors = 4;

// 1.3) Створення об'єкту toyCar, який успадковує властивості від об'єктів sportCar та car і має власну властивість type:
// let toyCar = Object.create(sportCar);
// toyCar.type = 'toy';

// Завдання 2

// let employees = {
//     pay(month, sum) {
//         if (!this.wallet) {
//             this.wallet = {};
//         }
//         this.wallet[month] = sum;
//     }
// }

// let frontendDeveloper = {
//     name: 'Mike',
//     wallet: {},
// }

// let backendDeveloper = {
//     name: 'Bob',
//     wallet: {},
// }

// Object.setPrototypeOf(frontendDeveloper, employees);
// Object.setPrototypeOf(backendDeveloper, employees);

// backendDeveloper.pay('june', 1500);
// console.log(backendDeveloper.wallet.june); // 1500
// console.log(frontendDeveloper.wallet.june); // undefined

// Завдання 3
// function User(name, age) {
//     this.name = name;
//     this.age = age
// }

// let user_1 = new User('Mike', 18);
// let user_2 = new User('Bob', 25);

// Завдання 4
// function UserType(name) {
//     for (let i = 0; i < name.length; ++i) {
//         this[i] = name[i];
//         if (i + 1 === name.length) {
//             Object.defineProperty(this, 'length', {
//                 enumerable: true,
//                 writable: false,
//                 configurable: true,
//                 value: i + 1
//             });
//         }
//     }

//     Object.setPrototypeOf(this, Array.prototype);
// }

// let admins = new UserType(['Mike', 'Bob', 'Nikola']);
// console.log(admins.join('; ')); // Mike; Bob; Nikola














  

  
  
  
  
  
  
  

  
  


  
  
  
  



