// complete this js code
function Person(name, age) {
	this._name=name;
	this._age=age;
}
Person.prototype.greet=function(){
	console.log(`hello,my name is ${thid.name} I am ${this.age} years old.`)
}
function Employee(name,age,jobTitle){
	Person.call(this,name,age);
	this._jobTitle=jobTitle;
}

function Employee(name, age, jobTitle) {
	Employee.prototype.jobGreet=function(){
		console.log(`Hello,my name is ${this.name},I am ${this.age} year old and my job tileis ${this,jobTitle}.`)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
