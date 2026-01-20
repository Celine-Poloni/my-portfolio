"use strict";

/**
 * Configuration centralisée pour la validation des formulaires
 */

/**
 * Messages d'erreur par champ et type de validation
 */
export const validationMessages = {

  // 📧 Formulaire de contact
  name: {
    required: "Le nom est obligatoire",
    minLength: "Le nom doit contenir au moins 2 caractères",
    maxLength: "Le nom ne peut pas dépasser 50 caractères",
  },

  email: {
    required: "L'email est obligatoire",
    invalid: "Format d'email invalide",
  },

  message: {
    required: "Le message est obligatoire",
    minLength: "Le message doit contenir au moins 10 caractères",
    maxLength: "Le message ne peut pas dépasser 1000 caractères",
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