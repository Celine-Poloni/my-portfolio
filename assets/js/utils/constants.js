"use strict";

/**
 * Configuration centralisée pour la validation du formulaire
 */

/**
 * Messages d'erreur par champ et type de validation
 */
export const validationMessages = {

  // Formulaire de contact
  name: {
    required: "N'oubliez pas d'entrer un nom ou un pseudo",
    minLength: "Le nom doit contenir au moins 2 caractères",
    maxLength: "Attention, vous dépassez les 50 caractères !",
  },

  email: {
    required: "N'oubliez pas votre email, pour être recontacté",
    invalid: "Attention, ce n'est pas un format d'email valide !",
  },

  message: {
    required: "Il semblerait que vous ayez oublié d'écrire un message",
    minLength: "Le message doit contenir au moins 10 caractères",
    maxLength: "Attention, le message est limité à 1000 caractères ! Nous pourrons échanger en détails ultérieurement.",
  },
};

/**
 * Règles de validation par champ
 */
export const validationRules = {

  name: {
    minLength: 2,
    maxLength: 50,
    required: true,
  },

  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },

  message: {
    minLength: 10,
    maxLength: 1000,
    required: true,
  },
};

/**
 * Objets de retour standardisés pour les validations
 */
export const validationResults = {

  success: {
    isValid: true,
    errorMessage: "",
  },

  /**
   * Retourne un objet d'erreur de validation
   * @param {string} message - Message d'erreur personnalisé
   * @returns {object} - { isValid: boolean, errorMessage: string }
   */
  error: (message) => {

    const errorMessageObject = {
      isValid: false,
      errorMessage: message,
    };

    return errorMessageObject;
  },
};