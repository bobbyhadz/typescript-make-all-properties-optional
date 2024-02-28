export {};

// EXAMPLE 1 - Make all properties optional in TypeScript

interface Employee {
  id: number;
  name: string;
  salary: number;
}

const emp: Partial<Employee> = {};

emp.name = 'Bobby Hadz';
console.log(emp);

// ---------------------------------------------------

// // EXAMPLE 2 - Getting a type with all properties marked as optional

// const obj = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// // 👇️ type T = {
// //     id?: number | undefined;
// //     name?: string | undefined;
// //     salary?: number | undefined;
// // }
// type T = Partial<typeof obj>;

// ---------------------------------------------------

// // EXAMPLE 3 - Make all properties optional except one in TypeScript

// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
// }

// interface OptionalExceptSalary extends Partial<Employee> {
//   salary: number;
// }

// const emp: OptionalExceptSalary = {
//   salary: 100,
// };
// console.log(emp);

// ---------------------------------------------------

// // EXAMPLE 4 - Make a single, or some properties in a type Optional in TS

// interface Developer {
//   language: string;
//   age: number;
//   experience: number;
// }

// type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> &
//   Partial<Pick<Type, Key>>;

// // 👇️ mark experience as optional
// type T1 = MakeOptional<Developer, 'experience'>;

// const dev1: T1 = {
//   age: 30,
//   language: 'ts',
// };
// console.log(dev1);

// // 👇️ mark experience and age as optional
// type T2 = MakeOptional<Developer, 'experience' | 'age'>;

// const dev2: T2 = {
//   language: 'ts',
// };
// console.log(dev2);
