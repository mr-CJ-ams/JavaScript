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

    sayName(){
        console.log("Student 1");
        super.sayName();
    }


}

const student = new Student("Carlo", 22, 1);

student.logDetails();
student.sayName();