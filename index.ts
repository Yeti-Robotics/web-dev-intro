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
custom = 'str';

const obj = {
	name: 'Robbie',
	num: 1,
	bool: false,
	func: () => console.log('im a function'),
	nested: {
		name: 'Vincent'
	}
}

console.log(obj.name);
obj.func();
console.log(obj.nested.name);

interface ObjectType {
	func: () => number;
	func2?: () => MyType;
}
const customObj: ObjectType = {
	func: () => Math.random(),
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


/* function */
function funct(): void {

}

type ReturnsString = () => string;
const func: ReturnsString = () => {
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
let stroing = 'this is string';
const keyOfExample = {
	prop1: 'prop',
	prop2: 1,
	func: () => 1,
};

console.log(typeof stroing);

type Stinging = typeof stroing;
type KeyOfKeyOfExample = keyof typeof keyOfExample;

const returnsNumber = () => {
	return Math.random();
}

type Returned = ReturnType<typeof returnsNumber>;

const withTypeArg = <T = number>(thing: T) => {
	let typed: T;
}
