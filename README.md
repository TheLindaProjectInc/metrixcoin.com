
# Metrix Coin Website

> **Note:**
> Ramit Arora "iamramit.com" is the original creator of the website.
> It was coded using Less preprocessor and compiled with [CodeKit](https://codekitapp.com/).
> No other libraries are needed to view the project.

Because a lot of the Less components are missing, [CodeKit](https://codekitapp.com/) is a paid-for application, and it only runs on macOS, the folder `MS-master` can therefore be ignored. `MS-master` even seems to be an old backup of the website. A new build should be considered if there are to be any drastic changes made to the website.

## Styling

The original Less components that were imported when it was originally compiled seem to be missing. So instead make any style changes to `/css/styles.css`, minify it to `/css/styles.min.css`, and ignore any `*.less` files. [UglifyCSS](https://www.npmjs.com/package/uglifycss) is a useful tool for this, using the command `uglifycss css/styles.css > css/styles.min.css` from the project root.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how Nuxt.js works, check out the [Nuxt.js docs](https://nuxtjs.org).

---
> README: [Chris "Crimbo"](https://ckhatton.com/). | Written with [StackEdit](https://stackedit.io/).
