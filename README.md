# Shop Image QA

商品画像を**ブラウザ内だけで**まとめて確認する、小さな静的QAツールです。画像はアップロードせず、寸法・縦横比・容量・MIME形式を読み取り、よくある納品前の見落としを早めに拾います。

## What it checks

- 幅 / 高さと縦横比
- ファイル容量
- JPEG / PNG / WebP かどうか
- 1000px未満の小さめ画像
- 5MB超の大きめ画像
- 複数画像の一括確認

判定は「自動で正解を決める」ものではなく、**人が最終確認するためのfirst-pass QA**です。

## Quick start

`index.html` をブラウザで開き、画像を選択するだけです。サーバーやビルド環境は不要です。

```bash
python3 -m http.server 8000
```

必要なら上のようにローカルHTTPサーバーでも開けます。

## Privacy / safety boundary

画像本体は外部送信しません。ブラウザの `URL.createObjectURL()` でローカル表示し、結果表示時はファイル名などをHTMLエスケープします。広告リンクを有効化する場合も、`http` / `https` 以外は表示しません。

- [ブラウザ入力の安全境界と回帰テスト](docs/browser-input-boundaries.md)

## Verification

```bash
node --check app.js
node tests/test_app.js
```

GitHub Actionsでも同じ境界を継続確認します。

## Non-goals

- 画質や売上成果の保証
- ECモールごとの最新入稿仕様の自動判定
- 画像編集・圧縮・リサイズそのもの
- AIによる商品内容の意味判定

## Affiliate policy

ツール本体は広告なしでも成立します。収益リンクを使う場合は、承認済みのものだけを明示付きで有効化し、判定ロジックとは分離します。

MIT License.
