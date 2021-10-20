var arr = [1, 23, 4, 4, 2, 1, 235, 324];
// let 定义块作用域变量
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }
arr.sort(function (a, b) { return a < b; });
arr.forEach(console.log);