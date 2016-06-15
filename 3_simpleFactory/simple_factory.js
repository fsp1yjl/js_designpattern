
// 简单工厂模式实例

var Basketball = function(){
    this.intro = 'popular in America';
}
Basketball.prototype = {
    getMember:function() {
        console.log('every team has 5 player');
    }
}

var Football = function() {
    this.intro = 'popular all around the world';
}

Football.prototype.getMember = function() {
    console.log('every team has 11 players');
};

var sportsFactory = function(name) {
    switch(name) {
        case 'NBA':
	    return new Basketball();
	case 'worldcup':
	    return new Football();
    }
}


var football_exp = sportsFactory('worldcup');
football_exp.getMember();
