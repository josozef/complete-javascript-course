/********************
* Variables and data type
*/

/*

var firstName = 'John';

console.log(firstName);


var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge);

var job;
job = 'Teacher';
console.log(job);

var 3years = 3;

*/


/********************
* Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);


// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/


/***********************
* Basic Operators
*/

/*
// Math Operators
var now, ageJohn, ageMark, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);


// Typeof Operator
var x;
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
console.log(typeof x);
*/

/***********************
* Operator precedence
*/

/*
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; //true

console.log(isFullAge);

var ageJohn = now - yearJohn; 
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 26

console.log(x,y);

// Other operators
x *= 2;
console.log(x);

x += 10;
console.log(x);

x++;
console.log(x);
*/

/*
// Coding challenge
// BMI = mass / height * height
var massJohn = 84;
var massMark = 77;
var heightJohn = 1.85;
var heightMark = 1.67;
var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);
var makerHigherBMI = bmiMark > bmiJohn;

console.log(bmiJohn);
console.log(bmiMark);
console.log('Is Mark\'s BMI greater than John\'s?' + makerHigherBMI);
*/

/***********************
* If / else statements
*/

/*

var firstName = 'John';
var civilStatus = 'single';
var isMarried = true;

if (isMarried) {
	console.log(firstName + ' is married.');
}
else {
	console.log(firstName + ' is single.');
}


var massJohn = 95;
var massMark = 77;
var heightJohn = 1.85;
var heightMark = 1.67;
var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);
var makerHigherBMI = bmiMark > bmiJohn;

console.log(bmiJohn);
console.log(bmiMark);

if(bmiMark > bmiJohn) {
	console.log('Mark\'s BMI is higher than John\'s.')
}
else
{
	console.log('John\'s BMI is higher than Mark\'s.')
}

*/


/***********************
* Boolean logic
*/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
	console.log(firstName + ' is a teenager.');
}
else if (age >= 20 && age < 30) {
	console.log(firstName + ' is a young man.');
}
else {
	console.log(firstName + ' is a man.');
}

*/

/***********************
* Ternary operator and switch statements
*/


/*
// Ternary operator
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');


var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink + '.');

// Switch
var job = 'Designer';

switch (job) {

	case 'Teacher':
		console.log(firstName + ' teaches kids how to code.');
		break;
	case 'Driver':
		console.log(firstName + ' drives an uber in Lisbon.');
		break;
	case 'Designer':
		console.log(firstName + ' designs beautiful websites.');
		break;
	default:
		console.log(firstName + ' does something else.');

}


switch (true) {
	case (age < 13):
		console.log(firstName + ' is a boy.');
		break;
	case (age >= 13 && age < 20):
		console.log(firstName + ' is a teenager.');
		break;
	case (age >= 20 && age < 30):
		console.log(firstName + ' is a young man.');
		break;
	default:
		console.log(firstName + ' is a man.');
}

*/


/***********************
* Truthy and Falsy values and equality operators
*/

// falsy values:  undefined, null, 0, '' NaN;
// truthy valyes: NOT falsy values

/*
var height = 23;

if (height || height === 0) {
	console.log('The variable is defined.');
}
else
{
	console.log('The variable has not been defined');
}

// Equality operators
if (height == '23') { //true
	console.log('The == operator does type coercion!');
}

if (height === '23') { //false
	console.log('The == operator does type coercion!');
}

*/


/***********************
* Coding challenge
*/

/*
avgScoreJohn = (89 + 120 + 103) / 3;
avgScoreMike = (116 + 94 + 123) / 3;
avgScoreMary = (97 + 134 + 105) / 3;

console.log('John: ' + avgScoreJohn);
console.log('Mike: ' + avgScoreMike);
console.log('Mary: ' + avgScoreMary);

switch (true) {

	case (avgScoreJohn > avgScoreMike && avgScoreJohn > avgScoreMary):
		console.log('John has the highest average score with ' + avgScoreJohn + '.');
		break;
	case (avgScoreMike > avgScoreJohn && avgScoreMike > avgScoreMary):
		console.log('Mike has the highest average score with ' + avgScoreMike + '.');
		break;
	default:
		console.log('Mary has the highest average score with ' + avgScoreMary + '.');
		break;

}
*/


/***********************
* Functions
*/

/*
function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement > 0) {
		console.log(firstName + ' retires in ' + retirement + ' years.');
	}
	else {
		console.log(firstName + ' is retired.');
	}
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/

/***********************
* Function statements and expressions
*/

//function declaration
//function whatDoYouDo (job, firstName) {}

