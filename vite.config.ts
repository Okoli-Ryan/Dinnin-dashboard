import path from "path";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), mkcert()],
	server: {
		https: true,
	},
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "src") },
			{ find: "@components", replacement: path.resolve(__dirname, "src/components") },
			{ find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
			{ find: "@api", replacement: path.resolve(__dirname, "src/api") },
			{ find: "@core", replacement: path.resolve(__dirname, "src/core") },
			{ find: "@hoc", replacement: path.resolve(__dirname, "src/hoc") },
			{ find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
			{ find: "@interfaces", replacement: path.resolve(__dirname, "src/interfaces") },
			{ find: "@models", replacement: path.resolve(__dirname, "src/models") },
			{ find: "@testUtils", replacement: path.resolve(__dirname, "src/testUtils.tsx") },
		],
	},
});
