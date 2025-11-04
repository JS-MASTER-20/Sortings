// 3. Sort in Descending Order

// Problem:
// Write a function that sorts an array in descending order.

// Input Example:
// arr = [4, 1, 3, 9, 7]

// Output:
// [9, 7, 4, 3, 1]


// Using Bubble Sort

// let arr = [4, 1, 3, 9, 7];

// for(let i=0; i<arr.length-1; i++){
//     for(let j=0; j<arr.length-i; j++){
//         if(arr[j]<arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }

// console.log(arr);


// Using Selection Sort

let arr = [4, 1, 3, 9, 7];

for(let i=0; i<arr.length-1; i++){
    let maxIndex = i;

    for(let j=i+1; j<arr.length; j++){
        if(arr[j]>arr[maxIndex]){
            maxIndex = j;
        }
    }

    let temp = arr[i];
    arr[i] = arr[maxIndex];
    arr[maxIndex] = temp;
}

console.log(arr);


// Using Insertion Sort

// let arr = [4, 1, 3, 9, 7];
// for(let i=1; i<arr.length; i++){
//     let curr = arr[i];
//     let j = i-1;

//     while(j>=0 && arr[j]<curr){
//         arr[j+1] = arr[j];
//         j--;
//     }

//     arr[j+1] = curr;
// }

// console.log(arr);