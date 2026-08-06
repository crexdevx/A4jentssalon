---
name: Cloudflare Pages deployment
description: Deployment constraints for the salon's static Next.js export on Cloudflare Pages.
---

The salon is a static Next.js export, not a Cloudflare Worker or SSR Pages application. Cloudflare Pages must build the salon package only, publish the generated `out` directory, and use the Pages-specific Wrangler command.

**Why:** The monorepo contains unrelated preview packages whose builds require development-only environment variables, and Worker commands incorrectly trigger workspace application detection and adapter dependency resolution.

**How to apply:** Keep Cloudflare's build command pointed at the root script that filters to `@workspace/a4-salon`; use `npx wrangler pages deploy artifacts/a4-salon/out --project-name=<project>` when a deploy command is required. Do not use `pnpm -r` for the Pages build or plain `wrangler deploy`.