let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let inp=document.querySelector('input');

btn.addEventListener('click',function(){
    let item=document.createElement('li');
    item.innerText=inp.value;

    let delBtn=document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.classList.add('delete');

    item.appendChild(delBtn)
    ul.appendChild(item);

    inp.value="";
});

/* Event Delegation :- Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object. */
ul.addEventListener('click',function(event){
    //console.log(event.target.nodeName); 
    if(event.target.nodeName == "BUTTON")
    {
        let listItem=event.target.parentElement;
        //console.log(listItem);
        listItem.remove();
        console.log("deleted");
    }
    //console.log("button clicked");
});


// let delBtns=document.querySelectorAll(".delete");
// for ( delbt of delBtns) {
//     delbt.addEventListener('click',function(){
//         console.log("Element Deleted");
//         let par= this.parentElement;
//         console.log(par);
//         par.remove();
//     });
    
// }