//��ʽ�̳�
//��������

function SuperClass(){
    this.superValue = true;
}

/* ���ԭ�Ͷ�������þ���Ϊ���ԭ����ӹ��з��������಻��ֱ�ӷ�����Щ���Ժͷ���������ͨ��ԭ��prototype�����ʡ�
   ��ʵ����һ�����ʱ���ȴ����Ķ����������ڵ����Ժͷ���������ԭ��__proto__ָ���˸����ԭ�Ͷ���������ӵ
   ���˸���ԭ�Ͷ����ϵ����Ժͷ���
*/

//Ϊ������ӹ��з���
SuperClass.prototype.getSuperValue = function(){
    return this.superValue;
}

//��������
function SubClass(){
    this.subValue = false;
}

//�̳и���
SubClass.prototype = new SuperClass();

//Ϊ������ӹ��з���
SubClass.prototype.getSubValue = function (){
    return this.subValue;
}

var subTest = new SubClass();

//ȷ�������ʵ���̳��˸���ķ���
console.log(subTest.getSuperValue());

//ͨ�� instanceof ����ȷ��һ�������Ƿ���ĳ�����ʵ����

console.log("subTest is the intanceof SuperClass?:" + (subTest instanceof SuperClass));
console.log("subTest is the intanceof SubClass?:" + (subTest instanceof SubClass));

console.log("subTest is the intanceof object?:" + (subTest instanceof Object));

//tips!!!: ��prototype�ĸı䣬��Ӱ�����и����ʵ��

