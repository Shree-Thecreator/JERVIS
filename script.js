function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
  document.getElementById("jervisOutput").textContent = "🗣️ JERVIS: " + text;
}

function handleCommand() {
  const input = document.getElementById("commandInput").value.toLowerCase();
  if (input.includes("hello")) {
    speak("Hello Shreya, ready to assist you.");
  } else if (input.includes("time")) {
    speak("The current time is " + new Date().toLocaleTimeString());
  } else {
    speak("I'm still learning that command.");
  }
}