/*
  Create a function that performs an even-odd transform to an array, n times.
  Each even-odd transformation:
    Adds two (+2) to each odd integer.
    Subtracts two (-2) to each even integer.
*/

const arr = [-2, 1]; // expected output: [15, -4]
const n = -1;

// const evenOddTransform = (arr, n) => {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] % 2 !== 0) {
//         arr[j] += 2;
//       } else {
//         arr[j] -= 2;
//       }
//     }
//   }
//   return arr;
// };

// const result = evenOddTransform(arr, n);
// console.log(result);
function evenOdd(arr, n){
    return arr.map(el => {
      if(el % 2 === 0){
        return el - (2 * n);
      }else {
        return el + (2 * n);
      }
    })
  }
  
  
  console.log(evenOdd([3,4,9], 3));

// Example: evenOddTransform([3,4,9], 3); // should return [9,-2,15]
