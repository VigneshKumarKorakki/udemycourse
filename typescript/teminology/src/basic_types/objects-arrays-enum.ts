function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 10;

console.log(add(number1, number2));

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Viki',
//   age: 27,
// };
// console.log(person.name);

// const person = {
//   name: 'Viki',
//   age: 27,
//   hobbies: ['sports', 'cooking'],
// };

// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

// Tuple
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; // array
//   role: [number, string]; // tuple
// } = {
//   name: 'Viki',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// person.role.push('admin');
// console.log(person.role);
// person.role[1] = 10;
// person.role = [1];
// person.role = ['hlo'];
// person.role = [1, 2, 3];
// person.role = [1, 'yes', 3];

// Enum
// Without
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
// const person ={
//   name: 'Viki',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: ADMIN,
// };

// if (person.role === ADMIN) {
//   console.log("Im a admin");
// }

// with
// custom type
enum ROLE {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: 'Viki',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: ROLE.ADMIN,
};

if (person.role === ROLE.ADMIN) {
  console.log('is a admin');
}

enum STRING_ROLE {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR',
}
enum INI_ROLE {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}
enum CUS_ROLE {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = 2,
}
enum MIXED_ROLe {
  ADMIN = 'ADMIN',
  READ_ONLY = 1,
  AUTHOR = 'AUTHOR',
}
