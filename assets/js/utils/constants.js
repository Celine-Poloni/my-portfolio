"use strict";

/**
 * Configuration centralisée pour la validation du formulaire de contact
 */

/**
 * Messages d'erreur par champ et type de validation
 */
export const validationMessages = {
  // 📧 Formulaire de contact
  name: {
    required: "Le nom est obligatoire",
    minLength: "Le nom doit contenir au moins 2 caractères",
  },

  email: {
    required: "L'email est obligatoire",
    invalid: "Format d'email invalide",
  },

  // subject: {
  //   required: "Le sujet est obligatoire",
  //   minLength: "Le sujet doit contenir au moins 3 caractères",
  // },

  message: {
    required: "Le message est obligatoire",
    minLength: "Le message doit contenir au moins 10 caractères",
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

  // subject: {
  //   minLength: 3,
  //   maxLength: 50,
  //   required: true,
  // },

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

/**
 * Classes CSS pour les états visuels du formulaire
 * Centralise la gestion des styles selon l'état de validation
 */
export const cssClasses = {

  error: {
    field: "border-red-500 bg-red-50",
    message: "text-red-600 text-sm mt-1",
  },

  success: {
    field: "border-green-500 bg-green-50",
  },

  default: {
    field:
      "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
  },
};