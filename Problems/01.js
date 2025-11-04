// 1. Sort an Array

// Problem:
// Given an array of integers arr, sort it in ascending order using any sorting algorithm you know.

// Input Example:
// arr = [5, 2, 9, 1, 5, 6]

// Output:
// [1, 2, 5, 5, 6, 9]

// Follow-up:
// Can you do it without using built-in sort()?

// Using Bubble Sort

    let arr = [5, 2, 9, 1, 5, 6];

    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    console.log(arr);

// Using Selection Sort

    // let arr = [5, 2, 9, 1, 5, 6];

    // for(let i=0; i<arr.length; i++){
    //     let minIndex = i
    //     for(let j=i+1; j<arr.length; j++){
    //         if(arr[j]<arr[minIndex]){
    //             minIndex = j
    //         }
    //     }
    //     let temp = arr[i];
    //     arr[i] = arr[minIndex];
    //     arr[minIndex] = temp;
    // }

    // console.log(arr);

// Using Insertion Sort

//    let arr = [5, 2, 9, 1, 5, 6];

//    for(let i=1; i<arr.length; i++){
//         let curr = arr[i]
//         let j = i-1;
//         while(j>=0 && arr[j]>curr){
//             arr[j+1]= arr[j];
//             j--;
//         }

//         arr[j+1] = curr;
//    }

//    console.log(arr);
