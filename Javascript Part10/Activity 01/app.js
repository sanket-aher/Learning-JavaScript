let btn=document.querySelector('button');

btn.addEventListener('click',function(){
    let color=generateColor();
 
    let head1=document.querySelector('h1');
    head1.innerText=color;

    let div=document.querySelector('div'); 
    div.style.background=color;
});

let generateColor = function()
{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
}