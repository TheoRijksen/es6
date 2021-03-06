// An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

class ArrowFunctions {
	constructor() {
		const materials = [
			'Hydrogen',
			'Helium',
			'Lithium',
			'Beryllium'
		];

		console.log(materials.map(material => material.length));
	}
}

export default ArrowFunctions;