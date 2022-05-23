// Primative type:
// const str = "str";
// console.log('str', typeof str);
// const int = 1;
// console.log('int', typeof int);
// const float = 1.902;
// console.log('float', typeof float);
// const bool = true;
// console.log("bool", typeof bool);
// const und = undefined;
// console.log('und', typeof und);
// const nul = null;
// console.log('nul', typeof nul);
// Symbol | BigInt

// passing by reference | value
// #1
// var a = 1;
// var b = a;
// console.log(b);// 1
// b = 2;
// console.log(b); // 2
// console.log(a); // 1


// #2
// var a = 1;
// function foo(input) {
//     console.log(input) // 1
//     input = 2;
//     console.log(input)// 2
// }
// console.log(a); // 1
// foo(a);
// console.log(a); // 1


// undifend vs not defined (ReferenceError) vs strict mode
//var dsfdsfdsfs;
// console.log(dsfdsfdsfs)


// == vs === | coersion | operation
// console.log(1 === '1')
// console.log(1 == '1')
// console.log(1 == true)
// console.log(1 + "2")
// console.log(1 - "2")
// console.log(1 - "sfsdfs") // NaN
// console.log(1 + 2 + "3");
// var obj1 = { name: 'patrick' }; /// new Object()
// var obj2 = { name: 'patrick' };
// var obj3 = obj1;
// obj3.name = "sam";
// console.log(obj1 === obj2)
// console.log(obj1 == obj2);
// console.log(obj1, obj3, obj3 === obj1)


// truthy or falsy
// falsy:  0, '', undifend, null
// var a = null
// if (a) {
//     console.log('truthy')
// } else {
//     console.log('falsy')
// }
// console.log(a ? "truthy" : "falsy")


// Object type | typeof | object | function
// var obj = {};
// console.log("{}", typeof obj);
// var arr = []
// console.log("[]", typeof arr);
// var foo = () => { }
// console.log("()=>{}", typeof foo);

// var obj = { name: 'sam' }
// function foo(input) {
//     input.name = 'changed'
//     console.log(input) // { name: 'changed' }
// }
// console.log(obj);// { name: 'sam' }
// foo(obj);
// console.log(obj)//  { name: 'changed' }

// var obj = { name: 'sam' }  /// ref key:  1112321
// function foo(input) { //  var input = obj // { name: 'sam' }  /// ref key:  1112321
//     input = { name: 'changed' } // ref key:  sdfdsfsafsd
//     console.log(input) //  { name: 'changed' }
// }
// console.log(obj);// { name: 'sam' }
// foo(obj);
// console.log(obj)//  { name: 'sam' }







