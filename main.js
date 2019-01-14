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
// var artists = ["Madonna", "Elvis Presley", "Frank Sinatra", "Barry White", "Freddie Mercury"]

// print the variable
// console.log(artists)

// Print the 4th artist on the Array with a console.log
// console.log(artists[3])

// Add another artist to Array for a total of 6 artist then print the array
// artists.push("Jose Jose")
// console.log(artists)
// Remove the 4th artist on the list and then print the list
// artists.splice(3,1)
// console.log(artists)
// Print the array in reverse
// console.log(artists.reverse())

// Objects

// var student = {
//     id: 83,
//     name: "Luis",
//     lastName: "Carrazco",
//     Grade: function(grade) {
//     // console.log('his grade is ' + grade)
//         return 'his grdade is ' + grade
//     },
//     classes: ["math", "english", "gym", "cooking"]
// }
// console.log(student)
// console.log('==============================')
// console.log(student.lastName)
// console.log('==============================')
// console.log(student.Grade(99))
// console.log('==============================')
// console.log(student.id)
// console.log('==============================')
// console.log(student.classes[1])
// console.log('==============================')
// console.log(student.classes.push('HEY I PUSHED'))
// console.log(student.classes)

// Objects part 2

// var student = {
//     name: 'Luis',
//     age: 37,
//     car: {
//         name: "gle",
//         year: 2017,
//         price: 80000,
//         style: 'sport'
//     }
// }
// console.log(student)
// console.log('==============================')
// student["transmission"] = 'automatic'
// console.log(student)
// console.log('==============================')
// student.graduated = 2011
// console.log('==============================')
// console.log(student)
// console.log('==============================')
// student.age = 38
// console.log(student)
// console.log('==============================')

// var students = [{
//     name: 'Luis',
//     age: 37,
//     car: {
//         name: "gle",
//         year: 2017,
//         price: 80000,
//         style: 'sport'
//     }
// },
// {
//     name: 'Jaime',
//     age: 27,
//     car: {
//         name: "gle",
//         year: 2017,
//         price: 10000,
//         style: 'regular'
//     }
// },
// {
//     name: 'Matt',
//     age: 21,
//     car: {
//         name: "gle",
//         year: 2017,
//         price: 50000,
//         style: 'sport'
//     }
// }
// ]
// console.log(students)
// students[0].props = 'chain'
// var Luis = students[0].props
// console.log(students)

// Objects Excercises

// Declare a variable named student with an object inside that has properties name, age, occupation (use your information) then print the variable
// var student = {
//     name: "Luis",
//     age: 37,
//     occupation: "truck driver"
// }
// console.log(student)
// console.log('==============================================')
// // add a property with your birthdate as a String and must be like this object["key"] then print the variable student
// student["birthdate"] = '03/16/1981'

// console.log(student)
// console.log('==============================================')
// //add an array with all your education but using .key and inside the array you must have other objects with the information of each of the schools you went to like the name, years in the school, and gradutaionDate and then print the variable student

// student.education = [
//     {
//         name: "Cicero School",
//         years: 2,
//         graduationDate: 'June 1996'
//     },
//     {
//         name: "J.S Morton East H.S",
//         years: 4,
//         graduationDate: 'May 1999'
//     }
// ]
// console.log(student)

// console.log('==============================================')
// // then print one of the schools name
// console.log(student.education[1].name)

// Functions

var usersName = function (name) {
    console.log('this user\'s name is ' + name)
}

usersName('Luis')