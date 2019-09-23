//bolean 
let isDone: boolean = false;

//numbers
//all numbers in TS are floating numbers
let decimal: number = 10;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//strings
let color: string = "purple";
color = "red";
let age: number = 23;
let fullName: string = "Kamil";
let sentece: string = `${fullName} is of age ${age} and loves the world!`;

let numberList: number[] = [1,2,3];
//or
let list: Array<number> = [1, 10, 0x333fa];

//tuple: fixed number of different elements
//let tuple: [string, number]; will except only two values inside of it

let tuple: [string, number, boolean];
tuple = ["Kamil", 23, true];

//set of constants apart from true/false
enum Color {Red, Green, Blue};
//c will be enum
let c: Color = Color['Blue'];
let b: Color = Color.Blue;
// let z: Color = Color[1]; // throws an errow, cuz it is a string
//c should be of type Color that only has 3 values in it;

//c will be string
let colorName: string = Color[1];

let notSure: any = 4;
notSure = "maybe a string or smth";
notSure = `or even boolean ${true}`;
notSure = false;

//any with array
let listSecond: any[] = [1, true, 'Hello'];
listSecond[1] = 'fo';


//void
function warnUser(): void{
    console.log("this is the best");
};

let unusable: void = null;
let u : undefined = undefined;
let n : null = null;

declare function create(o: object| null):void;
create(null);
create({me: 'blue'});
create([1,3,5])

// create('string'); errow
// create(23); errow

//typecasting
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;