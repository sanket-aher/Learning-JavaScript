/* Object Literals : Used to store keyed-valued collections and complex entities. Property=> (key:value) pair .Objects are a collection of properties. */

/* Creating a Object */
const student={
    name:"John",
    age:23,
    marks:94.4,
    color:["red","blue"]
};

/* Acess Values of Object */
console.log(student["name"]);  //John
console.log(student.name); //John
console.log(student.age); //23
// console.log(student[age]); //Error bcz quotes " " needed i.e student["age"];
// console.log(student."age"); Error No quotes " " needed using dot operator i.e student.age;
console.log(student.color); //["red","blue"]
console.log(student.color[0]); //red

/* Q.Create an object literal for the properties of twitter post which includes like 1)username 2)content 3)likes 4)reposts 5)tags */
const post={
    username:"Trading",
    content:"This is my #firstPost",
    likes:150,
    reposts:5,
    tags:["@mytrading","@deltaTrading"]
};


/* Conversion in Get values : JS automatically converts objects keys to strings.Even if we made the number as a key, the number will be converted to string. */
const obj={
    1:"a",
    true:"b",
    null:"c",
    undefined:"d"
}

console.log(obj[1]); // a
// console.log(obj.1); Error  bcz obj."1"; is an error 
console.log(obj[true]); // b
console.log(obj.true); // b
console.log(obj[null]); // c
console.log(obj.null); // c
console.log(obj[undefined]); // d
console.log(obj.undefined); // d

/* Add , Update Delete the values of objects. */
const students={
    name:"Smith",
    age:25,
    marks:95.00,
    city:"Delhi"
};
/*
    1)Change the city to "Mumbai"
    2)Add a new property gender:"Male"
    3)Change the marks to "95.5"
    4)Delete the property age
*/
students.city="Mumbai";
students.gender="Male";
students.marks="95.5";
delete students.age;
console.log(students); //{name: 'Smith', marks: '95.5', city: 'Mumbai', gender: 'Male'}

/* Nested Object : Object of Objects. */
const classInfo={
    aman:{
        grade:"A+",
        city:"Delhi"
    },
    shradha:{
        grade:"A",
        city:"Pune"
    },
    karan:{
        grade:"O",
        city:"Mumbai"
    }
};

console.log(classInfo.shradha); //{grade: 'A', city: 'Pune'}
console.log(classInfo.shradha.city); // Pune
classInfo.shradha.city = "Gurgaon";
console.log(classInfo.shradha.city); // Gurgaon
console.log(classInfo.shradha); //{grade: 'A', city: 'Gurgaon'}

/* Array of Objects */
/* Q.Storing Information of multiple students. */
const classInfo1 =[
    {
        name:"Student1",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"Student2",
        grade:"A",
        city:"Pune"
    }
];

console.log(classInfo1[0]); //{name: 'Student1', grade: 'A+', city: 'Delhi'}
console.log(classInfo1[1].name); //Student2
classInfo1[1].city="Gurgaon";
classInfo1[1].gender="Female";
console.log(classInfo1[1]); //{name: 'Student2', grade: 'A', city: 'Gurgaon', gender: 'Female'}

/* Math Object : The Math Object is static.All methods and properties can be used without create a Math Object first. */
console.log(Math); // => It will gives all properties and method of Math Object

//Properties of Math Object : 
console.log(Math.PI); // 3.141592653589793 => PI Value.
console.log(Math.E); // 2.718281828459045 => Constant Value.

//Methods of Math Object :
/* abs : Returns a Positive numbers. */
console.log(Math.abs(12)); //12
console.log(Math.abs(-12)); //12
console.log(Math.abs(-12.56)); //12.56

/* pow : Returns the value of x to the power of y. */
console.log(Math.pow(2,4)); // 16 

/* floor : Returns the nearest smallest Integer Values. */
console.log(Math.floor(5)); //5
console.log(Math.floor(5.5)); //5
console.log(Math.floor(5.99)); //5
console.log(Math.floor(5.22)); //5

/* ceil : Returns the nearest largest Integer Values. */
console.log(Math.ceil(5)); //5
console.log(Math.ceil(5.5)); //6
console.log(Math.ceil(5.99)); //6
console.log(Math.ceil(5.22)); //6

/* random : Generate Random Numbers Between 0 to 1 and here 1 is not inclusive. */
console.log(Math.random());
console.log(Math.random());

/* Random Number Between 1 to 10 */
let num=Math.random(); // Step1
num =num*10; // Step2
num = Math.floor(num); // Step3
// The above Step1,2,3 generate a number between 0 to 9
num=num+1; // step 4  => to generate a number 1 to 10
console.log(num);
/* ------- OR ------- */
console.log(Math.floor(Math.random()*10)+ 1); 

/* Guessing Game : Users enters a max number and then tries to guess a random generate numbers between 1 to max. */
/*
    const max=prompt("Enter the max number");
    const random=Math.floor((Math.random() * max)+1);
    let guess=prompt("Guess the number");
    while(true)
    {
        if(guess == 'quit')
        {
            console.log("Quit!!");
            break;
        }
        else if(guess == random )
        {
            console.log("Congrats!!, You are right and random number was ",random);
            break;
        }
        else{
            guess=prompt("Wrong Guess! Please try again..");
        }
    }
*/

/* Now Add Hints in above guessing gaming */
const max=prompt("Enter the max number");
const random=Math.floor((Math.random() * max)+1);
let guess=prompt("Guess the number");
while(true)
{
    if(guess == 'quit')
    {
        console.log("Quit!!");
        break;
    }
    else if(guess == random )
    {
        console.log("Congrats!!, You are right and random number was ",random);
        break;
    }
    else if(guess < random){
        guess=prompt("hint : Your Guess was too small.Please try again");
    }
    else{
        guess=prompt("hint : Your Guess was too large.Please try again");
    }
}










