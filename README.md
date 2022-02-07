# test-multisite-gh-pages

This repository tests deploying a static website in GitHub pages with Storybook and Docusaurus.

- For Docusaurus, we need `BASE_URL` to make it know about the deployment URL.
- For Storybook, we also need `BASE_URL` to make it know about the deployment URL. Since I am using the Vite builder, I needed to tweak the `viteFinal` field in `.storybook/main.js`.
