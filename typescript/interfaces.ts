//interface is the same as the Schema
//we are expecting our values to be what we have defined;

function printLabel(labeledObj: {label: string}){

};
let myObj = {size: 10, label: "Size 10 obj"};
printLabel(myObj);
//will pass, lenient ._.
//function printLabel expects an object with at least one param. to be a label of string type;

//or 

interface LabeledValue{
    label: string
}
function printLabel2(labeledObj: LabeledValue){

}
let myObj2 = {size: 10, label: "Size 10 obj"};
printLabel2(myObj2);

//optional property
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
//we only provide one value, both of the params are optional 
let mySquare = createSquare({width: 10});

//read only property
//remember interface is just an object with keys that we want to expect
interface Point {
    readonly x: number,
    readonly y: Array<number>
    readonly z: string[];
}
//then construct a point, but after the inital assign the values cannot be changed
let pi: Point = {x: 1, y: [1,2,3], z:["hello"]};
//can't do this
// pi.y = [1,2,3] read only error
//still can mutate the array
pi.y.push[12];

//ReadonlyArray<T> all mutating methods removed
let a: number[] = [1,2,3];
let ro: ReadonlyArray<number> = a;
//make ro refer to a;
ro[0];
// ro.push(12); //now it doesn't work
a = [1,2,3];
ro = [1,2,3];

interface SquareConfig1 {
    color1? : string;
    width1?: number;
    [propName1: string]: any;
}

//function interface
interface SearchFunc{
    (source: string, subString: string): boolean;
}

let mySearch : SearchFunc = function(src, subStr){
    let result = src.search(subStr);
    return result > -1;
}
mySearch('yoteyou', 'you');


//Indexable Types
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Num", "Fred"];

let myStr: string = myArray[0];

// interface NumberDictionary {
//     [index: string]: number;
//     length: number;    // ok, length is a number
//     name: string;      // error, the type of 'name' is not a subtype of the indexer
// }

// interface ReadonlyStringArray {
//     readonly [index: number]: string;
// }
// let myArray1: ReadonlyStringArray = ["Alice", "Bob"];
// myArray1[1] = "Mallory"; // error!




interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number){ }
}


interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function (start: number){;
    } as Counter;
    counter.interval = 123;
    counter.reset = function (){ };
    return counter;
}