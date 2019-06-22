# jest-bug

This simple project demonstrates the bug reported at <https://github.com/facebook/jest/issues/8497>

Node v12 is required


#What's Here?

`MyClass.js` defines a class with one private property and one public method.
The method simply returns the private property.

`index.js` creates and instance of MyClass and prints the result of the method.

`MyClass.test.js` is a jest test that _should_ pass. However, merely requiring MyClass causes a syntax error: `jest-bug/MyClass.js: Unexpected character '#' (6:1)`