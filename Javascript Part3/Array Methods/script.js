/* Array : Linear Collection of things.To store multiple values and store different types of items.Array are of type 'object'. */

/* Creating Arrays */
let numbers=[2,4,6,8];
let names=["aman","bob","catyln"]; 
let info=["aman",25,6.1];  //mixed array
let newArr=[]; //empty array

/* Accessing Arrays */
console.log(numbers[2]); //6
console.log(names[3]); //undefined
console.log(info[0]); //aman
console.log(names.length); //3
console.log(newArr.length); //0
console.log(info[0][1]); //m

/* Arrays are Mutable i.e the method/update apply on original arrays.  */
names[2] = "john";
console.log(names); //['aman', 'bob', 'john']

/* Array Methods :  */
/* 1)Push : Add an element to the end of an array. */
/* 2)Pop : Delete an element from end of array and return it. */
/* 3)Unshift : Add an element to the start of an array. */
/* 4)Shihft : Delete an element from start of array and return it. */

let cars=["audi","bmw","xuv"];
cars.push("maruti");
console.log(cars); //['audi', 'bmw', 'xuv', 'maruti']

cars.pop();
console.log(cars); //['audi', 'bmw', 'xuv']

cars.unshift("swift");
console.log(cars); //['swift', 'audi', 'bmw', 'xuv']

cars.shift();
console.log(cars); //['audi', 'bmw', 'xuv']

/* 5)indexOf : Returns the first index of occurence of some value in array or gives -1 if not found. */
let primary=["red","yellow","red","blue"];
console.log(primary.indexOf("yellow")); //1
console.log(primary.indexOf("green")); //-1(not found)
console.log(primary.indexOf("r")); //-1(not found)
console.log(primary.indexOf("red")); //0(first index of occurence return)

/* 6)includes : It search for a value. */
console.log(primary.includes("red")); //true
console.log(primary.includes("green")); //false

/* 7)concat : It join two or more arrays and return a new containing joined array ,it does not change an existing/original arrays. */
let secondary=["red","yellow"];
let ternary=["orange","green","red"];
let allColors=secondary.concat(ternary);
console.log(allColors); //['red', 'yellow', 'orange', 'green', 'red']
console.log(secondary); //['red', 'yellow']
console.log(ternary); //['orange', 'green', 'red']

/* 8)reverse : It Reverse an array.  */
let newArray=["red","yellow","blue"];
newArray.reverse();
console.log(newArray); //['blue', 'yellow', 'red']

/* 9)slice : It returns selected elements in an array,as a new array.It does not change on original array. Syntax - array.slice([start],[end]) => The slice() method selects from a given start, upto a (not inclusive) given end. */
let colors=["red","yellow","blue","pink"];
console.log(colors.slice()); //['red', 'yellow', 'blue', 'pink']
console.log(colors.slice(2)); //['blue', 'pink']
console.log(colors.slice(1,4)); //['yellow', 'blue', 'pink']
console.log(colors.slice(colors.length - 1)); //['pink']  => Last Value of an array
console.log(colors.slice(-2)); //['blue', 'pink'] => colors.length - 2  =>  4 - 2  => 2(start)

/* 10)splice : It adds and/or removes array elements.It overwrites the original array. Syntax - array.splice(start,[deleteCount],[item1,item2,...])  */
let color=["red","yellow","blue","orange","pink","white"];
color.splice(4);
console.log(color); //['red', 'yellow', 'blue', 'orange']

color.splice(0,2);
console.log(color); //['blue', 'orange']

color.splice(0,1,"black","grey");
console.log(color); //['black', 'grey', 'orange']

color.splice(1,2);
console.log(color); //['black']

color.splice(0,0,"purple","green","blue");
console.log(color); //['purple', 'green', 'blue', 'black']

color.splice(1,0,"red");
console.log(color); //['purple', 'red', 'green', 'blue', 'black']

/* 11)sort : It sorts an array element in ascending alphabetically,it does not work on numbers and overwrite on original array. */
let days=["monday","sunday","wednesday","tuesday"];
days.sort();
console.log(days); //['monday', 'sunday', 'tuesday', 'wednesday']

let squares=[25,16,4,49,36,9];
squares.sort();
console.log(squares); // [16, 25, 36, 4, 49, 9] ==> Not work on numbers properly

/* Array Reference : Address in memory */

console.log("name" == "name"); //true
console.log("name" === "name"); //true

console.log([1] == [1]); //false   => bcz it compares adresses of memory
//console.log([2] === [2]); false  => bcz it compares adresses of memory

let arr=['a','b','c'];
let arrCopy=arr;
console.log(arr == arrCopy); //true => now it is on same address
arr.push('d');
console.log(arr); //['a', 'b', 'c', 'd']
console.log(arrCopy); //['a', 'b', 'c', 'd']
arrCopy.pop();
console.log(arr); //['a', 'b', 'c']
console.log(arrCopy); //['a', 'b', 'c']

/* Constant Array : It defines a constant reference to an array.We can still change the elements of constant array. */
const arr1=[1,2,3];
arr1.push(4);
console.log(arr1); //[1, 2, 3, 4]
arr1.pop();
console.log(arr1); //[1, 2, 3]
arr1[0]=4;
console.log(arr1); //[4, 2, 3]

// Errors in Contant arrys
arr1=[5,6,7];
console.log(arr1); //Error

let car=["odi","bmw"];
arr1=car;
console.log(arr1); //Error


/* Nested Arrays : Array of arrays */
let nums=[[1,2],[3,4],[5,6]];
console.log(nums);
console.log(nums.length); //3
console.log(nums[0].length); //2
console.log(nums[0][0]); //1









