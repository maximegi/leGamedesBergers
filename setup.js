let herds = [];
let pink;
let black;
let clouds = [];
let loop = 1;
let img, img1, img2, img3, img4, img5, img6, im7, img8;
let sheep;
let direction = 15;
let nbSheep = 10;
let weather;
let r,r1;
let deletedSheeps = 0;
let pinkDoor, blackDoor;
let doorclicked1, doorclicked2;
let passage = 1;

let pluiefaible = true;
let pluieforte = false;
let neigefaible = true;
let neigeforte = false;

//PARAMETERS POISSON
let plambda10pf = 3;
let plambda15pf = 3 * 15/10;
let plambda20pf = 3 * 20/10;

let ppf = 0.4;
// let pp15f = 0.3;
// let pp20f = 0.4;

let nlambda10pf = 4;
let nlambda15pf = 4 * 15/10;
let nlambda20pf = 4 * 20/10;

let npf = 0.5;
// let np15f = 0.5;
// let np20f = 0.6;

// let plambda10f = 4.1;
// let plambda15f = 8.1;
// let plambda20f = 12.1;

let pg = 0.5;

// let nlambda10f = 4.1;
// let nlambda15f = 8.1;
// let nlambda20f = 12.1;

function preload() {
    img = loadImage('assets/back/backfarm.png');
    img1 = loadImage('assets/back/barr.png');
    img2 = loadImage('assets/farmer.png');
    img3 = loadImage('assets/button.png');
    img4 = loadImage('assets/texte.png');
    img5 = loadImage('assets/phrasecombienveuxtu.png');
    img6 = loadImage('assets/phraseberger.png');
    img7 = loadImage('assets/back/backetable.png');
    img8 = loadImage('assets/back/rainfarme.png');
    img9 = loadImage('assets/back/snowfarme.png');
    img10 = loadImage('assets/back/rainbacketable.png');
    img11 = loadImage('assets/back/snowbacketable.png');
    ouestrose = loadImage('assets/back/ouestrose.png');
    ouestnoir = loadImage('assets/back/ouestnoir.png');
    faiblerain = loadImage('assets/back/faiblerain.png');
    forterain = loadImage('assets/back/forterain.png');
    faiblesnow = loadImage('assets/back/faiblesnow.png');
    fortesnow = loadImage('assets/back/fortesnow.png');
    beau = loadImage('assets/back/beau.png');
    gele = loadImage('assets/back/gele.png');
    glisse = loadImage('assets/back/glisse.png');
    bravorose = loadImage('assets/back/bravorose.png');
    bravonoir = loadImage('assets/back/bravonoir.png');
    oupsrose = loadImage('assets/back/oupsrose.png');
    oupsnoir = loadImage('assets/back/oupsnoir.png');
    fin = loadImage('assets/back/fin.png');
    taillestat10 = loadImage('assets/back/taillestat10.png');
    taillestat15 = loadImage('assets/back/taillestat15.png');
    taillestat20 = loadImage('assets/back/taillestat20.png');
    glissestat = loadImage('assets/back/glissestat.png');
    perdusstat = loadImage('assets/back/perdusstat.png');
    gelestat = loadImage('assets/back/gelestat.png');
    beaustat = loadImage('assets/back/beaustat.png');
    pluiefaiblestat = loadImage('assets/back/pluiefaiblestat.png');
    pluiefortestat = loadImage('assets/back/pluiefortestat.png');
    neigefaiblestat = loadImage('assets/back/neigefaiblestat.png');
    neigefortestat = loadImage('assets/back/neigefortestat.png');
    portemoutonnoir = loadImage('assets/back/portemoutonnoir.png');
    portemoutonrose = loadImage('assets/back/portemoutonrose.png');
    nb0 = loadImage('assets/numbers/0.png');
    nb1 = loadImage('assets/numbers/1.png');
    nb2 = loadImage('assets/numbers/2.png');
    nb3 = loadImage('assets/numbers/3.png');
    nb4 = loadImage('assets/numbers/4.png');
    nb5 = loadImage('assets/numbers/5.png');
    nb6 = loadImage('assets/numbers/6.png');
    nb7 = loadImage('assets/numbers/7.png');
    nb8 = loadImage('assets/numbers/8.png');
    nb9 = loadImage('assets/numbers/9.png');
}

function setup() {
    createCanvas(800, 800);

    r = random().toPrecision(5);
    r1 = random().toPrecision(5);
    weather = probaTemps(r1);
    
    for (var i = 0; i < 10; i++) {
        clouds[i] = new Cloud(); 
    }

    jouer = createImg('assets/playbutton.png');
    jouer.position((width - 177)/2, height/2 - 50);
    jouer.mousePressed(changeLoop14);

    options = createImg('assets/optionsbutton.png');
    options.position((width - 177)/2, (height + 100)/2);
    options.mousePressed(changeLoop0);

    button10 = createImg('assets/10button.png');
    button10.position((width - 177)/2, height - 70 - 245);
    button10.mousePressed(tenSheep);

    button15 = createImg('assets/15button.png');
    button15.position((width - 177)/2, height - 245);
    button15.mousePressed(fifteenSheep);

    button20 = createImg('assets/20button.png');
    button20.position((width - 177)/2, height + 70 - 245);
    button20.mousePressed(twentySheep);

    buttonfaiblePluie = createImg('assets/faiblebutton.png');
    buttonfaiblePluie.position(width/2 - 250, height/2 -270);
    buttonfaiblePluie.mousePressed(faiblePluie);

    buttonfortePluie = createImg('assets/fortebutton.png');
    buttonfortePluie.position(width/2 + 50, height/2 -270);
    buttonfortePluie.mousePressed(fortePluie);

    buttonfaibleNeige = createImg('assets/faiblebutton.png');
    buttonfaibleNeige.position(width/2 - 250, height/2 - 100);
    buttonfaibleNeige.mousePressed(faibleNeige);

    buttonforteNeige = createImg('assets/fortebutton.png');
    buttonforteNeige.position(width/2 + 50, height/2 - 100);
    buttonforteNeige.mousePressed(forteNeige);

    returnbut = createImg('assets/returnbutton.png');
    returnbut.position(width - 110, height - 105);
    returnbut.mousePressed(changeLoop01);

    moutons = createImg('assets/sheepbutton.png');
    moutons.position((width + 160)/2, (height + 130)/2);
    moutons.mousePressed(changeLoop23);

    passer = createImg('assets/passerbutton.png');
    passer.position(width - 200, height - 80);
    passer.mousePressed(changeLoop34);

    passer2 = createImg('assets/passerbutton.png');
    passer2.position(width - 200, height - 80);
    passer2.mousePressed(changeLoop7);

    passer3 = createImg('assets/passerbutton.png');
    passer3.position(width - 200, height - 80);
    passer3.mousePressed(changeLoop10);

    door1 = createImg('assets/buttondoor1.png');
    door1.position(width/2 - 210, height/2 + 100);
    door1.mousePressed(clickdoor1);

    door2 = createImg('assets/buttondoor2.png');
    door2.position(width/2 - 100, height/2 + 100);
    door2.mousePressed(clickdoor2);

    door3 = createImg('assets/buttondoor3.png');
    door3.position(width/2 + 5, height/2 + 100);
    door3.mousePressed(clickdoor3);

    door4 = createImg('assets/buttondoor4.png');
    door4.position(width/2 + 112, height/2 + 100);
    door4.mousePressed(clickdoor4);

    door5 = createImg('assets/buttondoor5.png');
    door5.position(width/2 + 220, height/2 + 100);
    door5.mousePressed(clickdoor5);
}