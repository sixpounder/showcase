import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      plugins: [vue()]
    }
  } else {
    // command === 'build'
    return {
      plugins: [vue()],
      base: '/me/'
    }
  }
})
