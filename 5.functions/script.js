// ფუნქცია - მრავალჯერადად გამოყენებული კოდის ფრაგმენტი
// ფუნქციის აღწერის გზები - function declaration, function expression, 
// arrow function, constructor, method, IIFE, async 


// function declaration
// function sum(a, b) {
//     return a + b;
// }
// console.log("Sum:", sum(2, 4));
// console.log("Sum:", sum(5, 11));

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
// const closureFunction = outerFunction(); // აქ ინახება innerFunction, რომელსაც აქვს წვდომა outerVariable-ზე
// closureFunction();

// outerFunction()();



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
// console.log(doNothing());



// default
// function personName(firstName="ნინო", lastName) {
//     // return "ჩემი სახელია " + firstName + ", " + "ჩემი გვარია " + lastName;
//     return `ჩემი სახელია ${firstName}, ჩემი გვარია ${lastName}`
// }
// console.log(personName(lastName="wiklauri"));




// // function expression
// let x = function (a, b) {
//     return a / b;
// };
// console.log(x(100, 10))


// function greet(name) {
//     console.log(`Hello, ${name}`)
//     console.log("Hello")
// };

// // sayHi();  // Hello, Anonymous!
// // sayHi("UniLab");  // Hello, UniLab!

// // console.log(sayHi);

// let myBtn = document.getElementById("myBtn");
// myBtn.addEventListener("click", function(){
//     greet("saxeli")
// })



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
//         console.log(this.name); // undefined
//     }
// };

// person1.greet()

// // method
// const person2 = {
//     name: "Nino",
//     greet() {
//         console.log(`Hi, I'm ${this.name}`);
//     }
// }
// person2.greet()


// არ აქვს arguments
// function showArgs() {
//     console.log(arguments);
// }
// showArgs(1, 2, 3);


// const showArgs = () => {
//     console.log(arguments);
// };

// showArgs(1, 2, 3);




// კონსტრუქტორი
// function Person1(name) {
//     this.name = name;
// }
// const obj1 = new Person1("UniLab");
// console.log(obj1.name);  // UniLab

// const Person2 = (name) => {
//     this.name = name;
// };
// const obj2 = new Person2("UniLab"); // TypeError: Person is not a constructor




// IIFE = Immediately Invoked Function Expression
// (function () {
//     console.log("მე ვარ IIFE");
// })();

// // ES6-ის სტილით:
// (() => {
//     console.log("ესეც IIFE, მაგრამ arrow ფუნქციით");
// })();




// ასინქრონული
// async function getUserData() {
//     try {
//         const response = await fetch('მისამართი');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }