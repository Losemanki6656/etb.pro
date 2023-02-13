import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import inject from "@rollup/plugin-inject";
import requireTransform from 'vite-plugin-require-transform';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  plugins: [
    vue(),
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      // bootstrap: 'bootstrap',
    }),
    requireTransform({})
  ],

});
