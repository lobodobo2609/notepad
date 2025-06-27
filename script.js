const notepad = document.getElementById('notepad');

// Load saved content from localStorage
notepad.value = localStorage.getItem('notes') || '';

// Save content on every input
notepad.addEventListener('input', () => {
  localStorage.setItem('notes', notepad.value);
});
