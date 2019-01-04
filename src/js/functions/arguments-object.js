// Is an Array-like object accessible inside functions that contains the values of the arguments passed to that function

class ArgumentsObject {
	constructor() {
		this.logArgs(1, 2, 3);
	}

	logArgs(a, b, c) {
		console.log(arguments[0]);
		console.log(arguments[1]);
		console.log(arguments[2]);
	}
}

export default ArgumentsObject;