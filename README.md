# Slakt på Öland Mark III

This is a [Next.js](https://nextjs.org) project.

## Side Navigation

A responsive left navigation rail is available across the site.
It collapses into a drawer on smaller viewports and
supports nested groups, keyboard navigation and active route highlighting.

### Adding links

Edit `src/lib/nav.ts` and update the `navItems` array:

```ts
export const navItems: NavItem[] = [
  { title: 'Start', href: '/start' },
  {
    title: 'Resources',
    children: [
      { title: 'Setting', href: '/setting' },
      { title: 'Characters', href: '/characters' },
    ],
  },
  { title: 'GitHub', href: 'https://github.com/drbrago/slakt-pa-oland-mark-iii', external: true },
];
```

Each item accepts:

- `title` – link label.
- `href` – optional URL; omit for group headers.
- `children` – nested `NavItem[]` for collapsible groups.
- `icon` – optional React node shown before the title.
- `external` – renders with `target="_blank"` and `rel="noopener noreferrer"`.

## Testing

- **Unit tests:** `npm test`
- **E2E tests:** `npm run test:e2e`

## How to extend the menu

1. Add routes or groups in `src/lib/nav.ts`.
2. Server components import the array and pass it to `SideNav`.
3. The component handles collapsible state and highlights active links automatically.
