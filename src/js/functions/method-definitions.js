// A shorthand for a function assigned to the method's name.

class MethodDefinitions {
	constructor() {
		var obj = {
			foo() {
				return 'bar';
			}
		}

		console.log(obj.foo());
	}
}

export default MethodDefinitions;