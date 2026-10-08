// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages (project site) is a static SPA served under /schoolfinder-map/; the
// deploy workflow sets GITHUB_PAGES so the default Lovable/Cloudflare build is unchanged.
const pages = Boolean(process.env.GITHUB_PAGES);

export default defineConfig({
  vite: { base: pages ? "/schoolfinder-map/" : "/" },
  nitro: pages ? false : undefined,
  tanstackStart: {
    ...(pages ? { spa: { enabled: true } } : {}),
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
