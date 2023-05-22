const assert = require('node:assert/strict')

const addNums = (x, y) => {
  try {
    assert(typeof x === 'number' && typeof y === 'number', 'need to be a number')
    return x + y
  } catch (error) {
    if (error.code === 'ERR_ASSERTION') {
      console.table(error)
      console.log(`${error.code}: Just bad input`)
    }
  }
}

console.log(addNums(2, 5))
console.log(addNums(true, 5))

const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: 'strictEqual',
});

// Verify error output:
try {
  assert.strictEqual(1, 1);
} catch (err) {
  assert(err instanceof assert.AssertionError);
  assert.strictEqual(err.message, message);
  assert.strictEqual(err.name, 'AssertionError');
  assert.strictEqual(err.actual, 1);
  assert.strictEqual(err.expected, 2);
  assert.strictEqual(err.code, 'ERR_ASSERTION');
  assert.strictEqual(err.operator, 'strictEqual');
  assert.strictEqual(err.generatedMessage, true);
}