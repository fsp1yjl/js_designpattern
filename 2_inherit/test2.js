function inherit(o){
    function F(){};
    F.prototype = o;

    var a = new F();
    console.log(a.constructor);
    a.constructor = F
    return a;
}

function aa(){};
aa.prototype.getA = function() {
    console.log('kkkk');
};

// 打印的结果是function aa
var b = inherit(aa.prototype);
console.log(b.constructor);
    
