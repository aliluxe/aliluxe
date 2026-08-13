import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'aliluxe'

export default defineConfig({
  base: process.env.CI ? `/${repoName}/` : '/',
  plugins: [react()],
})
