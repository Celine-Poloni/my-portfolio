"use strict";

import {
  cleanText,
  showError,
  hideError,
  showSuccess,
  validateField,
} from "../utils/validator.js";

/**
 * Gestionnaire de validation pour le formulaire de contact
 */

/**
 * Variables du module pour le formulaire
 */
let contactForm = null;

/**
 * Initialise la validation du formulaire de contact
 */
function initContactValidation() {
  contactForm = document.getElementById("contact-form");

  if (!contactForm) {
    console.error("Formulaire de contact non trouvé");
    return;
  }

  contactForm.addEventListener("submit", handleFormSubmit);
  setupFieldValidation();
}

/**
 * Configure la validation en temps réel pour chaque champ
 */
function setupFieldValidation() {
  const fields = ["name", "email", "message"];

  fields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (field) {
      // Utilisation de validateSingleField au lieu de fonctions spécifiques
      field.addEventListener("blur", () => validateSingleField(fieldId));
      field.addEventListener("input", () => hideError(fieldId));
    }
  });
}

/**
 * Gère la soumission du formulaire
 * @param {Event} event - Événement de soumission
 */
function handleFormSubmit(event) {
  event.preventDefault();

  const isFormValid = validateAllFields();

  if (isFormValid) {
    submitForm();
  } else {
    const firstErrorField = contactForm.querySelector(".border-red-500");
    if (firstErrorField) {
      firstErrorField.focus();
    }
  }
}

/**
 * Valide tous les champs du formulaire
 * @returns {boolean} - true si tous les champs sont valides
 */
function validateAllFields() {
  let isValid = true;

  // Utilisation de validateSingleField pour tous les champs
  const fields = ["name", "email", "message"];
  fields.forEach((fieldId) => {
    if (!validateSingleField(fieldId)) {
      isValid = false;
    }
  });

  return isValid;
}

/**
 * FONCTION GÉNÉRIQUE - Remplace validateNameField, validateEmailField, etc.
 * @param {string} fieldId - ID du champ à valider
 * @returns {boolean} - true si le champ est valide
 */
function validateSingleField(fieldId) {
  const field = document.getElementById(fieldId);
  if (!field) return false;

  // UNE SEULE LIGNE remplace toute la logique spécifique !
  const result = validateField(field.value, fieldId);

  if (!result.isValid) {
    showError(fieldId, result.errorMessage);
  } else {
    hideError(fieldId);
  }

  return result.isValid;
}

/**
 * Traite l'envoi du formulaire (version de simulation pour le TP en formation)
 */
// function submitForm() {
//   // Création de l'objet formData avec les valeurs nettoyées
//   const formData = {
//     name: cleanText(document.getElementById("name").value),
//     email: cleanText(document.getElementById("email").value),
//     message: cleanText(document.getElementById("message").value),
//   };

//   console.log("Données sécurisées à envoyer:", formData);

//   // Reset du formulaire et affichage du message de succès
//   contactForm.reset();
//   showSuccess();

//   // Disparition du message de succès après 5 secondes
//   setTimeout(() => {
//     const successElement = document.getElementById("success");
//     if (successElement) {
//       successElement.classList.add("hidden");
//     }
//   }, 5000);
// }

/**
 * Envoi du formulaire via Formspree
 */
async function submitForm() {
  // Création de l'objet formData avec les valeurs nettoyées
  const formData = {
    name: cleanText(document.getElementById("name").value),
    email: cleanText(document.getElementById("email").value),
    message: cleanText(document.getElementById("message").value),
    '_subject': `Nouveau message de ${cleanText(document.getElementById("name").value)}`
  };

  // REMPLACE console.log PAR L'ENVOI FORMSPREE
  try {
    await fetch('https://formspree.io/f/YOUR_FORM_ENDPOINT', { // /!\ Remplacez YOUR_FORM_ENDPOINT par endpoint Formspree
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
  } catch (error) {
    console.error('Erreur envoi:', error); // Optionnel : showError('form-error', 'Erreur envoi');
    return; // Arrête si erreur
  }

  // Reset du formulaire et affichage du message de succès
  contactForm.reset();
  showSuccess();

  // Disparition du message de succès après 5 secondes
  setTimeout(() => {
    const successElement = document.getElementById("success");
    if (successElement) {
      successElement.classList.add("hidden");
    }
  }, 5000);
}

// Export des fonctions publiques
export { initContactValidation, validateSingleField as validateField };

// Auto-initialisation
document.addEventListener("DOMContentLoaded", initContactValidation);