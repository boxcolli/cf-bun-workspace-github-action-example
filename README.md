# cf-bun-workspace-github-action-example
This example shows how to setup:
- CF Workers, Pages
- Bun Workspace
- Monorepo and internal package (Prisma)
- GitHub Action

## Limits:
> You cannot configure secrets for Cloudflare Pages with GitHub Action.

- Here is [another workaround](https://github.com/marketplace/actions/refined-cloudflare-pages-action) where you can configure secrets.

Actually, you can't do that in the normal way either. However, for CI/CD, it's probably not ideal.  
In my case, I chose to configure it through the cloudflare dashboard to keep things simple.


> You should watch [cloudflare/pages-action](https://github.com/cloudflare/pages-action) for further updates.
- I'm using an unofficial [workaround by kitabisa](https://github.com/kitabisa/cloudflare-pages-action) that utilizes [cloudflare/wrangler-action](https://github.com/cloudflare/wrangler-action) because the official [cloudflare/pages-action](https://github.com/cloudflare/pages-action) doesn't support [bun](https://bun.sh/).

## Deploy
[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/boxcolli/cf-bun-workspace-github-action-example)

## Steps
1. Publish an empty repository  
2. Prepare `CLOUDFLARE_API_TOKEN` ([how to](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/#add-cloudflare-credentials-to-github-secrets))
3. Prepare `CF_ACCOUNT_ID` (its in your dashboard url)
3. `gh repo clone boxcolli/cf-bun-workspace-github-action-example ./`
4. Push into `main`
5. Create `preview` branch

## Useful Commands
```
(init package)
$ bun init

(init worker or page)
$ bun create cloudflare@latest
```
