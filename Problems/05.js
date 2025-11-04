// 5. Sort 0s, 1s and 2s

// Problem:
// Given an array consisting only of 0, 1, and 2, sort it without using sort().

// Input Example:
// arr = [0, 2, 1, 2, 0]

// Output:
// [0, 0, 1, 2, 2]

// Hint:
// Use counting technique or three-pointer approach (Dutch National Flag problem).

let arr = [0, 2, 1, 2, 0];

// Counting the occurences
let countZero = 0; 
let countOne = 0; 
let countTwo = 0; 
for(let i=0; i<arr.length; i++){
    if(arr[i]==0){
        countZero++;
    }else if(arr[i]==1){
        countOne++;
    }else{
        countTwo++;
    }
}

// Sorting

let i = 0;

for(let j=0; j<countZero; j++){
    arr[i]=0;
    i++;
}

for(let j=0; j<countOne; j++){
    arr[i]=1;
    i++;
}


for(let j=0; j<countTwo; j++){
    arr[i]=2;
    i++;
}

console.log(arr);

