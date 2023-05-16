// bouuble sort ishlashi 

// Bubble sort Implementation using Javascript
 
 
// Creating the bblSort function
// function bblSort(arr){
    
//     for(var i = 0; i < arr.length; i++){
       
//       // Last i elements are already in place 
//       for(var j = 0; j < ( arr.length - i -1 ); j++){
         
//         // Checking if the item at present iteration
//         // is greater than the next iteration
//         if(arr[j] > arr[j+1]){
           
//           // If the condition is true then swap them
//           var temp = arr[j]
//           arr[j] = arr[j + 1]
//           arr[j+1] = temp
//         }
//       }
//     }
//     // Print the sorted array
//     console.log(arr);
//    }
    
    
//    // This is our unsorted array
//    var arr = [234, 43, 55, 63,  5, 6, 235, 547];
    
    
   // Now pass this array to the bblSort() function
//    bblSort(arr);

   //==========================================

   // Optimized implementation of bubble sort Algorithm
 
   function bubbleSort(arr){
   
    let len = arr.length;
      
     let isSwapped = false;
      
     for(let i =0; i < len; i++){
        
       isSwapped = false;
        
       for(let j = 0; j < len; j++){
           if(arr[j] > arr[j + 1]){
             let temp = arr[j]
             arr[j] = arr[j+1];
             arr[j+1] = temp;
             isSwapped = true;
           }
       }
        
       // IF no two elements were swapped by inner loop, then break
        
       if(!isSwapped){
         break;
       }
     }
      
     // Print the array
     console.log(arr)
   }
    
    
   let arr = [243, 45, 23, 356, 3, 5346, 35, 5];
    
   // calling the bubbleSort Function
   bubbleSort(arr)
 
 
   // ==============================================
 
 
 //   let bubbleSort = (inputArr) => {
 //     let len = inputArr.length;
 //     let checked;
 //     do {
 //         checked = false;
 //         for (let i = 0; i < len; i++) {
 //             if (inputArr[i] > inputArr[i + 1]) {
 //                 let tmp = inputArr[i];
 //                 inputArr[i] = inputArr[i + 1];
 //                 inputArr[i + 1] = tmp;
 //                 checked = true;
 //             }
 //         }
 //     } while (checked);
 //     return inputArr;
 // };