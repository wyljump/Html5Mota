var img = new Image();
var img2 = new Image();
var pimg = new Image();
img2.src = 'sucai/1.png';
img.src = 'sucai/n1.png';
pimg.src = 'sucai/2.png';
/*
* -2  向下楼梯       -1  向上楼梯      0  地板     1 墙
* 2   黄门       3  蓝门       4 红门
* ky  黄钥匙     kb  蓝钥匙    kr 红钥匙
* */
var item = [
    -1, 0, 'ky', e01, e02, e01, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    'rb', 0, e04, 2, 0, 1, 'rb', 'ky', 'rb', 1, 0,
    'ky', e04, 'rs', 1, 0, 1, 'rb', 'ky', 'rb', 1, 0,
    1, 2, 1, 1, 0, 1, 1, 1, e05, 1, 0,
    'ky', e06, 0, 1, 0, 2, e07, e01, e03, 1, 0,
    'bs', 0, 'kb', 1, 0, 1, 1, 1, 1, 1, 0,
    1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, e06, 0, 1, 1, 0, 1, 1, 1, 2, 1,
    'rb', 'bb', 'ky', 1, 0, 0, 0, 1, 'ky', e09, 'kb',
    'rb', 'sw1', 'ky', 1, 0, 'player', 0, 1, 'ky', 'ky', 'ky'
];
var item03 = [
    'sw1', e02, 'ky', 1, 's1', 's2', 's3', 1, 1, 1, 1,
    e02, 'ky', 0, 1, 0, 0, 0, 1, 0, e03, 0,
    'ky', e04, 0, 1, 1, 2, 1, 1, 0, 1, 0,
    1, 2, 1, 1, 0, e04, 0, 1, 'ky', 1, e02,
    0, 0, 0, 1, 1, 1, 0, 1, 'ky', 1, e03,
    e01, 1, 0, e03, e02, e03, 0, 1, 'ky', 1, e03,
    e01, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 0,
    1, 1, 1, 1, e03, 1, e02, 0, e02, 1, 0,
    1, 0, 0, 0, 0, 1, 'bs', e03, 'ky', 1, 0,
    -2, 'player', 1, 1, 1, 1, 'rs', 'bb', 'ky', 1, -1
];
var item04 = [
    0, e05, 0, 1, 'kb', 'ex', 'kb', 1, 0, e05, 0,
    2, 1, 2, 1, 'ky', 'kr', 'ky', 1, 2, 1, 2,
    0, 1, 0, 1, 1, 2, 1, 1, 0, 1, 0,
    0, 1, e04, 1, e08, e14, e08, 1, e04, 1, 0,
    e03, 1, 'rb', 1, 'bs', e08, 'bs', 1, 'rb', 1, e03,
    e03, 1, 'rb', 1, 1, 4, 1, 1, 'rb', 1, e03,
    e02, 1, 0, 1, e09, e13, e09, 1, 0, 1, e02,
    0, 1, 0, 1, 'rs', e09, 'rs', 1, 0, 1, 0,
    0, 1, 0, 1, 1, 3, 1, 1, 0, 1, 0,
    0, 1, 0, 1, 'ky', 0, 'ky', 1, 0, 1, 'player',
    -1, 1, 0, e05, 0, 0, 0, e05, 0, 1, -2
];
var item05 = [
    'kbox', 1, 'rb', 1, 'bb', e07, 0, 0, e07, 'ky', 'kb',
    0, 1, 'rs', 1, e07, 0, 0, 0, 0, e07, 'ky',
    e08, 1, 0, 1, e06, 0, 1, 1, 2, 1, 1,
    0, 2, e07, 1, 'sh1', e06, 1, 0, e09, e06, 'rm',
    e08, 1, 0, 1, 1, 1, 1, 0, 0, 0, e06,
    'rs', 1, 0, 0, 0, e03, e04, 0, 0, 0, 0,
    'bs', 1, 1, e05, 1, 1, 1, 1, 0, 0, 0,
    0, 'bm', 1, e05, 1, 0, 0, 0, e09, e13, 0,
    1, 1, 1, e03, 1, 2, 1, 3, 1, 2, 1,
    0, 0, 1, 0, 1, e03, 1, 'bs', 2, 0, 1,
    -2, 'player', e03, 0, 0, 0, 1, 'ky', 1, -1, 1
];
var item06 = [
    0, e10, 1, 'bs', 1, 'ky', e16, 0, 1, 'bb', 'bb',
    e10, 'ky', 1, 'rs', 1, 0, 'ky', e16, 1, e11, 'bb',
    'ky', e14, 3, 0, 3, e14, 0, 'ky', 1, 0, e11,
    0, 0, 1, e13, 1, 0, 0, 0, 1, e19, 0,
    1, 1, 1, 4, 1, 1, 1, 1, 1, 2, 1,
    0, 0, e15, 0, 'ky', 'ky', 'ky', 0, e15, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 1, e08, 2, e08, 0, 0, 0, 0, 0, 1,
    0, 1, 2, 1, 2, 1, 1, 1, 1, 3, 1,
    0, 1, e08, 1, 0, 0, 1, 1, 0, 'player', 1,
    0, 0, 0, 1, -1, 0, 2, 2, 0, -2, 1
];
var item07 = [
    -1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
    1, 1, 0, e14, 1, 3, 1, e10, 0, 1, 1,
    1, 0, e14, 'bs', 1, e17, 1, 'rs', e10, 0, 1,
    0, 0, 1, 1, 1, 2, 1, 1, 1, 0, 0,
    0, 0, 3, e17, 2, 'sh2', 2, e17, 3, 0, 0,
    0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
    0, 1, 'rb', 'rs', 1, e17, 1, 'bs', 'rb', 1, 0,
    0, 1, 'ky', 'rb', 1, 3, 1, 'rb', 'ky', 1, 0,
    0, 1, 1, 'kb', 'kb', 'bb', 'kb', 'kb', 1, 1, 0,
    0, 0, 1, 1, 1, 4, 1, 1, 1, 0, 0,
    1, 0, 0, 2, -2, 'player', 0, 2, 0, 0, 1
];
var item08 = [
    -2, 1, 0, 0, 0, 0, 1, 0, 'ky', e10, 0,
    'player', 1, 0, 1, 1, 2, 1, 2, 1, 1, 0,
    0, 1, 0, 1, 0, 0, 3, 0, 0, 1, 'rs',
    0, 1, 0, 1, e12, 1, 1, 1, e08, 1, e05,
    e08, 1, 0, 1, 'rb', 1, -1, 0, 0, 1, e05,
    e14, 1, 'bs', 1, 'rb', 1, 1, 1, 1, 1, 0,
    e08, 1, e05, 1, 0, 0, 0, 1, 0, e14, 0,
    0, 1, e05, 1, 1, 1, e13, 1, 2, 1, 1,
    0, 1, 0, e10, 0, 1, e10, 1, 0, 0, 0,
    0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 0,
    0, 0, e12, 0, 0, 1, 0, e16, e17, e16, 0
];
var item09 = [
    0, 'ky', 0, 1, 1, 1, 0, 0, 0, 1, 0,
    'ky', 0, e20, 2, 0, 0, 0, 1, 0, 2, e10,
    1, 2, 1, 1, 0, 1, 1, 1, 0, 1, 'ky',
    0, 0, 0, 1, 0, 1, 'player', 0, 0, 1, 'ky',
    0, 0, 0, 4, 0, 1, -2, 1, 0, 1, 'rb',
    1, 3, 1, 1, 0, 1, 1, 1, 0, 1, 1,
    'bs', e19, 'rs', 1, e12, 1, -1, 1, 0, 1, 'rb',
    1, 2, 1, 1, 0, 0, 0, 2, 0, 1, 'ky',
    e10, 'rb', e10, 1, 1, 3, 1, 1, 0, 1, 'ky',
    'kb', e10, 'rb', 1, e11, e12, e11, 1, 0, 2, e10,
    'sw1', 'kb', e10, 2, 'bb', e11, 'bb', 1, 0, 1, 0
];
var item10 = [
    0, 1, 1, 'bs', e20, 1, e20, 'rs', 1, 1, 0,
    0, 0, 1, 1, 2, 1, 2, 1, 1, 0, e19,
    0, 0, 0, 0, 0, 1, 0, 0, 0, e19, 'bb',
    0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1,
    e08, 1, 0, 0, 'ky', 'ky', 'ky', 0, 0, 1, 'ky',
    e14, 1, 0, 1, 1, 1, 1, 2, 1, 1, 'ky',
    e08, 1, 0, 'player', -2, 1, 0, e11, e14, 0,0,
    1, 1, 1, 1, 1, 1, 2, 1, 1, 0,1,
    1, 'rb', 'bs', 'rs', 1, 0, e14, 0, 1, 'ky',1,
    1, 'rb', 'bs', 'rs', 4, e12, 1, e12, 1, 'ky',-1,
    1, 'rb', 'bs', 'rs', 1, 'kb', 1, 'kb', 1, 'rb', 'rb'
];
var item11 = [
    'rb', 1, 'ky', 1, 'kb', 1, 'kr', 1, 'bb', 'sh2', 'bb',
    'rb', 1, 'ky', 1, 'kb', 1, 'kr', 1, e13, e22, e13,
    'rb', 1, 'ky', 1, 'kb', 1, 'kr', 1, 0, e13, 0,
    2, 1, 2, 1, 2, 1, 2, 1, 1, 3, 1,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
    2, 1, 1, 3, 1, 1, 1, 3, 1, 1, 2,
    'bs', 1, 0, e13, 'bb', e23, 'bb', e13, 0, 1, 'rs',
    'bs', 1, e20, 1, 1, 1, 1, 1, e20, 1, 'rs',
    'bs', 1, e20, 1, 's1', 's2', 's3', 1, e20, 1, 'rs',
    1, 1, 4, 1, 'rb', 0, 'rb', 1, 4, 1, 1,
    -2, 'player', 0, 0, 0, 0, 0, 0, 0, 0, -1
];
var item12 = [
    'ns', 'bs', 1, 0, e18, e25, e18, 0, 1, 'bb', 'ns',
    'rs', 0, 1, 0, 1, 2, 1, 0, 1, 0, 'bb',
    0, 0, 1, 0, 1, e25, 1, 0, 1, 0, 0,
    0, e23, 1, 0, 1, 'ky', 1, 0, 1, e27, 0,
    e23, e24, 1, 0, 1, 'ky', 1, 0, 1, e26, e27,
    1, 3, 1, 0, 1, 'rb', 1, 0, 1, 3, 1,
    0, 0, 0, 0, 1, 'rb', 1, 0, 0, 0, 0,
    1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1,
    'bs', e23, 2, e21, e21, e22, e21, e21, 2, e23, 'rs',
    1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1,
    -1, 0, 0, 0, 0, 0, 0, 0, 0, 'player', -2
];
var item13 = [
    0, e23, 0, 0, 0, 0, 0, 1, 0, e24, 0,
    0, 1, 1, 1, 1, 1, 2, 1, 0, 1, 0,
    0, 1, 0, 0, e21, 0, 0, 1, 0, 1, 0,
    'bb', 1, 4, 1, 1, 1, 0, 1, 0, 1, 0,
    e18, 1, 0, 0, e24, 1, e21, 1, 'rs', 1, 0,
    e25, 1, 0, e28, 2, 1, e22, 1, 'rs', 1, 0,
    e18, 1, e24, 2, 'ns', 1, e21, 1, 'rs', 0, 'bs',
    0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 'bs',
    0, e18, 0, 1, 0, 0, 0, e24, 0, 1, 'bs',
    1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0,
    -2, 'player', 0, 0, 0, -1, 1, 'sh2', e28, 2, 0
];
var item14 = [
    1, 0, e27, 'ex', -1, 0, 0, 0, 0, 0, 1,
    1, 0, 'bb', 1, 1, 1, 1, 1, 'bb', 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 'ex', 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 2, 1, 1, 1, 0, 1,
    1, 0, 'rb', 1, 1, e24, 1, 1, 'rb', 0, 1,
    1, 0, 8, 8, 1, e28, 1, 8, 8, 0, 1,
    1, 0, 8, 8, 1, e24, 1, 8, 8, 0, 1,
    1, 0, 8, 8, 1, 3, 1, 8, 8, 0, 1,
    1, e21, e22, e21, 3, 'player', 3, e21, e22, e21, 1,
    1, 1, 1, 1, 1, -2, 1, 1, 1, 1, 1
];
var item15 = [
    0, 0, 0, 'player', -2, 8, -1, 0, 0, 0, 0,
    0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0,
    0, 8, 8, 1, 1, 1, 1, 1, 8, 8, 0,
    0, 8, 1, 1, 'ex', 1, 'ex', 1, 1, 8, 0,
    0, 8, 1, 1, 'bs', 1, 'bs', 1, 1, 8, 0,
    0, 8, 1, 1, 'rs', 1, 'rs', 1, 1, 8, 0,
    0, 8, 8, 1, 0, 1, 0, 1, 8, 8, 0,
    0, 8, 8, 1, 2, 1, 2, 1, 8, 8, 0,
    0, 8, 8, 8, 0, e23, 0, 8, 8, 8, 0,
    0, 8, 8, 8, 8, 4, 8, 8, 8, 8, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
var item16 = [
    8, 8, 8, 8, 8, 'player', -2, 8, 8, 8, 8,
    8, 8, 8, 8, 8, 0, 8, 8, 8, 8, 8,
    8, 8, 8, 8, 8, 0, 8, 8, 8, 8, 8,
    8, 8, 8, 8, 1, 4, 1, 8, 8, 8, 8,
    8, 8, 8, 1, 'ex', e29, 1, 1, 8, 8, 8,
    8, 8, 8, 1, 1, e30, 1, 1, 8, 8, 8,
    8, 8, 8, 1, 1, 0, 1, 1, 8, 8, 8,
    8, 8, 8, 1, 1, 1, 1, 1, 8, 8, 8,
    8, 8, 8, 8, 1, 1, 1, 8, 8, 8, 8,
    8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
    8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8
];
/*
var item17 = [
  8,e27,e28,
];*/
/*地图draw规则*/
var immortalObject = [1, 8, 's1', 's2', 's3','bm','rm'];

function Map(num) {
    var _this = this;
    this.map;
    this.num = num;
    this.len = 11;
    this.flag = 0;
    this.positionX;
    this.positionY;
    this.imgsx = img.width / 30;//开始裁剪的x坐标位置
    this.imgsy = img.height / 30;//开始裁剪的y坐标位置
    this.imgcutw = img.width / 30;//被剪切的宽度
    this.imgcuth = img.height / 30;//被剪切的高度
    this.imgwidth = img.width / 30;//要使用的图像宽度
    this.imgheight = img.height / 30;//要使用的图像高度
    var i = 1;
    var j = 3;
    var k = 5;
    var l = 7;
    var p = 9;
    var o = 11;
    var o2 = 13;
    var o3 = 15;
    var mm = 1;
    var my = 25;
    var sw = 24;
    this.drawmap = function () {
        switch (_this.num) {
            case 1: {
                this.map = item;
            }
                break;
            case  2: {
                this.map = item03;
            }
                break;
            case  3: {
                this.map = item04;
            }
                break;
            case 4: {
                this.map = item05;
            }
                break;
            case 5: {
                this.map = item06;
            }
                break;
            case 6: {
                this.map = item07;
            }
                break;
            case 7: {
                this.map = item08;
            }
                break;
            case 8: {
                this.map = item09;
            }
                break;
            case 9: {
                this.map = item10;
            }
                break;
            case 10: {
                this.map = item11;
            }
                break;
            case 11: {
                this.map = item12;
            }
                break;
            case 12: {
                this.map = item13;
            }
                break;
            case 13: {
                this.map = item14;
            }
                break;
            case 14: {
                this.map = item15;
            }
                break;
            case 15: {
                this.map = item16;
            }
                break;
        }
        _this.map.forEach(function (t, index) {
            var col = index % len;//列
            var row = parseInt(index / len);//行
            if (t === 0) {
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 1) {
                ctx.drawImage(img, img.width / 30 * 4, img.height / 30 * 15, _this.imgcutw - 2, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 2) {//黄门
                ctx.drawImage(img, img.width / 30 * 3, img.height / 30 * 20, _this.imgcutw - 0.2, _this.imgcuth - 0.2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 3) {//蓝门
                ctx.drawImage(img, img.width / 30 * 2, img.height / 30 * 20, _this.imgcutw - 0.2, _this.imgcuth - 0.2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 4) {//红门
                ctx.drawImage(img, img.width / 30, img.height / 30 * 20, _this.imgcutw - 0.2, _this.imgcuth - 0.2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 8) {//星空
                ctx.drawImage(img2, img.width / 30 * mm + 0.3, img.height / 30 * 16 + 0.3, _this.imgcutw - 1, _this.imgcuth - 1, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 9) {//代替格子
                ctx.drawImage(img2, img.width / 30 * 14, img.height / 30 * 11 + 3, _this.imgcutw - 0.2, _this.imgcuth - 0.2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === -1) {//上楼梯
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 18, img.height / 30 * 20, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === -2) {//下楼梯
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 18, img.height / 30 * 19, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'ky') {
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 7, img.height / 30 * 20, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'kb') {
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 6, img.height / 30 * 20, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'kr') {
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 5, img.height / 30 * 20, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'kr') {
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 5, img.height / 30 * 20, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'rb') {//"红血瓶"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 10, img.height / 30 * 22, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'bb') {//"蓝血瓶"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 11, img.height / 30 * 22, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'rs') {//"红宝石"  redstone
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 15, img.height / 30 * 22, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'bs') {//"蓝宝石"  bluestone
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 16, img.height / 30 * 22, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'ns') {//"附加的宝石"  newstone
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 19, img.height / 30 * 22, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 's1') {//"商店左"  shop1
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 3, img.height / 30 * 25, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 's2') {//"商店中"  shop2
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 4, img.height / 30 * 25, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 's3') {//"商店右"  shop3
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 5, img.height / 30 * 25, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'bm') {//"蓝色人物"  blueman
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 25, img.height / 30 * my, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'rm') {//"红色人物"  redman
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 27, img.height / 30 * my, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'sw1') {//"铁剑" sword1
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 10, img.height / 30 * sw, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'kbox') {//"钥匙盒" sword1
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 9, img.height / 30 * 20, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'sh1') {//"盾1" shield
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 15, img.height / 30 * sw, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'sh2') {//"盾2" shield
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 16, img.height / 30 * sw, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'ex') {//"ex" shield
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 12, img.height / 30 * 14, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === 'player') {
                ctx.beginPath();
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(pimg, 0, 0, pimg.width, pimg.height / 2, img.width / 30 * col * 2, img.height / 30 * row * 2, pimg.width / 1.5, pimg.height / 3);
            }
            if (t === e01) {//"绿头怪"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 23, _this.imgsy * i, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e02) {//"红头怪"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2, _this.imgcuth - 1.5, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 20, _this.imgsy * i, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e03) {//"小蝙蝠"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 28, _this.imgsy * i, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e04) {//"骷髅人"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 27, _this.imgsy * j, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e05) {//"青头怪"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 26, _this.imgsy * i, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e06) {//"骷髅士兵"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 21, _this.imgsy * k, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e07) {//"初级法师"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 27, _this.imgsy * l, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e08) {//"大蝙蝠"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 29, _this.imgsy * i, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e09) {//"兽面人"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 26, _this.imgsy * k, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e10) {//"骷髅队长"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 28, _this.imgsy * j, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e11) {//"石头怪人"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 22, _this.imgsy * l, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e12) {//"麻衣法师"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 23, _this.imgsy * p, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e13) {//"初级卫兵"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 27, _this.imgsy * o, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e14) {//"红蝙蝠"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 20, _this.imgsy * j, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e15) {//"高级法师"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 26, _this.imgsy * l, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e16) {//"怪王"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 27, _this.imgsy * i, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e17) {//"白衣武士"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 28, _this.imgsy * p, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e18) {//"金武士"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 23, _this.imgsy * o3, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e19) {//"红衣法师"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 20, _this.imgsy * p, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e20) {//"兽面武士"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 29, _this.imgsy * k, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e21) {//"冥卫兵"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 25, _this.imgsy * o, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e22) {//"高级卫兵"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 28, _this.imgsy * o, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e23) {//"双手剑士"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 29, _this.imgsy * o2, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e24) {//"冥战士"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 23, _this.imgsy * o2, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e25) {//"金队长"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 20, _this.imgsy * o3, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e26) {//"灵法师"  ----
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 25, _this.imgsy * p, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e27) {//"灵武士"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 25, _this.imgsy * o3, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e28) {//"冥队长"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 23, _this.imgsy * k, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e29) {//"影子战士"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 24, _this.imgsy * l, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
            if (t === e30) {//"红衣魔王"
                ctx.drawImage(img, 0, 0, _this.imgcutw - 2.5, _this.imgcuth - 2, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
                ctx.drawImage(img, img.width / 30 * 26, _this.imgsy * o3, _this.imgcutw, _this.imgcuth, img.width / 30 * col * 2, img.height / 30 * row * 2, _this.imgwidth * 2, _this.imgheight * 2);
            }
        })
    };
    this.updatePos = function () {
        if (_this.flag < 1) {
            _this.flag++;
            i--;
            j--;
            k--;
            l--;
            p--;
            o--;
            o2--;
            o3--;
            mm--;
            my--;
            sw--;
            //_this.imgsy -= img.height / 30;
        }
        else if (_this.flag === 1) {
            //_this.imgsy += img.height / 30;
            i++;
            j++;
            k++;
            l++;
            p++;
            o++;
            o2++;
            o3++;
            mm++;
            my++;
            sw++;
            _this.flag = 0;
        }
        //console.log(_this.imgsy)
    };
    var len = 11;
    //var tindex = 0;
    //var tx,ty; // <0 >=len <0 >= h tindex = ty*len+tx;
    this.prebattle = function () {
        _this.map.forEach(function (temp) {
            //console.log(game.people.hp)
            /*if(temp.def>=game.people.atk){
                temp.pre = '???';
            }
            else{
                temp.pre = Math.floor(temp.hp/(game.people.atk-temp.def))*(temp.atk-game.people.def);
                console.log(temp.hp)
            }*/
        })
    };
    /*键盘按键规则*/
    document.onkeydown = function (e) {
        var login = true;
        var login2 = true;
        _this.map.forEach(function (t, index, arr) {
            var col = index % len;//列
            var row = parseInt(index / len);//行
            if (e.keyCode == 37 && t == 'player' && col > 0) {
                if (immortalObject.indexOf(arr[index - 1]) == -1) {
                    if (arr[index - 1] == '-1') {
                        _this.num++;

                        _this.drawmap();
                        state();
                    }//判断向上楼梯
                    else if (arr[index - 1] == '-2') {
                        _this.num--;

                        _this.drawmap();
                        state();
                    }//判断向下楼梯
                    else if (typeof (arr[index - 1]) == typeof(e01)) {
                        _this.etype = arr[index - 1];
                        if (arr[index - 1].def >= game.people.atk) {
                            arr[index - 1].pre = '???';
                        }
                        else {
                            var getdamage = arr[index - 1].atk - game.people.def;
                            if(getdamage<0){
                                getdamage =0;
                            }
                            arr[index - 1].pre = Math.floor(arr[index - 1].hp / (game.people.atk - arr[index - 1].def)) * getdamage;
                        }
                        if (arr[index - 1].pre < game.people.hp) {
                            game.people.hp -= arr[index - 1].pre;
                            game.people.coin += arr[index - 1].coin;
                            game.people.exp += arr[index - 1].exp;
                            state();
                            var newindex = index - 1;
                            arr[newindex] = t;
                            arr[index] = 0;
                            //ctx.clearRect(0,0,cvs.width,cvs.height);
                            _this.drawmap();
                            tindex = newindex;
                        }
                    }//判断怪物
                    else if (arr[index - 1] == 2) {
                        if (game.people.keyyellow > 0) {
                            game.people.keyyellow--;
                            state();
                            var newindex = index - 1;
                            arr[newindex] = t;
                            arr[index] = 0;
                            tindex = newindex;
                        }
                    }//黄门判断
                    else if (arr[index - 1] == 3) {
                        if (game.people.keyblue > 0) {
                            game.people.keyblue--;
                            state();
                            var newindex = index - 1;
                            arr[newindex] = t;
                            arr[index] = 0;
                            tindex = newindex;
                        }
                    }//蓝门判断
                    else if (arr[index - 1] == 4) {
                        if (game.people.keyred > 0) {
                            game.people.keyred--;
                            state();
                            var newindex = index - 1;
                            arr[newindex] = t;
                            arr[index] = 0;
                            tindex = newindex;
                        }
                    }//红门判断
                    else if (arr[index - 1] == 'ky') {
                        game.people.keyyellow++;
                        state();
                        var newindex = index - 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        tindex = newindex;
                    }//黄钥匙判断
                    else if (arr[index - 1] == 'kb') {
                        game.people.keyblue++;
                        state();
                        var newindex = index - 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        tindex = newindex;
                    }//蓝钥匙判断
                    else if (arr[index - 1] == 'kr') {
                        game.people.keyred++;
                        state();
                        var newindex = index - 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        tindex = newindex;
                    }//红钥匙判断
                    else if (arr[index - 1] == 'rb') {
                        game.people.hp += 200;
                        state();
                        var newindex = index - 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        tindex = newindex;
                    }//红血瓶判断
                    else if (arr[index - 1] == 'bb') {
                        game.people.hp += 500;
                        state();
                        var newindex = index - 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        tindex = newindex;
                    }//红血瓶判断
                    else if (arr[index - 1] == 'rs') {
                        game.people.atk += 3;
                        state();
                        var newindex = index - 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        tindex = newindex;
                    }//红宝石判断
                    else if (arr[index - 1] == 'bs') {
                        game.people.def += 3;
                        state();
                        var newindex = index - 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        tindex = newindex;
                    }//蓝宝石判断
                    else if (arr[index - 1] == 'ns') {
                        game.people.atk += 20;
                        game.people.def += 20;
                        state();
                        var newindex = index - 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        tindex = newindex;
                    }//附加宝石判断
                    else if (arr[index - 1] == 'sw1') {
                        game.people.atk += 10;
                        state();
                        var newindex = index - 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        tindex = newindex;
                    }//铁剑判断
                    else if (arr[index - 1] == 'sh1') {
                        game.people.def += 10;
                        state();
                        var newindex = index - 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        tindex = newindex;
                    }//铁盾判断
                    else if (arr[index - 1] == 'sh2') {
                        game.people.def += 100;
                        state();
                        var newindex = index - 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        tindex = newindex;
                    }//银盾判断
                    else if (arr[index - 1] == 'ex') {
                        game.people.hp +=2000;
                        game.people.atk += 50;
                        game.people.def += 50;
                        game.people.coin += 200;
                        state();
                        var newindex = index - 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        tindex = newindex;
                    }//ex判断
                    else {
                        var newindex = index - 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        //ctx.clearRect(0,0,cvs.width,cvs.height);
                        _this.drawmap();
                        tindex = newindex;
                    }//地板
                }
            }
            if (e.keyCode == 38 && t == 'player' && row > 0) {
                if (arr[index - 11] == '-1') {
                    _this.num++;
                    state();
                    _this.drawmap();
                }//判断向上楼梯
                else if (arr[index - 11] == '-2') {
                    _this.num--;
                    state();
                    _this.drawmap();
                }//判断向下楼梯
                else if (typeof (arr[index - 11]) == typeof(e01)) {
                    if (arr[index - 11].def >= game.people.atk) {
                        arr[index - 11].pre = '???';
                    }
                    else {
                        var getdamage = (arr[index - 11].atk - game.people.def);
                        if(getdamage<=0){
                            getdamage = 0;
                        }
                        arr[index - 11].pre = Math.floor(arr[index - 11].hp / (game.people.atk - arr[index - 11].def)) * getdamage;
                    }
                    if (arr[index - 11].pre < game.people.hp) {
                        game.people.hp -= arr[index - 11].pre;
                        game.people.coin += arr[index - 11].coin;
                        game.people.exp += arr[index - 11].exp;
                        state();
                        var newindex = index - 11;
                        arr[newindex] = t;
                        arr[index] = 0;
                        //ctx.clearRect(0,0,cvs.width,cvs.height);
                        _this.drawmap();
                        tindex = newindex;
                    }
                }//判断怪物
                else if (arr[index - 11] == 2) {
                    if (game.people.keyyellow > 0) {
                        game.people.keyyellow--;
                        state();
                        arr[index - 11] = t;
                        arr[index] = 0;
                        ctx.clearRect(0, 0, cvs.width, cvs.height);
                        _this.drawmap();
                    }
                }//黄门判断
                else if (arr[index - 11] == 3) {
                    if (game.people.keyblue > 0) {
                        game.people.keyblue--;
                        state();
                        arr[index - 11] = t;
                        arr[index] = 0;
                        ctx.clearRect(0, 0, cvs.width, cvs.height);
                        _this.drawmap();
                    }
                }//蓝门判断
                else if (arr[index - 11] == 4) {
                    if (game.people.keyred > 0) {
                        game.people.keyred--;
                        state();
                        arr[index - 11] = t;
                        arr[index] = 0;
                        ctx.clearRect(0, 0, cvs.width, cvs.height);
                        _this.drawmap();
                    }
                }//红门判断
                else if (immortalObject.indexOf(arr[index - 11]) == -1) {
                    if (arr[index - 11] == 'ky') {
                        game.people.keyyellow++;
                        state();
                    }//黄钥匙判断
                    if (arr[index - 11] == 'kb') {
                        game.people.keyblue++;
                        state();
                    }//蓝钥匙判断
                    if (arr[index - 11] == 'kr') {
                        game.people.keyred++;
                        state();
                    }//红钥匙判断
                    if (arr[index - 11] == 'rb') {
                        game.people.hp += 200;
                        state();
                    }//红血瓶判断
                    if (arr[index - 11] == 'bb') {
                        game.people.hp += 500;
                        state();
                    }//蓝血瓶判断
                    if (arr[index - 11] == 'rs') {
                        game.people.atk += 3;
                        state();
                    }//红宝石判断
                    if (arr[index - 11] == 'bs') {
                        game.people.def += 3;
                        state();
                    }//蓝宝石判断
                    if (arr[index - 11] == 'ns') {
                        game.people.atk += 20;
                        game.people.def += 20;
                        state();
                    }//附加宝石判断
                    if (arr[index - 11] == 'sw1') {
                        game.people.atk += 10;
                        state();
                    }//铁剑判断
                    if (arr[index - 11] == 'sh2') {
                        game.people.def += 100;
                        state();
                    }//银盾判断
                    if (arr[index - 11] == 'kbox') {
                        game.people.keyyellow++;
                        game.people.keyred++;
                        game.people.keyblue++;
                        state();
                    }//钥匙盒判断
                    if (arr[index - 11] == 'ex') {
                        game.people.hp +=2000;
                        game.people.atk += 50;
                        game.people.def += 50;
                        game.people.coin += 200;
                        state();
                    }//ex判断
                    arr[index - 11] = t;
                    arr[index] = 0;
                    ctx.clearRect(0, 0, cvs.width, cvs.height);
                    _this.drawmap();
                }
                if (arr[index - 11] == 's1' || arr[index - 11] == 's2' || arr[index - 11] == 's3') {
                    if (_this.num == 2) {
                        shopbox.style.display = 'block';
                    }
                    if (_this.num == 10) {
                        shopbox2.style.display = 'block';
                        //alert("第十层商店")
                    }
                }
                if(arr[index-11]=='rm'){
                    rmbox1.style.display = 'block';
                }
            }
            if (e.keyCode == 39 && t == 'player' && col < 10) {
                if (login2) {
                    if (arr[index + 1] == '-1') {
                        _this.num++;
                        state();
                        _this.drawmap();
                    }//判断向上楼梯
                    else if (arr[index + 1] == '-2') {
                        _this.num--;
                        state();
                        _this.drawmap();
                    }//判断向下楼梯
                    else if (typeof (arr[index + 1]) == typeof(e01)) {
                        if (arr[index + 1].def >= game.people.atk) {
                            arr[index + 1].pre = '???';
                        }
                        else {
                            var getdamage = (arr[index + 1].atk - game.people.def);
                            if(getdamage<=0){
                                getdamage = 0;
                            }
                            arr[index + 1].pre = Math.floor(arr[index + 1].hp / (game.people.atk - arr[index + 1].def)) * getdamage;
                        }
                        if (arr[index + 1].pre < game.people.hp) {
                            game.people.hp -= arr[index + 1].pre;
                            game.people.coin += arr[index + 1].coin;
                            game.people.exp += arr[index + 1].exp;
                            state();
                            var newindex = index + 1;
                            arr[newindex] = t;
                            arr[index] = 0;
                            //ctx.clearRect(0,0,cvs.width,cvs.height);
                            _this.drawmap();
                            login2 = false;
                            tindex = newindex;
                        }
                    }//判断怪物
                    else if (arr[index + 1] == 2) {
                        if (game.people.keyyellow > 0) {
                            game.people.keyyellow--;
                            state();
                            arr[index + 1] = t;
                            arr[index] = 0;
                            ctx.clearRect(0, 0, cvs.width, cvs.height);
                            _this.drawmap();
                            login2 = false;
                        }
                    }//黄门判断
                    else if (arr[index + 1] == 3) {
                        if (game.people.keyblue > 0) {
                            game.people.keyblue--;
                            state();
                            arr[index + 1] = t;
                            arr[index] = 0;
                            ctx.clearRect(0, 0, cvs.width, cvs.height);
                            _this.drawmap();
                            login2 = false;
                        }
                    }//蓝门判断
                    else if (arr[index + 1] == 4) {
                        if (game.people.keyred > 0) {
                            game.people.keyred--;
                            state();
                            arr[index + 1] = t;
                            arr[index] = 0;
                            ctx.clearRect(0, 0, cvs.width, cvs.height);
                            _this.drawmap();
                            login2 = false;
                        }
                    }//红门判断
                    else if (immortalObject.indexOf(arr[index + 1]) == -1) {
                        if (arr[index + 1] == 'ky') {
                            game.people.keyyellow++;
                            state();
                        }//黄钥匙判断
                        if (arr[index + 1] == 'kb') {
                            game.people.keyblue++;
                            state();
                        }//蓝钥匙判断
                        if (arr[index + 1] == 'kr') {
                            game.people.keyred++;
                            state();
                        }//红钥匙判断
                        if (arr[index + 1] == 'rb') {
                            game.people.hp += 200;
                            state();
                        }//红血瓶判断
                        if (arr[index + 1] == 'bb') {
                            game.people.hp += 500;
                            state();
                        }//蓝血瓶判断
                        if (arr[index + 1] == 'rs') {
                            game.people.atk += 3;
                            state();
                        }//红宝石判断
                        if (arr[index + 1] == 'bs') {
                            game.people.def += 3;
                            state();
                        }//蓝宝石判断
                        if (arr[index + 1] == 'ns') {
                            game.people.atk += 20;
                            game.people.def += 20;
                            state();
                        }//附加宝石判断
                        if (arr[index + 1] == 'sh2') {
                            game.people.def += 100;
                            state();
                        }//银盾判断
                        if (arr[index + 1] == 'ex') {
                            game.people.hp +=2000;
                            game.people.atk += 50;
                            game.people.def += 50;
                            game.people.coin += 200;
                            state();
                        }//ex判断
                        var newindex = index + 1;
                        arr[newindex] = t;
                        arr[index] = 0;
                        ctx.clearRect(0, 0, cvs.width, cvs.height);
                        _this.drawmap();
                        login2 = false;
                    }
                    if(arr[index+1]=='bm'){
                        bmbox1.style.display = 'block';
                    }
                    if(arr[index+1]=='rm'){
                        rmbox1.style.display = 'block';
                    }
                }
            }
            if (e.keyCode == 40 && t == 'player' && row < 10) {
                if (login2) {
                    if (arr[index + 11] == '-1') {
                        _this.num++;
                        state();
                        _this.drawmap();
                    }//判断向上楼梯
                    else if (arr[index + 11] == '-2') {
                        _this.num--;
                        state();
                        _this.drawmap();
                    }//判断向下楼梯
                    else if (typeof (arr[index + 11]) == typeof(e01)) {
                        if (arr[index + 11].def >= game.people.atk) {
                            arr[index + 11].pre = '???';
                        }
                        else {
                            var getdamage = (arr[index + 11].atk - game.people.def);
                            if(getdamage<=0){
                                getdamage = 0;
                            }
                            arr[index + 11].pre = Math.floor(arr[index + 11].hp / (game.people.atk - arr[index + 11].def)) * getdamage;
                        }
                        if (arr[index + 11].pre < game.people.hp) {
                            game.people.hp -= arr[index + 11].pre;
                            game.people.coin += arr[index + 11].coin;
                            game.people.exp += arr[index + 11].exp;
                            state();
                            var newindex = index + 11;
                            arr[newindex] = t;
                            arr[index] = 0;
                            //ctx.clearRect(0,0,cvs.width,cvs.height);
                            _this.drawmap();
                            login2 = false;
                            tindex = newindex;
                        }
                    }//判断怪物
                    else if (arr[index + 11] == 2) {
                        if (game.people.keyyellow > 0) {
                            game.people.keyyellow--;
                            state();
                            arr[index + 11] = t;
                            arr[index] = 0;
                            ctx.clearRect(0, 0, cvs.width, cvs.height);
                            login2 = false;
                            _this.drawmap();
                        }
                    }//黄门判断
                    else if (arr[index + 11] == 3) {
                        if (game.people.keyblue > 0) {
                            game.people.keyblue--;
                            state();
                            arr[index + 11] = t;
                            arr[index] = 0;
                            ctx.clearRect(0, 0, cvs.width, cvs.height);
                            _this.drawmap();
                            login2 = false;
                        }
                    }//蓝门判断
                    else if (arr[index + 11] == 4) {
                        if (game.people.keyred > 0) {
                            game.people.keyred--;
                            state();
                            arr[index + 11] = t;
                            arr[index] = 0;
                            ctx.clearRect(0, 0, cvs.width, cvs.height);
                            _this.drawmap();
                            login2 = false;
                        }
                    }//红门判断
                    else if (immortalObject.indexOf(arr[index + 11]) == -1) {
                        if (arr[index + 11] == 'ky') {
                            game.people.keyyellow++;
                            state();
                        }//黄钥匙判断
                        if (arr[index + 11] == 'kb') {
                            game.people.keyblue++;
                            state();
                        }//蓝钥匙判断
                        if (arr[index + 11] == 'kr') {
                            game.people.keyred++;
                            state();
                        }//红钥匙判断
                        if (arr[index + 11] == 'rb') {
                            game.people.hp += 200;
                            state();
                        }//红血瓶判断
                        if (arr[index + 11] == 'bb') {
                            game.people.hp += 500;
                            state();
                        }//蓝血瓶判断
                        if (arr[index + 11] == 'rs') {
                            game.people.atk += 3;
                            state();
                        }//红宝石判断
                        if (arr[index + 11] == 'bs') {
                            game.people.def += 3;
                            state();
                        }//蓝宝石判断
                        if (arr[index + 11] == 'sh1') {
                            game.people.def += 10;
                            state();
                        }//铁盾判断
                        if (arr[index + 11] == 'sh2') {
                            game.people.def += 100;
                            state();
                        }//银盾判断
                        var newindex = index + 11;
                        arr[newindex] = t;
                        arr[index] = 0;
                        ctx.clearRect(0, 0, cvs.width, cvs.height);
                        _this.drawmap();
                        login2 = false;
                    }
                }
                if(_this.num == 15&&arr[60] == 'player'){
                    clearInterval(game.timer);
                    document.onkeydown = null;
                }
            }
        });
    };
    cvs.onclick = function (ev) {
        var clickrow = 0;
        var clickcol = 0;
        var clickindex = 0;
        _this.positionX = ev.pageX - cvs.offsetLeft - 20;
        _this.positionY = ev.pageY - cvs.offsetTop - 20;
        clickrow = parseInt((_this.positionY) / (cvs.height) / (1 / 11));  //鼠标点击位置所在的行
        clickcol = parseInt((_this.positionX) / (cvs.width) / (1 / 11));   //鼠标点击位置所在的列
        clickindex = clickrow * 11 + clickcol;//点击位置所在数组中的位置
        if (_this.map[clickindex].def >= game.people.atk) {
            _this.map[clickindex].pre = "???";
        }
        else {
            var getdamage = (_this.map[clickindex].atk - game.people.def);
            if(getdamage<=0){
                getdamage = 0;
            }
            _this.map[clickindex].pre = Math.floor(_this.map[clickindex].hp / (game.people.atk - _this.map[clickindex].def)) * getdamage;
        }
        //console.log(_this.map[clickindex]);
        if (typeof (_this.map[clickindex]) === typeof(e01)) {
            enemyname.innerHTML = "怪物种类:" + _this.map[clickindex].name;
            enemyhp.innerHTML = "HP:" + _this.map[clickindex].hp;
            enemyatk.innerHTML = "攻击力:" + _this.map[clickindex].atk;
            enemydef.innerHTML = "防御力:" + _this.map[clickindex].def;
            enemypre.innerHTML = "预计损伤:" + _this.map[clickindex].pre;
        }

        //console.log(_this.positionX , _this.positionY );
        //console.log("第"+clickrow+"行","第"+clickcol+"列");
        //console.log("数组中的第"+clickindex+"个元素")
        //console.log(cvs.getBoundingClientRect().left);
    }
}