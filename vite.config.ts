import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// カスタムドメイン（xgym-personal.jp）はルート直下で配信されるため base は '/'。
export default defineConfig({
  plugins: [react()],
  base: '/',
})
