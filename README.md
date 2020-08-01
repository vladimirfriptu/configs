## Базовые конфиги для eslint, prettier, stylelint, typescript, babel, webpack

#### Настройка базовых конфигов

> Конфигурацию stylelint положить в package.json:

```json
{
  "stylelint": {
    "extends": "@packages/configs-rtkit/stylelint.config.js"
  }
}
```

> Использование stylelint и eslint в package.json заменить на:

```json
{
  "scripts": {
    "lint": "eslint --ext .js,.jsx,.ts,.tsx ./src",
    "stylelint": "stylelint './src/**/*.{less,css}'"
  }
}
```

> Конфигурацию tsconfig.json заменить на:

```json
{
  "extends": "@packages/configs-rtkit/tsconfig.json",
  "compilerOptions": {
    "baseUrl": "./"
  },
  "include": ["src"]
}
```

> Конфигурацию prettier положить в package.json:

```json
{
  "prettier": "@packages/configs-rtkit/prettier.config.js"
}
```

> Конфигурацию babel положить в package.json:

```json
{
  "babel": {
    "extends": "@packages/configs-rtkit/.babelrc"
  }
}
```

> Конфигурацию lint-staged заменить на файл lint-staged.config.js и вставить в него

```javascript
module.exports = require('@packages/configs-rtkit/lint-staged.config.js');
```

> в package.json добавить

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

#### jest

> Необходимо добавить в директории проекта файл `jest.config.js` в котором подключить конфиг

```javascript
module.exports = require('@packages/configs-rtkit/jest.config');
```
