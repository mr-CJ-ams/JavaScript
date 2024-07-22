// Polymorphism is the practice to design objects in such a way that they share and override behavior from parent objects.

// When a property is referred to by an object whether it’s a method or variable, the object first looks for it in its own scope, if not found then go one level above and look for it in the parent scope. It goes on until that property is found or returned undefined otherwise. This behavior of javascript objects can be utilized in such a way that child objects can override the functionality of their parent objects where required without modifying the parent.

// In the code from the inheritance, the student object calls sayName function which is not present in the Student class but in its parent, yet it is callable. We can override this function in the Student class and customize it’s behavior.

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

const person = new Person("Jead", 25, 2);
person.sayName();