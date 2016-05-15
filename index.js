'use strict';

var got = require('got');

var cheerio = require('cheerio');

var Promise = require('pinkie-promise');

module.exports = function (packageName) {
	if (typeof packageName !== 'string') {
		return Promise.reject(new Error('package name required'));
	}

	var url = 'https://www.npmjs.com/packages/' + packageName;

	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);

		return $('.package-description').text() || null;
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'Package doesn\'t exist';
		}

		throw err;
	});
};
