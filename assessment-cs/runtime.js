const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsXlAppend = perf.stop();  // Stops timer and save time results

perf.start();
doublerAppend(largeArray);
let resultsLgAppend = perf.stop();

perf.start();
doublerAppend(mediumArray);
let resultsMedAppend = perf.stop();

perf.start();
doublerAppend(smallArray);
let resultsSmAppend = perf.stop();

perf.start();
doublerAppend(tinyArray);
let resultsTAppend = perf.stop();

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsXlInsert = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsLgInsert = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsMedInsert = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsSmInsert = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsTInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsXlInsert.preciseWords);
console.log("append", resultsXlAppend.preciseWords);
console.log('Results for the largeArray');
console.log("insert", resultsLgInsert.preciseWords);
console.log("append", resultsLgAppend.preciseWords);
console.log('Results for the mediumArray');
console.log("insert", resultsMedInsert.preciseWords);
console.log("append", resultsMedAppend.preciseWords);
console.log('Results for the smallArray');
console.log("insert", resultsSmInsert.preciseWords);
console.log("append", resultsSmAppend.preciseWords);
console.log('Results for the tinyArray');
console.log("insert", resultsTInsert.preciseWords);
console.log("append", resultsTAppend.preciseWords);