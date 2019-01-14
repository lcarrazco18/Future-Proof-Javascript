//Operators

// var x = "john";
// var y = "doe";
// var c = " "
// x + c + y

// var x = "5";
// var y = 5;
// (5 == 5) ? "yes its equal" : "not equal"

// var user = {
//     name: 'joe',
//     age: 29
// }

// if(user.name == 'joe' && user.age == 29) {
//     console.log('HEY LET THE USER IN')
// } else {
//     console.log('Dont give access')
// }

// var user = {
//     name: 'joe',
//     age: 29
// }

// if(user.name == 'bryant') {
//     console.log('HEY LET THE USER IN')
// } else {
//     console.log('Dont give access')
// }

//Integers

// var cars = (((((4 + 2)* 8) / 2) % 2)
// cars
// var cars = 12
// var bikes = 4
// cars * bikes
//4 < 6
//4 > 6
//4 == 6
//4 == '4'

//Arrays
// var users = ["Matt", "Cam", "Barbara", "Bryant", "Joseph"]
// console.log(users[2])

// var users = ["Matt", 2, "Cam", {user: "Barbara"}, ["array", "array2"], "Joseph"]
// console.log(users[3].user)

//Array Methods

// var fruits = ["apple", "banana", "grape"]
// console.log(fruits)

// //push() one of the most used array methods****
// fruits.push("strawberry")
// console.log(fruits)

// //pop()
// fruits.pop()
// console.log(fruits)
// fruits.splice(1,1)
// console.log(fruits)
// fruits.length

//Array excercises

// Declare a variable with 5 different music artists
var artists = ["Madonna", "Elvis Presley", "Frank Sinatra", "Barry White", "Freddie Mercury"]

// print the variable
console.log(artists)

// Print the 4th artist on the Array with a console.log
console.log(artists[3])

// Add another artist to Array for a total of 6 artist then print the array
artists.push("Jose Jose")
console.log(artists)
// Remove the 4th artist on the list and then print the list
artists.splice(3,1)
console.log(artists)
// Print the array in reverse
console.log(artists.reverse())