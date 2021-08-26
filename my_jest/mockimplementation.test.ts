test("Mock function", () => {
  const myMockFun = jest.fn(cb => cb(null, true));
  
  myMockFun((err:null, val:boolean) => console.log(val)); 
  // OP:
  // true
})


// mockImplementation method is useful when you need to define the default implementation of a mock function that is created from another module

jest.mock('./foo')
const foo = require('./foo')

foo.mockImplementation(() => 42);
console.log(foo())
// OP:
42

// Mock names
test("Snapshot", () => {
  const myMockFn = jest
  .fn()
  .mockReturnValue('default')
  .mockImplementation(scalar => scalar + 42)
  .mockName('add42')

console.log(myMockFn(1))

expect(myMockFn).toMatchSnapshot()
}
)