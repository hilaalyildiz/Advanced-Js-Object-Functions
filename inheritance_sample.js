// Person constructor
function Person(name){
    this.name = name;
}

Person.prototype.Introduce= function(){
    console.log('hello my name is '+ this.name);
}

// Teacher constructor 
function Teacher(name,branch){
    Person.call(this,name);
    this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
// Person'ın constructorı teacher'a kopyalandığı için bu satırı ekledik.

Teacher.prototype.teach = function(){
    console.log('I teach ' + this.branch);
}

// Student constructor
function Student(name, number){
    Person.call(this,name);
    this.number = number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function(){
    console.log('My student number is '+ this.number);
}

// Headmaster constructor
function Headmaster(name,branch){
    Teacher.call(this.name,branch);
}

Headmaster.prototype = Object.create(Teacher.prototype);
Headmaster.prototype.constructor = Headmaster;

Headmaster.prototype.shareTask = function(){
    console.log('I ha already shared all the work');
}

let p1 = new Person('Cınar');
p1.Introduce();

let t1 = new Teacher('Sadik','math');
t1.Introduce();
t1.teach();

let s1 = new Student('Yigit','100');
s1.Introduce();
s1.study();

let h1 = new Headmaster('Ahmet','Math');
h1.Introduce(); // person
h1.teach(); // teacher
h1.shareTask(); // headmaster