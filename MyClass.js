


module.exports = (class MyClass {

	#prop = {
		this: "is",
		a: "test"
	}

	getProp(){
		return this.#prop
	}

})