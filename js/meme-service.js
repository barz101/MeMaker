'use strict'

var gCanvas;
var gCtx;
const KEY = 'memes';

var gImgs = [];
var gIsMouseClicked = false;
var gSticker = {
    id: 1,
    position: [100, 100]
}
var gMeme = {
    selectedImgId: 1, selectedLineIdx: 0,

    lines: [
        {
            txt: 'Enter Text',
            fontSize: 60,
            align: 'center',
            fontColor: 'black',
            strokeColor: 'white',
            fontFamily: 'IMPACT',
            position: [250, 200]
        },
        {
            txt: 'Enter Text',
            fontSize: 60,
            align: 'center',
            fontColor: 'black',
            strokeColor: 'white',
            fontFamily: 'IMPACT',
            position: [250, 400]
        }
    ]
}

function setCanvas(canvas, ctx) {
    gCanvas = canvas;
    gCtx = ctx;
}

function setMemeImg(imgId) {
    gMeme.selectedImgId = imgId;
}

function setMemeText(txt) {
    var currIdx = gMeme.selectedLineIdx
    gMeme["lines"][currIdx].txt = txt;
}

function setInitSetting() {
    gMeme["lines"][0].position = [gCanvas.width / 2, gCanvas.height / 8];
    gMeme["lines"][1].position = [gCanvas.width / 2, gCanvas.height / 1.07];
    gMeme["lines"][0].fontSize = gCanvas.width / 10
    gMeme["lines"][1].fontSize = gCanvas.width / 10
}

function setNewStyle(styleType, newStyle) {
    var currIdx = gMeme.selectedLineIdx
    switch (styleType) {
        case 'fontSize':
            if (newStyle === 'bigger') gMeme["lines"][currIdx].fontSize += 10;
            else (gMeme["lines"][currIdx].fontSize -= 10);
            break;
        case 'fontFamily':
            gMeme["lines"][currIdx].fontFamily = newStyle;
            break;
        case 'fontColor':
            gMeme["lines"][currIdx].fontColor = newStyle;

            break;

        case 'strokeColor':
            gMeme["lines"][currIdx].strokeColor = newStyle;

            break;
        case 'align':
            gMeme["lines"][currIdx].align = newStyle;

            break;
    }
}

function setMouseClicked(boolean) {
    gIsMouseClicked = boolean;
}

function setCurrLine(match) {
    var currLine = gMeme.selectedLineIdx
    gMeme.selectedLineIdx = match
    if (!currLine === match) {
        var elInput = document.querySelector('.add-text');
        elInput.placeholder = 'Enter Your Text';
        elInput.value = '';
    }
}

function checkisMatch() {
    return gIsMouseClicked;
}

function checkClickedSpot(y) {
    var firstLine = gMeme.lines[0].position;
    var secondLine = gMeme.lines[1].position;
    if (y > (firstLine[1] - (gCanvas.height / 6)) &&
        y < (firstLine[1] + (gCanvas.height / 15))) {
        return 0
    }
    if (y > (secondLine[1] - (gCanvas.height / 6)) &&
        y < (secondLine[1] + (gCanvas.height / 15))) {
        return 1
    }

    else return 'no match';
}

function setNewPosition(x, y) {
    var currIdx = gMeme.selectedLineIdx
    gMeme["lines"][currIdx].position = [x, y];
}

function setGImgs(imgs) {
    gImgs = imgs;
}

function getImgs() {
    var imgs = gImgs.slice();
    return imgs;
}

function getMemePosition() {
    var currIdx = gMeme.selectedLineIdx;
    var memePosition = gMeme["lines"][currIdx].position;
    return memePosition;
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth;
    gCanvas.height = elContainer.offsetHeight;
}

function drawImg() {
    var imgId = gMeme.selectedImgId;
    var img = new Image();
    img.src = `./img/${gTheme}/${imgId}.jpg`;
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}

function addImage(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}

function drawText() {
    gMeme.lines.forEach((line) => {
        var x = line.position[0];
        var y = line.position[1];
        var txt = line.txt;
        var strStyle = line.fontSize + 'px' + ' ' + line.fontFamily;
        gCtx.font = strStyle;
        gCtx.strokeStyle = line.strokeColor;
        gCtx.fillStyle = line.fontColor;
        gCtx.textAlign = line.align;
        gCtx.fillText(txt, x, y);
        gCtx.strokeText(txt, x, y);
    })
}
function strokeActiveLine() {
    var currline = gMeme.selectedLineIdx
    var linePosition = gMeme.lines[currline].position;
    gCtx.beginPath()
    gCtx.strokeStyle = '#ffffff';
    gCtx.lineWidth = 1
    gCtx.rect(10, linePosition[1] - 70, gCanvas.width - 50, gCanvas.height / 6);
    gCtx.stroke();
}

function drawSticker(stickerId) {
    var sticker = new Image();
    sticker.src = `./stickers/${stickerId}.png`;
    gCtx.drawImage(sticker, gCanvas.width / 2.1, gCanvas.height / 3, gCanvas.width / 8, gCanvas.height / 8);
}

function clearCurrStyle() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function saveMemesToStorage() {
    var memes = loadFromStorage(KEY);
    if (!memes.length) memes = [];
    memes.push(gMeme);
    saveToStorage(KEY, memes);
}

function getMemeData() {
    var data = gCanvas.toDataURL();
    return data;
}

function getImgsByKeyword(searchWord) {
    var imgs = gImgs.filter(img => {
        var result = img.keywords.some(keyword => keyword === searchWord);
        if (result) return img;
    })
    return imgs;
}
