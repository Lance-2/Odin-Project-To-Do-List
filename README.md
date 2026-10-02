# Odin-Project-To-Do-List
Odin Project Practice with factories/modules, webpack architecture, external libraries, and persistent storage

Webpack + GitHub Pages Command Reference

A quick reference for setting up, developing, and deploying a Webpack-based project to GitHub Pages via a gh-pages branch.

Initial project setup (once per new project)
bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm init -y
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
npm install style-loader css-loader --save-dev

Then manually create:

webpack.config.js
.gitignore (containing node_modules and dist)
src/index.js
src/template.html

Minimal webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  devServer: {
    static: './dist',
    open: true,
  },
};

Recommended package.json scripts

"scripts": {
  "build": "webpack",
  "start": "webpack serve",
  "deploy": "git subtree push --prefix dist origin gh-pages"
}

Deployment (first time)

git status
git branch gh-pages
git checkout gh-pages
git merge main --no-edit
npx webpack
git add dist -f
git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main