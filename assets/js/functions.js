(function() {
    document.addEventListener('DOMContentLoaded', function() {
      const toggleBtn = document.getElementById('theme-toggle');
      const body = document.body;
  
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            toggleBtn.textContent = 'Light Mode'; // Buton metnini Light Mode yap
          } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            toggleBtn.textContent = 'Dark Mode'; // Buton metnini Dark Mode yap
          }
        });
      }
    });
  })();