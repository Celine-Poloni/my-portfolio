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

  // SCROLL EFFECT GLOBAL
  const handleScroll = () => {
    const isScrolled = window.scrollY > 10;

    if (isScrolled) {
      // Navbar scrollée (fond clair)
      navbar.classList.add(
        "bg-light-bg",
        "dark:bg-dark-bg",
        "shadow-md",
        "text-light-text",
        "dark:text-dark-text",
        "backdrop-blur-lg",
        "py-2",
        "md:py-3",
        "opacity-98"
      );
      navbar.classList.remove("bg-primary-green", "py-4", "md:py-6");
      
      // SVG LOGO - État scrollé (réduit)
      // D'ABORD retirer les classes initiales
      logo.classList.remove("h-15", "md:h-20", "lg:h-25", "w-15", "md:w-20", "lg:w-25");
      // PUIS ajouter les nouvelles
      logo.classList.add("h-10", "md:h-15", "lg:h-20", "w-10", "md:w-15", "lg:w-20", "text-light-text","dark:text-dark-text");
      
      // SVG BURGER
      const mobileBurger = document.getElementById("mobile-burger-icon");
      if (mobileBurger) mobileBurger.classList.add("stroke-light-text","dark:stroke-dark-text");
      
      // SVG CLOSE (pas nécessaire)
      // const mobileCloseMenu = mobileMenuCloseBtn?.querySelector("mobile-close-icon");
      // if (mobileCloseMenu) mobileCloseMenu.classList.add("stroke-light-text","dark:stroke-dark-text");
      
      // SVG TOGGLE DESKTOP (soleil + lune)
      const desktopSun = document.getElementById("sun-icon");
      const desktopMoon = document.getElementById("moon-icon");
      if (desktopSun) desktopSun.classList.add("stroke-light-text","dark:stroke-dark-text");
      if (desktopMoon) desktopMoon.classList.add("stroke-light-text","dark:stroke-dark-text");
      
      // SVG TOGGLE MOBILE (soleil + lune)
      const mobileSun = document.getElementById("mobile-sun-icon");
      const mobileMoon = document.getElementById("mobile-moon-icon");
      if (mobileSun) mobileSun.classList.add("stroke-light-text","dark:stroke-dark-text");
      if (mobileMoon) mobileMoon.classList.add("stroke-light-text","dark:stroke-dark-text");
      
      // Liens desktop
      desktopNavLinks.forEach((link) => {
        link.classList.remove("text-dark-text");
        link.classList.add("text-light-text", "dark:text-dark-text");
        const underline = link.querySelector("div");
        if (underline) {
          underline.classList.remove("bg-dark-text");
          underline.classList.add("bg-light-text", "dark:bg-dark-text");
        }
      });
      
    } else {
      // Navbar top (fond foncé)
      navbar.classList.remove(
        "bg-light-bg",
        "dark:bg-dark-bg",
        "shadow-md",
        "text-light-text",
        "dark:text-dark-text",
        "backdrop-blur-lg",
        "py-2",
        "md:py-3",
        "opacity-98"
      );
      navbar.classList.add("bg-primary-green", "py-4", "md:py-6");
      
      // RETRAIT des modifications partout

      // SVG LOGO - État initial (restauré)
      // D'ABORD retirer les classes scrollées
      logo.classList.remove("h-10", "md:h-15", "lg:h-20", "w-10", "md:w-15", "lg:w-20", "text-light-text","dark:text-dark-text");
      // PUIS restaurer les classes initiales
      logo.classList.add("h-15", "md:h-20", "lg:h-25", "w-15", "md:w-20", "lg:w-25");
      
      // SVG BURGER
      const mobileBurger = document.getElementById("mobile-burger-icon");
      if (mobileBurger) mobileBurger.classList.remove("stroke-light-text","dark:stroke-dark-text");
      
      // SVG CLOSE (pas nécessaire)
      // const mobileCloseMenu = mobileMenuCloseBtn?.querySelector("mobile-close-icon");
      // if (mobileCloseMenu) mobileCloseMenu.classList.remove("stroke-light-text","dark:stroke-dark-text");
      
      const desktopSun = document.getElementById("sun-icon");
      const desktopMoon = document.getElementById("moon-icon");
      if (desktopSun) desktopSun.classList.remove("stroke-light-text","dark:stroke-dark-text");
      if (desktopMoon) desktopMoon.classList.remove("stroke-light-text","dark:stroke-dark-text");
      
      const mobileSun = document.getElementById("mobile-sun-icon");
      const mobileMoon = document.getElementById("mobile-moon-icon");
      if (mobileSun) mobileSun.classList.remove("stroke-light-text","dark:stroke-dark-text");
      if (mobileMoon) mobileMoon.classList.remove("stroke-light-text","dark:stroke-dark-text");
      
      // Liens desktop
      desktopNavLinks.forEach((link) => {
        link.classList.add("text-dark-text");
        link.classList.remove("text-light-text", "dark:text-dark-text");
        const underline = link.querySelector("div");
        if (underline) {
          underline.classList.add("bg-dark-text");
          underline.classList.remove("bg-light-text", "dark:bg-dark-text");
        }
      });
    }
  };

  // SCROLL GLOBAL (fluide 60fps)
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Gestion menu mobile (ouverture/fermeture)
  const openMenu = () => {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    document.body.style.overflow = "hidden"; // Bloque le scroll
  };

  const closeMenu = () => {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    document.body.style.overflow = ""; // Réactive le scroll
  };

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


// Whitelist, valide les clics sur des ancres spécifiques
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const hash = this.getAttribute('href').substring(1) || '';  // "" pour "#"
    
    // Ancres autorisées
    const allowedAnchors = ['about', 'projects', 'contact', '']; // '' pour "#"
    if (!allowedAnchors.includes(hash)) {
      e.preventDefault();
      return;
    }

    // Gestion spéciale pour "#"
    if (hash === '') {
      
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      // Autres ancres
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
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


// Script projects cards (flèches de navigation)
document.addEventListener('DOMContentLoaded', () => {
  const scroller = document.getElementById('projects-scroller');
  const scrollButtons = document.querySelectorAll('[data-project-scroll]');

  if (!scroller || !scrollButtons.length) return;

  const CARD_WIDTH = 320;

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


// Script pour empêcher le clic droit sur une image
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.protected').forEach(function(el) {
    el.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
  });
});


// Script pop-up mentions légales (modal)

// Fonction pour ouvrir
window.openModal = function (modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-y-hidden');
  }
};

// Fonction pour fermer
window.closeModal = function (modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-y-hidden');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Ouvrir avec le lien
  const termsLink = document.querySelector('#terms-links');
  if (termsLink) {
    termsLink.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('terms-modal');
    });
  }

  // 2. Fermer avec le bouton ✕
  const closeBtn = document.getElementById('close-terms-modal');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal('terms-modal');
    });
  }

// Fermer le pop-up lorsqu'on clique sur le fond
document.addEventListener('click', (e) => {
  const modal = document.getElementById('terms-modal');
  if (modal && !modal.classList.contains('hidden')) {
    if (e.target === modal || e.target.closest('div.flex.items-center.justify-center')) {
      closeModal('terms-modal');
      }
    }
  });
});

