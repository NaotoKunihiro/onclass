// 1. プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。

/*
以下を参考にして説明すると、
「obj」がオブジェクトとなり、オブジェクトとは連想配列で構築されたプロパティの集合体のことを指す。
「property〇」がプロパティとなり、プロパティとはオブジェクトを構成する「key」と「value」がセットになったものを指す。
「method〇」がメソッドとなり、プロパティの「value」に当たる個所を関数にしたものを指す。
*/
const obj = {
    property1: "property1",
    property2: "property2",
    method1: function() {
        console.log("method1");
    },
    method2: function() {
        return "method2";
    },
    method3: function(str) {
        return "method3" + str;
    }
}

console.log(obj.method3("です。"));


// 2. 下記の関数を実⾏してその結果をコンソールに表⽰してください。（スコープ内に書く⽅法はだめです。）

function fruit(name, price) {
    const result = name + "の値段は" + price + "円です。"
    return result
};

console.log(fruit("リンゴ", 100));


// 3. 下記の関数を経由して2つの関数を実⾏するような処理を作ってください。

function addTax(price, func) {
    // priceは値段
    // funcは実⾏する関数名
    // 税込み価格を計算して四捨五⼊して整数にしている(スコープ内でしか参照できません。)
    const taxPrice = Math.round(price * 1.10);
    func(taxPrice);
}
// トマトの税込み価格をコンソールに表⽰させる処理
const tomato = function price(taxPrice) {
    console.log("トマトの値段は" + taxPrice + "円です。");
}

addTax(100, tomato);


// ⽟ねぎの税込み価格をコンソールに表⽰させる処理
const onion = function price(taxPrice) {
    console.log("玉ねぎの値段は" + taxPrice + "円です。");
}

addTax(200, onion);