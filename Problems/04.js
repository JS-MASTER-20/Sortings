// 4. Find the Kth Smallest Element

// Problem:
// Given an array arr and an integer k, find the kth smallest element after sorting.

// Input Example:
// arr = [7, 10, 4, 3, 20, 15], k = 3

// Output:
// 7
// (Because the sorted array is [3, 4, 7, 10, 15, 20])

let arr = [7, 10, 4, 3, 20, 15], k = 3;

for(let i=1; i<arr.length; i++){
    let curr = arr[i];
    let j = i-1;

    while(j>=0 && arr[j]>curr){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = curr;
}

console.log(arr[k-1]);