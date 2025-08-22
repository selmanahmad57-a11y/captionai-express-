# 🎯 CaptionAI Express

> **Générez du contenu viral avec l’IA**  
> Hooks, images, voix off, carrousels, quiz, analyse LinkedIn, traduction multilingue et plus encore.

---

## 🚀 Stack technique

| **Layer**   | **Technologie**                     |
|-------------|--------------------------------------|
| Frontend    | Next.js 14 (App Router)              |
| Backend     | API Routes (`/app/api/*`)            |
| Database    | Supabase (PostgreSQL) via Prisma     |
| Auth        | Clerk                                |
| IA          | OpenAI, Replicate, ElevenLabs        |
| Styling     | TailwindCSS                          |

---

## 🧪 Lancer le projet

```bash
# 1. Cloner
git clone https://github.com/selmanahmad57-a11y/captionai-express.git
cd captionai-express

# 2. Installer les dépendances
npm install

# 3. Copier le fichier d’env
cp .env.example .env.local

# 4. Remplir les variables dans .env.local
# 5. Lancer le serveur
npm run dev