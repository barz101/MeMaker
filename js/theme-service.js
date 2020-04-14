'use strict'

var gTheme = 'regular';

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

var gHarryPotterImgs = [
    { id: 1, url: 'harrypotter/1.jpg', keywords: ['Hermione', 'Harry', 'Ron'] },
    { id: 2, url: 'harrypotter/2.jpg', keywords: ['Ron', 'Snape', 'Harry'] },
    { id: 3, url: 'harrypotter/3.jpg', keywords: ['Surprised', 'Harry'] },
    { id: 4, url: 'harrypotter/4.jpg', keywords: ['Frustrated', 'Hermione'] },
    { id: 5, url: 'harrypotter/5.jpg', keywords: ['Frightened', 'Ron', 'Howler'] },
    { id: 6, url: 'harrypotter/6.jpg', keywords: ['Voldemort'] },
    { id: 7, url: 'harrypotter/7.jpg', keywords: ['Bathroom', 'Potion', 'Cauldron', 'Hermione'] },
    { id: 8, url: 'harrypotter/8.jpg', keywords: ['Happy', 'Clapping', 'Ron'] },
    { id: 9, url: 'harrypotter/9.jpg', keywords: ['Wand', 'Professor', 'McGonagall'] },
    { id: 10, url: 'harrypotter/10.jpg', keywords: ['Pleased', 'Hagrid'] },
    { id: 11, url: 'harrypotter/11.jpg', keywords: ['Wand', 'Chewing', 'Bellatrix'] },
    { id: 12, url: 'harrypotter/12.jpg', keywords: ['Harry', 'Voldemort', 'Face', 'Smoosh'] },
    { id: 13, url: 'harrypotter/13.jpg', keywords: ['Dobby'] },
    { id: 14, url: 'harrypotter/14.jpg', keywords: ['Harry', 'Wand', 'Floor'] },
    { id: 15, url: 'harrypotter/15.jpg', keywords: ['Harry', 'Scar', 'Smiling'] },
    { id: 16, url: 'harrypotter/16.jpg', keywords: ['Harry', 'Hermione', 'Worried'] },
    { id: 17, url: 'harrypotter/17.jpg', keywords: ['Albus', 'Dumbledore'] },
    { id: 18, url: 'harrypotter/18.jpg', keywords: ['Sybill', 'Trelawney'] },
];
