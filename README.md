### express+typescript構築メモ
```bash
$ npm init -y
$ npm install express
$ npm install -D typescript @types/node @types/express ts-node nodemon rimraf
$ npx tsconfig.json
```

eslint
```bash
$ npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
$ npx eslint --init
# 自動修正
$ npm run eslint -- --fix --ext '.js,.ts' ./src/**"
```