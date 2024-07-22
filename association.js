// Association:

// Association is the design principle by which different Objects can be associated with each other to perform some task. It’s of two types:(Aggregation and Composition)

// 1- Aggregation:

// In Aggregation, objects are loosely coupled and can independently exist. This means an object can exist even after its associated object is destroyed.

class Wall{
    constructor(width, height){
        this.width= width;
        this.height = height;
    }
}
class Room{
    constructor(wall){
        this.wall = wall;
    }
    print(){
        console.log(this.wall);
    }
}
var wall = new Wall(1,1);
var room = new Room(wall);
wall = null;
room.print();

// -----------------------------------------------------------------------------

// 2- Composition:

// In Composition, objects are tightly coupled and cannot exist independently.

// class Wall{
//     constructor(width, height){
//         this.width= width;
//         this.height = height;
//     }
// }
// class Room{
//     constructor(width, height){
//         this.wall = new Wall(width,height);
//     }
//     print(){
//         console.log(this.wall);
//     }
// }
// var wall = new Wall(1,1);
// room.print();