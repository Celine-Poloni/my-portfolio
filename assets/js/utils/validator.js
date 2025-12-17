"use strict";

import {
  validationRules,
} from "./constants.js";

/**
 * Utilitaires de validation pour formulaires
 */

/**
 * Nettoie le texte pour éviter les injections XSS
 * @param {string} text - Texte à nettoyer
 * @returns {string} - Texte sécurisé
 */
export function cleanText(text) {

  if (typeof text !== "string") return "";

  // Tableau des caractères dangereux à échapper
  const replacements = [
    ["<", "&lt;"],
    [">", "&gt;"],
    ['"', "&quot;"],
    ["'", "&#39;"],
    ["&", "&amp;"],
  ];

  let sanitizedText = text;

  replacements.forEach(([search, replace]) => {
    sanitizedText = sanitizedText.replaceAll(search, replace); // Plus sûr que RegExp
  });

  const finalResult = sanitizedText.trim();

  return finalResult;
}

/**
 * Vérifie si un champ est vide ou contient seulement des espaces
 * @param {string} value - Valeur à vérifier
 * @returns {boolean} - true si vide
 */
export function isEmpty(value) {

  // Vérifier si la valeur est "falsy" (null, undefined, "", etc.)
  if (!value) {
    return true; // La valeur est vide
  }

  // Enlever les espaces au début et à la fin
  const valueWithoutSpaces = value.trim();

  // Vérifier si la longueur est 0 après avoir enlevé les espaces
  return valueWithoutSpaces.length === 0;
}

/**
 * Valide une adresse email avec regex simple mais efficace
 * @param {string} email - Email à valider
 * @returns {boolean} - true si valide
 */
export function isValidEmail(email) {

  if (isEmpty(email)) return false;

  const emailRegex = validationRules.email.pattern;
  const emailTest = emailRegex.test(email);

  return emailTest;
}

/**
 * Vérifie la longueur minimale d'un texte
 * @param {string} text - Texte à vérifier
 * @param {number} minLength - Longueur minimale requise
 * @returns {boolean} - true si assez long
 */
export function hasMinLength(text, minLength) {

  const trimmedText = text.trim();
  const isValidLength = trimmedText.length >= minLength;

  return isValidLength;
}

/**
 * Vérifie la longueur maximale d'un texte
 * @param {string} text - Texte à vérifier
 * @param {number} maxLength - Longueur maximale autorisée
 * @returns {boolean} - true si assez courte
 */
export function hasMaxLength(text, maxLength) {

  const trimmedText = text.trim();
  const isValidLength = trimmedText.length <= maxLength;

  return isValidLength;
}

/**
 * Affiche un message d'erreur pour un champ spécifique
 * @param {string} fieldId - ID du champ en erreur
 * @param {string} message - Message d'erreur à afficher
 */
export function showError(fieldId, message) {

  const errorElement = document.getElementById(fieldId + "-error");
  const inputElement = document.getElementById(fieldId);

  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.remove("hidden");
  }

  if (inputElement) {
    inputElement.classList.add("border-red-500");
    inputElement.classList.remove("border-gray-300");
  }
}

/**
 * Cache le message d'erreur pour un champ
 * @param {string} fieldId - ID du champ
 */
export function hideError(fieldId) {

  const errorElement = document.getElementById(fieldId + "-error");
  const inputElement = document.getElementById(fieldId);

  if (errorElement) {
    errorElement.classList.add("hidden");
  }

  if (inputElement) {
    inputElement.classList.remove("border-red-500");
    inputElement.classList.add("border-gray-300");
  }
}

/**
 * Affiche le message de succès global
 */
export function showSuccess() {

  const successElement = document.getElementById("success");
  if (successElement) {
    successElement.classList.remove("hidden");
    successElement.scrollIntoView({ behavior: "smooth" });
  }
}