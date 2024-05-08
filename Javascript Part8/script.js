/* 1)forEach : The forEach() method calls a function for each element in an array. */
let arr=[1,2,3,4,5];

/* Ex1 */
let print=function(elmt){
    console.log(elmt); // 1 2 3 4 5
};
arr.forEach(print);

/* Ex2 */
arr.forEach(function (elmts){
    console.log(elmts); // 1 2 3 4 5 
});

/* Ex3 */
arr.forEach((elt) =>{
    console.log(elt); // 1 2 3 4 5 
});

/* Ex4 */
let arr1=[{
    name:"john",
    marks:95
  },
  {
    name:"cena",
    marks:94.4    
  }];

  arr1.forEach( (element) =>{
    console.log(element.marks); // 95 94.4
  });

/* Ex5 */
// Syntax : array.forEach(function(currentValue, index, arr)); // 1)currentValue : The value of the current element. 2)index : The index of the current element. 3)arr : The array of the current element. 
arr.forEach((el,index, arrs)=>{
 arrs[index]=el*el;
});
console.log(arr); // [1,4,9,16,25]

/* 2)map : map() creates a new array from calling a function for every array element.map() does not change the original array. */
/* Ex1 */
let arr2=[2,4,6,8];
let square=arr2.map((el)=>{
  return el*el;
});
console.log(square); // [4,16,36,64]
console.log(arr2); //[2,4,6,8]

/* Ex2 */
let arr3=[{
  name:"john",
  marks:95
},
{
  name:"cena",
  marks:94.4    
}];

let gpa=arr3.map((els)=>{
  return els.marks % 10;
});
console.log(gpa); // [9.5, 9.440000000000001]

/* Ex3 */
let arr4=[1,2,3,4,5];
let m1=arr4.map((el)=>{
  return el < 3;
});
console.log(m1); //[true, true, false, false, false]

/* 3)filter : The filter() method creates a new array filled with elements that pass a test provided by a function.The filter() method does not change the original array. */
/* Ex1 */
let ans1=arr4.filter((el)=>{
  return el<3;
});
console.log(ans1); // [1,2]

/* Ex2 */
let num=[1,2,3,4,5,6,7,8,9,10];
let ans=num.filter((el)=>{
    return el%2 == 0;
});
console.log(ans); //[2, 4, 6, 8, 10]

/* 4)every :  The every() method executes a function for each array element.
              The every() method returns true if the function returns true for all elements.
              The every() method returns false if the function returns false for one element.
              The every() method does not change the original array */

/* Ex1 */
let ans3=[2,4].every((el)=>{
  return el%2==0;
});
console.log(ans3); //true

/* Ex2 */             
let ans2=[2,3,4].every((el)=>{
  return el%2==0;
});
console.log(ans2); //false

/* 5)some : The some() method executes a function for each array element.
            The some() method returns true (and stops) if the function returns true for one of the array elements.
            The some() method returns false if the function returns false for all of the array elements.
            The some() method does not change the original array.
 */

/* Ex1 */
let ans4=[2,4].some((el)=>{
  return el%2==0;
});
console.log(ans4); //true

/* Ex2 */             
let ans5=[2,3,4].some((el)=>{
  return el%2==0;
});
console.log(ans5); //true

/* Ex3 */             
let ans6=[3,5,7].some((el)=>{
  return el%2==0;
});
console.log(ans6); //false

/* 6)reduce : The reduce() method executes a reducer function for array element.
              The reduce() method returns a single value: the function's accumulated result.
              The reduce() method does not change the original array.
    Syntax :
            arr.reduce(reducer fynction with 2 variables for(accumulator,element)); 
    
    accumulator : The value resulting from the previous call to callbackfunction.    

*/

/* Ex1 */
let num1=[1,2,3,4];
let finalVal = num1.reduce((acc,elt)=>{
      return acc + elt;
});
console.log(finalVal); // 10
/* Dry Run
  [1,2,3,4] => elt
  (acc,elt)
  (0,1) => 0+1 => 1
  (1,2) => 1+2 => 3
  (3,3) => 3+3 => 6
  (6,4) => 6+10 => 10 return

*/

/* Ex2 - Find maximum number in an array */
let num2=[1,2,3,1];
let result=num2.reduce((max,elt)=>{
    if(max>elt)
    {
      return max;
    }else{
      return elt;
    }
});
console.log(result); // 3
/* Dry Run
  [1,2,3,1] => elt
  (max,elt)
  (0,1) => if(0 > 1) => false => 1
  (1,2) => if(1 > 2) => false => 2
  (2,3) => if(2 > 3) => false => 3
  (3,1) => if(3 > 1) => true => 3 return
*/

/* Default Parameters : Giving a default value to the parameters. */
/* Ex1 */
function sum1(a,b=2){
  return a+b;
}
console.log(sum1(3,4)); //7
console.log(sum1(3)); //5

/* Ex2 */
function sum2(a=1,b){
  return a+b;
}
console.log(sum2(3,4)); //7
console.log(sum2(3)); //Nan => Error

/* Note:Always use default parameters to the last parameters. */

