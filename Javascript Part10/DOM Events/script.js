/* DOM Events : The DOM events are actions that can be performed on HTML elements */
/* i)inline events : Inline Event handlers can be added directly to the HTML element using on attribute.ex onclick
                Disadv : 1)Bulky Code i.e difficult to maintain 2)Not Reusabale.  */

function fn1()
{
    console.log("Function1 Called"); // Function1 Called
}
function fn2()
{
    console.log("Function2 Called"); // Function2 Called
}

/* ii)event handler : There are manys types of event handler availables but we study the most used events.
             a)onclick() : When an element is clicked.
             b)onmouseenter() : When mouse enters an element.
             Disavd : You can attach one function at a time , if you assign new function to an event handler,it replaces the previous one. */

/* Ex1 */
let btns=document.querySelectorAll(".contain button");

for (const btn of btns) {
    btn.onclick = SayHello;
    btn.onclick = SayName; // Disadv if you assign new function SayName it replace the previous one called SayHello. 
    btn.onmouseenter = function()
    {
        console.log("You entered a button."); // You entered a button.
    }
}

function SayHello(){
    console.log("Hello!");
}

function SayName(){
    console.log("John"); // John
}

/* iii)event Listener : A function in JS that waits for an event to occur then responds to it.
        addEventListener : The addEventListener() method attaches an event handler to the specified element such as click,etc
            Syntax : element.addEventListener(event,callback);   */

/* Ex1 */
let btns1=document.querySelectorAll(".evts button");
for (const butn of btns1) {
    butn.addEventListener("click",sayHello1);
    butn.addEventListener("click",sayName1);
}

function sayHello1(){
    console.log("Hello1 is called !");  // Hello1 is called !
}

function sayName1(){
    console.log("John1 is called !"); // John1 is called !
}

/* Ex2 */
let pT=document.querySelector(".evts p");
pT.addEventListener("click",function(){
    console.log("Para was clicked"); //Para was clicked
});

let divT=document.querySelector(".evts div");
divT.addEventListener("mouseenter",function(){
    console.log("Mouse inside div"); // Mouse inside div
});

/* 'this' in Event Listeners : When 'this' is used in a callback of event handler of something,it refers to that something.
    obj.eventlistener(event,callback(){ this <=> obj } )  */

/* Ex1 */
let thisBtn = document.querySelector(".firstBtn");

thisBtn.addEventListener('click',function(){
    console.log(this);  // <button>Click Me</button>
        // OR  
    console.log(thisBtn); // <button>Click Me</button>

    console.dir(this);  // show all methods of thisBtn i.e <button>
        // OR
    console.dir(thisBtn);  // show all methods of thisBtn i.e <button>
    
    console.log(this.innerText); // Click Me
        // OR
    console.log(thisBtn.innerText); // Click Me

    this.style.backgroundColor = "red";
       // OR
    thisBtn.style.backgroundColor = "red";

});

/* Ex2 */
let thish1 = document.querySelector(".thisEvt h1");
let thish3 = document.querySelector(".thisEvt h3");
let thisp = document.querySelector(".thisEvt p");
let thisBtn_1 = document.querySelector(".thisEvt .secondBtn");

function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor = 'blue';
}

thish1.addEventListener('click',changeColor); // Use of 'this' in Event Listeners
thish3.addEventListener('click',changeColor); // Let's demo it on elements
thisp.addEventListener('click',changeColor); // This is a Sample Paragraph
thisBtn_1.addEventListener('click',changeColor); // Click Me

/* Keyboard Event : The keyboardEvent Object handles events that occurr when a user presses a key on the keyboard.
   Keyboard Event Handler :
   1)onkeydown : A user presses a key.
   2)onkeyup : A user releases a key.
*/

/* Event object : An event object can be triggered by the user action.The event is actually an object containing information about the action that just happened.
    Method :
    1)event.type : Returns the type of the triggered event.
    2)event.key  : Returns the key that was pressed when the event occured.
    3)event.code : Returns the key code when a keyboard event occurs.
*/


/* Ex1 */
let inp=document.querySelector(".key input");
inp.addEventListener("keydown",function(event)
{
    console.log(event);
    console.log("Type = ",event.type);
    console.log("Key = ",event.key);
    console.log("Code = ",event.code);
    console.log("Key was Pressed");
});

/* Ex2 */
let inp1=document.querySelector(".key1 input");
inp1.addEventListener("keydown",function(evt)
{
    console.log("Code = ",evt.code); 
    if(evt.code == "ArrowUp"){
        console.log("Character moves forward");
    } else if(evt.code == "ArrowDown"){
        console.log("Character moves backward");
    } else if(evt.code == "ArrowRight"){
        console.log("Character moves right");
    } else if(evt.code == "ArrowLeft"){
        console.log("Character moves left");
    }
});

/* Form Events : Events triggered by actions inside a HTML form.
Form Event Handler :
1)onsubmit : Fires when a form is submitted.
*/

/* preventDefault() : The preventDefault() method cancels the event if it is cancelable, meaning that the default action/behaviour that belongs to the event will not occur. */

/* Ex1 */
let form1=document.querySelector(".frm1 form");
form1.addEventListener("submit",function(event){
    event.preventDefault();
    alert("Form Submitted");
});

/* Ex2 */
let form2=document.querySelector(".frm2 form");
form2.addEventListener("submit",function(event){
    event.preventDefault();

    let user=document.querySelector('#user');
    let pass=document.querySelector('#pass');
    //console.log(user.innerText); // => Not work for input => use .value
    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

/* Ex3 */
let form3=document.querySelector(".frm3 form");
form3.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(form3);
    let user1=this.elements[0]; // OR form3.elements[0];
    let pass1=this.elements[1]; // OR form3.elements[1];

    console.log(user1.value);
    console.log(pass1.value);

    alert(`Hi ${user1.value}, your password is set to ${pass1.value}`);
});

/* More Events : */
/* 1)onchange : The onchange event occurs when the value of an element has been changed(only works on <input>,<textarea> and <select> elements) */

/* Ex1 */
let inpcng=document.querySelector('.cng input');
inpcng.addEventListener("change",function(){
    console.log("Change Event");
    console.log("Final Value = ", this.value);
});

/* 2)oninput : The oninput event fires when the value of <input>,<textarea> or <select> element has been changed. */

/* Ex1 */
let inpt=document.querySelector('.inpt input');
inpt.addEventListener("input",function(){
    console.log("Input Event");
    console.log("Final Value = ", this.value);
});