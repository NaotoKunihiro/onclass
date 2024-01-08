var result1 = [];
var result2 = [];
var result3 = 0;
var array1 = {
    name: "田中 太郎",
    age: 20,
    gender: "男"
};
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i <= 10; i++) {
    result1 += i;
}
for (let key in array1) {
    result2 += array1[key];
    console.log(array1[key]);
}
for (let value of array2) {
    result3 += value;
}

console.log(result1);
console.log(result2);
console.log(result3);