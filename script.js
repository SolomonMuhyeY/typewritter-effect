const textsToType = [
  "Hello,👋! My name is Solomon Muhye.",
  "I am a web developer!",
  "Feel free to use this code template for your own work.",
  "And don't forget to give it a star 😁",
];
let currentTextIndex = 0;
let currentLetterIndex = 0;
const textElement = document.getElementById("text-to-type");

function typeText() {
  if (currentTextIndex >= textsToType.length) {
    currentTextIndex = 0;
  }

  const currentText = textsToType[currentTextIndex];

  if (currentLetterIndex < currentText.length) {
    textElement.innerHTML += currentText.charAt(currentLetterIndex);
    currentLetterIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (currentLetterIndex >= 0) {
    const currentText = textsToType[currentTextIndex];
    textElement.innerHTML = currentText.substring(0, currentLetterIndex);
    currentLetterIndex--;
    setTimeout(eraseText, 50);
  } else {
    currentTextIndex++;
    setTimeout(typeText, 500);
  }
}

typeText();
