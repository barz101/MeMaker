'use strict'

function onInit() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    setCanvas(canvas, ctx);
    setThemeImgs();
    renderImgs();
    // window.addEventListener('resize', () => { 
    //     gCanvas.width = window.innerWidth
    //     gCanvas.height = window.innerHeight
    // })
}


function onClickImg(img) {
    var imgId = img;
    toggleModals();
    resizeCanvas();
    setMemeImg(imgId);
    setInitSetting();
    drawImg();
    drawText();
}

function onClickGallery() {
    renderImgs();
    document.querySelector('.image-editor').classList.add('hidden');
    document.querySelector('.meme-gallery').classList.add('hidden');
    document.querySelector('.image-gallery').classList.remove('hidden');
}

function onSearch(keyword) {
    var searchWord = keyword.toLowerCase();
    var imgs = getImgsByKeyword(searchWord);
    if (!imgs.length) return;
    renderSelectedImgs(imgs)
}

function onClickWord(keyword) {
    onSearch(keyword);
}

// function onClickMore() {
//     console.log('ask for more word options');
//     // set keywords from gKeyword
// }

function onAddText() {
    var text = document.querySelector('.add-text').value;
    setMemeText(text);
    clearCurrStyle();
    drawImg();
    drawText();
}

function onMoveLine(direction) {
    var currPosition = getMemePosition();
    var x = currPosition[0];
    var y = currPosition[1];
    if (direction === 'up') y -= 10;
    else y += 10;
    setNewPosition(x, y);
    clearCurrStyle();
    drawImg();
    drawText();
}

function onDeleteText() {
    clearCurrStyle();
    drawImg();
    drawText();
}

function onPickChange(el) {
    var styleType = el.name;
    var newStyle = el.value;
    setNewStyle(styleType, newStyle);
    clearCurrStyle();
    drawImg();
    drawText(top)
}

function onPickSticker(stickerId) {
    drawSticker(stickerId)
}

function onPickTheme(ev) {
    var theme = ev.value
    setNewTheme(theme);
    setThemeImgs();
    renderImgs();
}

function onSave() {
    // bring saved meme from storage
    // if no length set new one if not push to array
    var data = [];
    data = getMemeData();
    saveToStorage('imgdata', data)
}

function onDownload(elLink) {
    var data = getMemeData();
    downloadCanvas(elLink, data);
}

function onImgInput(ev) {
    loadImageFromInput(ev, onAddImg)
}

function onAddImg(img) {
    addImage(img);
    toggleModals();
}

function onShare(elForm, ev) {
    uploadImg(elForm, ev);
}

function onClickMemes() {
    console.log('Memes tab clicked');
    document.querySelector('.image-editor').classList.add('hidden');
    document.querySelector('.image-gallery').classList.add('hidden');
    document.querySelector('.meme-gallery').classList.remove('hidden');
    renderMeme();
}

function onMouseDown(ev) {
    setMouseClicked(true);
    var offsetY = ev.offsetY
    var spotY = offsetY;
    var match = checkClickedSpot(spotY);
    console.log(match);
    if (match === 'no match') return;
    setCurrLine(match);
    // function to draw it is selected
}

function onMouseUp() {
    setMouseClicked(false);
}

function onMouseMove(ev) {
    var isMatch = checkisMatch();
    if (isMatch) {
        var x = ev.offsetX
        var y = ev.offsetY
        setNewPosition(x, y);
        clearCurrStyle();
        drawImg();
        drawText();
    }
}
function toggleModals() {
    document.querySelector('.image-gallery').classList.toggle('hidden');
    document.querySelector('.image-editor').classList.toggle('hidden');
}
function toggleMenu() {
    document.body.classList.toggle('menu-open')
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('is-active');
}

function renderImgs(img) {
    var imgs = getImgs();
    if (img) imgs.pop(img);
    var strHTMLs = imgs.map(getImgHTML);
    var elImgContainer = document.querySelector('.image-container');
    elImgContainer.innerHTML = strHTMLs.join('');
}
function renderSelectedImgs(imgs) {
    var strHTMLs = imgs.map(getImgHTML);
    var elImgContainer = document.querySelector('.image-container');
    elImgContainer.innerHTML = strHTMLs.join('');
}

function renderMeme() {
    var meme = getMeme();
    var memeHTML = getMemeHTML(meme);
    var elMemeContainer = document.querySelector('.meme-gallery-img');
    elMemeContainer.innerHTML = memeHTML;
}

function getImgHTML(img) {
    var imgHTML = `<img onclick="onClickImg(this.dataset.img)"data-img=${img.id} src="./img/${img.url}">`;
    return imgHTML;
}
function getMeme() {
    var meme = loadFromStorage('imgdata');
    return meme;
}

function getMemeHTML(meme) {
    var memeHTML = `<img src="${meme}">`;
    return memeHTML;
}
