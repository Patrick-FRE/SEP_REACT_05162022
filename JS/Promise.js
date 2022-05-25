// JS : Single Thread | event loop ( using Libuv C++ to provdie multi thread function )

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 2000)
// setTimeout(() => {
//     console.log(3);
// }, 0)
// console.log(4);

// random number between 0 -5



function doSomethingAfter(callbackFn) {
    let randomTime = 5 * Math.random();
    setTimeout(() => {
        console.log("doSomethingAfter", randomTime)
        callbackFn()
    }, randomTime * 1000)
}

function dothings(order) {
    // if (order === 3) {
    //     throw new Error("order is wrong")
    // }
    console.log(`Do things ${order}`)
}


function doAnotherthings() {
    console.log("do Anotherthings")
}

// call back hell
// doSomethingAfter(() => {
//     dothings(1)
//     doSomethingAfter(() => {
//         dothings(2)
//         doSomethingAfter(() => {
//             dothings(3)
//             doSomethingAfter(() => {
//                 dothings(4)
//             })
//         })
//     })
// })


// function doSomethingAfter(callbackFn) {
//     let randomTime = 5 * Math.random();
//     setTimeout(() => {
//         console.log("doSomethingAfter", randomTime)
//         callbackFn()
//     }, randomTime * 1000)
// }

function doSomethingAfterWithPormise() {
    return new Promise((resolve, reject) => {
        let randomTime = 5 * Math.random();
        setTimeout(() => {
            console.log("doSomethingAfter", randomTime)
            resolve("go next");
        }, randomTime * 1000);
    })
}

// doSomethingAfterWithPormise()
//     .then(data => {
//         //console.log(data)
//         dothings(1)
//         // return 5
//         // return new Promise((res, rej) => {
//         //     res(5)
//         // });
//         return doSomethingAfterWithPormise()
//     }).then(data => {
//         //console.log(data)
//         dothings(2)
//         return doSomethingAfterWithPormise()
//     }).then(data => {
//         dothings(3)
//         return doSomethingAfterWithPormise()
//     }).then(data => {
//         dothings(4)
//         return doSomethingAfterWithPormise()
//     }).catch(err => {
//         console.log("error")
//     })

// class MyPromise {
//     constructor(excutionFn) {
//         this.PromiseState = "pending";
//         this.PromiseResult;
//         this.onfulfilledFn;

//         const resolve = (resolveData) => {
//             this.PromiseState = "fulfilled";
//             this.PromiseResult = resolveData
//             if (this.onfulfilledFn) {
//                 this.onfulfilledFn(this.PromiseResult);
//             }
//         }

//         excutionFn(resolve, () => { })
//     }
//     then(onfulfilledFn) {
//         return new MyPromise((resolve, reject) => {
//             if (this.PromiseState === "fulfilled") {
//                 onfulfilledFn(this.PromiseResult)
//             }
//             this.onfulfilledFn = (result) => {
//                 let newResult = onfulfilledFn(result)
//                 if (newResult instanceof MyPromise) {
//                     newResult.then(data => {
//                         resolve(data)
//                     })
//                 } else {
//                     resolve(newResult)
//                 }
//             }
//         })
//     }
//     catch() {
//     }
// }


// const myPromise = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 3000);
// }).then(data => {
//     console.log(data);
//     return "data2"
// }).then(data2 => {
//     console.log(data2)
// })

// console.log(myPromise)


// console.log("hello again")

// function foo() {
//     return {
//         patrick: () => { return 5 }
//     }
// }
// let a = foo().patrick()
// console.log(a)

// doSomethingAfterWithMyPormise()
//     .then(data => {
//         //console.log(data)
//         dothings(1)
//         // return 5
//         // return new Promise((res, rej) => {
//         //     res(5)
//         // });
//         return doSomethingAfterWithMyPormise()
//     }).then(data => {
//         //console.log(data)
//         dothings(2)
//         return doSomethingAfterWithMyPormise()
//     }).then(data => {
//         dothings(3)
//         return doSomethingAfterWithMyPormise()
//     }).then(data => {
//         dothings(4)
//         return doSomethingAfterWithMyPormise()
//     }).catch(err => {
//         console.log("error")
//     })

// function doSomethingAfterWithMyPormise() {
//     return new MyPromise((resolve, reject) => {
//         let randomTime = 5 * Math.random();
//         setTimeout(() => {
//             console.log("doSomethingAfter", randomTime)
//             resolve("go next");
//         }, randomTime * 1000);
//     })
// }

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))