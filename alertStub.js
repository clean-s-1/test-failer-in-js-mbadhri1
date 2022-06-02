function networkAlertStub(celcius) {
	console.log(`Alert! Temperature is ${celcius} degrees`);
	// Return 200 for ok
	// Return 500 for not-ok
	// stub always succeeds and returns 200
	return celcius > 200 ? 500 : 200;
}
module.exports = { networkAlertStub };
