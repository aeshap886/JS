"use strict"; // treat all JS code as newer version


// alert (3 + 3) //we are using nodejs, not browser

console.log(3 + 3)  //code readability should be high

console.log("aesha");

let name = "aesha"
let age = 23
let isLoggedIn = false

// number => 2 to power 53
// bigint
//string => ""
// boolean => true/false
//null => standalone value 
// undefined => 
// symbol => unique 

// object

// console.log(typeof null); //null is object 


// console.log(typeof undefined); //undefined

// primitive 

// 7 types: String, Number,Boolean,null,undefined,symbol, BigInt

//java script is a dynamic type 

const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34567865432345673567n


//Reference (non primitive)

//Array, Objects,Functions

const heros=["shaktiman", "doga","naagraj"];

let myObj ={
    name :"Aesha",
    age: 23
}

const myFunction = function(){
    console.log("Hello world");
    
}
// console.log(typeof null);

// console.log(typeof bigNumber);
// console.log(typeof undefined);
// console.log(typeof Object);
// console.log(typeof myFunction);
// console.log(typeof anotherId);


//***************************************

//Stack (primitive), Heap(non-Primitive)

let myYoutubename = "Aeshapatel1234com"

let anothername = myYoutubename

anothername = "aeshu1233"
console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email:"user@gmail.com",
    upi: "user@123"
}

let userTwo = userOne

userTwo.email = "Aesha@google.com"

console.log(userOne.email);
console.log(userTwo.email);

