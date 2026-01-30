"use strict";

import {
  cleanText,
  isEmpty,
  isValidEmail,
  hasMinLength,
  hasMaxLength,
  showError,
  hideError,
  showSuccess,
} from "../utils/validator.js";

import {
  validationRules,
  validationResults,
  validationMessages,
} from "../utils/constants.js";

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

  // Ajouter les écouteurs pour chaque champ du formulaire de contact en temps réel avec validateField et hideError
  fields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.addEventListener("blur", () => validateField(fieldId));
      field.addEventListener("input", () => validateField(fieldId)); // Valide en temps réel
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
    const firstErrorField = contactForm.querySelector(".border-light-alert, .border-dark-alert");
    if (firstErrorField) {
        firstErrorField.focus();
    
    // Animation focus
    firstErrorField.classList.add('animate-error-focus');
    
    // Retrait de la classe après l'animation
    setTimeout(() => {
      firstErrorField.classList.remove('animate-error-focus');
    }, 600);
    }
  }
}

/**
 * Valide tous les champs du formulaire
 * @returns {boolean} - true si tous les champs sont valides
 */
function validateAllFields() {

  let isValid = true;

  if (!validateField("name")) isValid = false;
  if (!validateField("email")) isValid = false;
  if (!validateField("message")) isValid = false;

  return isValid;
}

/**
 * Valide le champ nom
 * @param {string} value - Valeur à valider
 * @returns {object} - {isValid: boolean, errorMessage: string}
 */
function validateNameField(value) {

  // Récupération des règles pour le champ name
  const nameRules = validationRules.name;
  const nameMessages = validationMessages.name;

  // Vérification champ obligatoire
  if (isEmpty(value)) {
    const errorMessage = nameMessages.required;
    const requiredError = validationResults.error(errorMessage);
    return requiredError;
  }

  // Vérification longueur minimale
  const minLengthRequired = nameRules.minLength;
  const hasValidLength = hasMinLength(value, minLengthRequired);

  if (!hasValidLength) {
    const errorMessage = nameMessages.minLength;
    const lengthError = validationResults.error(errorMessage);
    return lengthError;
  }

  // Vérification longueur maximale
  const maxLengthRequired = nameRules.maxLength;
  const hasValidMaxLength = hasMaxLength(value, maxLengthRequired);
  
  if (!hasValidMaxLength) {
    const errorMessage = nameMessages.maxLength;
    const lengthError = validationResults.error(errorMessage);
    return lengthError;
  }

  // Validation réussie
  const successResult = validationResults.success;
  return successResult;
}

/**
 * Valide le champ email
 * @param {string} value - Valeur à valider
 * @returns {object} - {isValid: boolean, errorMessage: string}
 */
function validateEmailField(value) {

  // Récupération des règles et messages pour le champ email

  const emailMessages = validationMessages.email;

  // Vérification champ obligatoire
  if (isEmpty(value)) {
    const errorMessage = emailMessages.required;
    const requiredError = validationResults.error(errorMessage);
    return requiredError;
  }

  // Vérification format email valide
  const hasValidEmailFormat = isValidEmail(value);
  if (!hasValidEmailFormat) {
    const errorMessage = emailMessages.invalid;
    const formatError = validationResults.error(errorMessage);
    return formatError;
  }

  // Validation réussie
  const successResult = validationResults.success;
  return successResult;
}

/**
 * Valide le champ message
 * @param {string} value - Valeur à valider
 * @returns {object} - {isValid: boolean, errorMessage: string}
 */
function validateMessageField(value) {

  // Récupération des règles et messages pour le champ message
  const messageRules = validationRules.message;
  const messageMessages = validationMessages.message;

  // Vérification champ obligatoire
  if (isEmpty(value)) {
    const errorMessage = messageMessages.required;
    const requiredError = validationResults.error(errorMessage);
    return requiredError;
  }

  // Vérification longueur minimale
  const minLengthRequired = messageRules.minLength;
  const hasValidLength = hasMinLength(value, minLengthRequired);

  if (!hasValidLength) {
    const errorMessage = messageMessages.minLength;
    const lengthError = validationResults.error(errorMessage);
    return lengthError;
  }

  // Vérification longueur maximale
  const maxLengthRequired = messageRules.maxLength;
  const hasValidMaxLength = hasMaxLength(value, maxLengthRequired);
  
  if (!hasValidMaxLength) {
    const errorMessage = messageMessages.maxLength;
    const lengthError = validationResults.error(errorMessage);
    return lengthError;
  }

  // Validation réussie
  const successResult = validationResults.success;
  return successResult;
}