//function expression
/*
var whatDoYouDo = function(job, firstName) {

	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code.';
		case 'driver':
			return firstName + ' drives an Uber in Lisbon.';
		case 'designer':
			return firstName + ' makes beautiful websites.';
		default:
			return firstName + ' does something else.';
	}
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/***********************
* Arrays
*/

/*
// Initialize New Array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate Array Data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different Data Types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer'; 
console.log(isDesigner);

*/


/***********************
* Coding Challenge
*/
/*
var tipCalculator = function(billAmount) {
	switch(true) {
		case billAmount < 50:
			return billAmount * .2;
		case billAmount >= 50 && billAmount <= 200:
			return billAmount * .15;
		case billAmount > 200:
			return billAmount * .10;
	}
}

var totalBillCalculator = function(billAmount) {
	return billAmount += tipCalculator(billAmount);
}

var allTips = [tipCalculator(124), tipCalculator(48), tipCalculator(268)];
var allBillTotals = [totalBillCalculator(124), totalBillCalculator(48), totalBillCalculator(268)];

console.log(allTips);
console.log(allBillTotals);
*/

/***********************
* Objects and Properties
*/

/*
// Object Literal
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false
};

console.log(john);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New Object Syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/


/***********************
* Objects and Methods
*/
/*
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1992,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function() {
		this.age = 2018 - this.birthYear;
	}
};

john.calcAge();
console.log(john);

*/

/***********************
* Coding Challenge
*/

/*
var John = {
	name: 'John',
	mass: 95,
	height: 1.85,
	calcBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};

var Mark = {
	name: 'Mark',
	mass: 77,
	height: 1.67,
	calcBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};

John.calcBMI();
Mark.calcBMI();

if (John.bmi > Mark.bmi) {
	console.log('John has a greater BMI than Mark with ' + John.bmi + '.');
}
else if (Mark.bmi > John.bmi) {
	console.log('Mark has a greater BMI than Mark with ' + Mark.bmi + '.');
}
else if (Mark.bmi === John.bmi) {
	console.log('John and Mark have the same BMI of ' + Mark.bmi + '.')
}
*/

/***********************
* Loops and Iteration
*/
/*
for (var i = 1; i <= 20; i+=1) {
	console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
	console.log(john[i]);
}

var i = 0;
while (i < john.length) {
	console.log(john[i]);
	i++;
}


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
	if (typeof(john[i]) !== 'string') continue;
	console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
	if (typeof(john[i]) !== 'string') break;
	console.log(john[i]);
}


// backward
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = john.length - 1; i >= 0; i--) {
	console.log(john[i]);
}

*/

/***********************
* Coding Challenge
*/

/*
function calculateAveTips(tips) {
	var totalTips = 0;
	for (var i = 0; i < tips.length; i++) {
		totalTips += tips[i];
	}
	return totalTips/tips.length;
}


var johnBills = {
	billAmounts: [124, 48, 268, 180, 42],
	tipAmounts: [], 
	totalAmounts: [],
	calcTips: function() {
		for (var i = 0; i < this.billAmounts.length; i++) {

			var percent;
			switch(true) {
				case this.billAmounts[i] < 50:
					percent = .2;
					break;
				case this.billAmounts[i] >= 50 && this.billAmounts[i] <= 200:
					percent = .15;
					break;
				case this.billAmounts[i] > 200:
					percent = .10;
					break;
			}
			this.tipAmounts[i] = this.billAmounts[i] * percent;
			this.totalAmounts[i] = this.billAmounts[i] + this.tipAmounts[i];
		}
	}
};

var markBills = {
	billAmounts: [77, 375, 110, 45],
	tipAmounts: [], 
	totalAmounts: [],
	calcTips: function() {
		for (var i = 0; i < this.billAmounts.length; i++) {

			var percent;
			switch(true) {
				case this.billAmounts[i] < 100:
					percent = .2;
					break;
				case this.billAmounts[i] >= 100 && this.billAmounts[i] <= 300:
					percent = .1;
					break;
				case this.billAmounts[i] > 300:
					percent = .25;
					break;
			}
			this.tipAmounts[i] = this.billAmounts[i] * percent;
			this.totalAmounts[i] = this.billAmounts[i] + this.tipAmounts[i];
		}
	}
};

johnBills.calcTips();
markBills.calcTips();
johnBills.averageTip = calculateAveTips(johnBills.tipAmounts);
markBills.averageTip = calculateAveTips(markBills.tipAmounts);
console.log(johnBills);
console.log(markBills);

*/











