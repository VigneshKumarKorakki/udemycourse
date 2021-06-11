// //********* Type
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Type intersection
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Viki',
  privileges: ['create-server'],
  startDate: new Date(),
};

// //********* interface

// interface Admin  {
//   name: string;
//   privileges: string[];
// };

// interface Employee  {
//   name: string;
//   startDate: Date;
// };

// // Type intersection
// type ElevatedEmployee = Admin & Employee;
// interface ElevatedEmployeeInterface extends Admin, Employee {}

// const e1: ElevatedEmployee = {
//   name: 'Viki',
//   privileges: ['create'],
//   startDate: new Date(),
// };

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// ********* TYPE GUARD
// Problem1
// function addF3(a: number): number; // this will work add extra logic in logic
function addF3(a: number, b: number): number;
function addF3(a: string, b: string): string;
function addF3(a: string, b: number): string;
function addF3(a: number, b: string): string;
function addF3(a: Combinable, b: Combinable) {
  // if statement is 'Type Guard'
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addF3('Gayathiri', ' Vignesh Kumar');
result.split('');

// Problem2
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name); // NO ERROR because Employee and Admin has name

  // /*Cant use becasue JS doesn't known about this*/
  // Its from TS
  // if (typeof emp === 'Employee') {
  //    console.log('Privileges: ' + emp.privileges);
  // }

  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges); // ERROR - not present in Employee type
  }
  if ('startDate' in emp) {
    console.log('Start date: ' + emp.startDate); // ERROR - not present in Employee type
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Ram', startDate: new Date() });

// Problem3

class Car {
  drive() {
    console.log('Driving a car....');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// Solution 1
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive()
//   // vehicle.loadCargo(1000);  // ERROR
//   if ('loadCargo' in vehicle) {
//     vehicle.loadCargo(1000);
//   }
// }

// Solution 2
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // Checking vehicle is created based on Truck constructor function
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

// Discriminated union
interface Bird {
  type: 'bird';
  flyindSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyindSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyindSpeed: 100 });

// // TYPE CASTING option1
// const userInputEle = document.getElementById('my-input') as HTMLInputElement;
// userInputEle.value = 'Hi there!.';

// // TYPE CASTING option2
// const userInputEle1 = <HTMLInputElement>document.getElementById('my-input');
// userInputEle1.value = 'Hi there!.';

// // TYPE CASTING option3
// const userInputEle2 = document.getElementById('my-input');
// if (userInputEle2 instanceof HTMLInputElement) {
//   userInputEle2.value = 'Hi there!.';
// }

// // TYPE CASTING option3
// const userInputEle3 = document.getElementById('my-input');
// if (userInputEle3) {
//   (userInputEle3 as HTMLInputElement).value = 'Hi there!.';
// }

// INDEX Properites

// I will have different inputs. So I dont want to stick with specific property
interface ErrorContainer {
  // {email: 'Not a valid email', username: 'Must start with a character'}

  //_id: number; // not allowed because 'index propety' is defined as string
  id: string; // allowed

  // index propety format
  // [ anyname: string|number|symbols are allowed, not boolean]: type(string | number | anything)
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  1: 'Not a valid email address',
  id: 'd1',
};

console.log(errorBag);

// Opional Chaining
const fetchedData = {
  id: 'u1',
  name: 'viki',
  job: { title: 'CEO', description: 'My Own Company' },
};

console.log(fetchedData?.job?.title);

// NULLISH Coalescing
const userInput = undefined;
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);
