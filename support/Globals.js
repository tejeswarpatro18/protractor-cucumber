const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

module.exports = class Globals {
	constructor() {
		this.expect = chai.expect;
		chai.use(chaiAsPromised);
	}
}

