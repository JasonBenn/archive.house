# The Archive house website

## Development

To develop locally with live reload:

```bash
yarn develop
```

## Deployings

The site is deployed at http://archive-house.netlify.com.

1.  Checkout a new branch locally, commit any changes you want, then push it to GitHub.
2.  Netlify will create a deploy preview at a temporary url. Check it out here: https://app.netlify.com/sites/archive.house/deploys. If your branch were named tools/rm-gh-pages, it would look something like:
    ![](netlify-deploy-preview.png)

3.  Once the deploy preview looks good, merge that branch into master. Netlify will automatically deploy the site from changes to master:
    ![](netlify-deploy-master.png)

## Misc

This is based on the [default Gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default) converted to [TypeScript](https://www.typescriptlang.org/).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
