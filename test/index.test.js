const assert = require('assert');
const { capitalize, slugify, truncate } = require('../src');

assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize(''), '');
assert.strictEqual(slugify('Hello World!'), 'hello-world');
assert.strictEqual(slugify('  foo  BAR  '), 'foo-bar');
assert.strictEqual(truncate('abcdefghij', 7), 'abcd...');
assert.strictEqual(truncate('short', 10), 'short');

console.log('6/6 tests passed');
