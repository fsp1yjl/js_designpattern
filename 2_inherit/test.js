function parent(test,name){
    this.test = test;
    this.name = name;
}

function Child() {
}

Child.prototype = new parent('test11','fengsp');

var kid = new Child();
console.log(kid.test);
console.log(kid.name);
kid.name = 'kkk';

var kid2 = new Child();
console.log(kid2.name);


console.log(Child.prototype);
