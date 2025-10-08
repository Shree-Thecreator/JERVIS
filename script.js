let userName = null;

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
  document.getElementById("jervisOutput").textContent = "🗣️ JERVIS: " + text;
}

function handleCommand() {
  const input = document.getElementById("commandInput").value.toLowerCase();
  
  if (userName === null) {
    // Feature: Enter name to proceed
    if (input.includes("my name is")) {
      // Extract name after "my name is"
      const nameMatch = input.match(/my name is\s+(.+)/i);
      if (nameMatch) {
        userName = nameMatch[1].trim().charAt(0).toUpperCase() + nameMatch[1].trim().slice(1);
        speak("Hello " + userName + ", ready to assist you. You can now use other commands.");
      } else {
        speak("Please say 'my name is [your name]' to proceed.");
      }
    } else {
      speak("Please enter your name first by saying 'my name is [your name]' to proceed to other commands.");
    }
  } else {
    // Proceed with other commands after name is entered
    if (input.includes("hello")) {
      speak("Hello " + userName + ", ready to assist you.");
    } else if (input.includes("time")) {
      speak("The current time is " + new Date().toLocaleTimeString() + ", " + userName + ".");
    } else {
      speak("I'm still learning that command, " + userName + ".");
    }
  }
}
