/* Call Stack : JavaScript Engine keeps track of function calls in a program,
                 i.e when the function is invoked,when it is added to the list,
                 when all of the function inside has been run and when the function is removed from callstack.
                 It operates as a LIFO(Last In First Out) data structure, meaning that the last function called is the first one to be resolved. */

/* Ex1 */
function hello(){
    console.log("Hello!!");
}
function demo(){
    hello();
}
demo(); // Hello!!

/* Ex2 */
function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans = two() + one();
    console.log(ans);
}
three(); // 3

/* Javascript is single threaded i.e perform one task at a time */
/* Ex1 */
let a=5;
console.log(a); //5
let b=50;
console.log(b); //50

// but sometimes we call api/database to fetch data so we need to wait till the time for next code of execution?
//=> So here we make Javascript an asynchronous using setInterval(),setTimeout(),promises and event loop.

/* Ex2 */
setTimeout(function(){
    console.log("College's");
},2000);
console.log("Hello");
// => Hello
// => College's  - Browser will handle the asynchronous code and after delay it give to callstack to execute in JS.

/* Q.Is JS synchronous and asynchronous ?
 Ans : Javascript is the synchronous single-threaded language but with the help of event-loop and promises, JavaScript is used to do asynchronous programming.  */

 /* Event Loop : 
                It enables the asynchronous execution of code.The event loop is responsible for managing the execution of code,handling,events and maintaining the flow of control.
                The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.
 */

/* Callback Hell : 
    Callback hell is a phenomenon where a Callback is called inside another Callback. It is the nesting of multiple Callbacks inside a function.
    Disadv : Readability , the code becomes hard to read and understand the logic.
    To overcome disadv use Promises. */

/* Ex1 */
let head1=document.querySelector('h1');

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        head1.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay)
}

changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000)
    });    
});

/* Ex2 */
function savetoDb1(data,success,failure){
    let internetSpeed1=Math.floor(Math.random()*10)+1;
    if(internetSpeed1 > 4)
    {
        success();
    }
    else{
        failure();
    }
}

savetoDb1("College Student data",()=>{
    console.log("Success1 : Your data was saved");
    savetoDb1("Exam data",()=>{
        console.log("Success2 : Your data was saved");
    },()=>{
        console.log("Failure2 : Weak Connection");
    });
},()=>{
    console.log("Failure1 : Weak Connection");
});


/* Promise : A promise is a good way to handle asynchronous operations.It is used to findout if the asynchronous operation is successfully completed or not.
            When we want to execute operations parallely in background so you can use promises.
            A Javascript promise object state can be : 1)pending 2)fulfilled 3)rejected
            When a promise object is "pending" (working) , the result is undefined,
            When a promise object is "fulfilled" , the result is a value, 
            When a promise object is "rejected" , the result is an error object, */

/* Ex1 */
function savetoDb2(datas){
    return new Promise((resolve,reject)=>{
        let internetSpeed2=Math.floor(Math.random()*10)+1;
        if(internetSpeed2 > 4)
        {
            resolve("Success : data was saved");
        }
        else{
            reject("Failure : Weak Connection");
        }
    });
}
console.log(savetoDb2("stud data")); // Promise {<fulfilled>: 'Success : data was saved'}

/* 1)Promise then() method : It is used with the callback when the promise is successfully fulfilled or reolved. Multiple then are allowed.
   2)Promise catch() method : It is used with the callback when the promise is rejected or error occurs. One catch are allowed. */

/* Ex2 */
savetoDb2("college data")
.then(()=>{
    console.log("Promise was resolved");
})
.catch(()=>{
    console.log("Promise was rejected");
})

// Inproved version of Ex2 in Callback Hell

/* Ex3 */
savetoDb2("database")
.then((result)=>{
    console.log("Data1 Saved");
    console.log("Result of Promise :",result);
    return savetoDb2("database2");
})
.then((result)=>{
    console.log("Data2 Saved");
    console.log("Result of Promise :",result);
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log("Error of promise :",error);
});

