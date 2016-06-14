//原型式继承 
function inhertObject(o) {
    //声明一个过渡函数类，洁净的，并将类的原型赋值为一个对象
    function F() {}
    F.prototype = o;
    return new F();
}


var book = {
    name: "js book",
    alikeBook: ["css book", "html book"]
};

// 由于原型对象book的属性alikeBook是引用类型，所以所有实例的alikeBook属性均为引用类型****
var newBook = inhertObject(book);
newBook.name = "ajax book";
newBook.alikeBook.push("xml book");

var otherBook = inhertObject(book);
otherBook.name = "flash book";
otherBook.alikeBook.push("as book");

console.log(newBook.name);
console.log(newBook.alikeBook);
console.log(otherBook.name);
console.log(otherBook.alikeBook);

console.log(book.name);
console.log(book.alikeBook);



