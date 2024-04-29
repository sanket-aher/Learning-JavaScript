/* String Methods : action that perform on the object. Syntax stringName.method()  */

/* 1)trim() : Trims whitespace from both ends of string and returns a new one. */
let trimMsg="  Hello  ";
let newTrimmsg = trimMsg.trim();
console.log(newTrimmsg);  /* 'Hello' */

let trimMsg1="  He llo  ";
let newTrimmsg1 = trimMsg1.trim();
console.log(newTrimmsg1);  /* 'He llo' */

/* String are Immutable : No changes can be made to original strings.Whenever we do try to make a change, a new string is created and old remaining as it is. */
let trimMsg2="Hello  ";
let newTrimmsg2 = trimMsg2.trim();
console.log(newTrimmsg2);  /* 'Hello' */
console.log(trimMsg2);  /* 'Hello  ' */

/* 2) toUpperCase() : It converts a string to uppercase letter.  toLowerCase() : It converts a string to lowercase letter. */
let Name="John Cena";
console.log(Name.toUpperCase()); // JOHN CENA
console.log(Name.toLowerCase()); // john cena

/* String Method with Arguments : Argument is a same value that we pass to the method. Syntax :  stringName.method(arg) */

/* 3)indexOf() : Returns the first index of occurrence of some value in string OR -1 if not found. */
let str="ILoveCoding";
console.log(str.indexOf("Love")); //1 
console.log(str.indexOf("J")); //-1(not found)
console.log(str.indexOf("o")); // 2 (Return the first time index of occurence)

/* Method Chaining : Using one method after another. Order of execution will be left to right. */
let msg=" hello ";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg); // 'HELLO'

/* 4)slice() : Returns a part of the original string as a new string. Syntax 1)str.slice(start); =>here end=upto last string/str.length   2)str.slice(start,end) => here end is not inclusive */
let str1="ILoveCoding";
console.log(str1.slice(5)); // Coding
console.log(str1.slice(1,4)); // Love
console.log(str1.slice(5,str.length)); // Coding
console.log(str1.slice(-3)); // ing  => str.length-3 => 11-3 => 8(start)
console.log(str1.slice(100)); // ''

/* 5)replace() : Searches a value in the string and returns a new string with the value replaced. Syntax : stringName.replace("searches","New value"); */

console.log(str1.replace("Love","do")); //IdoCoding
console.log(str1.replace("o","x")); //ILxveCoding
console.log(str1.replace("w","yes")); //ILoveCoding

/* 6)repeat() : Return a string with the number of copies of a string. */
let str2="Mango";
console.log(str2.repeat(3)); // MangoMangoMango





