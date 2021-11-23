import { createFalse } from "typescript";

const vari = 0;
let bruh = 'so';
bruh = 'string';
let joined: string | number | boolean | null | undefined;
joined = '';
joined = 1;
joined = true;
joined = null;
joined = undefined;

/* custom types */
type MyType = number | string;
let custom: MyType = 1;
custom = 'string';
// custom = true; //error

/* objects */
const obj = {
    name: 'Robbie',
    age: 14,
    smart: true,
    func: () => console.log('My name is Robbie!'),
    full: {
        first: 'Robert',
        last: 'Stoffel',
    }
}

console.log(obj.name);
obj.func();
console.log(obj.age);
console.log(obj.smart);
console.log(obj.full.first + ' ' + obj.full.last);



interface ObjectType {
    func?: () => number;
    func2?: () => MyType; //Question Mark after the name says that it can be undefined.
}

const customObj: ObjectType = {
    // func = () => Math.random();
    // func2: () => 'string!!!!!!!!',
}

interface ChildInterface extends ObjectType {
    func3: () => ObjectType;
    super: ObjectType;
}

const childObj: ChildInterface = {
    func: () => 1,
    func2: () => 2,
    func3: () => ({ func: () => 3 }),
    super: { func: () => 4 }
}


/* functions */

function funct(): void {

}

type ReturnString = () => string;

const func: ReturnString = () => {
    return '';
}

const multipleReturn = () => {
    if (Math.random() > 0.5) {
        return 1;
    } else {
        return false;
    }
}


/* Type Functions */

const stroing = 'this is a string';
const keyOfExample = {
    prop1: 'prop',
    prop2: 1,
    func: () => 1,
}

console.log(typeof stroing);

type Stinging = typeof stroing;
type KeyOfKeyOfExample = keyof typeof keyOfExample;

const returnsNumber = () => {
    return Math.random();
}

type Returned = ReturnType<typeof returnsNumber>;

const withTypeArg = <T = number>(thing: any) => {

}