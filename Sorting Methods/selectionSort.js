// let arr = [6,3,1,0,-3,-6];

// for(let i=0; i<arr.length-1; i++){
//     let curr = i;
//     let min = i;
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[min]>arr[j]){
//             min = j;
//         }
//     }
//     let temp = arr[i];
//     arr[i]=arr[min];
//     arr[min]= temp;
    
// }

// console.log(arr)

// -------------------------------------------------------------



// Yeh hamara original array hai jise hum sort karna chahte hain
let arr = [6, 3, 1, 0, -3, -6];

// --- SELECTION SORT ALGORITHM ---

// 1. Outer Loop (i): Yeh loop 'sorted' hisse ko left-se-right banata hai.
// Yeh 'arr.length - 1' tak chalta hai, kyunki jab (n-1) elements sort ho jaate hain,
// toh aakhri (n-th) element apne aap sahi jagah par hota hai.
for (let i = 0; i < arr.length - 1; i++) {

    // 2. Find the Minimum:
    // Hum maan lete hain ki 'unsorted' hisse ka sabse chhota element
    // 'i' position par hi hai. Hum 'minIndex' mein uska index store karte hain.
    let minIndex = i;

    // 3. Inner Loop (j): Yeh loop 'unsorted' hisse (yaani i+1 se end tak) mein se
    // *asli* sabse chhota element dhoondhne ke liye chalta hai.
    for (let j = i + 1; j < arr.length; j++) {

        // 4. Comparison (Compare):
        // Kya 'j' position wala element (arr[j]) hamare ab tak ke
        // 'min' element (arr[minIndex]) se chhota hai?
        if (arr[j] < arr[minIndex]) {
            // Agar haan, toh 'minIndex' ko update karke naya index store karlo.
            minIndex = j;
        }
    }

    // 5. Swap (Adla-Badli):
    // Inner loop khatm hone ke baad, 'minIndex' mein poore unsorted hisse ke
    // sabse chhote element ka index hai.
    // Ab, uss sabse chhote element (arr[minIndex]) ko current position (arr[i]) se swap kar do.
    
    // (Note: Agar i aur minIndex same hain, matlab element pehle se hi sahi jagah par hai,
    // toh yeh swap khud ko khud se badal dega, jisse koi fark nahi padta.)
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;

    // Yahaan par 'i' ka ek pass khatm hota hai.
    // Pehle pass (i=0) ke baad, sabse chhota element (-6) array ke shuru mein 'fix' ho jaata hai.
}

// 6. Result:
// Poore loops khatm hone ke baad, array ko print kardo.
console.log("Sorted Array:", arr);

// Output aayega: Sorted Array: [-6, -3, 0, 1, 3, 6]