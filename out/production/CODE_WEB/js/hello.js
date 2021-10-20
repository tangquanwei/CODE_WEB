// HTML 中的脚本必须位于 <script> 与 </script> 标签之间
// 脚本可被放置在 HTML 页面的 <body> 和 <head> 部分中
// 可以把脚本保存到外部文件中。外部文件通常包含被多个网页使用的代码
// <script src="myScript.js"></script>
// 使用 window.alert() 弹出警告框。
// 使用 document.write() 方法将内容写到 HTML 文档中。
// 使用 innerHTML 写入到 HTML 元素。
// 使用 console.log() 写入到浏览器的控制台。
/* 
1.数据类型
    值类型(基本类型)(6种):
        字符串(String)
        数字(Number)
        布尔(Boolean)
        空(null)
        未定义（Undefined）
        独一无二的值(Symbol)
    引用数据类型
      对象(Object)
      数组(Array)
      函数(Function)
*/
var a = true; //boolean
var b; //undefined
console.log(b);


var mine = {  //对象
  name: "quanwei",
  age: 18,
  1: 24,
};
// console.log(mine.name);
// console.log(mine[1]);
// console.log(a===b);
// console.log('\n');
// console.log(a!==b);

var protoType = {
  // 对象原型
  name: 0,
  age: 0,
  gender: "gender",
};
var man1 = Object.create(protoType);
man1.name = "quanwei";
man1.go = "hello";
console.log(typeof man1); //using typeof to get type info
console.log(typeof man1.gender);
var tri = function (x) {
  return x * x * x;
};
console.log(tri(12));
var gcd = function (m, n) {
  if (m % n === 0) return n;
  else return gcd(n, m % n);
};
console.log(gcd(12, 23));

// ctor
var protoCircle = {
  radius: 1,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};
function Circle(ridius) {
  var c = Object.create(protoCircle);
  c.radius = ridius;
  return c;
}
var c1 = Circle(12.5);
console.log(c1.area());

