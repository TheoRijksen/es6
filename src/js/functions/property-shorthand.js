// Shorter syntax for common object property definition idiom.

class PropertyShorthand {
	constructor() {
		// ES6
		var x = 0, y = 0
		obj = { x, y }

		// ES5
		var x = 0, y = 0;
		obj = { x: x, y: y };
	}
}

export default PropertyShorthand;