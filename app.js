 // Task 1
 document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked!");
});

// Task 2
document.getElementById("hideButton").addEventListener("click", function() {
  document.getElementById("elementToHide").style.display = "none";
});

// Task 3
const link = document.getElementById("colorChangeLink");
link.addEventListener("mouseover", function() {
  link.style.color = "red"; 
});
link.addEventListener("mouseout", function() {
  link.style.color = "blue";
});

// Task 4
document.getElementById("scrollToTopLink").addEventListener("click", function() {
  window.scrollTo(0, 0);
});

// Task 5
document.getElementById("playSoundLink").addEventListener("click", function() {
  const audio = document.getElementById("myAudio");
  audio.play();
});

// Task 7
document.getElementById("alertButton").addEventListener("click", function() {
  alert("Button clicked!");
});

// Task 8
const button = document.getElementById("colorChangeButton");
button.addEventListener("mouseover", function() {
  button.style.backgroundColor = "yellow"; // Change to desired color
});
button.addEventListener("mouseout", function() {
  button.style.backgroundColor = ""; // Reset color
});
//task 9
//task 10
//task 11
// task 12
// Task 13
document.getElementById("submitButton").addEventListener("click", function() {
  const userInput = document.getElementById("userInput").value;
  console.log("User input:", userInput);
});
// Task 13
function readCheckbox() {
  const checkbox = document.getElementById("myCheckbox");
  const isChecked = checkbox.checked;
  console.log("Checkbox is checked:", isChecked);
}

// Task 14
function readSelect() {
  const select = document.getElementById("mySelect");
  const selectedValue = select.value;
  console.log("Selected value from the select box:", selectedValue);
}

// Task 15
function fillTextField() {
  const textField = document.getElementById("myTextField");
  textField.value = "Some text for the field";
}

// Task 16
function setStatus() {
  const married = confirm("Are you married?");
  const statusField = document.getElementById("status");
  if (!married) {
      statusField.value = "available";
  }
}

// Task 17
function fillEmptyInput() {
  const inputField = document.getElementById("inputField");
  if (inputField.value.trim() === "") {
      inputField.value = "Default text if empty";
  }
}
// Task 18
// Task 19