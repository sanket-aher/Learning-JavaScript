/* Event Bubbling : Event Bubbling is a concept in the DOM. It happens when an element receives an event, and that event bubbles up to its parent and ancestor elements in the DOM tree until it gets to the root element. */

/* Ex1 */
/*
let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener('click',function(){
  console.log("div was clicked");  
});

ul.addEventListener('click',function(){
    console.log("ul was clicked");  
});

for (const li of lis) {
    li.addEventListener('click',function(){
        console.log("li was clicked");
    });
}
*/

// To overcome above issue use event.stopPropagation()
/* stopPropagation() :- The event.stopPropagation() method stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed. */

let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener('click',function(){
  console.log("div was clicked");  
});

ul.addEventListener('click',function(event){
    event.stopPropagation();
    console.log("ul was clicked");  
});

for (const li of lis) {
    li.addEventListener('click',function(event){
        event.stopPropagation();
        console.log("li was clicked");
    });
}