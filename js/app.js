console.log('You can ignore single and double quotes this: \\\' \\\' \\\" \\\"');

let userName = prompt('What\'s you name?', 'Name');
alert(`Your name is: ${userName}`);

let userSurname = prompt('What\'s you Surname?', 'Surname');
alert(`Your fullname is: ${userName} ${userSurname}`);

let age = prompt('How old are you?', 'Age');
alert(`Your fullname is: ${userName} ${userSurname}, your age is: ${age}`);

let access = confirm('Are you admin?');
alert(`Your fullname is: ${userName} ${userSurname}, your age is: ${age}, admin status is: ${access}`);

console.log (Boolean (alert('5')));
console.log (true > false);
console.log (true > 5);
console.log (true < '5');
console.log (true > null);