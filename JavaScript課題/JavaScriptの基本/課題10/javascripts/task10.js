/*
key：連想配列における値(value)の要素名のように定義されたもの。
value：配列、連想配列における値。連想配列においてはkey: valueのように指定する。
プロパティ：連想配列においてはkeyとvalueを1セットにしたもの。
*/

var array1 = [1, 2, 3];
var array2 = {
    name: "田中 太郎",
    age: 20,
    gender: "男"
};
var array3 = [
    {
        name: "田中 太郎",
        age: 20,
        gender: "男"
    },
    {
        name: "山田 花子",
        age: 22,
        gender: "女"
    },
    {
        name: "山田 太郎",
        age: 24,
        gender: "男"
    }
];

console.log(array1[0], array1[2]);
console.log(array2);
console.log(array3[0]["name"], array3[2]["gender"]);
