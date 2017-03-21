'use strict';

const got = require('got');
const cheerio = require('cheerio');
const Promise = require('pinkie-promise');

module.exports = packageName => {
	if (typeof packageName !== 'string') {
		return Promise.reject(new Error('package name required'));
	}

	const url = `https://www.npmjs.com/packages/${packageName}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			info: $('.markdown p, .markdown li').eq(0).text() || `couldn't find description for package ${packageName}`
		};
	}).catch(err => {
		if (err.statusCode === 404) {
			err.message = 'Package doesn\'t exist';
		}
		return err.message;
	});
};
