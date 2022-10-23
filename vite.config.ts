import { defineConfig } from 'vite';
import wasmPack from 'vite-plugin-wasm-pack';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    minify: false
  },
  plugins: [vue(), wasmPack(['./my-crate']),]
});
