// ფუნქცია - მრავალჯერადად გამოყენებული კოდის ფრაგმენტი
// ფუნქციის აღწერის გზები - function declaration, function expression, 
// arrow function, constructor, method 


// function declaration
function sum(a, b) {
    return a + b;
}
console.log("Sum:", sum(2, 4));
console.log("Sum:", sum(5, 11));

// get... – მონაცემების მიღება - getUserName()
// set... – მნიშვნელობის დაყენება - setThemeColor(color)
// handle... – მოვლენის დამუშავება - handleScroll(event)
// is... / has... – ბულოვანი შემოწმება - isUserLoggedIn()
// calculate... – რამის გამოთვლა - calculateTotalPrice(items)
// render... – რაღაცის ჩვენება ეკრანზე - renderProfile(user)

// function handleClick() {
//     alert("clicked!");
// }


// function age(birthYear) {
//     let myAge = 2025 - birthYear;
//     return myAge;
// }
// console.log("Age:", age(2001));

// let myAge = age(2001);
// console.log("My age:", myAge);



// Closure Function 
// function outerFunction() {
//     let outerVariable = 'I am from outer function';
//     function innerFunction() {
//         console.log(outerVariable);
//     }
//     return innerFunction;
// }
// const closureFunction = outerFunction();
// closureFunction();



// void ფუნქცია
// function sayHello() {
//     console.log("გამარჯობა!");
// }

// function showMessage() {
//     alert("რაიმე შეტყობინება");
// }

// function doNothing() {
//     return;
// }
// // console.log(doNothing());



// default
// function personName(firstName, lastName) {
//     // return "ჩემი სახელია " + firstName + ", " + "ჩემი გვარია " + lastName;
//     return `ჩემი სახელია ${firstName}, ჩემი გვარია ${lastName}`
// }
// console.log(personName("ნინო", "წიკლაური"));




// function expression
// let x = function (a, b) {
//     return a / b;
// };
// console.log(x(100, 10))


// // Named
// const sumNums = function add(a, b) {
//     return a + b;
// };




// arrow function (ES6 -2015)
// const square = x => x * x;

// const sayHi = () => console.log("Hi!");

// let info = (a, b) => a + b;
// // let info = (a, b) => {return a + b};
// console.log(info(2, 3));


// არ აქვს this
// const person1 = {
//     name: "Nino",
//     greet: () => {
//         console.log(`Hi, I'm ${this.name}`); // undefined
//     }
// };


// // method
// const person2 = {
//     name: "Nino",
//     greet() {
//         console.log(`Hi, I'm ${this.name}`);
//     }
// }


// არ აქვს arguments
// function showArgs() {
//     console.log(arguments);
// }
// showArgs(1, 2, 3);


// const showArgs = () => {
//     console.log(arguments);
// };

// showArgs(1, 2, 3);




// არ არის კონსტრუქტორი
// function Person1(name) {
//     this.name = name;
// }
// const obj1 = new Person1("სახელი");
// console.log(obj1.name);  // სახელი



// const Person2 = (name) => {
//     this.name = name;
// };
// const p = new Person2("ნინო"); // TypeError: Person is not a constructor

