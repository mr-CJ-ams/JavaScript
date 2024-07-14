// ENCAPSULATION is the process of hiding and securing the properties of objects. Direct access to encapsulated properties is not possible and we have to provide other mechanisms to operate/read that data. Typically, this is done by making class variable properties private and providing public class methods to access necessary data.
// Encapsulation can also be done by making modules out of code

// SAMPLE 1 via FUNCTION

// function Animal(val) {
//     let name = val;
//     let publicApi = {
//         setName: (val) => {
//             name = val;
//         },
//         getName: () => {
//             return name;
//         }
//     }

//     return publicApi;
// }

// let animal = new Animal("DOG");
// animal.setName("Cat");

// console.log(animal.getName());
// console.log(animal.name);

// ---------------------------------------------------------------------------------------------------------

// In the above code, the name property of Animal isn’t directly accessible but only via publicApi methods. This is because we are returning publicApi object that doesn’t have a name property. Its properties(setName and getName) utilize name property from its lexical scope.

// Via class, this can be done by making class variables private using # before the name of the variable.



// SAMPLE 2 via CLASS

class Animal{
    #name;
    constructor(name){
        this.#name=name;
    }

    setName(val){
        this.#name = val;
    }

    getName(){
        return this.#name;
    }
}

let animal = new Animal("Carlo");
animal.setName("Ricmar");

console.log(animal.getName());
console.log(animal.name);
