// Script navbar

document.addEventListener("DOMContentLoaded", () => {
  // Éléments DOM
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("navbar-logo");
  const desktopNavLinks = document.querySelectorAll("#desktop-nav-links a");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenuCloseBtn = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  // SCROLL EFFECT GLOBAL - TOUS SVG ciblés DIRECTEMENT
  const handleScroll = () => {
    const isScrolled = window.scrollY > 10;

    if (isScrolled) {
      // Navbar scrollée (fond blanc)
      navbar.classList.add(
        "bg-white/80",
        "shadow-md",
        "text-gray-700",
        "backdrop-blur-lg",
        "py-2",
        "md:py-3"
      );
      navbar.classList.remove("py-4", "md:py-6");
      
      // SVG LOGO
      logo.classList.add("invert", "opacity-80");
      
      // SVG BURGER
      if (mobileMenuButton) mobileMenuButton.classList.add("invert");
      
      // SVG CLOSE (pas nécessaire)
      // const closeSvg = mobileMenuCloseBtn?.querySelector("svg");
      // if (closeSvg) closeSvg.classList.add("invert");
      
      // SVG TOGGLE DESKTOP (soleil + lune)
      const desktopSun = document.getElementById("sun-icon");
      const desktopMoon = document.getElementById("moon-icon");
      if (desktopSun) desktopSun.classList.add("invert");
      if (desktopMoon) desktopMoon.classList.add("invert");
      
      // SVG TOGGLE MOBILE (soleil + lune)
      const mobileSun = document.getElementById("mobile-sun-icon");
      const mobileMoon = document.getElementById("mobile-moon-icon");
      if (mobileSun) mobileSun.classList.add("invert");
      if (mobileMoon) mobileMoon.classList.add("invert");
      
      // Liens desktop
      desktopNavLinks.forEach((link) => {
        link.classList.remove("text-white");
        link.classList.add("text-gray-700");
        const underline = link.querySelector("div");
        if (underline) {
          underline.classList.remove("bg-white");
          underline.classList.add("bg-gray-700");
        }
      });
      
    } else {
      // Navbar top (fond indigo)
      navbar.classList.remove(
        "bg-white/80",
        "shadow-md",
        "text-gray-700",
        "backdrop-blur-lg",
        "py-2",
        "md:py-3"
      );
      navbar.classList.add("py-4", "md:py-6");
      
      // Retire INVERT partout
      logo.classList.remove("invert", "opacity-80");
      if (mobileMenuButton) mobileMenuButton.classList.remove("invert");
      
      const closeSvg = mobileMenuCloseBtn?.querySelector("svg");
      if (closeSvg) closeSvg.classList.remove("invert");
      
      const desktopSun = document.getElementById("sun-icon");
      const desktopMoon = document.getElementById("moon-icon");
      if (desktopSun) desktopSun.classList.remove("invert");
      if (desktopMoon) desktopMoon.classList.remove("invert");
      
      const mobileSun = document.getElementById("mobile-sun-icon");
      const mobileMoon = document.getElementById("mobile-moon-icon");
      if (mobileSun) mobileSun.classList.remove("invert");
      if (mobileMoon) mobileMoon.classList.remove("invert");
      
      // Liens desktop
      desktopNavLinks.forEach((link) => {
        link.classList.add("text-white");
        link.classList.remove("text-gray-700");
        const underline = link.querySelector("div");
        if (underline) {
          underline.classList.add("bg-white");
          underline.classList.remove("bg-gray-700");
        }
      });
    }
  };

  // ✅ SCROLL GLOBAL (fluide 60fps)
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Gestion menu mobile
  const openMenu = () => {
    mobileMenu.classList.remove("-translate-x-full");
    mobileMenu.classList.add("translate-x-0");
  };

  const closeMenu = () => {
    mobileMenu.classList.add("-translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
  };

  // Événements menu mobile
  if (mobileMenuButton) mobileMenuButton.addEventListener("click", openMenu);
  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener("click", closeMenu);
  mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

  // Nettoyage mémoire
  window.addEventListener("beforeunload", () => {
    window.removeEventListener("scroll", handleScroll);
  });
});


// Script toggle jour/nuit

// Sur desktop

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

// Sur mobile

// Exécute après DOM prêt
document.addEventListener('DOMContentLoaded', () => {
  const mobileThemeToggle = document.getElementById('mobile-toggle-button');
  const mobileSunIcon = document.getElementById('mobile-sun-icon');
  const mobileMoonIcon = document.getElementById('mobile-moon-icon');
  
  // Détection initiale
  const isDark = localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
  if (isDark) {
    document.documentElement.classList.add('dark');
    mobileSunIcon.classList.remove('hidden');
    mobileMoonIcon.classList.add('hidden');
  }
  
  // Toggle
  mobileThemeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isNowDark = document.documentElement.classList.contains('dark');
    mobileSunIcon.classList.toggle('hidden', !isNowDark);
    mobileMoonIcon.classList.toggle('hidden', isNowDark);
    localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
  });
});

// Script cards

// initialisation slider projets
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("projectsSlider");
  if (!slider) {
    console.log("Slider non trouvé");
    return;
  }

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dots = document.querySelectorAll('[data-slide]');
  
  console.log("Élément trouvé:", slider, prevBtn, nextBtn, dots.length + " dots");

  // calcul largeur cards
  const getCardWidth = () => slider.scrollWidth / slider.children.length;

  // flèche précédente
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -getCardWidth(), behavior: "smooth" });
    });
  }

  // flèche suivante
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: getCardWidth(), behavior: "smooth" });
    });
  }

  // dots navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slider.scrollTo({ left: index * getCardWidth(), behavior: "smooth" });
    });
  });

  // mise à jour dots actives
  const updateDots = () => {
    const cardWidth = getCardWidth();
    const activeIndex = Math.floor(slider.scrollLeft / cardWidth);
    
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.style.backgroundColor = '#551b14';
        dot.style.width = '16px';
        dot.style.height = '16px';
      } else {
        dot.style.backgroundColor = '#9ca3af';
        dot.style.width = '12px';
        dot.style.height = '12px';
      }
    });
  };

  slider.addEventListener("scroll", updateDots);
  setTimeout(updateDots, 100);
});

