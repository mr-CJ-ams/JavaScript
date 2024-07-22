// INHERITANCE is an important concept in Object Oriented Programming paradigm. It’s a process by which child objects inherit the properties of the parent object. In javascript, inheritance is built into objects and every object has a property called prototype which refers to the parent of that object and this chain goes up until the prototype points to null.

// SAMPLE 1 via CLASS

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayName(){
        console.log(this.name);
    }
}

class Student extends Person{
    constructor(name, age, rollNumber){
        super(name,age);
        this.rollNumber = rollNumber;
    }

    logDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Roll number: ${this.rollNumber}`)
    }
}

const student = new Student("Carlo", 22, 1);

student.logDetails();
student.sayName();


