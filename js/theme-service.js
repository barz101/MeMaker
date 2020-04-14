'use strict'

var gTheme = 'regular';




function getThemeSearchWords(theme) {
    var words;
    switch (theme) {
        case 'regular':
            words = gRegularKeywords;
            break;
        case 'disney':
            words = gDisneyKeywords;
            break;
        case 'harrypotter':
            words = gHarryPotterKeywords;
            break;
    }
    return words
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

function getThemeimgs(theme) {
    var imgs;
    switch (theme) {
        case 'regular':
            imgs = gRegularImgs;
            break;
        case 'disney':
            imgs = gDisneyImgs
            break;
        case 'harrypotter':
            imgs = gHarryPotterImgs
            break;
    }
    return imgs
}

function getCurrTheme() {
    console.log(gTheme);
    return gTheme;
}

function getThemeData() {
    return gThemeDesign;
}

var gThemeDesign = [
    { element: '.main-header', class: 'background' },
    { element: 'footer', class: 'background' },
    { element: '.browse', class: 'maincolor' },
    { element: '.edit-btn', class: 'maincolor' },
    { element: '.word', class: 'secondrycolor' },
    { element: 'input', class: 'secondrycolor' },
    { element: 'select', class: 'dropdown' },
    { element: '.stickers', class: 'thirdcolor' },
    { element: '.theme-font', class: 'logo' }
];

var gRegularImgs = [
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
    { id: 14, url: 'regular/14.jpg', keywords: ['woman'] },
    { id: 15, url: 'regular/15.jpg', keywords: ['men'] },
    { id: 16, url: 'regular/16.jpg', keywords: ['men', 'funny'] },
    { id: 17, url: 'regular/17.jpg', keywords: ['men'] },
    { id: 18, url: 'regular/18.jpg', keywords: ['toy story', 'disney'] },

];

var gDisneyImgs = [
    { id: 1, url: 'disney/1.jpg', keywords: ['moana', 'woman'] },
    { id: 2, url: 'disney/2.jpg', keywords: ['frozen', 'anna','woman'] },
    { id: 3, url: 'disney/3.jpg', keywords: ['toy story', 'woody'] },
    { id: 4, url: 'disney/4.jpg', keywords: ['hades', 'hercules','men'] },
    { id: 5, url: 'disney/5.jpg', keywords: ['sulley', 'monsters inc'] },
    { id: 6, url: 'disney/6.jpg', keywords: ['pocahontas','woman'] },
    { id: 7, url: 'disney/7.jpg', keywords: ['toy story', 'woody'] },
    { id: 8, url: 'disney/8.jpg', keywords: ['incredibles', 'elastigirl','woman'] },
    { id: 9, url: 'disney/9.jpg', keywords: ['incredibles', 'mr incredible','men'] },
    { id: 10, url: 'disney/10.jpg', keywords: ['incredibles', 'edna','woman'] },
    { id: 11, url: 'disney/11.jpg', keywords: ['lion king', 'simba'] },
    { id: 12, url: 'disney/12.jpg', keywords: ['mulan', 'mushu'] },
    { id: 13, url: 'disney/13.jpg', keywords: ['lion king', 'simba'] },
    { id: 14, url: 'disney/14.jpg', keywords: ['aladdin', 'jafar','men'] },
    { id: 15, url: 'disney/15.jpg', keywords: ['hercules', 'megara','woman'] },
    { id: 16, url: 'disney/16.jpg', keywords: ['anna', 'fozen','woman'] },
    { id: 17, url: 'disney/17.jpg', keywords: ['mulan', 'lee shang','men'] },
    { id: 18, url: 'disney/18.jpg', keywords: ['hercules', 'megara','woman'] },
    { id: 19, url: 'disney/19.jpg', keywords: ['mulan','woman'] },
    { id: 20, url: 'disney/20.jpg', keywords: ['little mermaid', 'ursula'] },
    { id: 21, url: 'disney/21.jpg', keywords: ['hecules','men'] },
    { id: 22, url: 'disney/22.jpg', keywords: ['stitch'] },
    { id: 23, url: 'disney/23.jpg', keywords: ['frozen'] },
    { id: 24, url: 'disney/24.jpg', keywords: ['hecules', 'hades','men'] },
    { id: 25, url: 'disney/25.jpg', keywords: ['pocahontas', 'dog'] },
    { id: 26, url: 'disney/26.jpg', keywords: ['mulan', 'mushu'] },
    { id: 27, url: 'disney/27.jpg', keywords: ['aladdin','men'] },
    { id: 28, url: 'disney/28.jpg', keywords: ['hercules'] },

];

var gHarryPotterImgs = [
    { id: 1, url: 'harrypotter/1.jpg', keywords: ['hermione', 'harry', 'ron'] },
    { id: 2, url: 'harrypotter/2.jpg', keywords: ['ron', 'snape', 'harry','men'] },
    { id: 3, url: 'harrypotter/3.jpg', keywords: ['harry','men'] },
    { id: 4, url: 'harrypotter/4.jpg', keywords: ['frustrated', 'hermione'] },
    { id: 5, url: 'harrypotter/5.jpg', keywords: ['frightened', 'ron','men'] },
    { id: 6, url: 'harrypotter/6.jpg', keywords: ['voldemort','men'] },
    { id: 7, url: 'harrypotter/7.jpg', keywords: ['potion', 'cauldron', 'hermione'] },
    { id: 8, url: 'harrypotter/8.jpg', keywords: ['happy', 'clapping', 'ron','men'] },
    { id: 9, url: 'harrypotter/9.jpg', keywords: ['professor', 'mcGonagall', 'woman'] },
    { id: 10, url: 'harrypotter/10.jpg', keywords: ['hagrid','men'] },
    { id: 11, url: 'harrypotter/11.jpg', keywords: ['bellatrix', 'woman'] },
    { id: 12, url: 'harrypotter/12.jpg', keywords: ['harry', 'voldemort', 'men'] },
    { id: 13, url: 'harrypotter/13.jpg', keywords: ['dobby'] },
    { id: 14, url: 'harrypotter/14.jpg', keywords: ['harry','men'] },
    { id: 15, url: 'harrypotter/15.jpg', keywords: ['harry',,'men'] },
    { id: 16, url: 'harrypotter/16.jpg', keywords: ['harry', 'hermione', 'worried'] },
    { id: 17, url: 'harrypotter/17.jpg', keywords: ['albus', 'dumbledore','professor','men'] },
    { id: 18, url: 'harrypotter/18.jpg', keywords: ['sybill', 'trelawney','professor','woman'] },
];

var gRegularKeywords = [
    `<span class="small-word word" onclick="onClickWord('trump')" name="trump">trump</span>
    <span class="big-word word" onclick="onClickWord('funny')" name="funny">Funny</span>
    <span class="small-word word" onclick="onClickWord('men')" name="men">men</span>
    <span class="mid-word word" onclick="onClickWord('woman')" name="woman">woman</span>
    <span class="big-word word" onclick="onClickWord('baby')" name="baby">Baby</span>
    <span class="small-word word" onclick="onClickWord('puppy')" name="puppy">puppy</span>`
]
var gDisneyKeywords= [
    `<span class="small-word word" onclick="onClickWord('hercules')" name="hercules">hercules</span>
    <span class="big-word word" onclick="onClickWord('moana')" name="moana">Moana</span>
    <span class="small-word word" onclick="onClickWord('men')" name="men">men</span>
    <span class="mid-word word" onclick="onClickWord('woman')" name="woman">woman</span>
    <span class="big-word word" onclick="onClickWord('frozen')" name="frozen">Frozen</span>
    <span class="small-word word" onclick="onClickWord('simba')" name="simba">simba</span>`
]

var gHarryPotterKeywords = [
    `<span class="small-word word" onclick="onClickWord('hermione')" name="hermione">hermione</span>
    <span class="big-word word" onclick="onClickWord('funny')" name="funny">Harry</span>
    <span class="small-word word" onclick="onClickWord('men')" name="men">men</span>
    <span class="mid-word word" onclick="onClickWord('woman')" name="woman">woman</span>
    <span class="big-word word" onclick="onClickWord('professor')" name="professor">Professor</span>
    <span class="small-word word" onclick="onClickWord('ron')" name="ron">ron</span>`
]