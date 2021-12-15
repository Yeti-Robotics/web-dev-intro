const vari = 0;
/* infers type */
let bruh = 'so';
bruh = 'string';
let joined: string | number | boolean;
joined = "";
joined = 1;
joined = true;

/* custom types */
type MyType = number | string;
let custom: MyType = 1;
custom = "str";

const obj = {
    name: "Vincent",
    num: 1,
    bool: false,
    func: () => console.log("I'm a function"),
    nested: {
        name: "Robbie"
    }
}

console.log(obj.name);
obj.func();
console.log(obj.nested.name);

interface ObjectType {
    func?: () => number;
    func2: () => MyType;
}

const customObj: ObjectType = {
    func2: () => "String!!!"
}

interface ChildInterface extends ObjectType {
    func3: () => ObjectType;
    super: ObjectType;
}

/* function */

function func(): void {
    return
}

function multipleRtrn() {
    if (Math.random() > 0.5) {
        return 1;
    } else {
        return false;
    }
}

/* Type Functions */
let stroing = "this is a string";
const keyOfExample = {
    prop1: "prop",
    prop2: 1,
    func: () => 1,
}
console.log(typeof stroing);

type Stringing = typeof stroing;
type keyOfKeyOfExample = keyof typeof keyOfExample;

const returnsNumber = () => {
    return Math.random();
}

type Returned = ReturnType<typeof returnsNumber>;