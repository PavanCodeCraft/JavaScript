const myName = "Pavan Rajput"
let accountEmail = "pavan@gamil.com"
var accountPassword = "2342"

//we can declare variable with declaring its type

// myName= "Rajput" this is not allowed because this is constant and we can't change its value

accountEmail = "rajput@gamil.com"  // this is fine have not issue
accountPassword = "34235"
accountCity = "Surat"

// prefere not to use var due to its scope issue 

//console.log(accountEmail) // this is used to print single value

// Note: What if we want to print all value in single line for this we use console table 
console.table([accountEmail, accountPassword, accountCity]) //will print in tabular form