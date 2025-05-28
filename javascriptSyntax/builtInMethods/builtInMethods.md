# Built-in methods

Below is a categorized list of commonly used built-in methods for JavaScript's non-primitive data types. Each method is grouped by the type it operates on, with brief descriptions where helpful.

- **Array Methods**: Used for manipulating and traversing arrays.
- **String Methods**: Used for working with and transforming strings.
- **Object Methods**: Used for handling objects and their properties.

---

## Array Methods (on Array.prototype)

- **push()**: Adds element(s) to the end.
- **pop()**: Removes the last element.
- **shift()**: Removes the first element.
- **unshift()**: Adds element(s) to the beginning.
- **splice()**: Adds/removes/replaces elements at a specific index.
- **slice()**: Returns a shallow copy of a portion of an array.
- **concat()**: Merges two or more arrays into a new array.
- **join()**: Joins all elements of an array into a string.
- **indexOf()**, **lastIndexOf()**, **includes()**: Search for elements in an array.
- **forEach()**, **map()**, **filter()**, **reduce()**: Iterate or transform array elements.
- **some()**, **every()**: Test whether some/all elements pass a condition.
- **find()**, **findIndex()**: Find the first element (or its index) matching a condition.
- **sort()**, **reverse()**: Sort or reverse the order of elements.
- **flat()**, **flatMap()**: Flatten nested arrays.
- **from()**, **of()**: Create arrays from array-like or iterable objects (static methods).

---

## String Methods

- **length**: Property that returns the number of characters in a string.
- **charAt()**, **charCodeAt()**, **at()**: Retrieve characters or their Unicode values at a specific index.
- **concat()**: Merge two or more strings.
- **includes()**, **startsWith()**, **endsWith()**: Check if a string contains, starts with, or ends with a specific substring.
- **indexOf()**, **lastIndexOf()**: Find the position of a substring within a string.
- **slice()**, **substring()**, **substr()**: Extract parts of a string.
- **split()**: Split a string into an array of substrings.
- **toLowerCase()**, **toUpperCase()**: Convert string case.
- **trim()**, **trimStart()**, **trimEnd()**: Remove whitespace from ends of a string.
- **replace()**, **replaceAll()**: Replace occurrences of a substring or pattern.
- **match()**, **search()**, **matchAll()**: Work with regular expressions.
- **repeat()**: Repeat a string a specified number of times.
- **padStart()**, **padEnd()**: Pad the current string with another string until the resulting string reaches the given length.

---

## Object Methods

- **Object.keys()**: Returns an array of a given object's own enumerable property names.
- **Object.values()**: Returns an array of a given object's own enumerable property values.
- **Object.entries()**: Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.
- **Object.assign()**: Copies all enumerable own properties from one or more source objects to a target object.
- **Object.create()**: Creates a new object with the specified prototype object and properties.
- **Object.freeze()**, **Object.seal()**, **Object.preventExtensions()**: Control object mutability.
- **hasOwnProperty()**, **isPrototypeOf()**, **toString()**: Common methods on `Object.prototype` used via inheritance.
