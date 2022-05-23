// var vs let vs const vs function vs class
// var: funciton scope, hoisting and declare undifend with hoisting
// let & const: block scope, hoisting and you can not access it before you declare it.
// let vs const: const need to init the value when you declare it. const can not be reassigned
// function:  hoisting the whole function
// class:  hoisting and you can not access it before you declare it
// - global
// var globalA = 1;
// console.log(globalA)

// - function
// function foo() {
//     //console.log(functionA)
//     // var functionA = 2;
//     console.log(letA)
//     let letA = 5;
//     // const letA = 5;
//     // console.log(functionA)
//     console.log(letA)

//     function inner() {
//         //  console.log(functionA) // closure
//         console.log(letA)
//     }
//     inner()
// }
// foo();
// console.log(functionA)

// - block
// function foo() {
//     if (true) {
//         var a = 5;
//         let b = 10;
//     }
//     console.log(b)
// }
// foo()

// let a;
// const b;

// const obj = { name: 'patrick' }
// obj.name = 'sam'
// obj = { name: 'changed' }

// console.log(obj)

// function foo() {

//     console.log(inner)
//     inner()
//     function inner() {
//         console.log("inner")
//     }


//     inner()
// }

// function foo() {
//     console.log(inner)
//     var inner = () => { }
//     inner()
// }
// foo()

// class Person {
//     constructor(name) {
//         this.name = name
//     }
// }
// console.log(typeof Person)
// let p = new Person('patrick')
// console.log(p)
