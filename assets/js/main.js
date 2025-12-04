// Script toggle jour/nuit

// Exécute après DOM prêt
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('toggle-button');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  
  // Détection initiale
  const isDark = localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
  if (isDark) {
    document.documentElement.classList.add('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
  
  // Toggle
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isNowDark = document.documentElement.classList.contains('dark');
    sunIcon.classList.toggle('hidden', !isNowDark);
    moonIcon.classList.toggle('hidden', isNowDark);
    localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
  });
});
