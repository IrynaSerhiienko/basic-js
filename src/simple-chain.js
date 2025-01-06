const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value) {
		value ? this.result.push(`( ${value} )`) : this.result.push(`( )`);
		return this;
  },

  removeLink(position) {
		if(typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.result.length) {
			throw new Error("You can't remove incorrect link!");
		}
		this.result.splice(position - 1, 1);
		// this.result.splice(position - 1, 1);
		return this;
  },

  reverseChain() {
    if(this.result.length !== 0) {
			this.result.reverse();
			// this.result.reverse().join('~~');
		} 
		return this;
  },

  finishChain() {
		const chain = this.result.join('~~');
    this.result = [];
		return chain;
  }
};

module.exports = {
  chainMaker
};
