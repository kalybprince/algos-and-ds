/* Passed by Reference:

This is one of the most crucial concepts. When you work with
objects, you're not directly manipulating the object's 
data, but rather a reference (or pointer) to where that 
object is stored in memory.

- When you assign an object to another variable, you're 
copying the reference, not the object itself. Both variables 
then point to the same object in memory.

- If you modify the object through one variable, the changes
will be visible through any other variable that references
the same object. */

const obj1 = { value: 100 };
const obj2 = obj1; // references the SAME object as obj1

obj2.value = 200; // Modify the object through obj2

console.log(obj1.value); // Output: 200 (obj1 also sees the change)

