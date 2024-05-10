/* Window Object : It is an global object,created by browser and represent a browser window. BOM and DOM are under window objects */
console.log(window);

/* Browser Object Model(BOM) : It allows JS to talk to browser about matter other than content of page(to communicate with browser). Ex alert box,location,history,etc */

/* Document Object Model(DOM) : The DOM represents a document with a logical tree.The DOM is a programming interface for web development,it represents the page so that program can change the document structure,style and content. */

/* Q.How to show the properties/method of DOM */
console.dir(document);

/* Note : There is 2 step process used in DOM manipulation : 1)Select an element. 2)Changes on that seleceted element. */

/* 1)getElementById('idName') : Returns the single element as an object representing the element whose id property matches the specified string or null(if not found). */
/* Ex1 */
let obj=document.getElementById('mainImg');
console.log(obj); // <img src="assets/spiderman_img.png" id="mainImg" />
console.dir(obj); // Shows method regarding img#mainImg such as innerText,innerHtml,etc
console.log(obj.src); // http://127.0.0.1:5500/assets/spiderman_img.png

/* Ex2 : There is two id in html with same id name 'description' it return single element as an object i.e first in.  */
let obj1=document.getElementById('description');
console.log(obj1); //<p id="description"> In 1962 ,....</p>
console.dir(obj1); //p#description

/* 2)getElementByClassName('className') : Returns the elements as an HTML Collection(multiple array like objects),representing the elements whose className property matches the specified string or empty collection(if not found) */
let obj2=document.getElementsByClassName('oldImg');
console.log(obj2); // HTMLCollection(3) [img.oldImg, img.oldImg, img.oldImg] 0:img.oldImg 1:img.oldImg 2:img.oldImg
console.log(obj2[0]); // <img src="assets/creation_1.png" class="oldImg">
console.dir(obj2[0]); // Shows method regarding img.oldImg such as innerText,innerHtml,etc

//Change the img source 
console.log(obj2[1].src); // http://127.0.0.1:5500/assets/creation_2.jpeg
obj2[1].src = 'assets/spiderman_img.png';
console.log(obj2[1].src); // http://127.0.0.1:5500/assets/spiderman_img.png

/* 3)getElementByTagName('tagName') : Returns the Element as an HTML Collection(multiple array like objects), representing the elements with matching tag name or Empty Collection(if not found). */
let obj3=document.getElementsByTagName('p');
console.log(obj3); // HTMLCollection(3) [p, p#description, p#description]
console.log(obj3[2]); // <p id="description">In 1980 ,...</p>

/* 4)querySelector() : Returns a single element as an object,representing the element whose match the first specified selector. 
                       i)Class : document.querySelector('.className');
                       ii)Id : document.querySelector('.idName');
                       iii)Element : document.querySelector('elementName');                       
                       */
/* Ex1 */
let obj4 = document.querySelector('#description');
console.log(obj4); // <p id="description">In 1962 ,...</p>

/* Ex2 */
let obj5 = document.querySelector('.oldImg');
console.log(obj5); // <img src="assets/creation_1.png" class="oldImg" />


/* Ex3 */
let obj6 = document.querySelector('p');
console.log(obj6); // <p> <b>Spider-Man</b> is ... </p> 

/* 5)querySelectorAll() : Returns the Elements as an Nodelist Collection(multiple array like objects),representing the element whose matches the specified classname,idname and elment or Empty NodeList(if not found). 
                            i)Class : document.querySelectorAll('.className');
                            ii)Id : document.querySelectorAll('.idName');
                            iii)Element : document.querySelectorAll('elementName');                       
                       */
let obj7 = document.querySelectorAll('#description');
console.log(obj7); // NodeList(2) [p#description, p#description]

/* Ex2 */
let obj8 = document.querySelectorAll('.oldImg');
console.log(obj8); // NodeList(3) [img.oldImg, img.oldImg, img.oldImg]


