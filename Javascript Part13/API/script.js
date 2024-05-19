/* Application Programming Interface(API) : A Web API is an Application programming interface for the web.
                                            API's are mechanism that enable two software components to communicate with each other using a set of definitions and Protocol.
    Ex. Waiter in Restaurant.
Features: 1)To connect frontend and backend.
          2)Bridge between frontend and backend.
          3)Make request abd take response.    
*/

/* Random Free API's URL:
    1)https://catfact.ninja/fact => (Sends some random cat facts).
    2)https://www.boredapi.com/api/activity => (Sends some activity to do when bored).
    3)https://dog.ceo/api/breeds/image/random => (Sends cute dog pictures). */

/* What is JSON?
Ans : JSON stands for JavaScript Object Notation.JSON is a format for storing and transporting data.JSON is often used when data is sent from a server to web page.
        JSON Value Datatypes : object,array,string,number,true,false,null. */
/* Exmaples : Check on browser JSON validator online */
/* Ex1 : Valid JSON */
let dataJson1={
    "firstName":"John",
    "lastName":"Doe",
    "Age":19
};
console.log(dataJson1); 

/* Ex2 : Invalid JSON */
let dataJson2={
    firstName:"John1",
    "lastName":"Doe1",
    "Age":19
}
console.log(dataJson2);  // Gives Error on JSON validator online

/* Ex3 : Valid JSON */
let dataJson3={
    "firstName":"true",
    "lastName":true,
    "Age":19
}
console.log(dataJson3); 

/* Ex4 : Invalid JSON */
/*
let dataJson4={
    "firstName":John,
    "lastName":"Doe",
    "Age":19
}
console.log(dataJson4); 
*/

/* Accessing JSON Data : */
/* 1)JSON.parse() Method : To parse/convert a string data into a Javascript object.
    Syntax : JSON.parse(data) */

/* Ex1 */
let jsonRes = '{"firstName":"John","lastName":"Doe","Age":19}';
console.log(jsonRes.firstName); //undeined
let validRes = JSON.parse(jsonRes);
console.log(validRes.firstName); //John

/* 2)JSON.stringify() Method : To parse/convert a Javascript object into string data.
    Syntax : JSON.stringify(jsonObject) */

/* Ex1 */
let stud={
    name:"Smith",
    marks:95
};
console.log(typeof(stud)); //object
console.log(JSON.stringify(stud)); // '{"name":"Smith","marks":95}' 
console.log(typeof(JSON.stringify(stud))); //string

/* API Testing Tools :
 1)Postman (It must Download from browser).
 2)Hoppscoth (https://hoppscotch.io/) => Directly used on web browser.  */

/* AJAX : AJAX stands for Asynchronous Javascript and XML. AJAX allows web page to be updated asynchronous by exchanging data with a web server,i.e it is possible to update parts of a webpage without reloading the whole page. */

/* Https Verbs :
1)GET : Retrieve a data from api.
2)POST : Create an data to send api request.
3)PUT : Update an data.
4)DELETE : Delete an data. */

/* Status Codes : HTTP response status codes indicate whether a specific HTTP request has been successfully completed or not.
 Responses are grouped in five classes:
1)Informational responses (100 – 199)
2)Successful responses (200 – 299)
3)Redirection messages (300 – 399)
4)Client error responses (400 – 499)
5)Server error responses (500 – 599)
*/

// Examples
/* 1)200 - ok */
/* 2)404 - Not Found */
/* 3)400 - Bad Request */
/* 4)500 - Internal Server Error */

/* Query String : Adding information in urls */
/* Examples : Try on web browser url */
// 1)https://www.google.com/search?q=mango => API url(https://www.google.com/) , Query String(/search?) , key(q=),value(mango).
// 2)someurl/?name=smith&marks=95 => Variable Query string Example dont use on web browser
// 3)https://api.potterdb.com/v1/movies/:id => replace id variable by original id string ex esan... See on docs.

/* HTTP Headers : HTTP Headers are an important part of the API request and response as they represent the meta-data/additional-information associated with the API request and response.
Ex  Accept : application/json */

/* API Request : */
// i]Get Method : 
/* 1)fetch() : The method starts the process of fetching a resource from a server.The fetch() method return a Promise that resolves to a response object. */

/* Ex1 */
let url1="https://catfact.ninja/fact";
fetch(url1)
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log("Data = ",data);
})
.catch((err)=>{
    console.log("ERROR -",err);
});
console.log("bye1");

/* output Ex1 :
bye1
Data =  {fact: "A cat's brain is more similar to a man's brain than that of a dog.", length: 66}
*/

/* Ex2  */
async function getFacts1(){
    try{
        let res =await fetch(url1);
        let data = await res.json();
        console.log(data);
    } catch(e){
        console.log(e);
    }
    console.log("bye2");
}
getFacts1();

/* output Ex2 :
{fact: 'Cats often overract to unexpected stimuli because of their extremely sensitive nervous system.', length: 94}
bye2
*/

/* 2)Axios : Library to make HTTP requests. Add cdn link in html to used. */
/* Ex1 */
async function getFacts2(){
    try{
        let res =await axios.get(url1);
        console.log(res.data.fact); // Owning a cat is actually proven to be beneficial for your health.
    } catch(e){
        console.log(e);
    }
}
getFacts2();

/* Ex2 */
let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",async ()=>{
    let fact = await getFacts3();
    let p=document.querySelector('#result1');
    p.innerText = fact;
});

async function getFacts3(){
    try{
        let res =await axios.get(url1);
        return res.data.fact; 
    } catch(e){
        console.log("Error -",e);
        return "No Fact Found";
    }
}

/* Ex3 */
let url2="https://dog.ceo/api/breeds/image/random";
let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",async ()=>{
    let link = await getImage();
    let img=document.querySelector('#result2');
    img.setAttribute("src",link);
});

async function getImage(){
    try{
        let res =await axios.get(url2);
        return res.data.message; 
    } catch(e){
        console.log("Error -",e);
        return "No Image Found";
    }
}

/* fetch api using headers
    Syntax : fetch/axios.get(url,{
        header:{
            Accept:"application/json"
        }
    }) */

/* Ex4 */
const url3="https://icanhazdadjoke.com/";
async function getJokes()
{
    try{
        const configHeader={
            headers:{
                Accept:'application/json'
            }
        };
        let res1=await axios.get(url3,configHeader);
        console.log("JSON Data = ",res1.data); 
    }catch(err){
        console.log(err);
    }
}
getJokes(); // JSON Data =  {id: 'xs4o49hF6pb', joke: 'What kind of pants do ghosts wear? Boo jeans.', status: 200}

// ii]Post Method :
/* Ex1 : Post API using headers and body */ 

let options={
    method:"POST",
    body:JSON.stringify({
        title:'foo',
        body:'bar',
        userId:1
    }),
    headers:{
        'content-type':'application/json'
    }
};
let content=fetch('https://jsonplaceholder.typicode.com/posts',options);
let results= content.json();
console.log(results); // The largest breed of cat is the Ragdoll with males weighing in at 1 5 to 20 lbs. The heaviest domestic cat on record was a neutered male tabby named Himmy from Queensland, Australia who weighed 46 lbs. 1 5 oz.