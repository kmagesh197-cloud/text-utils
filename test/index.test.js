const assert = require('assert');
const { capitalize, slugify, truncate, wordWrap } = require('../src');

assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize(''), '');
assert.strictEqual(slugify('Hello World!'), 'hello-world');
assert.strictEqual(slugify('  foo  BAR  '), 'foo-bar');
assert.strictEqual(truncate('abcdefghij', 7), 'abcd...');
assert.strictEqual(truncate('short', 10), 'short');

var long = 'the quick brown fox jumps over the lazy dog near the river bank';
var wrapped = wordWrap(long, 30);
assert.ok(wrapped.includes('\n'), 'should wrap');
wrapped.split('\n').forEach(function(line) {
  assert.ok(line.length <= 30, 'line should be <= width: ' + line);
});
assert.strictEqual(wordWrap('short', 80), 'short');
assert.strictEqual(wordWrap('', 40), '');

console.log('10/10 tests passed');
