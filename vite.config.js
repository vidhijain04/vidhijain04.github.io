/** @type {import("vite").UserConfig} */

import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/",
  preview: {
    port: 4173,
    host: "0.0.0.0",
  },
  server: {
    port: 5173,
    host: "0.0.0.0",
	  hmr:true,
  },
  root: path.join(path.resolve(), "src/"),
  publicDir: path.join(path.resolve(), "public/"),
  build: {
    emptyOutDir: true,
    outDir: path.join(path.resolve(), "dist/"),
	  rollupOptions:{
		  input:{
			  main:path.resolve(path.join(),"src","index.html"),
		  }
	  }
  },
});
