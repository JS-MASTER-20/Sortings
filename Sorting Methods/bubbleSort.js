
// let arr = [5, 2, 9, 1, 5, 6]
// // let arr = [6,3,1,0,-3,-6];

// for(let i=0; i<arr.length-1; i++){
//     for(let j=0; j<arr.length-1-i; j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j]= arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }

// console.log(arr);


//---------------------------------------------------------------------

// Yeh hamara original array hai jise hum sort karna chahte hain
let arr = [5, 2, 9, 1, 5, 6];

// --- BUBBLE SORT ALGORITHM ---

// 1. Outer Loop (i): Yeh loop 'passes' ko count karta hai.
// Yeh array ki length se ek kam baar chalta hai (kyunki aakhri element tak sab sort ho jaate hain).
for (let i = 0; i < arr.length - 1; i++) {

    // 2. Inner Loop (j): Yeh loop har pass mein adjacent (aaju-baaju wale) elements ko compare karta hai.
    // 'arr.length - 1' isliye taaki 'j+1' array se bahar na jaaye.
    // '- i' ek optimization hai. Har pass (i) ke baad, sabse bada element end mein fix ho jaata hai,
    // isliye humein uss sorted hisse ko dobara check karne ki zaroorat nahi padti.
    for (let j = 0; j < arr.length - 1 - i; j++) {

        // 3. Comparison (Compare):
        // Kya left wala element (arr[j]) right wale element (arr[j+1]) se bada hai?
        if (arr[j] > arr[j + 1]) {

            // 4. Swap (Adla-Badli):
            // Agar bada hai, toh un dono ki jagah badal do.
            let temp = arr[j];       // Left wale element ko temporary variable mein store karo
            arr[j] = arr[j + 1];     // Right wale element ko left ki jagah par daalo
            arr[j + 1] = temp;       // Temporary variable (jo original left tha) ko right ki jagah par daalo
        }
    }
    // Yahaan par 'i' ka ek pass khatm hota hai.
    // Pehle pass (i=0) ke baad, sabse bada element (9) array ke end mein pahunch jaayega.
    // Doosre pass (i=1) ke baad, doosra sabse bada (6) apni jagah pahunch jaayega, and so on.
}

// 5. Result:
// Poore loops khatm hone ke baad, array ko print kardo.
console.log("Sorted Array:", arr);

// Output aayega: Sorted Array: [1, 2, 5, 5, 6, 9]



