# cf-bun-workspace-github-action-example
This example shows how to setup:
- CF Workers (Hono)
- CF Pages (Remix Vite)
- Bun Workspace
- Monorepo & Internal package (Prisma)
- GitHub Action

## Limits:
If you follow the methods in this repository, you cannot configure secrets for Cloudflare Pages with GitHub Action.
- Actually, you can't do that in the normal way either. However, for CI/CD, it's probably not ideal. In my case, I chose to configure it through the cloudflare dashboard to keep things simple.
- Here is [another workaround](https://github.com/marketplace/actions/refined-cloudflare-pages-action) where you can configure secrets.


You should watch [cloudflare/pages-action](https://github.com/cloudflare/pages-action) for further updates.
- I'm using an unofficial [workaround by kitabisa](https://github.com/kitabisa/cloudflare-pages-action) that utilizes [cloudflare/wrangler-action](https://github.com/cloudflare/wrangler-action) because the official [cloudflare/pages-action](https://github.com/cloudflare/pages-action) doesn't support [bun](https://bun.sh/).

## Steps
### 1. Publish a empty repository  
### 2. Prepare `CLOUDFLARE_API_TOKEN`
### 3. `