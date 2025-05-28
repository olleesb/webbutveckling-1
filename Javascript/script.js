console.log("lksdföajsdklfj")
 
let text = document.getElementById("text")
let isClicked = false
 
function changeText() {
    text.innerHTML = "wow"
    if (isClicked == true) {
        isClicked = false
        text.innerHTML = "No"
    } else {
        isClicked = true
        text.innerHTML = "Yes"
        
 
        
    }

    console.log(Math.round(0.9));
// Expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Expected output: -5 -5 -6

 
}
 