//Improved version of Ex1 in Callback Hell

/* Ex4 */
let heading1=document.querySelector(".secondh1");

function changeColor2(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            heading1.style.color=color;
            resolve("Color Changed");
        },delay)
    });
}

//let request = changeColor2("red",5000);
//console.log(request); // Promise {<pending>}

let request1=changeColor2("red",1000);
request1.then(()=>{
    console.log("Red Color was Completed");
    return changeColor2("orange",1000);
})
.then(()=>{
    console.log("Green Color was Completed");
    return changeColor2("blue",1000);
})
.then(()=>{
    console.log("Blue Color was Completed");
});

/* Async Function : The keyword async before a function makes the function return a promise. */

/* Ex1 */
async function greet1() {
    return "Hello Greet1";
}
console.log('Greet1 Promise was ',greet1()); // Greet1 Promise was Promise {<fulfilled>: 'Hello Greet1'}

//OR

/* Ex2 */
async function greet2() {
    return  Promise.resolve('Hello Greet2');
}
console.log('Greet2 Promise was ',greet2()); // Greet2 Promise was Promise {<fulfilled>: 'Hello Greet2'}

//OR

/* Ex3 */
async function greet3() {
    return  new Promise((resolve,reject)=>resolve('Hello Greet3'));
}
console.log('Greet3 Promise was ',greet3()); // Greet3 Promise was Promise {<fulfilled>: 'Hello Greet3'}

/* Ex4 */
async function greet4() {
     console.log('Hello Greet4');
}
greet4(); // Hello Greet4 Promise {<fulfilled>: undefined}

/* Ex5 */
async function greet5(){
    abc();
    return "hey";
}
console.log(greet5()); // Error abc is not defined

/* Ex6 */
async function greet6(){
    throw "404 not found"; // The throw statement throws an exception.The throw statement throws (generates) an error.The throw statement allows you to create a custom error.
    return "hey";
}
console.log(greet6()); // Uncaught (in promise) 404 not found

/* Ex7 */
async function greet7(){
    // throw "Slow Network"
    return "hey greet7";
}

greet7()
.then((result)=>{
    console.log("Promise was Resolved greet7"); // Promise was Resolved greet7
    console.log("Result was ",result); // Result was hey greet7
})
.catch((error)=>{
    console.log("Promise was rejected with error :",error);
})

/* Ex8 */
let demo1 = async()=>{
    return 5;
}
console.log(demo1()); // Promise {<fulfilled>: 5}

/* Await : The await keyword can only be used inside an async function.The await keyword makes the function pause the execution and wait for a resolved promise before it continues. */

/* Ex1 */
function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10) + 1;
            console.log('The number was',num);
            resolve();
        },1000);
    });       
}

async function demo2(){
    await getNum();
    await getNum();
     getNum();
}

demo2();

/* Ex2 */

//Improved version of Ex4 in Promises
let heading2=document.querySelector(".thirdh1");

function changeColor3(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            heading2.style.color=color;
            resolve("Color Changed");
        },delay)
    });
}

async function demo3(){
    await changeColor3("red",1000);
    await changeColor3("green",1000);
    await changeColor3("blue",1000);
    await changeColor3("orange",1000);
}

demo3();

/* Ex3 */

let heading3=document.querySelector(".fourthh1");

function changeColor4(color,delay){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            let num1=Math.floor(Math.random()*10) + 1;
            if(num1>5)
            {
                reject("REJECTED");
            }
            heading3.style.color=color;
            resolve("Color Changed");
        },delay)
    });
}

async function demo4(){
    try{
    await changeColor4("red",1000);
    await changeColor4("green",1000);
    await changeColor4("blue",1000);
    await changeColor4("orange",1000);
    }
    catch(err){
        console.log(err);
    }
    let ans=55;
    console.log(ans+5); // 60
}

demo4();