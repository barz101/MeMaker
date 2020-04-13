'use strict'

var gCanvas;
var gCtx;
const KEY = 'memes';
var gTheme = 'regular';
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

function setNewTheme(theme) {
    gTheme = theme;
}

function setThemeImgs() {
    switch (gTheme) {
        case 'regular':
            gImgs = gRegularImgs;
            break;
        case 'disney':
            gImgs = gDisneyImgs
            break;
        case 'harrypotter':
            gImgs = gHarryPotterImgs
            break;
    }
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

var gRegularImgs =
    [
        { id: 1, url: 'regular/1.jpg', keywords: ['trump', 'men'] },
        { id: 2, url: 'regular/2.jpg', keywords: ['puppy'] },
        { id: 3, url: 'regular/3.jpg', keywords: ['baby', 'puppy'] },
        { id: 4, url: 'regular/4.jpg', keywords: ['cat'] },
        { id: 5, url: 'regular/5.jpg', keywords: ['baby'] },
        { id: 6, url: 'regular/6.jpg', keywords: ['men'] },
        { id: 7, url: 'regular/7.jpg', keywords: ['baby'] },
        { id: 8, url: 'regular/8.jpg', keywords: ['willy wonka', 'men'] },
        { id: 9, url: 'regular/9.jpg', keywords: ['baby', 'funny'] },
        { id: 10, url: 'regular/10.jpg', keywords: ['obama', 'men', 'funny'] },
        { id: 11, url: 'regular/11.jpg', keywords: ['men'] },
        { id: 12, url: 'regular/12.jpg', keywords: ['men'] },
        { id: 13, url: 'regular/13.jpg', keywords: ['men'] },
        { id: 14, url: 'regular/14.jpg', keywords: ['men'] },
        { id: 15, url: 'regular/15.jpg', keywords: ['men'] },
        { id: 16, url: 'regular/16.jpg', keywords: ['men', 'funny'] },
        { id: 17, url: 'regular/17.jpg', keywords: ['men'] },
        { id: 18, url: 'regular/18.jpg', keywords: ['toy story', 'disney'] },

    ];

var gDisneyImgs = [
    { id: 1, url: 'disney/1.jpg', keywords: ['moana', 'women'] },
    { id: 2, url: 'disney/2.jpg', keywords: ['frozen', 'anna'] },
    { id: 3, url: 'disney/3.jpg', keywords: ['toy story', 'woody'] },
    { id: 4, url: 'disney/4.jpg', keywords: ['hades', 'hecules'] },
    { id: 5, url: 'disney/5.jpg', keywords: ['sulley', 'monsters inc'] },
    { id: 6, url: 'disney/6.jpg', keywords: ['pocahontas'] },
    { id: 7, url: 'disney/7.jpg', keywords: ['toy story', 'woody'] },
    { id: 8, url: 'disney/8.jpg', keywords: ['incredibles', 'elastigirl'] },
    { id: 9, url: 'disney/9.jpg', keywords: ['incredibles', 'mr incredible'] },
    { id: 10, url: 'disney/10.jpg', keywords: ['incredibles', 'edna'] },
    { id: 11, url: 'disney/11.jpg', keywords: ['lion king', 'simba'] },
    { id: 12, url: 'disney/12.jpg', keywords: ['mulan', 'mushu'] },
    { id: 13, url: 'disney/13.jpg', keywords: ['lion king', 'simba'] },
    { id: 14, url: 'disney/14.jpg', keywords: ['aladdin', 'jafar'] },
    { id: 15, url: 'disney/15.jpg', keywords: ['hercules', 'megara'] },
    { id: 16, url: 'disney/16.jpg', keywords: ['anna', 'fozen'] },
    { id: 17, url: 'disney/17.jpg', keywords: ['mulan', 'lee shang'] },
    { id: 18, url: 'disney/18.jpg', keywords: ['hercules', 'megara'] },
    { id: 19, url: 'disney/19.jpg', keywords: ['mulan'] },
    { id: 20, url: 'disney/20.jpg', keywords: ['little mermaid', 'ursula'] },
    { id: 21, url: 'disney/21.jpg', keywords: ['hecules'] },
    { id: 22, url: 'disney/22.jpg', keywords: ['stitch'] },
    { id: 23, url: 'disney/23.jpg', keywords: ['frozen'] },
    { id: 24, url: 'disney/24.jpg', keywords: ['hecules', 'hades'] },
    { id: 25, url: 'disney/25.jpg', keywords: ['pocahontas', 'dog'] },
    { id: 26, url: 'disney/26.jpg', keywords: ['mulan', 'mushu'] },
    { id: 27, url: 'disney/27.jpg', keywords: ['aladdin'] },
    { id: 28, url: 'disney/28.jpg', keywords: ['hercules'] },

];

var gHarryPotterImgs =
    [
        { id: 1, url: 'harrypotter/1.jpg', keywords: [''] },
        { id: 2, url: 'harrypotter/2.jpg', keywords: [''] },
        { id: 3, url: 'harrypotter/3.jpg', keywords: [''] },
        { id: 4, url: 'harrypotter/4.jpg', keywords: [''] },
        { id: 5, url: 'harrypotter/5.jpg', keywords: [''] },
        { id: 6, url: 'harrypotter/6.jpg', keywords: [''] },
        { id: 7, url: 'harrypotter/7.jpg', keywords: [''] },
        { id: 8, url: 'harrypotter/8.jpg', keywords: [''] },
        { id: 9, url: 'harrypotter/9.jpg', keywords: [''] },
        { id: 10, url: 'harrypotter/10.jpg', keywords: [''] },
        { id: 11, url: 'harrypotter/11.jpg', keywords: [''] },
        { id: 12, url: 'harrypotter/12.jpg', keywords: [''] },
        { id: 13, url: 'harrypotter/13.jpg', keywords: [''] },
        { id: 14, url: 'harrypotter/14.jpg', keywords: [''] },
        { id: 15, url: 'harrypotter/15.jpg', keywords: [''] },
        { id: 16, url: 'harrypotter/16.jpg', keywords: [''] },
        { id: 17, url: 'harrypotter/17.jpg', keywords: [''] },
        { id: 18, url: 'harrypotter/18.jpg', keywords: [''] },


    ];
