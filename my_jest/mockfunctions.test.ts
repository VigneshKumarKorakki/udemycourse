function forEach(items: number[], callback:(x: number) => number){
  for (let index=0; index<items.length; index++) {
    callback(items[index]);
  }
}

test("Mock Callback function",() => {
  const mockCallback = jest.fn(x => 42 +x)
  forEach([0, 1], mockCallback)
  
  // Mock callback called twice
  expect(mockCallback.mock.calls.length).toBe(2);


  // console.log(mockCallback.mock.calls)
  // OP:
  // [ [ 0 ], [ 1 ] ]

  // First argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0)

  // First argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // Return value to the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42)
  
  // console.log(mockCallback.mock.results)
  // OP:
  // [ { type: 'return', value: 42 }, { type: 'return', value: 43 } ]
})


describe(".mock property", () => {
  test("This Property 1", () => {
    const myMock = jest.fn();
    
    const a = new myMock();
    const b = {};
  
    const bound = myMock.bind(b);
    bound();
  
    // console.log(myMock.mock.instances)
    // [ mockConstructor {}, {} ]
  
  })
  
  test("This Property 2", () => {
    const myMock = jest.fn();
    
    const a = new myMock();
    const b = {a: '1'};
  
    const bound = myMock.bind(b);
    bound();
  
    // console.log(myMock.mock.instances)
    // [ mockConstructor {}, { a: '1' } ]
  
  })

  it("mock members", () => {
    let someMockFunction = jest.fn()
    someMockFunction()

    // The function was called exactly once
    expect(someMockFunction.mock.calls.length).toBe(1);

    // the first arg of the first call to the function was 'first arg'
    someMockFunction = jest.fn(x => x)
    someMockFunction("first arg")
    expect(someMockFunction.mock.calls[0][0]).toBe('first arg')

    // The second arg of the first call to the function was 'second arg'
    someMockFunction = jest.fn((x, y) => {})
    someMockFunction("first arg", "second arg")
    expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

    // The return value of the first call to the function was 'return value'
    someMockFunction = jest.fn(() => 'return value')
    someMockFunction()
    expect(someMockFunction.mock.results[0].value).toBe('return value');

    // This function was instantiated exactly twice
    someMockFunction = jest.fn()
    const a = new someMockFunction()
    const b = new someMockFunction()
    expect(someMockFunction.mock.instances.length).toBe(2);
    // console.log(someMockFunction.mock.instances)
    // OP;
    // [ mockConstructor {}, mockConstructor {} ]


    // This function was instantiated exactly twice
    someMockFunction = jest.fn()
    const a1 = someMockFunction()
    const b1 = someMockFunction()
    expect(someMockFunction.mock.instances.length).toBe(2);
    // console.log(someMockFunction.mock.instances)
    // OP;
    // [ undefined, undefined ]
    
    // The object returned by the first instantiation of this function
    // had a `name` property whose value was set to 'test'
    someMockFunction = jest.fn()
    const a2 = new someMockFunction({name: 'test'})
    a2.name = 'test'
    const b2 = new someMockFunction({name: 'test'})
    expect(someMockFunction.mock.instances[0].name).toEqual('test');
    // console.log(someMockFunction.mock.instances)
    // OP:
    // [ mockConstructor { name: 'test' }, mockConstructor {} ]


  })
  
})

describe("Mock return values", () => {

  it("Return value once and everytime", () => {
    const myMock = jest.fn()
    console.log(myMock())
    // OP:
    // undefined
  
    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
    console.log(myMock(), myMock(), myMock(), myMock());
    // OP:
    // 10, 'x', true, true
  }) 


  it("functional continuation-passing style", () =>{
    const filterTestFn = jest.fn();
    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));
    console.log(result);
    // OP:
    // 11

    console.log(filterTestFn.mock.calls)
    // OP:
    //  [ [ 11 ], [ 12 ] ]
  })
})
