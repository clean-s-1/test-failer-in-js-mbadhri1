const { expect } = require('chai');

const { networkAlertStub } = require('./alertStub');

let alertFailureCount = 0;

function alertInCelcius(celcius, networkAlertStub) {
	const returnCode = networkAlertStub(celcius);
	if (returnCode != 200) {
		// non-ok response is not an error! Issues happen in life!
		// let us keep a count of failures to report
		// However, this code doesn't count failures!
		// Add a test below to catch this bug. Alter the stub above, if needed.
		alertFailureCount += 1;
	}
}

function farenheitToCencius(farenheit) {
	return ((farenheit - 32) * 5) / 9;
}

alertInCelcius(farenheitToCencius(400.5), networkAlertStub);
alertInCelcius(farenheitToCencius(303.6), networkAlertStub);
console.log(`${alertFailureCount} alerts failed.`);
expect(alertFailureCount).equals(1);
console.log('All is well (maybe!)');
