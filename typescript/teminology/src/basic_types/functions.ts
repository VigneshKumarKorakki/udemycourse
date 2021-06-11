function addition(n1: number, n2: number) {
  return n1 + n2;
}

function printSummary(arg: number) {
  console.log('value', arg);
}

let combineValues: (a: number, b: number) => number;
combineValues = addition;
// combineValues = 5;
// combineValues = printSummary;

console.log(combineValues(5, 5));

// callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(1, 2, (result) => {
  console.log(result);
});

addAndHandle(5, 5, (result) => {
  console.log(result);
  return result;
});
