# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Notes

This is a modified version of the tailwindcss example for Next.js. The following changes have been made to it:

-   added i18n object to next.config.js to generate an html tag with language like this:

```html
<html lang="en"></html>
```

-   added example changes to styles/globals.css
-   added example changes to tailwind.config.js
-   added example components
-   remove api/hello.ts

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/ironcladmerc/next-frontendmentor-tailwind-starter&project-name=next-frontendmentor-tailwind-starter&repository-name=next-frontendmentor-tailwind-starter)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app project-name -e https://github.com/ironcladmerc/next-frontendmentor-tailwind-starter
```

```bash
yarn create next-app project-name -e https://github.com/ironcladmerc/next-frontendmentor-tailwind-starter
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
