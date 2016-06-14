
function inheritObject(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

//寄生式继承，对原型式继承的第二次封装

var book = {
    name: "js book",
    alikeBook: ["css book", "html book"]
};

function createBook(obj) {
    //通过原型继承方式创建新对象
    var o = new inheritObject(obj);

    //扩展新对象
    o.getName = function() {
        console.log(this.name);
    };

    return o;
}

var bookExp = createBook(book);

bookExp.getName();
