import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/** Project pages use /repoName/. A user.github.io repo is served at domain root, so base is /. Set VITE_BASE to override. */
function githubPagesBase(): string {
  const explicit = process.env.VITE_BASE?.trim()
  if (explicit) {
    return explicit.startsWith('/') ? (explicit.endsWith('/') ? explicit : `${explicit}/`) : `/${explicit}/`
  }
  const full = process.env.GITHUB_REPOSITORY
  if (!full) return '/'
  const [owner, repo] = full.split('/')
  if (!owner || !repo) return '/'
  if (repo.toLowerCase() === `${owner.toLowerCase()}.github.io`) {
    return '/'
  }
  return `/${repo}/`
}

export default defineConfig({
  // Required so asset URLs (JS, images, PDF) resolve on GitHub Pages subpaths
  base: githubPagesBase(),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.pdf'],
})
