'use strict';

const cheerio = require('cheerio');

const got = require('got');

const Promise = require('pinkie-promise');

module.exports = function (packageName) {
	if (typeof packageName !== 'string') {
		return Promise.reject(new Error('package\'s name required'));
	}

	var url = 'https://npmjs.com/package/' + packageName;

	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);

		return packageName + ' - ' + $('.package-description').text() + '\n' || null;
	}).catch(function(err) {
		if (err.statusCode === 404) {
			err.message = 'Package not available';
		}

		throw err;
	});
};