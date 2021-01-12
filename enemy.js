/*
function Base(name,id,hp,atk,def,coin,exp){
    this.name = name;
    this.id = id;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.coin = coin;
    this.exp = exp;
}

function E01() {
    Base.call(this);
}*/
function Playerdate () {
    this.name ='???';
    this.level=1;
    this.id=0;
    this.hp=1000;
    this.atk=10;
    this.def=10;
    this.coin=0;
    this.exp=0;
    this.keyyellow=2;
    this.keyblue=1;
    this.keyred=1;
}
var e01={
        name:"绿头怪",
        id:1,
        hp:50,
        atk:20,
        def:1,
        coin:1,
        exp:1,
        pre:'???'
    };
var e02 = {
    name:"红头怪",
    id:2,
    hp:70,
    atk:15,
    def:2,
    coin:2,
    exp:2,
    pre:'???'
};
var e03 = {
    name:"小蝙蝠",
    id:3,
    hp:100,
    atk:20,
    def:5,
    coin:3,
    exp:3,
    pre:0
};
var e04 = {
    name:"骷髅人",
    id:4,
    hp:110,
    atk:25,
    def:5,
    coin:5,
    exp:4
};
var e05 = {
    name:"青头怪",
    id:5,
    hp:200,
    atk:35,
    def:10,
    coin:5,
    exp:5
};
var e06 = {
    name:"骷髅士兵",
    id:6,
    hp:150,
    atk:40,
    def:20,
    coin:8,
    exp:6
};
var e07 = {
    name:"初级法师",
    id:7,
    hp:125,
    atk:50,
    def:25,
    coin:10,
    exp:7
};
var e08 = {
    name:"大蝙蝠",
    id:8,
    hp:150,
    atk:65,
    def:30,
    coin:10,
    exp:8
};
var e09 = {
    name:"兽面人",
    id:9,
    hp:300,
    atk:75,
    def:45,
    coin:13,
    exp:10
};
var e10 = {
    name:"骷髅队长",
    id:10,
    hp:400,
    atk:90,
    def:50,
    coin:15,
    exp:12
};
var e11 = {
    name:"石头怪人",
    id:11,
    hp:500,
    atk:115,
    def:65,
    coin:15,
    exp:15
};
var e12 = {
    name:"麻衣法师",
    id:12,
    hp:250,
    atk:120,
    def:70,
    coin:20,
    exp:17
    //附加伤害100
};
var e13 = {
    name:"初级卫兵",
    id:13,
    hp:450,
    atk:150,
    def:90,
    coin:22,
    exp:19
};
var e14 = {
    name:"红蝙蝠",
    id:14,
    hp:550,
    atk:160,
    def:90,
    coin:25,
    exp:20
};
var e15 = {
    name:"高级法师",
    id:15,
    hp:100,
    atk:200,
    def:110,
    coin:30,
    exp:25
};
var e16 = {
    name:"怪王",
    id:16,
    hp:700,
    atk:250,
    def:125,
    coin:32,
    exp:30
};
var e17 = {
    name:"白衣武士",
    id:17,
    hp:1300,
    atk:300,
    def:150,
    coin:40,
    exp:35
    //附加伤害 生命四分之一
};
var e18 = {
    name:"金武士",
    id:18,
    hp:1300,
    atk:300,
    def:150,
    coin:40,
    exp:35
};
var e19 = {
    name:"红衣法师",
    id:11,
    hp:500,
    atk:400,
    def:260,
    coin:47,
    exp:45
    //附加伤害300
};
var e20 = {
    name:"兽面武士",
    id:20,
    hp:900,
    atk:450,
    def:330,
    coin:50,
    exp:50
};
var e21 = {
    name:"冥卫兵",
    id:21,
    hp:1250,
    atk:500,
    def:400,
    coin:55,
    exp:55
};
var e22 = {
    name:"高级卫兵",
    id:22,
    hp:1500,
    atk:560,
    def:460,
    coin:60,
    exp:60
};
var e23 = {
    name:"双手剑士",
    id:23,
    hp:1200,
    atk:620,
    def:520,
    coin:65,
    exp:75
};
var e24 = {
    name:"冥战士",
    id:24,
    hp:2000,
    atk:680,
    def:590,
    coin:70,
    exp:65
};
var e25 = {
    name:"金队长",
    id:25,
    hp:900,
    atk:750,
    def:650,
    coin:77,
    exp:70
};
var e26 = {
    name:"灵法师",
    id:26,
    hp:1500,
    atk:830,
    def:730,
    coin:80,
    exp:70
};
var e27 = {
    name:"灵武士",
    id:27,
    hp:1200,
    atk:980,
    def:900,
    coin:88,
    exp:75
};
var e28 = {
    name:"冥队长",
    id:28,
    hp:2500,
    atk:900,
    def:850,
    coin:84,
    exp:75
};
var e29 = {
    name:"影子战士",
    id:29,
    hp:8000,
    atk:1500,
    def:1200,
    coin:92,
    exp:80
};
var e30 = {
    name:"红衣魔王",
    id:30,
    hp:20000,
    atk:1400,
    def:1300,
    coin:100,
    exp:100
};







