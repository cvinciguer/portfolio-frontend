# 🌍 Portfolio - Clément Vinciguerra

Bienvenue sur le dépôt de mon portfolio personnel. Ce site est conçu pour présenter mon parcours, mes compétences et mes projets. Il est développé avec **React.js** et optimisé pour une navigation fluide et rapide.

## 📌 Présentation

Ce projet a pour objectif d’offrir une vitrine interactive et moderne, mettant en avant mon travail et mes compétences techniques. Il intègre des **animations dynamiques**, un **design responsive**, et des **performances optimisées**.

---

## ⚡ Fonctionnalités

- Interface **moderne et épurée**
- Animations **smooth** avec **Framer Motion**
- Développement **full React.js**, sans dépendances inutiles
- **Optimisation SEO** et chargement rapide avec **Vite.js**
- **Responsive Design** (mobile, tablette, desktop)

---

## 🛠️ Technologies utilisées

- **React.js** - Composants modulaires et réactifs
- **Vite.js** - Environnement de développement ultra rapide
- **Framer Motion** - Gestion avancée des animations
- **CSS Modules** - Stylisation optimisée
- **EmailJS** - Formulaire de contact avec envoi d’e-mails

---

## 🚀 Installation & Exécution

### 📥 1. Cloner le dépôt

```bash
git clone https://github.com/cvinciguer/portfolio-frontend.git
cd portfolio-frontend
```

### 📦 2. Installer les dépendances

```bash
npm install
```

### 🏃 3. Lancer le projet en mode développement

```bash
npm run dev
```

Accès local : [http://localhost:5173/](http://localhost:5173/)

### 🏗️ 4. Build pour la production

```bash
npm run build
```

Le site sera compilé dans le dossier `/dist`.

### 🌍 5. Prévisualiser le build

```bash
npm run preview
```

---

## 🔧 Configuration & Personnalisation

### 📌 Données personnelles & Projets

`src/data/profile.js` (ou autre fichier équivalent selon l’implémentation)

### 📌 Images et médias

`src/assets/` (logos, photos, icônes, fonds d’écran…)

### 📌 Composants UI

`src/components/` (tous les éléments interactifs du site)

### 📌 Animations et styles

- **Framer Motion** : `src/components/animations/`
- **CSS Modules / Tailwind** : `src/styles/`

---

## ✅ Déploiement

### 🔄 1. Déploiement sur Vercel

Si vous utilisez Vercel :

```bash
npm install -g vercel
vercel login
vercel
```

### ☁️ 2. Déploiement sur Netlify

Si vous utilisez Netlify :

```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

### 🐳 3. Dockerisation (optionnel)

Un fichier `Dockerfile` peut être ajouté pour un déploiement via Docker :

```dockerfile
# Dockerfile
FROM node:18
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "preview"]
```

Build et exécution du container :

```bash
docker build -t portfolio .
docker run -p 5173:5173 portfolio
```

---

## 📌 Améliorations futures

- 📈 Optimisation des performances (lazy-loading, minification CSS/JS)
- 🎨 Mode sombre / clair pour une meilleure accessibilité
- 📝 Ajout d’un blog pour partager des projets et articles techniques
- 🔧 Intégration CI/CD avec GitHub Actions

---

## 📬 Contact

- **Portfolio** : [https://cvinciguer.github.io/portfolio-frontend/](https://cvinciguer.github.io/portfolio-frontend/)
- **GitHub** : [https://github.com/cvinciguer](https://github.com/cvinciguer)
- **LinkedIn** : [https://www.linkedin.com/in/cl%C3%A9ment-v-5bb95b157/](https://www.linkedin.com/in/cl%C3%A9ment-v-5bb95b157/)

---

🚀 Développé avec passion par **Clément Vinciguerra** 🚀
