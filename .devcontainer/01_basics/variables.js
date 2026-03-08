const accountId = 1455666
let accountEmail = "aesha @123.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 2 //not allowed
accountEmail = "Aesh@gmial.com"
accountPassword = "23234"
accountCity = "rajkot"
let accountState;

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
