// Type of storage in javaScript (how value store in javaScript)

// There are two type of storage in javaScript 
    // 1) Stack (all Primitive datatype are store in this way) 
    // 2) Heap (all non primitive or reference datatype)

// stack

let myName = "Pavan"
let anotherName = myName  // value of myName will store in anotherName
anotherName = "Pavan Rajput"  // assign anotherName a new value
console.log(anotherName);  // return "Pavan Rajput" (will print new assign value in anotherName) 
// Note: because in stack storage original reference are not store its copy store and as we assign new value to the same variable its copy replace with new value but this scenerio is different in Heap storage

console.log(myName); // return Pavan (because its original value will reamin as it is as we are working with its copy)

// Heap

let userOne = {
    email: "Pavan@gamil.com",
    upi: "userOne@ybl"
}
let userTwo = userOne
userTwo.email = "rajput@gamil.com"

console.log(userOne.email)  //retun rajput@gmail.com (becuase in heap its origial location or refefence value is store and as we perform userTwo.email == "rajput@gmail.com" its original value everywhere like here in userOne will also change it is not like stack storage)