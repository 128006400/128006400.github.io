function startTest() {
  const text = document.getElementById("text-display").innerText;
  const input = document.getElementById("input-area").value;
  const startTime = performance.now();

  setTimeout(() => {
    const endTime = performance.now();
    const durationInMinutes = (endTime - startTime) / 60000;
    const wordCount = input.trim().split(/\s+/).length;
    const wpm = Math.round(wordCount / durationInMinutes);

    let correctChars = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === text[i]) {
        correctChars++;
      }
    }
    const accuracy = Math.round((correctChars / text.length) * 100);

    showResult(wpm, accuracy);
  }, 1000); // Simulate a 1 second test
}

function showResult(wpm, accuracy) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p><strong>Words per minute:</strong> ${wpm}</p>
    <p><strong>Accuracy:</strong> ${accuracy}%</p>
  `;
}