# cf-workspace-example
This example shows how to setup:
- CF [Workers](https://developers.cloudflare.com/workers), [Pages](https://developers.cloudflare.com/pages)
- [Bun](https://bun.sh/) Workspace
- Monorepo and internal package ([Prisma](https://www.prisma.io/))
- [GitHub Action](https://docs.github.com/ko/actions)

## Limits:
> You cannot configure secrets for Cloudflare Pages with GitHub Action.

- Here is [another workaround](https://github.com/marketplace/actions/refined-cloudflare-pages-action) where you can configure secrets.

Actually, you can't do that in the normal way either. However, for CI/CD, it's probably not ideal.  
In my case, I chose to configure it through the cloudflare dashboard to keep things simple.


> You should watch [cloudflare/pages-action](https://github.com/cloudflare/pages-action) for further updates.
- I'm using an unofficial [workaround by kitabisa](https://github.com/kitabisa/cloudflare-pages-action) that utilizes [cloudflare/wrangler-action](https://github.com/cloudflare/wrangler-action) because the official [cloudflare/pages-action](https://github.com/cloudflare/pages-action) doesn't support bun.

## Quick Test
[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/boxcolli/cf-workspace-example)

## Steps
1. Publish an empty repository  
2. Prepare `CLOUDFLARE_API_TOKEN` ([how to](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/#add-cloudflare-credentials-to-github-secrets))
3. Prepare `CF_ACCOUNT_ID` (its in your dashboard url)
3. `gh repo clone boxcolli/cf-workspace-example ./`
4. Push into 'main'
5. Uncomment workflow codes:
```yml
# .github/workflows/*.yml

on:
  # UNCOMMENT THIS PART #
  # push:
  #   branches:
  #     - main
  #   paths:
  #     - "fe/**"
  #     - ".github/workflows/deploy-fe.yml"
```
6. Create 'preview' branch

## Useful Commands
```
(init package)
$ bun init

(init worker or page)
$ bun create cloudflare@latest
```