/* Ex3 */
let obj9 = document.querySelectorAll('p');
console.log(obj9); // NodeList(3) [p, p#description, p#description]

/* innerText : It sets or return the text content of the element,but does not return the hidden element,spacing and html tags. */
/* textContent : It sets or return the text content of the element, it shows the spacing and hidden element but not shows the html tags */
/* innerHTML It gets or sets the text content and HTML Tags of the element,it return the hidden element,spacing and html tags. */

/* Difference between innerHTML,innerText,textContent */
/* innerHTML : 1)It return spacing,hidden elements and html tags. 2)It sets content and html tags. */
/* innerText : 1)It does not return spacing,hidden elements and html tags. 2)It sets content only. */
/* textContent : 1)It return spacing,hidden elements but not html tags. 2)It sets content only. */


/* Ex1 */
let para=document.querySelector('p');
console.log(para.innerText);
console.log(para.textContent);
console.log(para.innerHTML);

/* Ex2 */
let head=document.querySelector('h1');
head.innerText="<u>Spider-Man Home Return</u>";
console.log(head.innerText); // Show the text on screen as it is : <u>Spider-Man Home Return</u>

head.innerHTML="<u>Spider-Man Home Return</u>";
console.log(head.innerHTML); // Make the text underline on screen : Spider-Man Home Return

head.innerHTML = `<u>${head.innerText}</u>`;
console.log(head.innerHTML); // Make the text underline on screen : Spider-Man Home Return

/* Manipulating Attribute : 1)getAttribute() 2)setAttribute() */
/* 1)getAttribute() : It return the value of the elment attribute or null(if not found). Syntax: element.getAttribute('attributeName');  */
/* 2)setAttribute() : It sets a new value to an attribute.If the attribute doesnt exist it is created first. Syntax: element.setAttribute('attributeName',Value); */

/* Ex1 */
let Images= document.querySelector('#Imaging');
console.log(Images.getAttribute('id')); //Imaging
console.log(Images.getAttribute('class')); //null

Images.setAttribute('id','SpiderImages');
console.log(Images); //<img src="assets/creation_2.jpeg" id="SpiderImages" />
Images.setAttribute('class','SpiderImages1');
console.log(Images); //<img src="assets/creation_2.jpeg" id="SpiderImages"  class="SpiderImages1" />

/* Manipulating Style : 1)style 2)classList */
/* 1)style : The property apply on the inline style of an element.At a time single property will apply. =>(not reccomended bcz it will apply on inline css) */
/* Ex1 */
let head2=document.querySelector('h2');
console.dir(head2.style); // Shows all the property of inline css i.e color:red property ,but it will not show external css property i.e backgroundColor:pink
head2.style.backgroundColor="violet";
console.dir(head2.style); // Shows all the property of inline css i.e color:red property and now added backgroundColor:violet, it will not show external css property i.e backgroundColor:pink
head2.style.textDecoration="underline";

/* 2)classList : Gets and Sets th value of the class attribute of the specified element.It returns an array.
     Methods: 
     i)classList.add() : To add new classes.
     ii)classList.remove() : To remove classes.
     iii)classList.contains() : To check if class exists.
     iv)classList.replace() : To replace class Name.
     v)classList.toggle() : To toggle between add and remove. */

/* Ex1 */
let art=document.querySelector('article');
art.classList.add('xyz');
console.log(art.classList); // ['xyz', value: 'xyz']
art.classList.add('green','abc');
console.log(art.classList); // ['xyz', 'green', 'abc', value: 'xyz green abc']
//art.setAttribute('class','green'); // if we add class:green it will remove the class xyz so setAttribute add one class at a time 
//art.setAttribute('class','xyz'); // if we add class:xyz it will remove the class green so setAttribute add one class at a time

art.classList.remove('abc');
console.log(art.classList); //['xyz', 'green', value: 'xyz green']

console.log(art.classList.contains('green')); //true
console.log(art.classList.contains('abc')); //false

