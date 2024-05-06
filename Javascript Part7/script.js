/* this keyword : "this" keyword refers to an object that is executing the current piece of code. */
/* Ex1 */
const student={
    name:"john",
    age:23,
    eng:95,
    math:93,
    phy:97,
    getAvg:function(){
        console.log(this);  //{name: 'john', age: 23, eng: 95, math: 93, phy: 97, …}
        let avg=(this.eng+this.math+this.phy)/3; 
        console.log(`${this.name} got average marks = ${avg}`); // john got average marks = 95
    }
};
student.getAvg(); 

/* Ex2 */
function getAverage(){
    console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
}
getAverage();

/* try and catch : 
    try : The try statement allows you to define a block of code to be tested for errors while it is being executed.
    catch : The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
*/

/* Ex1 : Disadv of not using try and catch */
/* -- Uncomment to see the result
console.log("hello"); //hello
console.log(a); //Error => a is not defined
console.log("hello2"); // Not executed bcz of above error
console.log("hello2"); // Not executed bcz of above error
*/

/* Ex2 : Advantage of using try and catch */
console.log("hello"); //hello
try{
    console.log(a);
} catch(err){
    console.log("Caught an Error.."); //Caught an Error..
    console.log(err); //a is not defined
}
console.log("hello2"); //hello2
console.log("hello2"); //hello2

/* Arrow Functions : It was introduced in ES6.Arrow functions allows us to write shorter function syntax.
                     const func=(para1,para2,..) =>{
                        //block of code
                     }
*/

/* Ex1 : Before Arrow function() */
let printHello=function()
{
    console.log("Hello World!!!");
}
printHello(); // Hello World!!!

/* Ex2 : After Arrow function() */
let printHello2 =()=>{
    console.log("Hello World!!!");
}
printHello2(); // Hello World!!!

/* Ex3 */
const sum = (a,b)=>{
    console.log(a+b);
};
sum(5,4); //9

/* Ex4 : For single parameter the parenthesis is optional. */
const cube= n =>{
    return n*n*n;
}
console.log(cube(9)); // 729

/* Implicit return with Arrow Function : It gets shorter,if the function has only one statement and the statement returns a value, you can remove the brackets and the return keyword.
   Syntax : const func = (para1,para2,..) => value;
*/

/* Ex5  */
const mult = (a,b) => a*b;
console.log(mult(5,4)); // 20

/* Ex6 : Now rewrite Ex4  */
const cube1 = n => n*n*n;
console.log(cube1(9)); // 729

/* Ex7 */
const sum1 = (a,b) => console.log("Total Sum is ",a+b); 
sum1(3,3); // Total Sum is 6

const hey= () => console.log("Hello World!");
hey(); // Hello World!

/* setTimeout: The setTimeout() method calls a function after a number of milliseconds (1 Second = 1000 Miliseconds). The setTimeout() is executed only once.
              Syntax:
                     setTimeout(function,timeout); 
*/

/* Ex1 */
console.log("Hi there!");
setTimeout(() => {
    console.log("Colleges");
}, 4000);
console.log("Welcome to");
/* output : 
    Hi there!
    Welcome to
    Colleges
*/

/* setInterval: The setInterval() method calls a function after a number of milliseconds (1 Second = 1000 Miliseconds). The setInterval() method continues the function until the clearInterval(id) is called or window is closed
                Syntax : 
                         setInterval(function,timeout);
                Note : To stop the setInterval() method call the clearInterval(id) method.
                        Syntax : clearInterval(id);
*/

/* Ex1 */
console.log("Hi there!!");
let idx=setInterval(() => {
    console.log("World");
}, 4000);
console.log(idx);

clearInterval(idx);
/* output : 
    Hi there!
    2
    World
    World
    ...  
*/

/* Difference between this with Arrow Function and this with normal function. */
/* function : 1)It scope is calling object scope.
   Arrow function : 1)It scope is lexical scope(parent scope)  */

/* Ex1) Normal Function(Sometimes Advantage)  */
const stud1={
    name:"aman",
    marks:95,
    getName:function(){
        console.log(this); // {name: 'aman', marks: 95, getName: ƒ}
        return this.name; // aman
    }
};
console.log( stud1.getName()); 

/* Ex1) Arrow Function(Sometimes Disadvantage)  */
const stud2={
    name:"aman",
    marks:95,
    getMarks:() => {
        console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        return this.marks; // undefined
    }
};
console.log( stud2.getMarks());

/* Ex2) Normal Function(Sometimes Disadvantage)  */
const stud3={
    name:"aman",
    marks:95,
    getInfo1:function(){
        setTimeout(function(){
            console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        },6000);
    }
};
console.log( stud3.getInfo1()); 

/* Ex2) Arrow Function(Sometimes Advantage)  */
const stud4={
    name:"aman",
    marks:95,
    getInfo2:function(){
        setTimeout(()=>{
            console.log(this); //{name: 'aman', marks: 95, getInfo2: ƒ}
        },7000);
    }
};
console.log( stud4.getInfo2()); 

