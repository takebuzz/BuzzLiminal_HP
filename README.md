# BuzzLiminal ホームページ

BuzzLiminalの公式ホームページです。Astro + Tailwind CSS 4を使用して構築されています。

## 技術スタック

- **フレームワーク**: Astro 5.12.8
- **CSS**: Tailwind CSS 4.1.11
- **言語**: TypeScript
- **ビルドツール**: Vite

## 前提条件

- Node.js 18.0.0以上
- npm 9.0.0以上

## セットアップ手順

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd BuzzLiminal_HP
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

開発サーバーは `http://localhost:4321` で起動します。

## 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクションビルドを実行
- `npm run preview` - ビルドされたファイルをプレビュー

## プロジェクト構造

```
BuzzLiminal_HP/
├── src/
│   ├── components/     # Astroコンポーネント
│   ├── layouts/        # レイアウトコンポーネント
│   ├── pages/          # ページコンポーネント
│   └── styles/         # グローバルスタイル
├── public/             # 静的アセット
├── dist/               # ビルド出力（生成される）
└── astro.config.mjs    # Astro設定ファイル
```

## ビルド

プロダクション用のビルドを実行するには：

```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

## トラブルシューティング

### Rollupのネイティブモジュールエラーが発生する場合

ARM64アーキテクチャ（Apple Silicon）でよく発生する問題です。以下の手順で解決できます：

```bash
rm -rf package-lock.json node_modules
npm install
```

### 新しいターミナルセッションでnpmコマンドが見つからない場合

新しいターミナルを開いた際に `zsh: command not found: npm` エラーが発生する場合、以下の手順で解決できます：

```bash
# HomebrewのPATHを設定
export PATH="/opt/homebrew/bin:$PATH"

# または、永続的に設定する場合
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### 開発サーバーが起動しない場合

1. 依存関係が正しくインストールされているか確認：
   ```bash
   npm install
   ```

2. ポート4321が使用中でないか確認：
   ```bash
   lsof -i :4321
   ```

3. 必要に応じてプロセスを終了：
   ```bash
   pkill -f "astro dev"
   ```

## ライセンス

このプロジェクトはBuzzLiminalの所有物です。
