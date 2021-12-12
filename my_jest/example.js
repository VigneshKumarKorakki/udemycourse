const targetPath = require.resolve('./target.js');

console.log(require.cache[targetPath]);
const target = require('./target');
console.log(require.cache[targetPath]);

target.example();
