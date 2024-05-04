/*
    Functions : A Javascript function is a block of code designed to perform a particular task. Adv : You can use the same code with different arguments , to produce different results.
    
    Function Definition :
    function funName()
    {
        //block of code
    }

    Function Calling :
    funNAme();

*/
/* Ex1 */
function hello()
{
    console.log("Hello");
}
hello(); //hello
hello(); //hello

/* Ex2 */
function print1to5()
{
    for(let i=1;i<=5;i++)
    {
        console.log(i);
    }
}

print1to5(); // 1 2 3 4 5
print1to5(); // 1 2 3 4 5
print1to5(); // 1 2 3 4 5

/*
     Function Parameters : Function Parameters are listed inside the parenthesis() in the function definition.
     function funName(Parameter1,Parameter2,...)
     {
        //block of code
     }
*/

/*
     Function Arguments : Values we pass to the function are called arguments;
     funName(Argument1,Argument2,...);
*/

/* Ex1 */
function printInfo(name,age)
{
    console.log(`${name} your age is ${age}.`);
}
printInfo("John",23); // John your age is 23.
printInfo("Hayden",20); // Hayden your age is 20.
printInfo("Smith"); // Smith your age is undefined.

/* Function Return : When JS reaches a return statement,the function will stop executing.
                     return keyword is used to return some value from the function.
   Syntax :  function funName(para1,para2,...)
            {
                //block of code
                return val;
            }
*/

/* Ex1 */
function sum(a,b)
{
    return a+b;
}
let TotalSum=sum(3,4);
console.log(TotalSum); // 7
console.log(sum(sum(1,2),3)); // 6

/* Ex2 */
function isAdult(age)
{
    if(age >= 18)
    {
        return "Adult"
    }
    else{
        return "Not Adult"
    }
    console.log("Bye Bye"); // => Not executed bcz of return keyword.
}
console.log(isAdult(25)); //Adult

/* Scope : Scope determines the accessibility of variable,objects and functions from different parts of code. 1)Function 2)Block 3)Lexical */
/* 1)Function scope : Variables defined inside a function are not accessible(visible) from outside the function. */
/* Ex1 */
function calSum(a,b)
{
    let sum1=a+b; //Function Scope
    return sum1;
}
console.log(calSum(1,3)); // 4
//console.log(sum1); => Error 

/* Ex2 */
let sum2=54;
function calSum2(a,b)
{
    let sum2=a+b;
    console.log(sum2);
}
calSum2(3,4); // 7
console.log(sum2); // 54

/* 2)Block Scope : Variables declared inside a {} block cannot be accessed from outside the block.Block scope is apply on let and const keyword,it does not apply on var keyword. */
/* Ex1 */
{
    let a=25;
    const b=26;
    var c=27;
}
//console.log(a); => Error
//console.log(b); => Error
console.log(c); // 27

/* Ex2 */
let age1=20;
if(age1 >= 18)
{
    let str="Adult"; // Block Scope
}
//console.log(str); =>Error

/* 3)Lexical Scope : A variable defined outside a function can be accessible inside another function defined after variable declaration. */
/* Ex1 */
function outerFunc()
{
    let x=5;
    function innerFunc()
    {
        console.log(x); //5
    }
    innerFunc();
}
outerFunc(); 

/* Ex2 */
function outerFunc1()
{
    let y=15;
    function innerFunc1()
    {
        let z=50;
        console.log(y); //15
    }
    //console.log(z); =>Error
    innerFunc1();
}
outerFunc1();
//innerFunc1(); => Error 

/* Hoisting : Hoisting is a JS mechanism where variables and function declarations are moved to the top of their scope before code execution.The order of hoisting is Functions are hoisted first then variables declaration and all other things. */
/* Ex1 */
run(); //Running
function run() { 
    console.log("Running"); 
}

/* Ex2 */
console.log(msg2); //Undefined => Only for var keyword otherwise for let and const it gives an error
//let msg1="Hey Good"; => Error
var msg2="Hey Good";

/* Function Expression : The JS function expression is used to define a function inside any expression.The function expression allows us to create an anonymous function i.e it doesnt have any function name which is difference between function expression and function declaration.
    Syntax : 
            const variableName = function (para1,para2,...) 
                                {
                                    //block of code
                                }
    Q. Difference between Function Expression and Function Declaration.
    => Function Expression : Function doest have any name. Syntax : let varName=function(para1,para2,..){ }
    => Function Expression : Function having name.         Syntax : function functionName(para1,para2,..){ }
*/
/* Ex1 */
let sum3=function(a,b){
    return a+b;
}
console.log(sum3(8,8)); //16
sum3=7;
console.log(sum3); //7
//console.log(sum3(8,8)); => Error (Now sum3 is not a function)

/* Ex2 */
let hello2=function(){
    console.log("Hello!!");
}
hello2(); //Hello!!

hello2=function(){
    console.log("Namaste!!");
}
hello2(); //Namaste!!


/* Higher Order Function(HOF) :
         A function that does one or both :
        -takes one or multiple function as paramaters.
        -returns a function         
*/

/* Ex1 */
function multipleGreet(func,count){
    for(let i=1;i<=count;i++)
    {
        func();
    }
}
let greet = function(){
    console.log("Hello");
}
multipleGreet(greet,3); // hello hello hello


/* Ex2 */
function OddorEvenFactory(request)
{
    if(request == "odd")
    {
        return function(n)
        {
          console.log(!(n%2==0));  
        }
    } else if(request == "even")
    {
        let even1=function(n){
            console.log(n%2==0);
        }
        return even1;
    }
    else{
        console.log("Wrong Request !!");
    }
}

let request1="odd";
let func1= OddorEvenFactory(request1);
func1(3); //true
func1(10); //false

/* Function Methods : Actions that can be performed on an object. */
/* Ex1 */
const calculator={
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    }
}
console.log(calculator.num); //55
console.log(calculator.add(8,2)); //10
console.log(calculator.sub(8,2)); //6

/* Ex2 */
const calculator1={
    num:55,
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}
console.log(calculator1.add(8,2)); //10
console.log(calculator1.sub(8,2)); //6




