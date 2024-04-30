/* for loop: It is used for iterating over a sequence.
   Syntax : 
            for(initialisation;condition;updation)
            {
                //do something
            }
*/

for(let i=1;i<=5;i++)
{
    console.log(i); // 1 2 3 4 5
}

/* Q.Print Odd Number from 1 to 10 */
for(let i=1;i<=10;i=i+2)
{
    console.log(i); // 1 3 5 7 9
}

/* Q.Print Even Number from 1 to 10 */
for(let i=2;i<=10;i=i+2)
{
    console.log(i); // 2 4 6 8 10
}

/* Infinite Loop: It is a looping construct that does not terminate the loop and executes the loop forever. */
//  for(let i=1;i>=0;i++){} 
//  for(let i=1;i<=5;i--){} 
//  for(let i=1; ;i++){}

/* Q.Print the multiplication table for 5. */
for(let i=5;i<=50;i+=5)
{
    console.log(i); // 5 10 15 20 25 30 35 40 45 50
}

/* Q.Print the multiplication table for user input values. */
let n=prompt("Write the number");
n=parseInt(n);
for(let i=n;i<=n*10;i=i+n)
{
    console.log(i); 
}

/* Nested for loop : A nested for loop means a for loop statement inside another for loop statement. */
for(let i=1;i<=3;i++)
{
    console.log(`Outer Loop ${i}`);
    for(let j=1;j<=3;j++)
    {
        console.log(j);
    }
}
/* Outer Loop 1
    1
    2
    3
   Outer Loop 2
    1
    2
    3
   Outer Loop 3
    1 
    2
    3
*/


/* while loop : The while loop loops through a block of code as long as specified condition is true. */
/* Ex1 */
let m=1;
while(m<=5)
{
    console.log(m); // 1 2 3 4 5 
    m++;
}

/* Ex2 */
let n1=5;
while(n1>=1)
{
    console.log(n1); // 5 4 3 2 1 
    n1--;
}

/* Ex3 */
let e=1;
while(e<=15)
{
    console.log(e); // 1 3 5 7 9 11 13 15 
    e=e+2;
}

/* Ex4 */
let o=2;
while(o<=12)
{
    console.log(o); // 2 4 6 8 10 12 
    o=o+2;
}

/* Q. Guess the favorite movie of user.If user type 'quit' to quit the game */
let movie="sultan";
let guess=prompt("Guess my favourite movie.");
while((guess!=movie) && (guess!='quit'))
{
    guess=prompt("Wrong Guess! Please try again.");
} 
if(guess == movie)
{
    console.log("Congrats!!");
}else{
    console.log("Quit!!");
}

/* break keyword : The break keyword "jumps out" of the loop */
let jump = 1;
while(jump <= 5)
{
    if(jump == 3)
    {
        break;
    }
    console.log(jump); // 1 2
    jump++;
}

/* Q.Rewrite guess a favorite movie program and use break keyword. */
let movie1="sultan";
let guess1=prompt("Guess my favourite movie.");
while(guess1!=movie1)
{
    if(guess1 == 'quit')
    {
        console.log("Quit!!");
        break;
    }
    guess1=prompt("Wrong Guess! Please try again.");
} 
if(guess1 == movie1)
{
    console.log("Congrats!!");
}

/* Loops with Array : Use loop to iterate over an array. */
let fruits=["mango","apple","banana","litchi","orange"];
for(let i=0;i<fruits.length;i++)
{
    console.log(i ,fruits[i]);  
    // 0 mango
    // 1 apple
    // 2 banana
    // 3 litchi 
    // 4 orange
}

/* Q. Reverse the above fruits array using loop. */
for(let i=fruits.length-1;i>=0;i--)
{
    console.log(i ,fruits[i]);  
    // 4 orange
    // 3 litchi
    // 2 banana
    // 1 apple 
    // 0 mango
}

/* Loops with Nested Arrays : Nested loops with nested arrays. */
/* Ex1 */
let heroes=[
        ["ironman","spiderman","thor"],
        ["superman","wonder woman","flash"]
    ];

for (let i = 0; i < heroes.length; i++) {
    console.log(i , heroes[i]);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j = ${j} , ${heroes[i][j]}`);        
        /*  0 ["ironman","spiderman","thor"]
            j = 0 , ironman
            j = 1 , spiderman
            j = 2 , thor
            1 ["superman","wonder woman","flash"]
            j = 0 , superman
            j = 1 , wonder woman
            j = 2 , flash
        */
    }
}

/* Ex2 */
let students=[
    ["aman",95],
    ["anuraj",94.5]
];

for (let i = 0; i < students.length; i++) {
    console.log(`Info of student #${i+1}`);
    for (let j = 0; j < students[i].length; j++) {
        console.log(students[i][j]);
        /*  Info of student #1
            aman
            95
            Info of student #2
            anuraj
            94.5
        */
    }
}

/* for of loop : The for-of statement loops through the values of an iterable object.The iterable object data structure such as Arrays,Strings,Maps,etc 
    Syntax:  for(variableName of iterable)
             {
                //code block to be executed
             }
*/
/* Ex1 */
let fruit=["mango","apple","banana","litchi","orange"];
for(x of fruit)
{
    console.log(x); // mango apple banana litchi orange
}

/* Ex2 */
for (characters of 'college') {
    console.log(characters); // c o l l e g e
}

/* Nested for-of Loop : Nested for-of Loop with Nested Arrays. */
let heroes1=[
    ["ironman","spiderman","thor"],
    ["superman","wonder woman","flash"]
];

for(list of heroes1)
{
    for (hero of list)
     {
        console.log(hero); // ironman spiderman thor superman wonderwoman flash
    }
}