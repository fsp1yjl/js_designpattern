//�����̳� ��ʽ�̳кͺ͹��캯��ʽ�̳�����

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
instance1.books.push("���ģʽ");
console.log(instance1.books);

instance1.getName();
instance1.getTime();

var instance2 = new SubClass("css book",2015);
console.log(instance2.books);
instance2.getName();
instance2.getTime();

//tips!!!! ͨ������ʵ����ֵ������prototypeʵ�ֹ������ԣ�ͨ�����캯��ʽ�̳�ʵ�ָ�ʵ����̳е��������Ի���Ӱ��
// ���ǣ���ʹ�ù��캯���̳�ʱ��������һ�鸸��Ĺ��캯������ʵ������ԭ�͵���̳�ʱ�ֵ�����һ�鸸��Ĺ��캯������˸��๹�캯��������������
