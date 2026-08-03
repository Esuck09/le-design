# Le Design Concept

A responsive editorial landing page for Le Design Concept, built with Next.js and exported as a fully static site for GitHub Pages.

## Run locally

You need Node.js 22 or newer.

```bash
corepack enable
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Publish on GitHub Pages

1. Create a GitHub repository and push this folder to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. The included workflow will build and publish the site automatically on every push to `main`.

The build automatically detects the repository name, so assets work for both `username.github.io` repositories and project sites at `username.github.io/repository-name`.

## Production build

```bash
pnpm build
```

The static site is written to `out/`.
