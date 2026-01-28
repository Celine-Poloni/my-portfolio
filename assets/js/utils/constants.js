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
    required: "Laissez un nom/pseudo, c'est quand même plus sympa",
    minLength: "Le nom doit contenir au moins 2 caractères",
    maxLength: "Oulaaaa, plus de 50 caractères ? c'est trop !",
  },

  email: {
    required: "Enfin, laissez votre email sinon je ne pourrai pas vous recontacter ;)",
    invalid: "Mince alors, ça n'a pas le format d'un email ça ;)",
  },

  message: {
    required: "heuuu, c'est mieux de mettre un message non ? soyez pas timide",
    minLength: "Moins 10 caractères ?! ça fait pas beaucoup, soyons sérieux",
    maxLength: "Tu me raconteras tout ça quand on se verra de visu ;) là c'est trop",
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