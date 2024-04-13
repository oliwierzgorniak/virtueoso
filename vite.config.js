import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import license from "rollup-plugin-license";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    license({
      thirdParty: {
        output: path.join(__dirname, "dist", "dependencies.txt"),
        includePrivate: true, // Default is false.
      },
    }),
  ],
});
