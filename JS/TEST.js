

function doSomethingBlocking() {
    let start = Date.now();
    console.log(start);
    while (Date.now() - start < 2000) { }
    console.log("end", Date.now() - start);
}

function doSomethingNonBlocking() {
    let start = Date.now();
    console.log(start);
    setTimeout(() => {
        console.log("after2S")
        return 5
    }, 2000)
    console.log("end", Date.now() - start);
}



//doSomethingBlocking();
//doSomethingNonBlocking()


// Implement two methods
// -       async method return after 2 second
// -       call first one, wait until it is completed, calculate how many time elapsed
//            followup: why the elapsed time was a little bit more than 2000?
//                           how can you make the elapsed time exactly 2000?
//                           how can you control your call stack?
//                           refactor the method in an async way to make more readable

function returnAfter2s() {
    let startTime = Date.now()
    return new Promise((res, rej) => {
        setTimeout(() => {
            const timeElapsed = Date.now() - startTime;
            res("timeElapsed:" + timeElapsed)
        }, 2000);
    })
}

async function returnAfter2sUsingAsync() {
    let startTime = Date.now()
    const timeElapsedData = await new Promise((res, rej) => {
        setTimeout(() => {
            const timeElapsed = Date.now() - startTime;
            res("timeElapsed:" + timeElapsed)
        }, 2000);
    })
    console.log("test", timeElapsedData)
    return timeElapsedData
}

returnAfter2sUsingAsync().then(data => {
    console.log(data)
})


