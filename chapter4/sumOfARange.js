/* 
    The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, 
start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. 
If no step is given, the elements go up by increments of one, corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
    if(step > 0){
        for(let i = start; i <= end; i += step) array.push(i)
    }else {
        for(let i = start; i >= end; i += step) array.push(i)
    }
    return array;
  }
  
  function sum(array) {
          sumValue = 0
    for(let i = 0; i < array.length; i++){
          
            sumValue += array[i];
    }
    return sumValue;
  }
  console.log(range(5, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55