function keydownAction(event) {
  // TODO: Complete keydown function

  // The key property holds the value of the key press
  let keyPress = event.key;

  // The code property holds the key's code 
  let keyCode = event.code;

  // Updates the content on the page
  document.querySelector('#key').textContent = keyPress;
  document.querySelector('#code').textContent = keyCode;
  document.querySelector('#status').textContent = "KEYDOWN Event"
}

function keyupAction() {
  // Updates event to KEYUP Event when a key is released 
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

// Adds listener for KEYUP event
document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
