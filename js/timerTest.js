//timeout

let flag = false;
// let counter = 0;
let calls = 0;
let timerId;

function run(){
    calls++
    console.log(`called ${calls} times`)
    // if (flag === true){
    //     clearTimeout(timerId); 
    //     flag = false;
    // }
    // flag = true;
    for (let i=0; i<10; i++){
        if (calls > 1){
            clearTimeout(timerId); 
            calls = 0;
        }
        timerId = setTimeout(function(){
            console.log(`hits every 1 second. Already ran ${i} times for the ${calls} call`)
        }, 1000*i)
    }
    // flag = false;
}