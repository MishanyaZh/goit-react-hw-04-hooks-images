# goit-react-hw-04-hooks-images

1. npx create-react-app .

2. npm start

3. npm run build

   4.package.json (top)
   https://create-react-app.dev/docs/deployment/#github-pages
   "homepage":"https://mishanyazh.github.io/goit-react-hw-03-image-finder",

4. npm run build

5. npm install --save gh-pages

   7.package.json ("scripts") "predeploy": "npm run build", "deploy": "gh-pages
   -d build"

6. npm run deploy

---

9.  npm install --save-dev prettier eslint

10. npx mrm@2 lint-staged

    10.1. add to jsone "lint-staged": { "_.{js,jsx}": "eslint --cache --fix",
    "_.{js,css,md,jsx}": "prettier --write" }

11. .prettierrc.json { "printWidth": 80, "tabWidth": 2, "useTabs": false,
    "semi": true, "singleQuote": true, "trailingComma": "all", "bracketSpacing":
    true, "jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap":
    "always" }

---

libr

1. css liba https://emotion.sh/docs/introduction npm i @emotion/styled
   @emotion/react

2. prop-types https://www.npmjs.com/package/prop-types npm i prop-types

3.To create a random id https://www.npmjs.com/package/uuid#version-4 npm i uuid

4.toast tostiky https://react-hot-toast.com/docs npm i react-hot-toast

5. react-spinner-loader https://github.com/mhnpd/react-loader-spinner npm
   install react-loader-spinner --save

6. Lightbox https://basiclightbox.electerious.com npm install basiclightbox

7. axios https://www.npmjs.com/package/axios npm i axios
