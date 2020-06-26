/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* TODO: Add a variable to store the "my-list" element */

/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function */
var fullItemList = document.getElementById("my-list");
if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem);
}
/* TODO: Declare the function checkOffList and add actions inside the { } */
function checkOffItem(clicked) {
    if (clicked.target.tagName == "LI") {
        clicked.target.classList.toggle("all-done");
    }
}

