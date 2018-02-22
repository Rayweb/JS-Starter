// this file isnt transpile so must use CommonJS and ES5

//register babel to transpile before our tests run.

require('babel-register')();

//Disable webpack features that Mocha doesn't undestand.
require.extensions['.css'] = function() {};
