
function inheritPrototype(subClass,superClass) {
    var p = inheritObject(superClass.prototype);

    console.log('p.constructor...:');
    console.log(p.constructor);
    p.constructor = subClass;
    subClass.prototype = p;
}

function SuperClass(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"]
}

SuperClass.prototype.getName = function() {
    console.log(this.name);
};



function SubClass(name,time) {
    SuperClass.call(this,name);
    this.time = time;
}


inheritPrototype(SubClass,SuperClass);

SubClass.prototype.getTime = function() {
    console.log(this.time);
};

function inheritObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var instance1 = new SubClass("js book",2014);
var instance2 = new SubClass("css book",2013);


