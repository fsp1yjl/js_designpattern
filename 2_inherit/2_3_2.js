// 构造函数继承 

function SuperClass(id) {
    this.books = ['js', 'html', 'css'];
    this.id = id;
}

//声明父类的原型方法
SuperClass.prototype.showBooks = function() {
    console.log(this.books);
}

//声明子类
function SubClass(id) {
    // 此种继承方式1法继承父类的原型方法
    SuperClass.call(this,id);
}

var instance1 = new SubClass(10);
var instance2 = new SubClass(20);

//instance1.showBooks(); 

instance1.books.push('design pattern');
console.log('instance1.books:' +instance1.books);
console.log('instance2.books:' + instance2.books);



