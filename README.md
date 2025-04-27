
# Mon Portfolio

Un site portfolio moderne et responsive, construit avec **Next.js**, **TypeScript** et **Tailwind CSS**.

---

## Fonctionnalités

- 🌓 Mode clair/sombre
- 📱 100% responsive (adapté à tous les écrans)
- ⚡ Performance optimisée
- 🎨 Interface moderne avec animations fluides
- 🔍 SEO optimisé pour un meilleur référencement

---

## Prérequis

- Node.js 18 ou plus
- npm ou yarn
- Compte AWS (pour le déploiement)

---

## Démarrage rapide

1. Cloner le dépôt :  
```bash
git clone https://github.com/MostafaZrour/me.git
cd my-portfolio
```

2. Installer les dépendances :  
```bash
npm install
```

3. Lancer le serveur de développement :  
```bash
npm run dev
```

4. Ouvrir dans le navigateur :  
`http://localhost:3000`

---

## Déploiement sur AWS Amplify

1. **Préparer le dépôt**  
   - Pousser tout le code sur GitHub  
   - Vérifier que ces fichiers sont présents :  
     - `next.config.js`  
     - `package.json`  
     - `tsconfig.json`  
     - Tous les fichiers sources  

2. **Configurer AWS Amplify**  
   - Se connecter à la console AWS  
   - Aller dans AWS Amplify  
   - Cliquer sur "New App" → "Host web app"  
   - Choisir GitHub comme source  
   - Sélectionner ton dépôt portfolio  
   - Choisir la branche principale (main/master)  

3. **Configurer la construction (build)**  
   Amplify détecte Next.js automatiquement, utiliser cette config :  
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. **Déployer**  
   - Vérifier la configuration  
   - Cliquer sur "Save and deploy"  
   - Récupérer l’URL fournie, par exemple :  
   `https://main.xxxxx.amplifyapp.com`

5. **Domaine personnalisé (optionnel)**  
   - Dans Amplify Console, aller à "Domain Management"  
   - Cliquer sur "Add domain"  
   - Suivre les instructions pour configurer ton domaine  
   - Le certificat SSL/TLS est géré automatiquement par AWS  

---

## Technologies utilisées

- [Next.js](https://nextjs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [shadcn/ui](https://ui.shadcn.com/)  
- [Lucide Icons](https://lucide.dev/)  

---

## Commandes utiles

- `npm run dev` - Démarrer le serveur en mode développement  
- `npm run build` - Compiler pour la production  
- `npm start` - Lancer le serveur en production  
- `npm run lint` - Vérifier le code avec ESLint  

---

## Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus d’informations.

---
