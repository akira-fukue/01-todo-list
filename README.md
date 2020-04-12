# 01 - Projeto de Todo List

Iniciativa de 1 projeto por dia ou por ciclo.

### Tecnologias usadas:
- [ReactJs](https://pt-br.reactjs.org/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)

_Data de execução:_
2020-04-12

### Preparando o ambiente
**01: dependencies**
```bash 
yarn add
react
react-dom
@babel/core
@babel/preset-env
@babel/preset-react
@babel/cli
webpack
webpack-cli
babel-loader
```

**02: dev-dependencies**
```bash
yarn add -D
webpack-dev-server
```

**03: folders**
```bash
mkdir src public
```

**04: files**
```bash
touch
public/index.html
babel.config.js
webpack.config.js
```

**05: config files**
_babel.config.js_
```js
modules.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
}
```

_webpack.config.js_
```js
const path = require("path");
modules.exports = {
  entry:  path.resolve(__direname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ]
  },
}
```
**06: public files**
_public/index.js_
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>01 - Todo List</title>
</head>
<body>
  <div id="app"></div>
  <script src="bundle.js"></script>
</body>
</html>
```
* o mesmo resultado pode ser alcançado com o plugin emmet do VSCode seguindo os seguintes commandos
```
// No inicio do arquivo
html:5 (enter)

// Dentro do body
div#app (enter)

// Depois da <div></div>
script:src (enter)

// lembre-se de usar src="bundle.js"
```