
/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
console.log("\n.....ex1....answer")
const positiveNumbers= ["1,2,3,4,5"] 
console.log(positiveNumbers)
/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

console.log("\n.....ex2....answer")
var person = {
    name:"Chinagorom Esther",
    surname: "Nomeh",
    emailAddress: "mypotatoes@gmail.com",
    age:"27"
}
console.log(person);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

console.log("\n.....ex3....answer")
 var person = {
    name:"Chinagorom Esther",
    surname: "Nomeh",
    emailAddress:"mypotatoes@gmail.com",
    age:"27",
    DrivingLicence: true 
 }
    console.log(person);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/
console.log("\n.....ex4....answer")
var person = {
    name:"Chinagorom Esther",
    surname: "Nomeh",
    emailAddress:"mypotatoes@gmail.com",
    age:"27",
    DrivingLicence: true 
 }
delete person.age;
console.log(person);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
console.log("\n.....ex5....answer")
 var person = {
    name:"Chinagorom Esther",
    surname: "Nomeh",
    emailAddress:"mypotatoes@gmail.com",
    age:"27",
 }

var person2 = {
    name:"chioma",
    surname:"igboke",
    age:"27",
    emailAddress:"strawberrries@gmail.com",
    

} 
let compareEmailAddress = person.emailAddress === person2.emailAddress
console.log(compareEmailAddress)

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

console.log("\n.....ex6....answer")

let totalShoppingCart = 40//currency:Euros
let eligibility
if ( totalShoppingCart > 50){
    eligibility ="Qualifies for free shipping"
}

else {
    eligibility ="10"
}
console.log(eligibility)

/* EXERCISE 7 
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
console.log("\n....ex7...answer\n")

totalShoppingCart = 40//currency: Euros
let discount = 20// percent,
shippingCost = 10
let discountedTotalShoppingCart = 40*0.8

 if (discountedTotalShoppingCart>50){
     console.log("qualifies for free shipping, the total is" + discountedTotalShoppingCart)
 }
 else {
     console.log("no free shipping, the total is" + (discountedTotalShoppingCart+10))
 }
 totalShoppingCart=discountedTotalShoppingCart+shippingCost

 console.log(totalShoppingCart)


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
console.log("\n...ex8...answer\n")
let car={
    brand:"porshe",
    model:"porshe 911",
    licensePlate:"BD51 SMR",
}
console.log(car)

let car2 = {
    brand:"porshe",
    model:"porshe 911",
    licensePlate : "BAY 4567"
}
console.log(car2)

let car3 ={
    brand:"porshe",
    model:"porshe 911",
     licensePlate : "NCE 4567"
}
console.log(car3)

let car4 = {
    brand:"porshe",
    model:"porshe 911",
    licensePlate :"NHT 6789"
}
console.log(car4)

let car5 = {
    brand:"porshe",
    model:"porshe 911",
    licensePlate: "UTH 6478"
}
console.log(car5)

let car6 = {
    brand:"porshe",
    model:"porshe 911",
    licensePlate :"JIG 3728"
}
console.log(car6)

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const arrayCarForRent=["car, car2,car3,car4,car5,car6"]

console.log(arrayCarForRent)

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("\n....ex10....answer \n")

let arraycarForRent=["car", "car2","car3","car4","car5","car6"];
arraycarForRent.shift();
arraycarForRent.pop();

console.log(arraycarForRent)

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log("\n...ex11..answer")

console.log(car, car.licensePlate, car.brand);



/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
console.log("\n...ex12..answer")

let carsForSale=[]
console.log(carsForSale)

carsForSale.push("car","car2","car3");
console.log(carsForSale)

carsForSale = ["car", "car2", "car3"];
let totalCars = {
  carsForSale: carsForSale.length,
  arrayCarsForRent: arrayCarForRent.length,
};
console.log(totalCars)
/*
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
console.log("\n...ex13.answer")

for (let i = 0; i < carsForSale.length; i++) {
    console.log(carsForSale[i].brand);
    console.log(carsForSale[i].model);
    console.log(carsForSale[i].licensePlate);
  }

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/