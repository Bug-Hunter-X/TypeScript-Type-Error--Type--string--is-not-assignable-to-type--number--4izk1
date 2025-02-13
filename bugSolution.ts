function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  const bNum = typeof b === 'string' ? parseFloat(b) : b; //Type Guard or Conversion
  if (isNaN(bNum)) {
    throw new Error('Invalid input. b must be a number or a parsable string.');
  }
  return a + bNum;
}

const result1 = add(5, 10); // Correct
const result2 = addSafe(5, '10'); // Correct 
const result3 = addSafe(5, 'hello'); //Throws Error