/* Spread : The spread operator(...) expand an iterable(like an array,object,string,etc) into more elements. */
// Before Spread Operator
/* Ex1 */
console.log(Math.min(1,2,3,8,10)); //1

/* Ex2 */
let arr5=[1,2,3,8,10];
console.log(Math.min(arr5[0],arr5[1],arr5[2],arr5[3],arr5[4])); //1

// After Spread Operator
/* Ex3 */
console.log(Math.min(...arr5)); //1

/* Ex4 */
console.log(...arr5); // 1 2 3 8 10

/* Ex5 */
console.log(..."college"); // c o l l e g e

/* Spread with Array / Array Cloning : Array Cloning refers to the creation of an exact copy of an original array.Original array remains as it is. */

/* Ex1 */
let arr6=[1,2,3,4,5];
let newArr6=[...arr6];
console.log(newArr6); // [1, 2, 3, 4, 5]
console.log(arr6); // [1, 2, 3, 4, 5]
newArr6.push(6);
console.log(newArr6); // [1, 2, 3, 4, 5, 6]
console.log(arr6); // [1, 2, 3, 4, 5]

/* Ex2 */
let chars=[..."hello"];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']

/* Ex3 */
let odd=[1,3,5];
let even=[2,4,6];
let nums=[...even,...odd];
console.log(nums); //[2, 4, 6, 1, 3, 5]

/* Spread with Object / Object Cloning : Object Cloning refers to the creation of an exact copy of an original object.Original object remains as it is. */
/* Ex1 */
const data={
  email:"ironman@gmail.com",
  password:"abc"
};
const dataCopy={...data};
console.log(dataCopy); // {email: 'ironman@gmail.com', password: 'abc'}
console.log(data); // {email: 'ironman@gmail.com', password: 'abc'}

dataCopy.id=123;
console.log(dataCopy); // {email: 'ironman@gmail.com', password: 'abc' , id: 123}
console.log(data); // {email: 'ironman@gmail.com', password: 'abc'}

const dataCopy1={...data,country:"India"};
console.log(dataCopy1); // {email: 'ironman@gmail.com', password: 'abc', country: 'India'}
console.log(data); // {email: 'ironman@gmail.com', password: 'abc'}

/* Ex2 : Object with Array */
let arr7=[1,5,8,50];
let obj1={...arr7};
console.log(obj1); // {0: 1, 1: 5, 2: 8, 3: 50}
console.log(arr7); // [1, 5, 8, 50] 

/* Ex3 : Object with String */
let obj2={..."hello"};
console.log(obj2); //{0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}

/* Rest : The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.Ex are Math.min,Math.max,etc */
/* Ex1 */
function print1(...argss){
  for (let i = 0; i < argss.length; i++) {
    console.log("You gave us",argss[i]);
  }
}
print1(2); //You gave us 2
print1(3,8,7,15); // You gave us 3
                  // You gave us 8
                  // You gave us 7
                  // You gave us 15

/* Ex2 */
function sum3(...totalSum){
  console.log(totalSum); // [8, 2]   [8, 2, 100, 190, 200]
  let addition = 0;
  for (let i = 0; i < totalSum.length; i++) {
        addition+=totalSum[i];    
  }
  return addition;
}
console.log(sum3(8,2)); //10
console.log(sum3(8,2,100,190,200)); //500

/* Ex3 */
function sum4(...args) {
  return args.reduce((sum,el)=> sum + el)
}
console.log(sum4(8,2)); //10
console.log(sum4(8,2,100,190,200)); //500

/* Ex4 */
function minNumber(msg,...args)
{
  console.log(msg);
  return args.reduce((min,el)=>{
    if(min < el)
    {
      return min;
    }
    else{
      return el;
    }
  });
}

console.log(minNumber("Minimum Number is",1,2,4,8)); // Minimum Number is 1
console.log(minNumber("Minimum Number is",10,2,4,8,-8)); // Minimum Number is -8

/* Destructuring : Destructuring makes it easy to extract only what is needed. */
/* Ex1 */
let names=["tony","bruce","peter","steve"];

//Old Way
//let winner=names[0];
//let runnerup=names[1];

let [winner,runnerup]=names;
console.log(winner); // tony
console.log(runnerup); // bruce
console.log(names); //["tony","bruce","peter","steve"]

/* Ex2 */
let names1=["john","cena","roman","ortan","kane"];
let [title,MoneyBank,...Rumble]=names1;
console.log(title); // john
console.log(MoneyBank); // cena
console.log(Rumble); // ['roman', 'ortan', 'kane']
console.log(names1); // ["john","cena","roman","ortan","kane"]

/* Ex3 : Destructing on Objects */
let stud={
  name:"karan",
  age:14,
  class:9,
  username:"karan@123",
  password:"abc",
  country:"India"
};

let {username,password:secret,city="Mumbai",country:coun="America"}=stud;
console.log(username); // karan@123
console.log(secret); // abc
console.log(city); // Mumbai
console.log(coun); // India
console.log(stud); // {name: 'karan', age: 14, class: 9, username: 'karan@123', password: 'abc', county: 'India'}