/**
 * Table de correspondance pour les fonctions de validation
 */
const fieldValidators = {

  name: validateNameField,
  email: validateEmailField,
  message: validateMessageField,
};

/**
 * Valide un champ spécifique
 * @param {string} fieldId - ID du champ à valider
 * @returns {boolean} - true si le champ est valide
 */
function validateField(fieldId) {

  const field = document.getElementById(fieldId);
  if (!field) return false;

  const validator = fieldValidators[fieldId];
  if (!validator) return false;

  const result = validator(field.value);

  if (!result.isValid) {
    showError(fieldId, result.errorMessage);
  } else {
    hideError(fieldId);
  }

  const isValid = result.isValid;
  return isValid;
}

/**
 * Traite l'envoi du formulaire via Web3Forms (AJAX)
 */
async function submitForm() {

  // Honeypot (blocage immédiat, hors écran plutôt que "hidden")
  if (contactForm.botcheck.checked) {
    return;
  }

  // Rate limiting (1 envoi max toutes les 5min)
  const lastSubmit = localStorage.getItem('lastContactSubmit');
  const now = Date.now();
  if (lastSubmit && now - parseInt(lastSubmit) < 5 * 60 * 1000) {
    showError('form', 'Merci de patienter 5 minutes entre deux envois (anti-spam)');
    return;
  }
  localStorage.setItem('lastContactSubmit', now.toString());

  // Validation
  if (!validateAllFields()) {
    showError('form', 'Veuillez corriger les erreurs avant envoi');
    return;
  }

  // Désactive le bouton pour éviter les doubles clics
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Envoi en cours...";

  // Récupère les valeurs nettoyées
  const name = cleanText(document.getElementById("name").value);
  const email = cleanText(document.getElementById("email").value);
  const message = cleanText(document.getElementById("message").value);

  // Construit un objet à partir des champs du formulaire
  // (en reprenant l'approche de la doc Web3Forms)
  const formData = new FormData(contactForm);

  // Force les valeurs nettoyées pour être sûr de ce qu'on envoie
  formData.set("name", name);
  formData.set("email", email);
  formData.set("message", message);

  // Conversion en objet simple puis en JSON (comme dans l'exemple Web3Forms)
  const dataObject = Object.fromEntries(formData);
  const jsonBody = JSON.stringify(dataObject);

  try {
    // Envoi vers l'API Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: jsonBody,
    });

    const result = await response.json();

    // Gestion du résultat
    if (response.status === 200 && result.success) {

      // Succès : reset + message succès personnalisé
      contactForm.reset();
      showSuccess();

      // Disparition du message de succès après 5 secondes
      setTimeout(() => {
        const successElement = document.getElementById("success");
        if (successElement) {
          successElement.classList.add("hidden");
        }
      }, 5000);
    } else {

      // Erreur renvoyée par l'API (clé invalide, domaine non autorisé, etc.)
      const message =
        result.message ||
        "Une erreur est survenue lors de l’envoi. Veuillez réessayer ultérieurement.";
      showError("form", message);
    }
  } catch (error) {

    // Erreur réseau ou autre
    console.error("Erreur Web3Forms:", error);
    showError(
      "form",
      "Impossible de contacter le serveur. Vérifiez votre connexion et réessayez."
    );

    // Disparition du message d'erreur apres 5 secondes
    setTimeout(() => {
      const errorElement = document.getElementById("form-error");
      if (errorElement) {
        errorElement.classList.add("hidden");
      }
    }, 5000);

  } finally {
    
    // Réactive le bouton
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}

// Export des fonctions publiques
export { initContactValidation, validateField };

// Auto-initialisation
document.addEventListener("DOMContentLoaded", initContactValidation);