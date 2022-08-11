## Next.js

```
npm run build
npm run start
```

## ディレクトリ構成
- pages ページコンポーネント、APIコード
    - 
- puglic 画像などの静的ファイル
- styles cssファイル
    - Home.module.css ページ専用 -> *.module.cssはコンポーネントを定義するファイルから読み込まれる
    - globals.css アプリ全体のスタイリング
    
## レンダリング手法
- 静的サイト生成(SSG: static site generation)
- クライアントサイドレンダリング(CSR: cliend side rendering)
- サーバーサイドレンダリング(SSR: server side rendering)
- インクリメンタル静的再生成(ISR: incremental static regeneration)

## storybook
```
npx sb init
npm run storybook
```

## test
```
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

jest.config.js
```js
const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })
const customJestConfig = {
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jsdom',
}

module.exports = createJestConfig(customJestConfig)
```

jest.setup.js
```js
import '@testing-library/jest-dom/extend-expect'
```