art.classList.add('abc');
console.log(art.classList); // ['xyz', 'green', 'abc', value: 'xyz green abc']

art.classList.toggle('abc'); // the class:abc is present so due to toggle remove it
console.log(art.classList); // ['xyz', 'green', value: 'xyz green']

art.classList.toggle('lmn'); // the class:lmn is not present so due to toggle add it
console.log(art.classList); // ['xyz', 'green', 'lmn', value: 'xyz green lmn']

/* Navigation(Select Elements):
     Methods:
     i)parentElement : Return the parent element of the specified element.
     ii)child : Return the collection of an elements child element.
     iii)childElementCount : Return the number of child elements of an element.  
     iv)previousElementSibling : Returns the previous element in the same tree level.
     v)nextElementSibling : Returns the next element in the same tree level. */

let head4=document.querySelector('h4');
console.log(head4.parentElement); // <div class="box"> ... </div>

let boxClass=document.querySelector('.box');
console.log(boxClass.children); // HTMLCollection(2) [h4, ul]
console.log(boxClass.childElementCount); // 2  

console.log(boxClass.previousElementSibling); //<p> <b>Spider-Man</b> is a ... </p>
console.log(boxClass.nextElementSibling); //<h2>Creation & Development</h2> 

/* Adding New Element on the webpage.
     createELement() : Creates a new Element. */
let newPara=document.createElement('p');
console.log(newPara); // <p></p>
console.dir(newPara); // shows all methods of <p> tag.
newPara.innerText = "Hi, I am new p tag"

//Now insert new element (<p>) into the webpage using properties
/* i)appendchild(element) : Add the element at the end position. */

let newbox=document.querySelector('.box');
newbox.appendChild(newPara);
console.log(newbox); // <div class="box"> <h4>Publication Info</h4> <ul>..</ul> <p>Hi, I am new p tag</p> </div>

/* ii)append() : Insert a string or element after the last child of the document. */
newPara.append(" this is new text");
console.log(newPara); // <p>Hi, I am new p tag this is new text</p>

let newBtn=document.createElement('button');
newBtn.innerText="Click Me";
newPara.append(newBtn);
console.log(newPara); // <p>Hi, I am new p tag this is new text <button>Click Me</button> </p>

/* iii)prepend() : Insert a string or element before the first child of the document. */
newPara.prepend(" Starting text ");
console.log(newPara); //  <p>Starting text  Hi, I am new p tag this is new text <button>Click Me</button> </p>


/* insertAdjacentElement(): It inserts a given element at a specific position.
     Syntax : insertAdjacentElement(position,element).
     position: 
     i)'beforebegin': Before the targetElement itself.
     ii)'afterbegin': Just inside the targetElement, before its first child.
     iii)'beforeend': Just inside the targetElement, after its last child.  
     iv)'afterend': After the targetElement itself. */

/* Ex1 */
let newBtn2 = document.createElement('button');
newBtn2.innerText="New Button!!!";

let para1=document.querySelector('p');
para1.insertAdjacentElement('afterbegin',newBtn2);
console.log(para1); //<p>  <button>New Button!!!</button> <b>Spider-Man</b> is a superhero appearing in American comic books... </p>

/* Remove Element on the webpage. 
     i)removeChild() ii)remove()
*/
/* i)removeChild(): Removes an elements child. Syntax : parentnode.removeChild(childnode). */
let removeElt = document.querySelector('.rmv');
let h1remove=document.querySelector('.rmv h1')
removeElt.removeChild(h1remove);
console.log(removeElt); // <div class="rmv"> <p>Paragraph .....</p> <h2>Heading2sss</h2> </div>

/* ii)remove() : Removes the element from the document. Syntax : remove(node); */
let rmvNd=document.querySelector('.rmv h2');
rmvNd.remove();
console.log(removeElt); // <div class="rmv"> <p>Paragraph .....</p>  </div>








