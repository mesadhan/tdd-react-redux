
# Install yarn in macOS

    brew install yarn

# Install SASS

    yarn add node-sass

# install test libs 

    yarn add -D enzyme enzyme-adapter-react-16 jest jest-enzyme

# install redux libs

    yarn add redux react-redux redux-thunk

# install prop type checker libs
    
    yarn add prop-types
    npm install --save prop-types

# intall husky for git hook before push or commit

    npm install husky --save-dev

# install react router

    yarn add react-router-dom


# Git page deploy

- npm install gh-pages
- npm run deploy

```js
// package.json
{
  "name": "my-react-app",
  "homepage": "https://mesadhan.github.io/tdd-react-redux"
   ....
  "scripts": {
     ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
     ...
}
```


# Environment Variable Setup

NOTE: The prefix `REACT_APP_` is required when creating custom environment variables.

`.env`, `.env.development`, `.env.test` and `.env.production` 
As a default behavior, those files will be served with no configuration. You do not even have to update scripts in package.json

`.env.staging`
Here is the main focus. To target `.env.staging` file for the staging build, we need a library to achieve this.

1- Let's install env-cmd. This library will will help us on using/executing a selected environment file. [See more detail](https://www.npmjs.com/package/env-cmd)
// execute command below at the root of project
$ npm install env-cmd --save
or
$ yarn add env-cmd
2- Add a script in package.json like below.

```js
// package.json
scripts: {
  "start": "react-scripts start", // `NODE_ENV` is equal to `development`.
  "build": "react-scripts build", // `NODE_ENV` is equal to `production`.
  "build:staging": "env-cmd -f .env.staging react-scripts build", // `NODE_ENV` is equal to `production`.
  ...
}
```

3- Finally, test your build:staging script.

# References:

- https://github.com/facebook/prop-types
- https://jestjs.io/docs/en/expect
- https://github.com/gitname/react-gh-pages
- https://create-react-app.dev/docs/adding-custom-environment-variables/
- https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom
- https://www.npmjs.com/package/env-cmd