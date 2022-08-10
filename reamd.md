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