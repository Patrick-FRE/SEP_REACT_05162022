// this keyword | bind | call | apply | arrow function
// const myThis = {
//     name: "sam",
//     age: 18
// }

// function foo(msg, rest) {
//     console.log("this", this)
//     console.log("msg", msg)
//     console.log("rest", rest)

// }
// const foo = () => {
//     console.log("this", this)
//     console.log("msg", msg)
//     console.log("rest", rest)
// }

// bind
// let newFooFn = foo.bind(myThis) /// foo(myThis)
// console.dir(newFooFn)
// newFooFn(5)

// /// call
// foo.call({ msg: "call" }, "foo.call", "foo.rest")

// /// apply
// foo.apply({ msg: "call" }, ["foo.apply", "foo.apply.rest"])
// foo();

// const obj = {
//     name: 'patrick',
//     fooFn: foo
// }
// obj.fooFn();

// console.dir(foo)

// rest vs spread
// const obj = {}
// const obj2 = { ...obj }

// function foo(name, age, ...rest) {
//     console.log(name, age, rest)
//     console.log("arguments", arguments);
// }
// console.dir(foo)

// foo(1, 2, 3, 4, 5, 6)
// const obj = { name: 'patrick' }
// const obj2 = { ...obj }
// const arr = [1, 2, 3];
// const arr2 = [...arr]
// console.log(obj, obj2, obj === obj2)


// destructor
// const obj = { myname: { value: "patrick" }, age: 18 }
// const { myname: { value }, age, hello } = obj;
// console.log(value, age, hello);
// const arr = ["1", 200, () => { }]
// const [first, second, thrid] = arr;
// console.log(first, second, thrid)

// 
// import React, { Component } from 'react'

// const [data, setData] = React.useState(5)

// function add(num) {
//     return function (num2) {
//         return function (num3) {
//             return num + num2 + num3
//         }
//     }
// }

// // console.log(add(5)(6)(5)) // 16
// // //1 + 1 + 1 =3
// // add(5)(6)(5)
// let firstReturn = add(5);
// let sencondReturn = firstReturn(10)
// let thridReturn = sencondReturn(5)

// console.log(thridReturn)// 16


