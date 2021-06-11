let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, errCode: number): never {
  throw { message, errCode };
}

// generateError('Something went wrong', 500);

const addF = (...numbers: [number, number, number]) => {
  return numbers.reduce((currRes, currVal) => currRes + currVal, 0);
};
addF(1, 2, 3);
