## 伝達事項
### 問題と解決手段
- dockerでソースコードが即時レンダリングされない問題が発生しました。  
  ↳ `frontend/setup.js`というファイルを作成し解決しました。  
[参考サイト](https://qiita.com/snorkel/items/f78911b25c3174732c70)

- useEffect内の処理がマウント時に2回実行されてしまう問題が発生しました。  
  ↳ `index.tsx`で`StrictMode`を無効化することで対策しました。  
  [参考サイト](https://qiita.com/asahina820/items/665c55594cfd55e6f14a)

- ニュース記事はすべて出力すると数が多すぎたため、20件までに設定してあります。

- カテゴリの切り替え
`useLocation`でクエリを取得しカテゴリの切り替えをしようと思いましたが、下記エラーが解決できず断念。  
↳ `onclick`で切り替える処理に仕様変更。
```
Uncaught runtime errors:

ERROR
Cannot read properties of null (reading 'useContext')
TypeError: Cannot read properties of null (reading 'useContext')
    at Object.useContext (http://localhost:3000/static/js/bundle.js:46449:25)
    at useInRouterContext (http://localhost:3000/static/js/bundle.js:43697:45)
    at useLocation (http://localhost:3000/static/js/bundle.js:43711:4)
    at App (http://localhost:3000/static/js/bundle.js:36:79)
    at renderWithHooks (http://localhost:3000/static/js/bundle.js:20024:22)
    at mountIndeterminateComponent (http://localhost:3000/static/js/bundle.js:23308:17)
    at beginWork (http://localhost:3000/static/js/bundle.js:24604:20)
    at HTMLUnknownElement.callCallback (http://localhost:3000/static/js/bundle.js:9620:18)
    at Object.invokeGuardedCallbackDev (http://localhost:3000/static/js/bundle.js:9664:20)
    at invokeGuardedCallback (http://localhost:3000/static/js/bundle.js:9721:35)
ERROR
Cannot read properties of null (reading 'useContext')
TypeError: Cannot read properties of null (reading 'useContext')
    at Object.useContext (http://localhost:3000/static/js/bundle.js:46449:25)
    at useInRouterContext (http://localhost:3000/static/js/bundle.js:43697:45)
    at useLocation (http://localhost:3000/static/js/bundle.js:43711:4)
    at App (http://localhost:3000/static/js/bundle.js:36:79)
    at renderWithHooks (http://localhost:3000/static/js/bundle.js:20024:22)
    at mountIndeterminateComponent (http://localhost:3000/static/js/bundle.js:23308:17)
    at beginWork (http://localhost:3000/static/js/bundle.js:24604:20)
    at HTMLUnknownElement.callCallback (http://localhost:3000/static/js/bundle.js:9620:18)
    at Object.invokeGuardedCallbackDev (http://localhost:3000/static/js/bundle.js:9664:20)
    at invokeGuardedCallback (http://localhost:3000/static/js/bundle.js:9721:35)
ERROR
Cannot read properties of null (reading 'useContext')
TypeError: Cannot read properties of null (reading 'useContext')
    at Object.useContext (http://localhost:3000/static/js/bundle.js:46449:25)
    at useInRouterContext (http://localhost:3000/static/js/bundle.js:43697:45)
    at useLocation (http://localhost:3000/static/js/bundle.js:43711:4)
    at App (http://localhost:3000/static/js/bundle.js:36:79)
    at renderWithHooks (http://localhost:3000/static/js/bundle.js:20024:22)
    at mountIndeterminateComponent (http://localhost:3000/static/js/bundle.js:23308:17)
    at beginWork (http://localhost:3000/static/js/bundle.js:24604:20)
    at beginWork$1 (http://localhost:3000/static/js/bundle.js:29563:18)
    at performUnitOfWork (http://localhost:3000/static/js/bundle.js:28833:16)
    at workLoopSync (http://localhost:3000/static/js/bundle.js:28756:9)
```