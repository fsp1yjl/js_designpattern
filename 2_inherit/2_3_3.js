//组合类继承 类式继承和和构造函数式继承相结合

function SuperClass(name) {
    this.name = name;
    this.books = ["html", "css", "js"];
}

SuperClass.prototype.getName = function() {
    console.log(this.name);
}

function SubClass(name,time) {
    SuperClass.call(this,name);
    this.time = time;
}

SubClass.prototype = new SuperClass('hh','jstest');

SubClass.prototype.getTime = function() {
    console.log(this.time);
};

var instance1 = new SubClass("js book",2016);
instance1.books.push("设计模式");
console.log(instance1.books);

instance1.getName();
instance1.getTime();

var instance2 = new SubClass("css book",2015);
console.log(instance2.books);
instance2.getName();
instance2.getTime();

//tips!!!! 通过父类实例赋值给子类prototype实现共用属性，通过构造函数式继承实现各实例间继承的引用属性互不影响
// 但是，在使用构造函数继承时，调用了一遍父类的构造函数，在实现子类原型的类继承时又调用了一遍父类的构造函数，因此父类构造函数被调用了两遍
