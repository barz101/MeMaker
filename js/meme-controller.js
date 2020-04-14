'use strict'

function onInit() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    setCanvas(canvas, ctx);
    var theme = getCurrTheme();
    var imgs = getThemeimgs(theme)
    setGImgs(imgs)
    renderImgs();
    // setInitTheme('regular');
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
    document.querySelector('.theme-holder').innerText = 'Normal'
    var theme = ev.value
    var currTheme = getCurrTheme();
    setNewTheme(theme);
    setThemeImgs();
    renderImgs();
    console.log(theme);
    var searchWords = getThemeSearchWords(theme);
    var Themesdata = getThemeData()
    document.querySelector('.words-search').innerHTML = searchWords;
    if (theme === 'disney') {
        document.querySelector('.theme-font').innerText = 'Disney'

    }
    if (theme === 'harrypotter') { document.querySelector('.theme-font').innerText = 'Harry Potter' }
    if (theme === 'regular') { document.querySelector('.theme-font').innerText = '' }
    renderTheme(theme, currTheme, Themesdata);
    // renderSearchWords(searchWords);
}

function renderTheme(newTheme, currTheme, Themesdata) {
    Themesdata.forEach(element => {
        var newClass = `${newTheme}-${element.class}`
        var currElement = element.element
        addClass(currElement, newClass)
    })
    Themesdata.forEach(element => {
        var newClass = `${currTheme}-${element.class}`
        var currElement = element.element
        removeClass(currElement, newClass)
    })
}
function addClass(element, newClass) {
    console.log(element, newClass);
    document.querySelectorAll(`${element}`).forEach(element => {
        element.classList.add(`${newClass}`);

    });
}
function removeClass(element, newClass) {
    console.log(element, newClass);
    document.querySelectorAll(`${element}`).forEach(element => {
        element.classList.remove(`${newClass}`);
    });
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
    if (match === 'no match') return;
    onPickLine(match);
}

function onPickLine(match) {
    setCurrLine(match);
    clearCurrStyle();
    drawImg();
    drawText();
    strokeActiveLine()
}

function onMouseUp(ev) {
    setMouseClicked(false);
    var x = ev.offsetX
    var y = ev.offsetY
    setNewPosition(x, y);
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
        strokeActiveLine()
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
function renderSearchWords(searchWords) {
    var elContainer = document.querySelector('.words-search');
    elContainer.innerHTML = `<span class="small-word" onclick="onClickWord('funny')" name="funny">funny</span>
   <span class="big-word" onclick="onClickWord('animal')" name="animal">ANIMAL</span>
   <span class="small-word" onclick="onClickWord('men')" name="men">men</span>
   <span class="mid-word" onclick="onClickWord('woman')" name="woman">woman</span>
   <span class="big-word" onclick="onClickWord('house')" name="house">House</span>
   <span class="more-btn" onclick="onClickMore()" class="search-more">more</span>`
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
