class Greeter{
    greeter: string;
    //a bit different from vanilla JS, be aware!
    constructor(message: string){
        this.greeter = message;
    }
    greet(): string {
        return 'Hello ' + this.greeter;
    }

}
let greet = new Greeter("Kamil");

//class inheritanse
class Animal {
    move(distance: number = 0): void{
        console.log(`Animal moved ${distance}m.`);
    }
}

class Dog extends Animal{
    bark():void{
        console.log('Warf,warf');   
    }
}

const dog = new Dog();

dog.bark();
dog.move();
dog.move(10);


class AnimalNew {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

const Me = new AnimalNew("Cat"); // Error: 'name' is private;


