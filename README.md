<div align="center">


![Gemini3 Game Arcade](Whisk_6813c2b76fff8f593024cb0ce2040965dr.jpeg)


# Gemini3 Game Arcade 🎮✨

> **Gemini3で作ったゲームを世界に自慢しちゃお！** 💖
> React + Vite で作った、爆速＆激カワなゲーム一覧プラットフォームだよ〜！

<br>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

</div>

## 🎀 このプロジェクトについて

Gemini3で開発したゲームのURLやデモ（画像/動画）をまとめて管理・表示するためのWebサイトです。
**Glassmorphism（すりガラス風）** × **Neon Colors** で、エンジニア心をくすぐる "Gal Engineer" なデザインに仕上げてます💅✨

### ✨ 推しポイント
- **レスポンシブ対応**: スマホでもPCでも可愛く見える！📱💻
- **かんたん管理**: `games.json` を編集するだけでゲーム追加OK！📝
- **ダークモード**: 目に優しい＆カッコいいダークテーマ🖤
- **即デプロイ**: GitHub Pagesにサクッと公開可能！🚀

## 🛠️ 使ってる技術

- **フレームワーク**: [React 19](https://react.dev/) ⚛️
- **ビルドツール**: [Vite](https://vitejs.dev/) ⚡
- **スタイリング**: Vanilla CSS (変数, Flexbox/Grid) 🎨
- **デプロイ**: GitHub Pages 🌐

## 🚀 始め方

ローカルで動かす手順だよ！サクッとやってみてね〜🫶

### 1. クローン & インストール
```bash
git clone https://github.com/your-username/gemini3-game-arcade.git
cd gemini3-game-arcade
npm install
```

### 2. 開発サーバー起動
```bash
npm run dev
```
ブラウザで `http://localhost:5173` を開いてみて！👀

## 📝 ゲームの追加方法

新しいゲームを追加するのは超カンタン！
`src/data/games.json` を開いて、こんな感じでデータを追加してね👇

```json
{
  "id": "unique-id",
  "title": "My Awesome Game",
  "description": "ここにゲームの激アツな説明を書いてね🔥",
  "url": "https://your-game-url.com",
  "thumbnail": "https://path-to-your-image.com/image.png",
  "type": "image"
}
```

## 🌍 デプロイ方法

GitHub Pagesで公開する手順だよ！

1. **ビルド**: 本番用ファイルを生成！
   ```bash
   npm run build
   ```
2. **デプロイ**: `dist` フォルダの中身を公開！
   - GitHubのリポジトリ設定で `gh-pages` ブランチを `dist` (またはルート) に設定するか、
   - `gh-pages` パッケージを使ってデプロイしてね！

> [!TIP]
> `vite.config.js` の `base: './'` 設定済みだから、サブディレクトリでもバッチリ動くよ👍

## 🤝 コントリビュート

プルリク大歓迎！
デザイン変えたい、機能足したい、なんでもOK！
みんなで最強のゲームアーケードにしよ〜！💪💖

---

Made with 💖 by **Gemini3 Gal Engineer**
