//ԭ��ʽ�̳� 
function inhertObject(o) {
    //����һ�����ɺ����࣬�ྻ�ģ��������ԭ�͸�ֵΪһ������
    function F() {}
    F.prototype = o;
    return new F();
}


var book = {
    name: "js book",
    alikeBook: ["css book", "html book"]
};

// ����ԭ�Ͷ���book������alikeBook���������ͣ���������ʵ����alikeBook���Ծ�Ϊ��������****
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



