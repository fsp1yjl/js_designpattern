
function inheritObject(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

//����ʽ�̳У���ԭ��ʽ�̳еĵڶ��η�װ

var book = {
    name: "js book",
    alikeBook: ["css book", "html book"]
};

function createBook(obj) {
    //ͨ��ԭ�ͼ̳з�ʽ�����¶���
    var o = new inheritObject(obj);

    //��չ�¶���
    o.getName = function() {
        console.log(this.name);
    };

    return o;
}

var bookExp = createBook(book);

bookExp.getName();
