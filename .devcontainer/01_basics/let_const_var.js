const accountId = 123455
let accountEmail = "2b7M6@example.com"
var accountPassword = "12345"
accountCity = "Hyderabad" 
let accountState ;


// accountId = 2 // not allowed

accountEmail = "aesfghg@.com"
accountPassword = "123456"
accountCity = "Pune"

console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functional scope

*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])