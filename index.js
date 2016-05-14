'use strict';

var cheerio = require('cheerio');

var got = require('got');

var Promise = require('pinkie-promise');

module.exports = function (packageName) {
	if (typeof packageName !== 'string') {
		return Promise.reject(new Error('package\'s name required'));
	}

	var url = 'https://npmjs.com/package/' + packageName;

	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);

		return $('.package-description').text() || null;
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'Package not available';
		}

		throw err;
	});
};
