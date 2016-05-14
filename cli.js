'use strict';

const whatiz = require('./index.js');

whatiz('packstat').then(information => {
	console.log(information);
});
