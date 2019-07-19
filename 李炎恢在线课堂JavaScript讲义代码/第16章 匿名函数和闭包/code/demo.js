function Person(name){
	this.name = name;
	this.SayHello = function () {
		alert('');
	};
}


function Employee(name,salary){

	Person.call(this, name);
	this.salary = salary;
}

//Employee.prototype = new Person('b');

var BillGates = new Person("Bill Gates");

var SteveJobs = new Employee("Steve Jobs",1234);
SteveJobs.SayHello();

//console.log(SteveJobs);
