/* Javascript is giving functionality and behavior on the webpage and it is an scripting language.Javascript(JS) was invented by Breda Eich in 1995. Naming convention was Mocha -> Livescript -> Javascript. */

// Comments : It is used to explain the code to make it more readable. JS comments are ignored while the compiler executes the code. Single Line Comment - // and Multi Line Comment - /*  */  

/* A variable is simply name of the storage location. Syntax - variable=value; */
a=10;
age=23;
firstName="Tony";

/* DataType : Data types in JS define the data type that a variable can store.JS includes primitive and non-primitive data typs. Primitive data types in jS include string,number,boolean,undefined,null. Non-primitive data type include the object. */

/* typeof Operator : To find the data type of JS variable. */
typeof 15;   // number
typeof "john";  // string
typeof 8.33;  // number

/* Number Datatype : Positive Number(14),Negative Number(-12) and floating number(14.33). */
price = 18.33;
ac = 999;
c = -5;

/* Operator : + , - ,* , / , % , ** */
price1 = 20;
price2 = 10;
sum = price1 + price2;  // 30
diff = price1 - price2;  // 10
mulp = price1 * price2;  // 200
div = price1 / price2;  // 2
modulo = 12 % 5;  // 2
pow = 2 ** 3;  // 8

/* Not-a-number(NAN) : The NaN global property is a value representing Not-A-Number.Nan is a number that is not a legal number. */
0/0; /* Nan */
/* Nan + 1;  => Nan */

typeof Nan; /* number */

/* Operator Precendence : This is a general order of solving an expression. Highest -> 1) () 2) ** 3)*,/,% 4) +,- <- Lowest . If the same level multiple operator in calculation then the expressions solve from left to right. Only if multiple Power Operator(**) are in calculation then the expressions solve from left to right.   */
3/1 + 2 ** 2; /* 3/1 + 4 => 3 + 4 => 7 */
(5+2)/7+1*2; /* 7/7 + 1 * 2 => 1 + 1 * 2 => 2*2 => 4 */

/* Keywords : Keywords in JS are a set of reserved words that cannot be used as names of function,variables,etc as they are already part of the syntax JS. There are 63 reserved keywords such as let,if,switch,function,void,etc */

/* 1) var keyword : The var keyword is the oldest version  to declare a variable in JS. It has a Global Scope i.e variables defined outside the function can be acessed globally. */
var cpga; // declared
cpga = 8.9; // initialization

var num1 = 100; /* Declaration + initialization */
var num2 = 200;
var sum1= num1 + num2 ; 

/* 2) let keyword : The let keyword is improved version of var keyword.It is introduced in ES6 or Ecmascript 2015. These variables has block scope i.e it can't be accessible outside the particular code block.  */
let cpgas; // declared
cpgas = 8.9; // initialization

let num3 = 100; /* Declaration + initialization */
let num4 = 200;
let sum2= num3 + num4 ;

/* const keyword : The values of constants can't be changed with re-assignment and they can't be re-declared . It is also a block scope. */
const year=2025;
/* year = 2026;  => Error */
/* year = 2025 + 1; => Error */

/* const abc;   Gives Error  bcz only declared */


/* Difference between let,var,const keyword. */
/* var keyword : 1)The scope of var is global scope. Ex if(true){ var x=3; console.log(x); //3 } console.log(x); //3  2) It can be redeclared. Ex var a=5; var a=7; console.log(a); //7 3)It can be updated Ex var a=5; a=7; console.log(a); //7 4)It can be accessed without initialization as its default value is undefined. Ex console.log(a); //undefined var a=5; 5)It can be declared without initialization. Ex var a;//declared a=10;//initialization  */
/* let keyword : 1)The scope of let is block scope. Ex if(true){ let x=3; console.log(x); //3 } console.log(x); //Error  2) It cannot be redeclared. Ex let a=5; let a=7; console.log(a); //Error 3)It can be updated Ex let a=5; a=7; console.log(a); //7 4)It cannot be accessed without initialization otherwise it will give reference error. Ex console.log(a); //Error let a=5; 5)It can be declared without initialization. Ex let a;//declared a=10;//initialization  */
/* const keyword : 1)The scope of const is block scope. Ex if(true){ const x=3; console.log(x); //3 } console.log(x); //Error  2) It cannot be redeclared. Ex const a=5; const a=7; console.log(a); //Error 3)It cannot be updated Ex const a=5; a=7; console.log(a); //Error 4)It cannot be accessed without initialization otherwise it will give reference error. Ex console.log(a); //Error const a=5; 5)It cannot be declared without initialization. Ex const a;//cannot declared  */

/* Assignment Operator (=) : The assignment operator is used to assign a value to a variable */
let exam = 300;
exam = exam + 100; /* OR exam+=100;  => 400 */

let exam2 = 300;
exam2 += 200;  /* OR exam2 = exam2 + 200; => 500 */

/* Unary Operator : ++ and -- */
/* 1) Pre-increment(Change,then use) */
let preinc1 = 10;
let newPreinc1 = ++preinc1;
console.log(preinc1); //11
console.log(newPreinc1); //11

/* 2) Pre-decrement(Change,then use) */
let predec2 = 10;
let newPredec2 = --predec2;
console.log(predec2); //9
console.log(newPredec2); //9

/* 3) Post-increment(Use,then change) */
let postinc1 = 10;
let newPostinc1 = postinc1++;
console.log(postinc1); //11
console.log(newPostinc1); //10

/* 4) Post-decrement(Use,then change) */
let postdec2 = 10;
let newPostdec2 = postdec2--;
console.log(postdec2); //9
console.log(newPostdec2); //10

/* Identifier Rules */
/* 1)Names can contain letters,digits,underscores and dollar signs($) but not contain space. Ex let price123$_45; */
/* 2)Names must begin with letter,$,_ i.e it does not begin with number . Ex let $price; */
/* 3)Names are case sensitive (y and Y are different) */
/* 4)Reserved keywords cannot be used as variable names such as var,break,if,etc. let const=5; =>error */
/* Ways of writing Identifier should be camelCase (Ex let firstName;) */

/* Boolean - It represent either a true value or a false value. */
let isAdult = true;
typeof isAdult; /* Boolean */

/* Typescript : It is designed by microsoft and it is static typed lang whereas JS is a dyanamic typed lang. */
/* Typescript Ex : let a=10; a=15; a=true; => Error */
/* Javascript Ex : let a=10; a=15; a=true; */

/* String : Strings are text or sequence of characters.  */
let names="Tony Stark"
console.log(names[0]); // T
console.log(names[1]); // 0
console.log(names[4]); //  (space)
console.log(names[9]); // k

/* Q. Total no of caharacter in names string */
console.log(names.length); //10

/* Find the last character of string */
console.log(names[names.length - 1]); //k

/* Concatenation : Adding string together. */
let middleName = "Tony";
let lastName = "Stark";
let fullName = middleName + " " + lastName; // Tony Stark

/* Undefined : A variable that has not been assigned a value is of type undefined */
let act;
console.log(act); // undefined
typeof act; // undefined

/* Null : The null value represents the intentional absence of any value.It should be explicitly assigned. */
let xyz=null;
console.log(xyz); //null

 




