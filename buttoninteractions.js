function createHerd(nbSheep){
    for (let i = 0; i < nbSheep - 2; i++) {
        herds[i] = createSprite(random(width, 3 * width), random(height - 155, height - 156), 1, 1);
        herds[i].addAnimation('floating', 'assets/sheep/mouton1.png', 'assets/sheep/mouton2.png', 'assets/sheep/mouton3.png', 'assets/sheep/mouton4.png', 'assets/sheep/mouton5.png', 'assets/sheep/mouton6.png', 'assets/sheep/mouton7.png', 'assets/sheep/mouton8.png', 'assets/sheep/mouton9.png');
    }
    herds[nbSheep - 2] = createSprite(random(width , 2 * width), random(height - 140, height - 150), 1, 1);
        herds[nbSheep - 2].addAnimation('floating', 'assets/sheep_pink/mouton1.png', 'assets/sheep_pink/mouton2.png', 'assets/sheep_pink/mouton3.png', 'assets/sheep_pink/mouton4.png', 'assets/sheep_pink/mouton5.png', 'assets/sheep_pink/mouton6.png', 'assets/sheep_pink/mouton7.png', 'assets/sheep_pink/mouton8.png', 'assets/sheep_pink/mouton9.png');

    herds[nbSheep - 1] = createSprite(random(width, 2 * width), random(height - 140, height - 150), 1, 1);
        herds[nbSheep - 1].addAnimation('floating', 'assets/sheep_black/mouton1.png', 'assets/sheep_black/mouton2.png', 'assets/sheep_black/mouton3.png', 'assets/sheep_black/mouton4.png', 'assets/sheep_black/mouton5.png', 'assets/sheep_black/mouton6.png', 'assets/sheep_black/mouton7.png', 'assets/sheep_black/mouton8.png', 'assets/sheep_black/mouton9.png');
}

function tenSheep() {
    nbSheep = 10;
    createHerd(nbSheep);
    if(weather == 0) {
        deletedSheeps = probaGeometric(r, pg, 10);
    }
    if(weather == 1) {
        if(pluiefaible) {
        deletedSheeps = probaPoisson(plambda10pf, r, 10);
        }
        if(pluieforte) {
        deletedSheeps = probaBinomiale(r, ppf, 10);
        }
    }
    if(weather == 2) {
        if(neigefaible) {
        deletedSheeps = probaPoisson(nlambda10pf, r, 10);
        }
        if(neigeforte) {
        deletedSheeps = probaBinomiale(r, npf, 10);
        }
    }
    probaPorteRose(deletedSheeps, r);
    probaPorteNoir(deletedSheeps, r);
    print("The randomweather is : " + r1);
    print("The random is : " + r);
    print("deletedSheeps/nbSheep " + deletedSheeps/nbSheep);
    print("deletedSheeps : " + deletedSheeps);
    print("Pink door : " + pinkDoor);
    print("Black door : " + blackDoor);
    loop = 4;
}
  
function fifteenSheep() {
    nbSheep = 15;
    createHerd(nbSheep);
    if(weather == 0) {
        deletedSheeps = probaGeometric(r, pg, 15);
    }
    if(weather == 1) {
        if(pluiefaible) {
        deletedSheeps = probaPoisson(plambda15pf, r, 15);
        }
        if(pluieforte) {
        deletedSheeps = probaBinomiale(r, ppf, 15);
        }
    }
    if(weather == 2) {
        if(neigefaible) {
        deletedSheeps = probaPoisson(nlambda15pf, r, 15);
        }
        if(neigeforte) {
        deletedSheeps = probaBinomiale(r, npf, 15);
        }
    }
    probaPorteRose(deletedSheeps, r);
    probaPorteNoir(deletedSheeps, r);
    print("The randomweather is : " + r1);
    print("The random is : " + r);
    print("deletedSheeps/nbSheep " + deletedSheeps/nbSheep);
    print("deletedSheeps : " + deletedSheeps);
    print("Pink door : " + pinkDoor);
    print("Black door : " + blackDoor);
    loop = 4;
}
  
