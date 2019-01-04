// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

class RestParameter {
	constructor() {
		this.logArgs("one", "two", "three", "four", "five", "six");
	}

	logArgs(a, b, ...manyMoreArgs) {
		console.log("a", a);
		console.log("b", b);
		console.log("manyMoreArgs", manyMoreArgs);
	}
}

export default RestParameter;