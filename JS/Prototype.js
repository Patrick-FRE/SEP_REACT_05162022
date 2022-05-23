// Play ground with class | extends | consturctor function in ES6
// thinking about what is prototype in JS.

// const person = {
//     name: 'patrick',
//     age: 18,
//     say: function () {
//         console.log("say:", this.name, this.age)
//     },
//     1: "one"
// }
// const personB = {
//     name: 'sam',
//     age: 22,
//     say: function () {
//         console.log("say:", this.name, this.age)
//     },
//     2: "two"
// }

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         // this.say = function () {
//         //     console.log("say:", this.name, this.age)
//         // }
//     }
//     toString(msg) {
//         console.log("say:", this.name, this.age, msg)
//     }
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.toString = function (msg) {
//     console.log("say:", this.name, this.age, msg)
// }


// let p = new Person("name", 18);
// console.log(p)

// class Employee extends Person {
//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company
//     }
//     toString(msg) {
//         console.log("say:", this.name, this.age, msg, this.company)
//     }
// }
// const e = new Employee('patrick', 18, "hogar")
// console.log(e)
// const pClass = new Person('patrick', 18);
// const pClass2 = new Person('patrick', 18);
// console.log(pClass)
// pClass.toString()

// console.log("say method", pClass.say === pClass2.say)


// console.log(person)

// console.log(person.toString === personB.toString)

// const person2 = new Object({});
// person2.name = 'patrick';
// person2.age = 18;
// person2.say = function () {
//     console.log(this.name, this.age)
// }
// person2[1] = "one"
// console.log(person2)

// const myProperty = "age";
// const personStr = 'patrick'
// const personUndefined = undefined
// person.say()
// personB.say()
// console.log(person.say === personB.say)
// console.log(person)

// console.log(person)
// console.log(person.name)
// console.log(person['name'])
// console.log(person[1])
// console.log(person[myProperty])
// console.log(person.myProperty)
// console.log(personStr.myProperty)
// console.log(personUndefined.myProperty)

// const arr = [1, 2, 3];
// const arrB = new Array(3).fill(0).map((item, index) => index + 1);
// console.log(arrB)
// console.log(arr)
//arr.push(1);


// NONONONONO overloading
// function foo(first) {
//     console.log(first)
// }

// function foo(first, second) {
//     console.log(first, second)
// }

// foo("first");


const arr = [1, 2, 3];
let res = arr.map((item, index, array) => {
    console.log('item', item, "idex:", index, "array:", array)
    return item * 2;
})
console.log(res);

Array.prototype.MyMap = function (callbackFn) {
    console.log("my Map")
    const result = []
    for (let i = 0; i < this.length; i++) {
        result.push(callbackFn(this[i], i, this))
    }
    return result
}

let myres = arr.MyMap((item, index, array) => {
    console.log('item', item, "idex:", index, "array:", array)
    return item * 2;
})
console.log(myres);

// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// let res = arr.forEach((item, index, array) => {
//     console.log('item', item, "idex:", index, "array:", array)
// })
// console.log("res", res);

// Array.prototype.MyForEach = function (callbackFn) {
//     console.log("my For Each")
//     for (let i = 0; i < this.length; i++) {
//         callbackFn(this[i], i, this)
//     }
// }
// arr.MyForEach((item, index, array) => {
//     console.log('item', item, "idex:", index, "array:", array)
// })

// const arr2 = ["a", "b", "c"]

// arr2.MyForEach((item) => {
//     console.log(
//         "str", item
//     )
// })


// function foo() { }

// console.log("TEST", foo())




// const obj = {}
// obj.MyForEach = function () { }

// call back function vs High order function
// function foo(cb) {
//     cb()
// }
// foo(foo2)

// function foo2() {
//     console.log("foo2")
// }