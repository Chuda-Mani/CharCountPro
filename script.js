document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('input-text');
    const charCount = document.getElementById('char-count');
    const progressBarInner = document.querySelector('.progress-bar__inner');
    const charTypeLabels = document.querySelectorAll('.char-type-label'); // Get all labels
    const characterLimit = 100; // Set a character limit (optional)
  
    let letters = 0, numbers = 0, symbols = 0; // Initialize character type counts
  
    textarea.addEventListener('input', function() {
      const text = this.value;
      const count = text.length;
  
      // Update character counts
      letters = calculateLetters(text);
      numbers = calculateNumbers(text);
      symbols = count - letters - numbers;
  
      // Update character type labels
      charTypeLabels[0].textContent = `Letters: ${letters}`; // Access labels by index
      charTypeLabels[1].textContent = `Numbers: ${numbers}`;
      charTypeLabels[2].textContent = `Symbols: ${symbols}`;
  
      // Update character count and progress bar
      charCount.textContent = count;
      progressBarInner.dataset.count = count;
  
      // Optional character limit handling
      if (characterLimit && count > characterLimit) {
        textarea.classList.add('exceeded-limit'); // Add a CSS class for exceeded limit
      } else {
        textarea.classList.remove('exceeded-limit'); // Remove CSS class for allowed limit
      }
    });
  
    // Function to calculate letters (replace with appropriate regex for your language)
    function calculateLetters(text) {
      return text.replace(/[^a-zA-Z]/g, '').length;
    }
  
    // Function to calculate numbers (replace with appropriate regex for your needs)
    function calculateNumbers(text) {
      return text.replace(/[^0-9]/g, '').length;
    }
  });
  