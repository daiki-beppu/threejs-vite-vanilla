# threejs-vite-vanilla

このリポジトリは、Three.jsとViteを使用したバニラJavaScriptプロジェクトのGitHubテンプレートです。

## 概要

このテンプレートは、Three.jsを使用した3Dグラフィックス開発を、Viteの高速な開発環境で始めるための出発点を提供します。

## 特徴

- Three.jsを使用した3D描画機能
- Viteによる高速な開発環境とビルドプロセス
- lil-guiを用いた簡単なGUIコントロール
- バニラJavaScriptでのクリーンな実装

## プロジェクト構造
threejs-vite-vanilla/
├── node_modules/
├── public/
├── src/
│   ├── lib/
│   │   └── three-helpers.js
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       └── style.css
├── .gitignore
├── biome.json
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js

## 使用方法

1. このテンプレートを使用して新しいリポジトリを作成します：
   - GitHubの"Use this template"ボタンをクリックします。
   - 新しいリポジトリ名を入力し、必要に応じて説明を追加します。
   - "Create repository from template"をクリックします。

2. 新しく作成したリポジトリをローカルにクローンします：
   - `git clone [新しいリポジトリのURL]`
   - `cd [リポジトリ名]`

3. 依存関係をインストールします：
   - `npm install`

4. 開発サーバーを起動します：
   - `npm run dev`

## 開発

- `npm run dev`: 開発サーバーを起動します。
- `npm run build`: プロジェクトをビルドします。
- `npm run preview`: ビルドされたプロジェクトをプレビューします。

## カスタマイズ

このテンプレートを基に、以下のようなカスタマイズが可能です：

1. `src/scripts/main.js`を編集して、3Dシーンやオブジェクトを追加・変更します。
2. `src/lib/three-helpers.js`を使用して、Three.jsの補助機能を活用します。
3. lil-guiを使用してインタラクティブなコントロールを追加します。
4. `src/styles/style.css`でスタイルをカスタマイズします。
5. 必要に応じて追加のnpmパッケージをインストールします。

## 技術スタック

- [Three.js](https://threejs.org/) v0.167.0 - 3Dグラフィックスライブラリ
- [Vite](https://vitejs.dev/) v5.3.5 - 次世代フロントエンドツール
- [lil-gui](https://lil-gui.georgealways.com/) v0.19.2 - 軽量GUIコントロールライブラリ
- [Biome](https://biomejs.dev/) v1.8.3 - 高速で優雅なコードフォーマッター

## ライセンス

[ライセンス情報を記入してください]

## 貢献

このテンプレートへの貢献を歓迎します。問題の報告や改善の提案は、Issueを開いてください。

---

本テンプレートを使用して開発を始めてください。
