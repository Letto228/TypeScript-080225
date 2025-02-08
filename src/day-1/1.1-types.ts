// Synt...

// let variable: Type = value

// let variable: Type;
// variable = value;

// --------------------JS Types--------------------

// boolean

// let isTrue: boolean = true;
// let isTrue: boolean = false;

// let isTrue: boolean;

// isTrue = false;
// isTrue = true;

// isTrue = '';
// isTrue = 123;
// isTrue = {};

// number

// let num: number = 123;
// let float: number = 12.56;
// let binary: number = 0b1101;

// bigint

// Number.MAX_SAFE_INTEGER & Number.MIN_SAFE_INTEGER

// let bigNumber: bigint = 100n;

// let bigNum: bigint = 123;
// let num: number = 100n;

// string

// let str: string = 'string, Hello';

// str = '';

// str = 123;
// str = {};

// Symbol

// let sym: Symbol = Symbol('New Symbol');

// null VS undefined

// let nullVar: null = null;

// nullVar = undefined;

// let undefinedVar: undefined = undefined;

// undefinedVar = null;

// object

// let objectVar: object = {};
// let objectVar: {readonly a: string, b?: number, c: {d: boolean}} = {
//     a: 'str',
//     b: 123,
//     c: {
//         d: true,
//     },
// };

// objectVar.a = ''
// objectVar.b

// function

// function calculate(a: number, b: number): number {
//     return a + b;
// }

// const calculate = (a: number, b: number): number => {
//     return a + b;
// }

// calculate(123, 321);

// function invoke(callback: (a: number, b: number) => number): void {
//     callback(123, 321);
// }

// invoke(calculate);

// Array

// let arrayVar: string[] = ['str', 'name'];
// let arrayVar: ((string[])[])[] = [[['str']], [['name', ''], ['test']]];
// let arrayVar: string[][][] = [[['str']], [['name', ''], ['test']]];

// --------------------TS Types--------------------

// Кортеж

// let tuple: [string, number, {d: boolean}] = ['str', 123, {d: true}];

// any

// let anyVar: any;

// anyVar = 123;
// anyVar = '';
// anyVar = {a: ''};

// anyVar.a;

// let numVarAny: number = anyVar;

// unknow

// let unknownVar: unknown = {a: ''}

// unknownVar = 123;
// unknownVar = '';
// unknownVar = {a: ''};

// unknownVar.a

// let numVar: number = unknownVar;

// never - пустое множество

// Литеральные типы

// let fontWeight: string = 'asdfsdfas';
// let fontWeight: 'bold' = 'bold';
// let fontWeight: 500 = 500;

// Union type

// let fontWeight: 100 | 500 | 'bold' = 500;

// fontWeight = 'bold';
// fontWeight = 100;

// function getProperty(
//     obj: {a: string, d: string} | {b: boolean, d: string}
// ) {
//     return obj.d;
// }

// getProperty({a: 'str', d: 'string'});
// getProperty({b: true, d: 'string'});
// // getProperty({a: true, d: 'string'});

// let numberOrString: number | string = 123;

// numberOrString = '123';

// function caluclateButtonSize(size: 's' | 'm' | 'l') {}

// caluclateButtonSize('m');

// Intercection type

// let testVar: number & string;

// let testObjVar: {a: string} & {b: number} = {a: 'str', b: 123};
// let testObjVar: {a: string, b: number} & {b: number | string} = {a: 'str', b: 123};
