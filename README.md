# whatiz

> Display one-line manual node package descriptions available on npmjs.

[![Build Status](https://travis-ci.org/CodeDotJS/whatiz.svg?branch=master)](https://travis-ci.org/CodeDotJS/whatiz)

## Install 

```
$ npm install --save whatiz
```

## Usage

```js

'use strict';

const whatiz = require('whatiz');

whatiz('packstat').then(manual => {
	console.log(manual);
		// => Displays metrics about npm modules.
})
```

## Related 

- [whatiz-cli](https://github.com/CodeDotJS/whatiz-cli) : CLI Tool for whatiz.

- [packages-by](https://github.com/CodeDotJS/packages-by) : Total packages published by a npm user.

- [packstat](https://github.com/CodeDotJS/packstat) : Displays metrics about npm modules.

- [curver](https://github.com/CodeDotJS/curver) : Easily fetch the latest version of node module available on npm.

## License

MIT &copy; [Rishi Giri](http://rishigiri.com/)
