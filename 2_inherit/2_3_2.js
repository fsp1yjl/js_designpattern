// ���캯���̳� 

function SuperClass(id) {
    this.books = ['js', 'html', 'css'];
    this.id = id;
}

//���������ԭ�ͷ���
SuperClass.prototype.showBooks = function() {
    console.log(this.books);
}

//��������
function SubClass(id) {
    // ���ּ̳з�ʽ1���̳и����ԭ�ͷ���
    SuperClass.call(this,id);
}

var instance1 = new SubClass(10);
var instance2 = new SubClass(20);

//instance1.showBooks(); 

instance1.books.push('design pattern');
console.log('instance1.books:' +instance1.books);
console.log('instance2.books:' + instance2.books);



