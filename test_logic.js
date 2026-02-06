// Mock DOM
global.document = {
    getElementById: () => ({
        addEventListener: () => {},
        value: 'test',
        classList: { add: () => {}, remove: () => {} },
        style: {}
    }),
    querySelectorAll: () => [],
    addEventListener: () => {}
};
global.window = {};

const assert = require('assert');
const { factorial, factorialBigInt, combination, generateRandomPathPure } = require('./script.js');

console.log('Running tests...');

// 1. Test Factorial
assert.strictEqual(factorial(0), 1, 'Factorial(0) should be 1');
assert.strictEqual(factorial(1), 1, 'Factorial(1) should be 1');
assert.strictEqual(factorial(5), 120, 'Factorial(5) should be 120');

// 2. Test FactorialBigInt
assert.strictEqual(factorialBigInt(0), 1n, 'BigInt Factorial(0) should be 1n');
assert.strictEqual(factorialBigInt(5), 120n, 'BigInt Factorial(5) should be 120n');
// Test larger number
const fact20 = 2432902008176640000n;
assert.strictEqual(factorialBigInt(20), fact20, 'BigInt Factorial(20) incorrect');

// 3. Test Combination
assert.strictEqual(combination(5, 2), 10, 'C(5,2) should be 10');
assert.strictEqual(combination(5, 0), 1, 'C(5,0) should be 1');
assert.strictEqual(combination(5, 5), 1, 'C(5,5) should be 1');
assert.strictEqual(combination(10, 3), 120, 'C(10,3) should be 120');

// 4. Test Random Path
const path = generateRandomPathPure(3, 2);
assert.strictEqual(path.length, 5, 'Path length should be x + y');
const rCount = path.filter(s => s === 'R').length;
const uCount = path.filter(s => s === 'U').length;
assert.strictEqual(rCount, 3, 'Path should have 3 Rs');
assert.strictEqual(uCount, 2, 'Path should have 2 Us');

console.log('All tests passed!');
// Test overflow
const largeComb = combination(175, 2);
console.log('C(175, 2) =', largeComb);
assert.ok(!isNaN(largeComb) && isFinite(largeComb), 'C(175, 2) should be calculated correctly');
// Stress Test
console.log('Running Stress Tests...');

// 1. Pascal 30 rows (C(30, 15) is the max value)
// C(30, 15) = 155,117,520. Safe integer.
const maxPascal = combination(30, 15);
console.log('C(30, 15) =', maxPascal);
assert.ok(Number.isSafeInteger(maxPascal), 'Pascal(30) should fit in safe integer');

// 2. Lattice 20x20
// C(40, 20) = 137,846,528,820. Safe integer (MAX_SAFE_INTEGER is 9e15).
const latticeMax = combination(40, 20);
console.log('Lattice(20,20) =', latticeMax);
assert.ok(Number.isSafeInteger(latticeMax), 'Lattice(20,20) should fit in safe integer');

// 3. Handshake 50
// C(50, 2) = 1225. Trivial.
assert.strictEqual(combination(50, 2), 1225, 'Handshake(50) should be 1225');

// 4. Large Permutation
// "MISSISSIPPI" length 11.
// Let's try 20 letters. 20! is big.
const bigFact = factorialBigInt(20);
console.log('20! =', bigFact);
assert.ok(bigFact > 0n, '20! should be positive');

console.log('Stress Tests Passed!');
