const notepad = document.getElementById('notepad');

// Load saved content from localStorage
notepad.value = localStorage.getItem('notes') || '';

// Save content on every input
notepad.addEventListener('input', () => {
  localStorage.setItem('notes', notepad.value);
});

downloadBtn.addEventListener('click', () => {
  const blob = new Blob([notepad.value], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'my-notes.txt';
  link.click();
  URL.revokeObjectURL(url);
});