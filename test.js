import test from 'ava';
import fn from './';

test(async t => {
	const whatiz = await fn('packstat');

	t.is(whatiz, 'Displays metrics about npm modules.');
});
