/*
・elseを使⽤する時の注意点
elseはifを使用した際にのみ使用でき、ifの条件文に当てはまらなかったもののみ処理が実行される。
また、if⽂とelseの間に処理書いてもエラーとなる。

・JavaScriptで実装した時の確認ポイント
console.logを使用し、条件分岐の結果を確認し予期せぬ挙動になっていないか確認する。
また、構文ミス等の影響でSyntaxErrorになっていないか確認する。
*/

var typeNumber = 1;
var typeString = "1";

if (typeNumber === "1") {
    console.log(true);
} else {
    console.log(false);
}

if (typeString === 1) {
    console.log(true);
} else {
    console.log(false);
}