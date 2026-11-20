const assert = require('assert');
const capitalizeText = require('./index');

assert.strictEqual(capitalizeText('devops'), 'Devops');
console.log('All tests passed successfully!');