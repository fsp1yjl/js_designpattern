//类式继承
//声明父类

function SuperClass(){
    this.superValue = true;
}

/* 类的原型对象的作用就是为类的原型添加共有方法，但类不能直接访问这些属性和方法。必须通过原型prototype来访问。
   在实例化一个类的时候，先创建的对象复制了类内的属性和方法，并将原型__proto__指向了父类的原型对象，这样就拥
   有了父类原型对象上的属性和方法
*/

//为父类添加共有方法
SuperClass.prototype.getSuperValue = function(){
    return this.superValue;
}

//声明子类
function SubClass(){
    this.subValue = false;
}

//继承父类
SubClass.prototype = new SuperClass();

//为子类添加共有方法
SubClass.prototype.getSubValue = function (){
    return this.subValue;
}

var subTest = new SubClass();

//确认子类的实例继承了父类的方法
console.log(subTest.getSuperValue());

//通过 instanceof 可以确认一个对象是否是某个类的实例。

console.log("subTest is the intanceof SuperClass?:" + (subTest instanceof SuperClass));
console.log("subTest is the intanceof SubClass?:" + (subTest instanceof SubClass));

console.log("subTest is the intanceof object?:" + (subTest instanceof Object));

//tips!!!: 对prototype的改变，会影响所有该类的实例