function twentySheep() {
    nbSheep = 20;
    createHerd(nbSheep);
    if(weather == 0) {
        deletedSheeps = probaGeometric(r, pg, 20);
    }
    if(weather == 1) {
        if(pluiefaible) {
        deletedSheeps = probaPoisson(plambda20pf, r, 20);
        }
        if(pluieforte) {
        deletedSheeps = probaBinomiale(r, ppf, 20);
        }
    }
    if(weather == 2) {
        if(neigefaible) {
            deletedSheeps = probaPoisson(nlambda20pf, r, 20);
        }
        if(neigeforte) {
            deletedSheeps = probaBinomiale(r, npf, 20);
        }
    }
    probaPorteRose(deletedSheeps, r);
    probaPorteNoir(deletedSheeps, r);
    print("The randomweather is : " + r1);
    print("The random is : " + r);
    print("deletedSheeps/nbSheep " + deletedSheeps/nbSheep);
    print("deletedSheeps : " + deletedSheeps);
    print("Pink door : " + pinkDoor);
    print("Black door : " + blackDoor);
    loop = 4;
}
  
  
function changeLoop0() {loop = 0;}
function changeLoop01() {loop = 1;}

function changeLoop14() {
    createHerd(nbSheep);
    print("pluiefaible : ", pluiefaible);
    print("pluieforte : ", pluieforte);
    print("neigefaible : ", neigefaible);
    print("neigeforte : ", neigeforte);
    if(weather == 0) {
        deletedSheeps = probaGeometric(r, pg, 10);
    }
    if(weather == 1) {
        if(pluiefaible) {
        deletedSheeps = probaPoisson(plambda10pf, r, 10);
        }
        if(pluieforte) {
        deletedSheeps = probaBinomiale(r, ppf, 10);
        }
    }
    if(weather == 2) {
        if(neigefaible) {
        deletedSheeps = probaPoisson(nlambda10pf, r, 10);
        }
        if(neigeforte) {
        deletedSheeps = probaBinomiale(r, npf, 10);
        }
    }
    probaPorteRose(deletedSheeps, r);
    probaPorteNoir(deletedSheeps, r);
    print("The randomweather is : " + r1);
    print("The random is : " + r);
    print("deletedSheeps/nbSheep " + deletedSheeps/nbSheep);
    print("deletedSheeps : " + deletedSheeps);
    print("Pink door : " + pinkDoor);
    print("Black door : " + blackDoor);
    loop = 4;
}
  
function fortePluie() {
    pluieforte = true;
    pluiefaible = false;
}
  
function faiblePluie() {
    pluiefaible = true;
    pluieforte = false;
}
  
function forteNeige() {
    neigeforte = true;
    neigefaible = false;
}
  
function faibleNeige() {
    neigefaible = true;
    neigeforte = false;
}
  
function changeLoop23() {loop = 3;}

function changeLoop7() {
    if(doorclicked2 == blackDoor) {
        loop = 8;
    }
    if(doorclicked2 != undefined && doorclicked2 != blackDoor) {
        loop = 9;
    }
}
function changeLoop10() {loop = 10;}

function changeLoop34() {
    if(doorclicked1 == pinkDoor) {
        loop = 5;
    }
    if(doorclicked1 != undefined && doorclicked1 != pinkDoor) {
        loop = 6;
    }
}
  
function door() {
    print(r);
    print("Rose :", probaPorteRose(deletedSheeps, r));
    print("Noir :", probaPorteNoir(deletedSheeps, r));
}

function clickdoor1() {
    if(passage==1) {doorclicked1 = 1; loop = 7;}
    if(passage==2) {doorclicked2 = 1;loop = 2;}
    passage=2;
    //   if(pinkDoor == 1) {
    //     pinkresult = true;
    //   }
    //   else {
    //     pinkresult = false;
    //   }
}

function clickdoor2() {
    
    if(passage==1) {doorclicked1 = 2; loop = 7;}
    if(passage==2) {doorclicked2 = 2; loop = 2;}
    passage=2;
}
function clickdoor3() {
    
    if(passage==1) {doorclicked1 = 3; loop = 7;}
    if(passage==2) {doorclicked2 = 3;loop = 2;}
    passage=2;
}
function clickdoor4() {
    
    if(passage==1) {doorclicked1 = 4; loop = 7;}
    if(passage==2) {doorclicked2 = 4; loop = 2;}
    passage=2;
}
function clickdoor5() {
    
    if(passage==1) {doorclicked1 = 5; loop = 7;}
    if(passage==2) {doorclicked2 = 4; loop = 2;}
    passage=2;
}
