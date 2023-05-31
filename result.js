document.addEventListener('DOMContentLoaded', function() {
    const generatedPrompt = localStorage.getItem('generatedPrompt');
    document.getElementById('generatedPrompt').textContent = generatedPrompt;
  
    const popup = document.getElementById('popup');
    const countdown = document.getElementById('countdown');
    const closeButton = document.getElementById('closeButton');
  
    let seconds = 5;
    const countdownTimer = setInterval(() => {
      seconds--;
      countdown.textContent = seconds;
  
      if (seconds === 0) {
        clearInterval(countdownTimer);
        closeButton.style.display = 'block';
      }
    }, 1000);
  
    closeButton.addEventListener('click', function() {
      clearInterval(countdownTimer);
      popup.style.opacity = 0;
      setTimeout(() => {
        popup.style.visibility = 'hidden';
        document.body.style.overflow = 'auto'; // Enable scrolling
      }, 300);
    });
  
    document.getElementById('copyButton').addEventListener('click', function() {
      const promptText = document.getElementById('generatedPrompt').textContent;
      navigator.clipboard.writeText(promptText);
    });
  
    setTimeout(() => {
      popup.style.visibility = 'visible';
      popup.style.opacity = 1;
      document.body.style.overflow = 'hidden'; // Disable scrolling
    }, 1000);
  });
  
