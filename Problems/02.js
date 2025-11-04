// 2. Sort and Remove Duplicates

// Problem:
// Given an array arr, sort it and remove duplicate elements.

// Input Example:
// arr = [3, 3, 1, 2, 1, 5]

// Output:
// [1, 2, 3, 5]

// Hint:
// Sort first, then use a simple loop to skip equal elements.

// --------------------------------------------------------------

let arr = [3, 3, 1, 2, 1, 5];

// Sorting an Array

for(let i=1; i<arr.length; i++){
    let curr = arr[i];
    let j = i-1;

    while(j>=0 && arr[j]>curr){
        arr[j+1] = arr[j]
        j--;
    }

    arr[j+1] = curr;
}

console.log(arr);

// Removing duplicates on sorted array -> using Custom Sorting Algorithm
// let newArr = [];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==arr[i+1]){
//         continue;
//     }else{
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr);


// Removing duplicated on sorted arry -> using set

    let uniqueArray = [...new Set(arr)];
    console.log(uniqueArray);