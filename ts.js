// Function to add a value to the array
function addToArray(value) {
    if (value !== null) {
        var myArray = JSON.parse(localStorage.getItem('myArray')) || [];
        myArray.push(value);
        localStorage.setItem('myArray', JSON.stringify(myArray));
    }
}

// Example usage with an object
var obj = { key: "value" };
addToArray(obj);

// Example usage with an array
var arr = [1, 2, 3];
addToArray(arr);







// // Function to add response to the array
// function addToArray() {
//     var response = prompt("Enter a value to add to the array:");
//     if (response !== null) {
//         var myArray = JSON.parse(localStorage.getItem('myArray')) || [];
//         myArray.push(response);
//         localStorage.setItem('myArray', JSON.stringify(myArray));
//     }
// }

// // Attach the function to the button's click event
// document.getElementById("addToArrBtn").addEventListener("click", addToArray);
