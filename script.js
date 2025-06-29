
const sampleText = "The quick brown fox jumps over the lazy dog.";
const textDisplay = document.getElementById("text-display");
const inputArea = document.getElementById("input-area");
const result = document.getElementById("result");

function startTyping() {
  textDisplay.textContent = sampleText;
  inputArea.value = "";
  inputArea.focus();
  const startTime = new Date().getTime();

  inputArea.oninput = () => {
    const currentText = inputArea.value;
    if (currentText === sampleText) {
      const endTime = new Date().getTime();
      const timeTaken = (endTime - startTime) / 1000; // in seconds
      const words = sampleText.split(" ").length;
      const speed = (words / timeTaken) * 60; // words per minute
      result.innerHTML = `<p><strong>Typing Speed:</strong> ${speed.toFixed(2)} WPM</p><p><strong>Time Taken:</strong> ${timeTaken.toFixed(2)} seconds</p>`;
      inputArea.oninput = null;
    }
  };
}
