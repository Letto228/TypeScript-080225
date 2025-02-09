// let exapmle = '';

// exapmle = 123;

// ------------------------------------------------

// function calculate(a: number) {
//     if (a > 0) {
//         return;
//     }

//     if (a === 3) {
//         return true;
//     }

//     if (a === 4) {
//         return false;
//     }

//     return a;
// }

// ------------------------------------------------

// function call(callback: (...args: any[]) => any, ...args: any[]): any {
//     return callback(...args);
// }

// function call<Argumaents extends unknown[], ReturnType>(
//     callback: (...args: Argumaents) => ReturnType,
//     ...args: Argumaents
// ): ReturnType {
//     return callback(...args);
// }

// const callback = (a: boolean, b: string, c?: number): string => {
//     return 'Test';
// }

// call(callback, true, '', 50);

// ------------------------------------------------

// type MyReturnType<Function extends (...args: any[]) => any> = Function extends (...args: any[]) => infer Result
//     ? Result
//     : never

// type TestReturnValue = MyReturnType<(a: number, b: string) => {name: string}>

// type MyParamsType<Function extends (...args: any[]) => any> = Function extends (...args: infer Params) => any
//     ? Params
//     : never

// type TestParams = MyParamsType<(a: number, b: string) => {name: string}>

// type PromiseValue<Value extends Promise<any>> = Value extends Promise<infer ReturnValue>
//     ? ReturnValue
//     : never

// const testPromise = new Promise<string>(resolve => {
//     resolve('You win');
// })

// type TestPromiseValue = PromiseValue<typeof testPromise>;
