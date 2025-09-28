# Portfolio William Peoch

Un portfolio one-page moderne et élégant développé avec Next.js 14, TypeScript, Tailwind CSS et des effets glassmorphism subtils.

## 🚀 Technologies utilisées

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Radix UI** (composants accessibles)
- **Lucide React** (icônes)
- **next-themes** (mode sombre/clair)

## ✨ Fonctionnalités

- **Design glassmorphism** avec cartes semi-transparentes et blur
- **Animations fluides** avec Framer Motion
- **Mode sombre/clair** avec persistance
- **Responsive design** mobile-first
- **Navigation sticky** avec effet glass
- **Sections animées** au scroll
- **Effets hover** avec scale et glow
- **SEO optimisé** avec meta tags

## 🎨 Sections du portfolio

1. **Hero** - Présentation avec CTA
2. **À propos** - Description personnelle (FR/EN)
3. **Expérience** - Timeline professionnelle
4. **Projets** - Grid de projets avec liens
5. **Compétences** - Technologies par catégorie
6. **Formation** - Éducation et certifications
7. **Contact** - Informations et réseaux sociaux

## 🛠️ Installation

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📁 Structure du projet

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── theme-toggle.tsx
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── about.tsx
│   ├── experience.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   ├── education.tsx
│   ├── contact.tsx
│   └── section-wrapper.tsx
├── lib/
│   ├── data.ts
│   └── utils.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎯 Personnalisation

### Modifier les données personnelles

Éditez le fichier `lib/data.ts` pour personnaliser :
- Informations de profil
- Expériences professionnelles
- Projets
- Compétences
- Formation et certifications
- Langues et centres d'intérêt

### Personnaliser le style

- **Couleurs** : Modifiez les variables CSS dans `app/globals.css`
- **Fonts** : Changez les polices dans `tailwind.config.ts`
- **Animations** : Ajustez les paramètres Framer Motion dans les composants

### Ajouter de nouvelles sections

1. Créez un nouveau composant dans `components/`
2. Ajoutez-le à `app/page.tsx`
3. Mettez à jour la navigation dans `components/navbar.tsx`

## 🚀 Déploiement

### Vercel (recommandé)

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Le déploiement se fera automatiquement

### Autres plateformes

- **Netlify** : `npm run build && npm run export`
- **GitHub Pages** : Utilisez `gh-pages`
- **Docker** : Créez un Dockerfile personnalisé

## 📱 Responsive Design

Le portfolio est optimisé pour :
- **Mobile** : 320px+
- **Tablet** : 768px+
- **Desktop** : 1024px+
- **Large screens** : 1440px+

## 🔧 Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linting ESLint
```

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📞 Contact

- **Email** : william.peoch@example.com
- **LinkedIn** : [William Peoch](https://linkedin.com/in/williampeoch)
- **GitHub** : [@williampeoch](https://github.com/williampeoch)

---

Développé avec ❤️ par William Peoch
