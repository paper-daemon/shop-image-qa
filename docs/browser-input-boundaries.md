# Browser input boundaries

Shop Image QAは画像をサーバーへ送らず、ブラウザ内で寸法・比率・容量・MIME typeを確認します。

## 今回確認した境界

ローカルファイル名は利用者入力です。Linuxでは`<`や`>`を含むファイル名も作れるため、`file.name`をそのまま`innerHTML`へ入れるとHTMLとして解釈されます。

例:

```text
<img src=x onerror=alert(1)>.png
```

修正前はこの文字列を結果カードへそのまま挿入していました。現在はHTML escapeして文字列として表示します。

Affiliate offerも同じDOMへ入るため、labelをescapeし、URLは`http:` / `https:`だけを許可します。`javascript:`などは表示対象から外します。

## 回帰テスト

```bash
node tests/test_app.js
```

公開mainで4 assertions PASS。ファイル名escape、危険URL拒否、通常HTTPS維持、既存の画像QA判定を確認します。
