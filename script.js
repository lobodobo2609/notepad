const notepad = document.getElementById('notepad');

function updateCursor() {
  const rawText = localStorage.getItem('notes') || '';
  notepad.value = rawText + '▌';
}

// Initial load
updateCursor();

// Save and update fake cursor
notepad.addEventListener('input', () => {
  const realText = notepad.value.replace(/▌$/, ''); // Remove old cursor
  localStorage.setItem('notes', realText);
  updateCursor();
});

// Blinking effect using setInterval
setInterval(() => {
  if (notepad.value.endsWith('▌')) {
    notepad.value = notepad.value.slice(0, -1); // Remove cursor
  } else {
    notepad.value += '▌'; // Add cursor
  }
}, 500);
