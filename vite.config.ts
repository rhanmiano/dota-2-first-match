import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [vue(), ssr()],
  server: {
    strictPort: true,
    port: 5000,
    hmr: {
      host: '0.0.0.0',
      port: 3010
    }
  }
}

export default config
