// // Generic basic syntax
// const names: Array<string> = []; // same as string[]
// const names_numbers: Array<string | number> = []; // same as (string | number)[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done')
//   }, 2000);
// });

// promise.then((data) => data.split(' ')) // WORKS
// // promise.then(data => data.toFixed())    // ERROR

// // Generic function
// // Problem
// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// console.log(merge({ name: 'Viki' }, { age: 12 }));
// // Result
// // Object
// //   age: 12
// //   name: "Viki"

// const mergedObj = merge({name: 'Viki'}, {age: 22})
// mergedObj.name // ERROR
// mergedObj.age // ERROR

// // One not recommended possible way
// const mergedObj2 = (merge({name: 'Viki'}, {age: 22})) as {name: string, age: number}
// mergedObj2.name // ERROR
// mergedObj2.age // ERROR

// // Generic function
// // Solution

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: 'Ram' }, { age: 20 });
// console.log(mergedObj); // {name: "Ram"}

// // Another Generic function
// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = 'Got no value';
//   if (element.length === 1) {
//     descriptionText = 'Got 1 value.';
//   } else if (element.length > 1) {
//     descriptionText = 'Got ' + element.length + ' values.';
//   }
//   return [element, descriptionText];
// }

// console.log(countAndDescribe("Can pass string or array"));

// // keyOf constraint
// // problem
// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
//   return 'Value: ' + obj[key]
// }

// // scenario
// //object not guaranteed always have this key
// extractAndConvert({name: 'Viki'}, 'name')

// // Generic class
// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       // this preserve from accidently deleting not matched records.
//       return;
//     }
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// // FOR STRING
// const textStorage = new DataStorage<string>();
// // textStorage.addItem(10) // ERROR, can't assign number to sting parameter
// textStorage.addItem('Viki');
// textStorage.addItem('Gayathiri');
// textStorage.addItem('Ram');
// console.log(textStorage.getItems()); // ["Viki", "Gayathiri", "Ram"]

// // FOR NUMBER
// const numberStorage = new DataStorage<number>();

// // FOR OBJECTS
// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: 'Viki' });
// objectStorage.addItem({ name: 'Gayathiri' });

// // Remove Viki will not work
// objectStorage.removeItem({ name: 'Viki' });
// console.log(objectStorage.getItems()); // {name: "Viki"}
// // Because object is referrence type. It will create new object
// // in memory.
// // So `this.data.splice(this.data.indexOf(item), 1);` will return no matches
// // then it become (-1, 1)
// // then last object gets removed thats why {name: "Gayathiri"} gets removed

// // Other solution by passing exactly same object referrence
// const ramObject = { name: 'Ram' };
// objectStorage.addItem(ramObject);
// console.log(objectStorage.getItems());
// objectStorage.removeItem(ramObject);
// console.log(objectStorage.getItems());

// // Generic utility
// //Partial
// interface CourseGoal {
//   title: string;
//   description: string;
//   completeUntil: Date;
// }

// function createCourseGoal(
//   title: string,
//   description: string,
//   date: Date
// ): CourseGoal {
//   // let courseGoal: CourseGoal = {}; // ERROR, because of missing property
//   let courseGoal: Partial<CourseGoal> = {}; // This converts every property as optional
//   courseGoal.title = title;
//   courseGoal.description = description;
//   courseGoal.completeUntil = date;
//   // return courseGoal // ERROR, because courseGoal: Partial<CourseGoal, expecting CourseGoal
//   return courseGoal as CourseGoal
// }

// Readonly
// const names: Readonly<String[]> = ['Viki', 'Gayathiri']
// names.push('kutti payan') // ERROR, Not allowed
// names.pop()              // ERROR, Not allowed

// // Generic class vs UNION
// class DataStorage {
//   private data: (string | number | boolean)[] = [];
//   // private data: string[] | number[] | boolean[] = [];

//   addItem(item: string | number | boolean) {
//     this.data.push(item);
//   }

//   removeItem(item: string | number | boolean) {
//     if (this.data.indexOf(item) === -1) {
//       // this preserve from accidently deleting not matched records.
//       return;
//     }
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

//
