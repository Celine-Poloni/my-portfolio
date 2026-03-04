# my-portfolio

# Portfolio : Développeuse Web Fullstack Junior

![GitHub Pages](https://img.shields.io/badge/status-online-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## Présentation

Ce portfolio est un site web en "one-page" responsive (mobile-first), permettant de découvrir mes projets et mes compétences en tant que Développeuse Web Fullstack Junior. J'ai appliqué les connaissances acquises lors de ma formation, telles que les normes d'accessibilité, d'ergonomie, d'éco-conception ou encore de conceptualisation et de versioning.

Ce projet sera amené à évoluer au cours de mon apprentissage et de mes expériences. Tout retour constructif sera apprécié.

## Architecture du projet

```bash
my-portfolio
├─ .editorconfig
├─ 404.html
├─ assets
│  ├─ css
│  │  ├─input.css
│  │  └─output.css
│  ├─ fonts
│  │  ├─ Montserrat-Variable.woff2
│  │  ├─ OFL.txt
│  │  └─ README.txt
│  ├─ images
│  │  ├─ desk-max.webp
│  │  ├─ desk-min.webp
│  │  ├─ desk-xl.webp
│  │  ├─ portrait.webp
│  │  ├─ projet-linkshrub.webp
│  │  ├─ projet-managuild.webp
│  │  ├─ projet-portfolio.webp
│  │  ├─ projet-curiosities-catalog.webp
│  │  ├─ sprite-about.svg
│  │  ├─ sprite.svg
│  │  └─ text.svg
│  └─ js
│     ├─ forms
│     │  └─ contact-validation.js
│     ├─ main.js
│     └─ utils
│        ├─ constants.js
│        └─ validator.js
├─ biome.json
├─ favicon.svg
├─ index.html
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ README.md
├─ robots.txt
└─ sitemap.xml
```

## Technologies et notions abordées

- **Node.js & npm** : Environnement d’exécution et Gestionnaire de packages
- **Biome** : Linting et Formatage
- **Git & GitHub** : Versioning et Hébergement du projet
- **HTML5 & CSS3** : Structure sémantique et Mise en forme du projet
- **Javascript natif** : Interactivité et Composants dynamiques
- **Tailwind CSS 4 CLI** : Composants UI
- **Web3Forms** : Gestion de formulaires
- **GitHub Pages** : Déploiement et Mise en production
- **Conformité WCAG 2.1 & RGAA** : Normes d'accessibilité web et UX.

Tests effectués avec Wave Evaluation Tool (Firefox Developer Edition) et Lighthouse (Chrome).

## Gitflow

Historique des branches utilisées pour le développement :

```bash
main                   # Production
config/biome           # Configuration Biome
develop                # Branche de développement principale
config/tailwindcss     # Configuration Tailwind CSS 4 (CLI)
dev/html-structure     # Structure HTML
dev/ui-components      # Composants UI & Formulaire de contact
dev/design             # Design et contenu
```

## Consulter

Pour accéder à mon portfolio, vous pouvez simplement visiter le site web à l'adresse suivante: [https://Celine-Poloni.github.io/my-portfolio/](https://Celine-Poloni.github.io/my-portfolio/).

## Installation locale

Pour tester le projet en local :

```bash
git clone https://github.com/Celine-Poloni/my-portfolio.git
cd my-portfolio
npm install
npm run dev  # Lance Tailwind en mode watch
```

Ouvrez `index.html` avec Live Server ou votre navigateur.

## Contribuer

Si vous souhaitez contribuer à ce projet, voici les étapes à suivre :

1. **Forkez le repository**

2. **Clonez votre fork :**

```bash
git clone https://github.com/votre-username/my-portfolio.git
cd my-portfolio
```

3. **Installez les dépendances :**

```bash
npm install
```

4. **Créez une branche pour votre contribution :**

```bash
git checkout -b feature/ma-nouvelle-feature
```

5. **Effectuez vos modifications et testez-les**
   - Lancez Tailwind en mode watch : `npm run dev` ou `tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch`
   - Vérifiez avec Live Server ou en local

6. **Committez vos changements :**

```bash
git add .
git commit -m "Description de vos modifications"
```

7. **Poussez vers votre fork :**

```bash
git push origin feature/ma-nouvelle-feature
```

8. **Ouvrez une Pull Request** depuis votre fork vers la branche `main`

## Sources & Bibliothèques

- Snippets étudiés en cours (Afpa Brest)
- [Iconify](https://iconify.design/)
- [Unsplash](https://unsplash.com/)
- [Google Fonts](https://fonts.google.com/)
- [Wakamai Fondue](https://wakamaifondue.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [PrebuiltUI](https://prebuiltui.com/)
- [HyperUI](https://www.hyperui.dev/)
- [Tailwindflex](https://tailwindflex.com/)
- [Louis-Nicolas Believemy (YouTube)](https://www.youtube.com/@believemy)
- [Stéphanie Walter (Blog)](https://stephaniewalter.design/)
- [Contrast Grid](https://contrast-grid.eightshapes.com/)
- [Accessible color palette builder](https://toolness.github.io/accessible-color-matrix/)
- [Contrast Report](https://contrast.report/)
- [WhoCanUse](https://www.whocanuse.com/)
- Wave Evaluation Tool (Firefox Developer Edition)
- Lighthouse (Chrome)
- Simulateur téléphone mobile (Chrome)
- Wappalyzer (Chrome)
- DevTools (Firefox Developer Edition & Chrome)

## Contact

Si vous avez des questions ou des commentaires, n'hésitez pas à me contacter sur [LinkedIn](https://www.linkedin.com/in/c%C3%A9line-poloni-62145a67/) ou via le formulaire de contact du portfolio.

## Licences

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.

## Stay Calm & Keep Coding
