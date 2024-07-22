// ABSTRACTION means hiding the implementation details and showing only behavior. It’s done on the design level as opposed to encapsulation which is implemented at the application level. With abstraction, only essential details are shown to the user.

// SAMPLE 1 via CLASS

// class Employee{
//     #name;
//     #baseSalary;
//     #bunos;

//     setName(val){
//         this.#name = val;
//     }
//     setBaseSalary(val, bunos){
//         this.#baseSalary = val;
//         this.#bunos = bunos;
//     }

//     getName(){
//         return this.#name;
//     }

//     getSalary(){
//         return this.#baseSalary + this.#bunos;
//     }
// }

// let employee = new Employee();

// employee.setName("Carlo");
// employee.setBaseSalary(100, 500);
// console.log(employee.getName());
// console.log(employee.getSalary());




// Notice how getSalary method is updating salary in the backend that the end user wouldn’t know. In a real application, this bonus can be fetched from some database and added to the base salary.

//SAMPLE 2 via FUNCTION

// function Employee(){
//     let name;
//     let baseSalary;

//     var publicApi = {};

//     publicApi.setName = (val) => {
//         name = val;
//     }

//     publicApi.getName = () => {
//         return name;
//     }

//     // -------------------------

//     publicApi.setBaseSalary = (val) => {
//         baseSalary = val;
//     }

//     publicApi.getBaseSalary = () => {
//         return baseSalary;
//     }

//     return publicApi;

// }

// let employee = new Employee("Mike");
// employee.setName();
// employee.setBaseSalary(1000);

// console.log(employee.getName());





// Problem 2: E-Commerce Order Processing
// Description:
// Design a system for processing orders in an e-commerce application. The system should abstract the details of order processing, including adding items to an order, removing items, and calculating the total price.

// Requirements:

// Create an Order class with methods to add items, remove items, and calculate the total price of the order.
// Create an Item class to represent each item with properties such as name, price, and quantity.
// The Order class should manage a list of items and provide a method to calculate the total price based on the items in the order.


class Item{
    #name;
    #price;
    #quantity;

    setName(val){
        this.#name=val;
    }

    setPrice(val){
        this.#price=val;
    }

    setQuantity(val){
        this.#quantity=val;
    }
    getName(){
        return this.#name;
    }

    getPrice(){
        return this.#price;
    }

    getQuantity(){
        return this.#quantity;
    }
}

class Order{

    constructor(){
        this.items = [];
    }

    addItem(item){
        this.items.push(item);
    }

    removeItem(itemName){
        this.items = this.items.filter(item => item.getName() !== itemName);
    }

    calculateTotal(){
        return this.items.reduce((total, item) => total + (item.getPrice() * item.getQuantity()), 0);
    }

    // Method to display the order details
  displayOrder() {
    console.log('Order Details:');
    this.items.forEach(function(item) {
      console.log(`Item: ${item.getName()}, Price: $${item.getPrice()}, Quantity: ${item.getQuantity()}`);
    });
    console.log(`Total Price: $${this.calculateTotal()}`);
  }
}

// Example usage:
const order = new Order();

const item1 = new Item();
item1.setName("Laptop")
item1.setPrice(1000);
item1.setQuantity(1);

const item2 = new Item();
item2.setName("Phone")
item2.setPrice(500);
item2.setQuantity(3);

const item3 = new Item();
item3.setName("Headphone")
item3.setPrice(200);
item3.setQuantity(5);

order.addItem(item1);
order.addItem(item2);
order.addItem(item3);

order.displayOrder();

order.removeItem('Phone');

order.displayOrder();

