function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

combine(1, 2);
combine('Viki', 'Gayathiri');

// Alias
type Combine = string | number;
type CombineDescriptor = 'as-number' | 'as-string';

function literalType(
  input1: Combine,
  input2: Combine,
  conversion: CombineDescriptor
) {
  // if( conversion === 'hel') {}
  if (conversion === 'as-number') {
  }
}

// literalType('hlo')
literalType(1, 2, 'as-number');
literalType('hi', 'hlo', 'as-string');

type Product = { title: string; price: number };
// const  p1: Product = {title: 'Rice', price: 21, isListed: true} // ERROR
