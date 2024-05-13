/* Text Editor using input event handler */
let inp=document.querySelector('#text');
let p=document.querySelector('p');
inp.addEventListener("input",function(event){
    p.innerText=inp.value;
})