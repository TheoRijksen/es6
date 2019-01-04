// Allow named parameters to be initialized with default values if no value or undefined is passed.

class RestParameters {
	constructor() {
		console.log(this.multiply(5, 2));
		console.log(this.multiply(5));
	}

	multiply(a, b = 1) {
		return a * b;
	}
}

export default RestParameters;