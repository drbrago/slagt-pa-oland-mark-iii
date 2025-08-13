# Slakt på Öland Mark III

This project is a statically‑exported [Next.js](https://nextjs.org) site hosted on GitHub Pages. It features a responsive, accessible left side navigation.

## Development

```bash
npm install
npm run dev
```

## Testing

```bash
npm test         # unit tests with Vitest
npm run test:e2e # Playwright end‑to‑end tests
```

## Deployment to GitHub Pages

1. Set the repository base path:
   ```bash
   export NEXT_PUBLIC_BASE_PATH=/slakt-pa-oland-mark-iii
   ```
2. Build and publish:
   ```bash
   npm run deploy
   ```
   The script exports the site to `out/` and pushes it to the `gh-pages` branch.

## Extending the Navigation

Navigation items live in [`src/lib/nav.ts`](src/lib/nav.ts). Each item uses the following type:

```ts
export type NavItem = {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  external?: boolean;
};
```

Add new routes by editing the `navItems` array. Groups are expanded automatically when a child is active and their state persists in `localStorage`.
