function Employee(name,salary){
    if (!(this instanceof Employee)){
        return new Employee(name,salary);
    }
    // Employee'den türeyen nesne employee değilse nesneyi kendimiz döndürebiliriz.

    this.name = name;
    this.salary = salary;
}

Employee.prototype.calculateSalary = function(){
    var month = new Date().getMonth()+1;
    var tax = 0;
    var total = this.salary*month;

    if(this.salary<=20000){
        tax = total*0.2;
    } else if (total > 20000 && total <=3000){
        tax = total*0.25;
    }else {
        tax = total*0.3;
    }

    return {
        tax : tax,
        paid : total - tax
    }
}

var emp1 = Employee('Yigit',3000);
var emp1_salary = emp1.calculateSalary();

var emp2 = Employee('Can',4000);
console.log(emp2);

// Object.create 

let personProto = {
    calculateAge : function(){
        return 2022 - this.yearOfBirth;
    }
}

let ahmet = Object.create(personProto);

ahmet.name = 'ahmet';
ahmet.yearOfBirth = 2010;

console.log(ahmet);
console.log(ahmet.calculateAge());

/********************************/

Person.prototype.calculateAge = function(){
    return 2022 - this.yearOfBirth;
}

let Teacher = function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job);
    // Her bir parametreye this atamasını bu şekilde tek satırda yapabiliriz.
    this.subject = subject;
    // subject parametresi teacher'a özgü olduğu için onu ayrı yazdık.
}

let mehmet = new Teacher('mehmet', 1989, 'teacher','math');

// Inherit the person ptototype method
Teacher.prototype= Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;
// Teacher person üzerinden kalıtım alması için bu satır eklenir.

console.log(mehmet.calculateAge());