// let arr = [6,3,1,0,-3,-6];

// for(let i=1; i<arr.length; i++){
//     let curr = arr[i];
//     let j = i-1; 
//     while(j>=0 && arr[j]>curr){ //6>3
//         arr[j+1] = arr[j];   
//         j--; 
//     }
//     arr[j+1]=curr;
// }
// console.log(arr);

// ----------------------------------------------------------------------

// Yeh hamara original array hai jise hum sort karna chahte hain
let arr = [8, 4, 1, 5, 9, 2];
// let arr = [6, 3, 1, 0, -3, -6]; // Isse bhi test kar sakte hain

// --- INSERTION SORT ALGORITHM ---

// 1. Outer Loop (i):
// Yeh loop 'unsorted' hisse se ek-ek element uthata hai.
// Hum index 1 (doosre element) se shuru karte hain.
// Hum maante hain ki pehla element (index 0) apne aap mein ek 'sorted' list hai.
for (let i = 1; i < arr.length; i++) {

    // 2. Store the Current Value:
    // 'currentValue' woh element hai jise humein 'sorted' list (jo left side par hai)
    // mein uski sahi jagah par 'insert' karna hai.
    let currentValue = arr[i];

    // 3. Set up the Inner Loop Pointer (j):
    // 'j' ko 'sorted' list ke aakhri element (yaani i - 1) se shuru karo.
    // Hum 'j' ko peeche ki taraf (left side) le jaayenge.
    let j = i - 1;

    // 4. Inner 'while' Loop (Shifting):
    // Yeh loop tab tak chalega jab tak:
    // a) Hum array ke shuru tak nahi pahunch jaate (j >= 0)
    // AND
    // b) 'Sorted' hisse ka element (arr[j]) hamare 'currentValue' se *bada* hai.
    while (j >= 0 && arr[j] > currentValue) {
        
        // 5. Shift the Larger Element:
        // Agar 'sorted' hisse ka element (arr[j]) bada hai,
        // toh use ek position aage (right) khiska do (arr[j + 1] par).
        // Isse 'currentValue' ke liye jagah banti hai.
        arr[j + 1] = arr[j];
        
        // 'j' ko ek kam karo taaki hum 'sorted' hisse ke agle element (left wale) ko check kar sakein.
        j--;
    }

    // 6. Insert the Current Value:
    // Jab 'while' loop rukta hai, iska matlab humein sahi jagah mil gayi hai.
    // 'j + 1' woh khaali jagah hoti hai jahaan 'currentValue' ko 'insert' karna hai.
    arr[j + 1] = currentValue;

    // Yahaan 'i' ka ek pass khatm hota hai.
    // Ab 'arr[0]' se 'arr[i]' tak ka hissa poori tarah sorted hai.
}

// 7. Result:
// Poore loops khatm hone ke baad, sorted array ko print kardo.
console.log("Sorted Array:", arr);

// Output aayega: Sorted Array: [1, 2, 4, 5, 8, 9]