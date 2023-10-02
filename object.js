//Objects in JavaScript

// console.log(data.age);
// console.log(data['isCollegeStudent']);

/******  50 questions of obejcts  with solutions  in JavaScript ********* */

// 1. What is an object in JavaScript?
//=> In JavaScript, an object is a fundamental data type that represents a
//collection of key-value pairs. It is a versatile and powerful construct used to store and organize data

//2. How do you create an empty object in JavaScript?
/*=> In JavaScript you can create empty objects in several ways */
// I) Object literal syntax
// let obj = {};

// II) constructor method
// var emptyObj = new Object();

// III) Object create method
// const eobj = Object.create(null);
// console.log(eobj);

/*3. What are the two ways to access properties of an object in JavaScript? */
/*
const data={
    name: `Aditya Naida`,
    age: 19,
    isCollegeStudent: true
}

console.log(data.name);
console.log(data[`age`]);
*/

/*4. How can you add a new property to an existing object in JavaScript? */
/*=> You can simply add a new property to an exsting object in JavaScript by using dot notation or bracket notation */
/*
const data={
    name: `Aditya Naida`,
    age: 19,
    isCollegeStudent: true
}
//Add a new property using dot notation

data.need = `Money`
console.log(data);

//Add a new Property using bracket notation
data[`Health`] = `Gymnasium`;
console.log(data); 

//Using Variables for Property Names:
let favSinger = `Sidhu Moosewala`;
data[favSinger] = `Punjabi Hiphop`;
console.log(data);
*/

//5. What is the difference between dot notation and bracket notation when accessing object properties?
/*=>
In JavaScript, both dot notation and bracket notation are used to access
 object properties, but they have some differences in how they work: 
 
 
 *======Dot Notation========*:

I) Dot notation is the most common way to access object properties.
II) It is concise(choto) and easier to read.
III) It is typically used when the property name is a valid JavaScript identifier (e.g., without spaces or special characters).
IV) It is not suitable for property names that are reserved words or keywords in JavaScript.


*==========Bracket Notation===========*:

I)Bracket notation allows you to access object properties using a string that represents
 the property name enclosed in square brackets.
II)It is more versatile and can be used with property names that contain spaces,
 special characters, or are stored in variables.
III)It is essential when dealing with dynamic property names or property names
 that are not valid JavaScript identifiers.
 
 
 Key Differences:

I)Property Names: Dot notation requires property names to be valid JavaScript identifiers,
 while bracket notation allows for more flexibility in naming properties.

II)Dynamic Property Access: Bracket notation is necessary when accessing
 properties with dynamically generated names or when the property name is stored in a variable.

III)Reserved Words: If a property name is a reserved word or keyword in JavaScript,
 you must use bracket notation to access it.

IV)Computed Property Names: Bracket notation allows you to use expressions and variables
 to compute property names dynamically.*/

 //6. How do you delete a property from an object in JavaScript?
/*
const data={
    name: `Aditya Naida`,
    age: 19,
    isCollegeStudent: true
}
*/
// delete data.age;
// delete data[`name`]
// console.log(data.age); //output -> undefined
/*
It's important to note that the delete operator only removes the property from 
the object, but it does not affect the object's prototype chain. If the property
 is inherited from a prototype, the prototype property will still be accessible 
 unless you delete it from the prototype as well.

Also, be cautious when using delete as it can have some unexpected behavior
in certain situations, especially when dealing with built-in object properties
or certain host environments. In many cases, it's better to set the property 
to null or undefined if you want to remove its value without completely deleting it from the object. */

//7. What is object destructuring in JavaScript?
/*=> Object destructuring is a feature in JavaScript that allows you to extract values
from objects and assign them to variables in a more concise and readable way. It provides
a convenient way to unpack properties from objects and assign them to variables with the
same names as the property keys. Object destructuring is commonly used for data extraction
and manipulation. */
/*
const data={
    name: `Aryan Naida`,
    age: 19,
    college: `Vidysagar College`
}

let {name, age, college, Health = `Gymnasium` } = data ;
console.log(age);
console.log(Health);
*/
/*In the example above, we declare variables name, age, and college and 
use object destructuring to assign values from the data object to these variables
 based on their respective property names.

 */

 //Object Destructuring in the Function Parameter

 const OFnc=({firstname, lastname})=>{
  alert(`Hello ! ${firstname} ${lastname}`)
 }

 let person={
    firstname : `Aditya`,
    lastname: `Naida`
 }
 OFnc(person);