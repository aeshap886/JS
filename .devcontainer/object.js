//singleton
//Object.create

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Aesha",
    "full name": " aesha usadadiya ",
    [mySym]: "mykey1",
    age: 23,
    location: "surat",
    email: "Aesha123@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["monday", "saturday"]

}

// console.log(JsUser.email);

// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "aesha@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "asdfgh.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`); //
    
}

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());




