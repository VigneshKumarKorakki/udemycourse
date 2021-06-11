// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// // For some reason user1 obj is not
// // initialised now
// let user1: Person;

// user1 = {
//   name: 'Max',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

// user1.greet("Hi, there I'm");

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable {
  greet(phrase: string): void;
}

class Person implements Greetable, Named {
  name?: string;
  constructor(n: string = '') {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log(phrase);
    }
  }
}

const user1 = new Person();
// user1.name = 'Ram';
user1.greet('Hi there - I am');
console.log(user1);

// Function type
// type addFn = (a: number, b: number) => number

interface addFn {
  // same as above
  (a: number, b: number): number;
}
let addF2: addFn;
addF2 = (n1: number, n2: number) => {
  return n1 + n2;
};
