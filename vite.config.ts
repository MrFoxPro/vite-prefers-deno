import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";


export default defineConfig({
  experimental: {},
  // ssr: {

  // },
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    emptyOutDir: true,
    target: "esnext",
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      external: [/\.deno/],
    },
  },
});
