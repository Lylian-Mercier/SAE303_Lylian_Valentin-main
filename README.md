# Pollution Numérique - Impact Environnemental 🌍

Un projet web interactif et responsif sur la **pollution numérique** et son impact environnemental. Cette application présente des données clés sur l'empreinte carbone du numérique en France et sensibilise aux enjeux environnementaux liés aux technologies.

## 📋 Table des matières

- [Description du projet](#-description-du-projet)
- [Fonctionnalités](#-fonctionnalités)
- [Technologiques utilisées](#-technologies-utilisées)
- [Structure du projet](#-structure-du-projet)
- [Installation](#-installation)
- [Scripts disponibles](#-scripts-disponibles)
- [Déploiement](#-déploiement)
- [Ressources de design](#-ressources-de-design)
- [Auteurs](#-auteurs)

## 📖 Description du projet

Ce projet fait partie de la **SAE 303** (Semaine d'Apprentissage par Expérience) et vise à créer une sensibilisation interactive sur la pollution numérique. 

### Objectifs pédagogiques
- Comprendre l'impact environnemental du numérique
- Visualiser l'empreinte carbone des appareils électroniques
- Découvrir les données sur les déchets électroniques
- Tester ses connaissances via un quiz interactif

### Contenu principal
- **Section 1 - Hero** : Introduction immersive avec animation
- **Section 2 - Problématique** : Impact de la fabrication vs utilisation (80% en fabrication)
- **Section 3 - Représentation** : Visualisation comparative avec cartes et illustrations
- **Section 4 - Téléphone & Bras** : Impact de la consommation audiovisuelle en France
- **Section 5 - Data Centers** : Empreinte énergétique des data centers en France
- **Section 6 - Téléphones inutilisés** : 45 millions de téléphones stockés en France
- **Section 7 - Déchets électroniques** : 62 millions de tonnes en 2022
- **Section 8 - Quiz** : Question interactive pour valider les apprentissages

## ✨ Fonctionnalités

### Interactivité
- ✅ **Navigation par pastilles** - Points de navigation côté gauche pour sauter entre les sections
- ✅ **Scroll snap** - Accrochage automatique des sections lors du scroll
- ✅ **Animations au scroll** - Animations d'apparition des éléments (pop-in/pop-out)
- ✅ **Quiz interactif** - Question avec 4 réponses et feedback visuel

### Accessibilité
- ✅ Attributs ARIA pour une meilleure accessibilité
- ✅ Screen reader only text (`.sr-only`)
- ✅ Focus visible sur tous les éléments interactifs
- ✅ Contrastes de couleur appropriés

### Responsive Design
- ✅ Mobile-first approach
- ✅ Media queries pour tablettes et desktops
- ✅ Images et contenus adaptatifs
- ✅ Textes responsifs avec Tailwind CSS

### Performance
- ✅ Vite pour le bundling ultra-rapide
- ✅ Images optimisées (SVG)
- ✅ Chargement asynchrone des scripts Lottie
- ✅ CSS optimisé avec Tailwind

## 🛠 Technologies utilisées

### Frontend
| Technologie | Version | Utilisation |
|------------|---------|-------------|
| **HTML5** | - | Structure sémantique |
| **CSS3** | - | Stylisation avancée |
| **JavaScript** | - | Interactivité et animations |

### Frameworks & Librairies
| Nom | Version | Rôle |
|-----|---------|------|
| **Vite** | ^7.2.4 | Build tool et dev server |
| **Tailwind CSS** | ^4.1.18 | Utility-first CSS framework |
| **GSAP** | ^3.14.2 | Animations avancées |
| **ScrollTrigger** | (inclus dans GSAP) | Animations liées au scroll |

### Ressources externes
| Ressource | Utilisation |
|-----------|-------------|
| **Lottie (DotLottie)** | Animations vectorielles |
| **Google Fonts** | Police "Alegreya Sans" |
| **GitHub Pages** | Hébergement & déploiement |

### Outils de développement
| Outil | Version | Utilisation |
|------|---------|-------------|
| **Prettier** | ^3.7.4 | Formatage du code |
| **prettier-plugin-tailwindcss** | ^0.7.2 | Tri automatique des classes Tailwind |
| **Node.js** | LTS | Runtime JavaScript |
| **npm** | - | Gestionnaire de packages |

## 📁 Structure du projet

```
SAE303_Lylian_Valentin-main/
├── index.html                 # Page HTML principale
├── package.json              # Dépendances et scripts
├── package-lock.json         # Lock file npm
├── vite.config.js            # Configuration Vite
├── README.md                 # Ce fichier
├── .prettierrc                # Configuration Prettier
├── .gitignore                # Fichiers ignorés par Git
│
├── src/
│   ├── main.js              # Logique JavaScript (GSAP, ScrollTrigger, Quiz)
│   └── style.css            # Styles CSS personnalisés + Tailwind
│
├── public/
│   ├── fonts/
│   │   └── Alegreya_Sans/   # Police personnalisée
│   │       └── OFL.txt
│   ├── France.svg           # Carte de la France
│   ├── persos-france.svg    # Illustration de personnes
│   ├── telephone-bras-clean.svg  # Téléphone dans les mains (clean)
│   ├── data-center.svg      # Illustration data center
│   └── [autres SVG]         # Autres illustrations
│
├── .github/
│   └── workflows/
│       └── deploy.yml       # Workflow GitHub Actions pour le déploiement
│
└── dist/                    # Dossier de build (généré par Vite)
```

## 🌐 Déploiement

### Déploiement automatique avec GitHub Pages

Le projet utilise GitHub Actions pour un déploiement automatique à chaque push sur la branche `main`.

#### Configuration requise :

1. **Activer GitHub Pages**
   - Aller dans Settings → Pages
   - Build and deployment → Source: **GitHub Actions**

2. **Le workflow s'exécute automatiquement**
   - À chaque push sur `main`, les tests/build sont lancés
   - La version compilée est déployée sur GitHub Pages
   - URL: `https://Lylian-Mercier.github.io/SAE303_Lylian_Valentin/`

#### Workflow actuel (.github/workflows/deploy.yml)
- ✅ Checkout du code
- ✅ Setup Node.js LTS
- ✅ Installation des dépendances
- ✅ Build avec Vite
- ✅ Configuration GitHub Pages
- ✅ Upload de l'artifact
- ✅ Déploiement automatique

## 🎨 Ressources de design

### Figma
Prototype et design du projet : **https://www.figma.com/design/duiJ0A04OmEDdtZHDsdPWu/Sa%C3%A9303?node-id=0-1&t=XhvICY8gY5zUrsbu-1**

### Palette de couleurs
| Couleur | Valeur | Utilisation |
|---------|--------|------------|
| Violet primaire | `#B095D4` | Section 1 (Hero) |
| Violet secondaire | `#9B7CB7` | Section 5 (Data Centers) |
| Jaune primaire | `#F4E4AB` | Section 2 (Problématique) |
| Jaune secondaire | `#EDD798` | Section 6 (Téléphones) |
| Vert primaire | `#7BBC7E` | Section 3 (Représentation) |
| Vert secondaire | `#6BA76F` | Section 7 (Déchets) |
| Bleu primaire | `#66B3E4` | Sections 4 & 8 (Téléphone & Quiz) |


## 📊 Animation & Interactivité

### GSAP (GreenSock Animation Platform)
- Animations fluides et performantes
- ScrollTrigger pour les animations liées au scroll
- Pop-in/Pop-out des éléments
- Feedback du quiz avec animations

### Lottie Animations
- Animations vectorielles légères
- Chargement asynchrone depuis Lottie.host
- Contrôle avec ScrollTrigger (Section 6)
