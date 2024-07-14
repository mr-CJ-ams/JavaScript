// ABSTRACTION means hiding the implementation details and showing only behavior. It’s done on the design level as opposed to encapsulation which is implemented at the application level. With abstraction, only essential details are shown to the user.

// SAMPLE 1 via CLASS

class Employee{
    #name;
    #baseSalary;
    #bunos;

    setName(val){
        this.#name = val;
    }
    setBaseSalary(val, bunos){
        this.#baseSalary = val;
        this.#bunos = bunos;
    }

    getName(){
        return this.#name;
    }

    getSalary(){
        return this.#baseSalary + this.#bunos;
    }
}

let employee = new Employee();

employee.setName("Carlo");
employee.setBaseSalary(100, 500);
console.log(employee.getName());
console.log(employee.getSalary());