// Intuitive expression interpolation for single-line and multi-line strings.

class StringInterpolation {
	constructor() {
		var customer = {
			name: "Foo"
		}
		var card = {
			amount: 7,
			product: "Bar",
			unitprice: 42
		}
		var message = `Hello ${customer.name}, want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitprice} bucks?`


		console.log(message);
	}
}

export default StringInterpolation;