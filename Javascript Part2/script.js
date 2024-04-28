/* console.log() : To write a message on the console. */
console.log("To write a message",1+2) // To write a message 3

/* Template Literals : They are used to add embedded expressions in a string */
let a=10;
let b=5;
console.log(`The total is:${a+b}Rupees`);

/* Operator in JS : 1)Arithmetic(+,-,*,/,%,**) 2)Unary(++,--) 3)Assigment(=,+=,-=,*=,/=,%=) 4)Comparison(>,>=,<,<=,==,!=,===) 5)Logical(&&,||,!) */

/* Arithmetic Operators : */
console.log(a+b);  //15
console.log(a-b);  //5
console.log(a*b);  //50
console.log(a/b);  //2
console.log(a%b);  //0
console.log(a**b); //100000

/* Unary Operators */
console.log(a++); //10
console.log(++a); //12

console.log(b--); //5
console.log(--b); //3

/* Assignment Operators */
a+=b; /* i.e a=a+b; */
console.log(a); //15

b = a; 
console.log(b); //15

/* Comparison Operators */
let age=18;
console.log(age > 18); //false
console.log(age >= 18); //true
console.log(age < 18); //false
console.log(age <= 18); //true
console.log(5 == 5); //true
console.log(5 == 4); //false
console.log(5!=5); //false
console.log(5!=4); //true
console.log(5 === '5'); //false 

/* Difference between ==(Equal to) and ===(strictly equal to) */
/* ==(Equal to) : It compares value of the operands not the datatypes of the operands. Ex 1)123=="123" 2)1=="1" 3)0==" " 4)0==false 5)null==undefined. All the example result is true  */
/* ===(Strictly equal to) : It compares value as well as datatypes of the operands. Ex 1)123==="123" 2)1==="1" 3)0===" " 4)0===false 5)null===undefined. All the example result is false  */

/* Unicode : Comparison for non number */
console.log('a' > 'A'); // true  bcz 'a' unicode number is 61  and 'A' unicode number is 41.

/* Conditional Statement : It is used to perform different actions based on different conditions. 1)if-else 2)nested if-else 3)switch */
/* 1) if statement : A block of code to be executed, if a specified condition is true. */
console.log("Before if statement");
let ages=23;
if(ages>=18) //true
{
    console.log("You can vote");
}
if(ages<18) //false
{
    console.log("You cannot vote");
}

/* if-else statement : A new condition to test , if the first condition is false. */
let mark=70;
if(mark >= 80) // false
{
    console.log("Grade A+");
}
else if(mark >= 60) // true
{
    console.log("Grade A+"); 
}
else if(mark >= 35) // not checked bcz above one condition is true
{
    console.log("Grade A+");
}

/* Difference between if and if-else statement  */
/* if statement : It check all the if condition wheather it is true or false */
/* if-else statement : It will check only once , Any one of if statement is true then all other below else-if condition not checked. */

/* else statement : A block of code execute if all the above if statement or if-else statement is false */
/* Ex1 */
let age1=15;
if(age1>18) //false
{
    console.log("You can vote");
}
else //true
{
    console.log("You cannot vote");
}

/* Ex2 */
let age2=25;
if(age2<=18)
{
    console.log("Under 18");
}
else if(age2 <= 21)
{
    console.log("Under 21");
}
else //true
{
    console.log("Man");
}

/* 2) Nested if-else : Nesting is writing if-else inside if-else statement.It can have many levels. */
let marks= 45;
if(marks>=35) //true
{
    console.log("Pass");
    if(marks>=80)
    {
        console.log("A+ Grade");
    }
    else //true
    {
        console.log("C Grade");
    }
}else{
    console.log("Better luck next time");
}

/* Logical Operators : &&,||,! */
let marks1 =75;
if((marks1 > 33 && marks<=80) || !false)
{
    console.log("Pass");
}

/* truthy and falsy value : Everything in JS is true or false.This doesnt mean their value itself is false or true,but they are treated as false or true if taken in boolean context. */
/* Falsy Values : false,0,-0,On(BigInt value),""(empty string),null,undefined,NaN */
/* Truthy Values : Everything other than falsy values. */

/* Ex1 */
if("")
{
    console.log("It has true value");
}
else // true
{
    console.log("It has false value");
}

/* Ex2 */
if(a) //true
{
    console.log("It has true value");
}
else
{
    console.log("It has false value");
}

/* Ex3 */
if(" ") //true
{
    console.log("It has true value");
}
else
{
    console.log("It has false value");
}

/* 3)Switch Statement : The switch statement is used to perform different actions based on different conditions. */

/* The switch expression is evaluated once.*/
/* The value of expression is compared with the values of each case. */
/* If there is a match,the associated block of code is executed. */
/* If there is no match,the "default" block of code is executed. */
/* A break keyword, breaks out of the switch block. */

let color="green";
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("SlowDown");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broken Light");
}

/* Alert : Alert displays an alert message on the page. */
alert("John Smith");

/* Prompt : It displays a dialog box that ask user for some inputs */
let firstName=prompt("Enter first name");
let lastName=prompt("Enter last name");
let msg = "Welcome " +firstName+ " " +lastName+ "!";
alert(msg);




