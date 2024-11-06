const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // adding two array by this way is not a good method 
// console.log(marvel_heros);  // [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ] o/p is not looking good (we can directly push into existing array and print it )
// console.log(marvel_heros[3][2]);  // return batman

const allHeros = marvel_heros.concat(dc_heros) // this method is good but we prefer less because we can add or concat only one array at a time 
// console.log(allHeros); // o/p [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ] 

const all_new_heros = [...marvel_heros, ...dc_heros] // by this method we can any number of array
// console.log(all_new_heros) // output is somewhat simialr to concat => [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

const anotherArr = [1,2,3, [4,5,6], 7, [4,2, [6,7]]]
const finalAnotherArr = anotherArr.flat(Infinity) // this will convert all nested array into single array flat(its depth like 1,2,3 or infinity if we don't know the depth )
// console.log(finalAnotherArr);

// console.log(Array.isArray("Pavan")); // this will return false because this is string not array
// console.log(Array.from("Pavan")); // return [ 'P', 'a', 'v', 'a', 'n' ] now this is an array

// console.log(Array.from({name: "Pavan"}))  // This is intresting case this will return empty array because in this we have to tell that we want "key" array or "value" array if not mention anything it will return empty array

let score1 = 110
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // this will make a single array of all three variables
                                              // o/p [ 110, 200, 300 ]