"use strict";

/**
 * Configuration centralisée pour les components
 */

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
      
      // SVG LOGO - État scrollé (réduit)
      // D'ABORD retirer les classes initiales
      logo.classList.remove("h-14", "md:h-16", "lg:h-18", "w-14", "md:w-16", "lg:w-18");
      // PUIS ajouter les nouvelles
      logo.classList.add("invert", "opacity-80", "h-10", "md:h-12", "lg:h-14", "w-10", "md:w-12", "lg:w-14");
      
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

      // SVG LOGO - État initial (restauré)
      // D'ABORD retirer les classes scrollées
      logo.classList.remove("invert", "opacity-80", "h-10", "md:h-12", "lg:h-14", "w-10", "md:w-12", "lg:w-14");
      // PUIS restaurer les classes initiales
      logo.classList.add("h-14", "md:h-16", "lg:h-18", "w-14", "md:w-16", "lg:w-18");
      
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

  // Appel initial
  handleScroll();
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

// Script toggle jour/nuit
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

// Script projects cards (flèches)

document.addEventListener('DOMContentLoaded', () => {
  const scroller = document.getElementById('projects-scroller');
  const scrollButtons = document.querySelectorAll('[data-project-scroll]');

  if (!scroller || !scrollButtons.length) return;

  const CARD_WIDTH = 320; // ajuste si besoin

  scrollButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const direction = btn.getAttribute('data-project-scroll');
      const delta = direction === 'right' ? CARD_WIDTH : -CARD_WIDTH;

      scroller.scrollBy({
        left: delta,
        behavior: 'smooth',
      });
    });
  });
});

// Script pop-up mentions légales

// Fonction pour ouvrir une "modal"
window.openModal = function (modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-y-hidden');
  }
};

// Fonction pour fermer une "modal"
window.closeModal = function (modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-y-hidden');
  }
};

// Ouvrir le pop-up lorsqu'on clique sur le lien
document.addEventListener('DOMContentLoaded', () => {
  const termsLink = document.querySelector('#terms-links');
  if (termsLink) {
    termsLink.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('terms-modal');
    });
  }
  // Fermer le pop-up lorsqu'on clique sur le fond
  const termsModal = document.getElementById('terms-modal');
  if (termsModal) {
    termsModal.addEventListener('click', (e) => {
    if (e.target === termsModal) closeModal('terms-modal');
    });
  }
});

