const pancakeRevenge = require('./main');

// validLength
test('returns number is too low and logs error', () => {
  let outputData = "";
  let length = 0;
  let low = 1;
  let high = 3;
  storeLog = inputs => (outputData += inputs);
  console["log"] = jest.fn(storeLog);
  expect(pancakeRevenge.validLength(length, low, high)).toBe(false);
  expect(outputData).toBe(`Bad input: ${length} not in range (${low}-${high})`);
});
test('validates if number is between the low and high values', () => {
  let length = 0;
  let low = 1;
  let high = 4;
  expect(pancakeRevenge.validLength(1, 1, 3)).toBe(true);
  expect(pancakeRevenge.validLength(2, 1, 3)).toBe(true);
  expect(pancakeRevenge.validLength(3, 1, 3)).toBe(true);
});
test('returns number is too high and logs error', () => {
  let outputData = "";
  let length = 4;
  let low = 1;
  let high = 3;
  storeLog = inputs => (outputData += inputs);
  console["log"] = jest.fn(storeLog);
  expect(pancakeRevenge.validLength(length, low, high)).toBe(false);
  expect(outputData).toBe(`Bad input: ${length} not in range (${low}-${high})`);
});


// validCharacter
test('validates if characters are - or +', () => {
  expect(pancakeRevenge.validCharacter(1)).toBe(false);
  expect(pancakeRevenge.validCharacter('a')).toBe(false);
  expect(pancakeRevenge.validCharacter('-')).toBe(true);
  expect(pancakeRevenge.validCharacter('+')).toBe(true);
});


// flipCount
test('sends back count for the number of flips', () => {
  expect(pancakeRevenge.flipCount('-')).toBe(1);
  expect(pancakeRevenge.flipCount('-+')).toBe(1);
  expect(pancakeRevenge.flipCount('+-')).toBe(2);
  expect(pancakeRevenge.flipCount('+++')).toBe(0);
  expect(pancakeRevenge.flipCount('--+-')).toBe(3);
});

test('invalid input', () => {
  expect(pancakeRevenge.flipCount('-+1')).toBe("Bad input: \"1\" is not a valid character. Must be either - or +.");
});
