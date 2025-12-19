🌍 Pollution Numérique — Parcours Web Interactif
Un projet immersif mêlant storytelling, animations Lottie et scroll narratif contrôlé par GSAP.

📌 Description du projet
Ce projet est une expérience web immersive visant à sensibiliser à l’impact environnemental de la pollution numérique. À travers un parcours en scroll narratif, l’utilisateur découvre :

l’impact écologique de la fabrication des appareils électroniques,

la consommation énergétique des data centers,

l’accumulation des téléphones inutilisés,

la production mondiale de déchets électroniques,

et enfin un quiz interactif pour tester ses connaissances.

Chaque section combine illustrations, animations Lottie, données chiffrées et mises en scène visuelles pour rendre l’information plus accessible et marquante.

Le site repose sur une navigation fluide, renforcée par un scroll snap entièrement géré par GSAP, avec un temps de pause contrôlé à chaque section pour renforcer l’impact narratif.

🎨 Prototype & Design (Figma)
👉 Lien Figma : https://www.figma.com/design/duiJ0A04OmEDdtZHDsdPWu/Sa%C3%A9303?node-id=0-1&t=XhvICY8gY5zUrsbu-1

Le design a été pensé pour être :

immersif

pédagogique

accessible

cohérent visuellement grâce à une palette basée sur des couleurs OKLCH

optimisé pour une lecture verticale fluide

🛠️ Technologies utilisées
Frontend
HTML5

CSS3 / TailwindCSS

Design tokens OKLCH

Layouts responsives

Classes utilitaires personnalisées

JavaScript (ES Modules)

Vite (environnement de développement rapide)

Animations & Interactions
GSAP + ScrollTrigger

Scroll narratif

Snap entre sections

Lock temporaire du scroll

Animations synchronisées

LottieFiles Web Components (dotlottie-wc)

Animations vectorielles légères

Chargement asynchrone

Accessibilité via aria-label

Assets
Illustrations SVG optimisées

Animations Lottie hébergées sur lottie.host

Icônes et figures vectorielles personnalisées

📂 Structure du projet
SAE303_LYLIAN_VALENTIN/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── fonts/
│   │   └── Alegreya_Sans/*.ttf
│   ├── OFL.txt
│   ├── france.svg
│   ├── data-center.svg
│   ├── bars-telephone.svg
│   ├── persos-france.svg
│   └── vite.svg
├── src/
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
├── .prettierrc
└── README.md
