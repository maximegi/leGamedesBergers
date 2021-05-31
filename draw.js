function draw() {

    background(186, 221, 224);
    
    if(weather == 0) {
        if(loop == 0) {
            returnbut.show();
            button10.show();
            button15.show();
            button20.show();
            buttonfaiblePluie.show();
            buttonfortePluie.show();
            buttonfaibleNeige.show();
            buttonforteNeige.show();
            passer2.hide();
            passer3.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            passer.hide();
            moutons.hide();
            jouer.hide();
            options.hide();
            image(img5, 0, 0, width, height);
        }
      
        if(loop == 1) {
            jouer.show();
            options.show();
            passer.hide();
            passer2.hide();
            passer3.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            moutons.hide();
            returnbut.hide();

            for (let i = 0; i < clouds.length; i++) {
                clouds[i].move();
                clouds[i].display();
        }
        }
      
        if(loop == 2) {
            moutons.show();
            passer2.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            passer3.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            //print(deletedSheeps);
            image(img, 0, 0, width, height);
            image(img2, 0, 0, width, height);
            image(img1, 0, 0, width, height);
            image(img4, 0, 0, width, height);
            image(img6, 0, 0, width, height);
        }
  
        if(loop == 3) {
            passer.show();
            passer2.hide();
            passer3.hide();
            moutons.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img, 0, 0, width, height);
            direction = 1;
            for (let i = 0; i < nbSheep; i++) {
                //when cold !
                //herds[i].setSpeed(direction,180 * sin(frameCount * 1000));
                herds[i].setSpeed(random(3, direction),random(170, 190));
                for(let j = 0; j < nbSheep; j++) {
                    herds[i].collide(herds[j]);
                }
            }
            drawSprites();
            image(img1, 0, 0, width, height);
        }

        if(loop == 4) {
            door1.show();
            door2.show();
            door3.show();
            door4.show();
            door5.show();
            moutons.hide();
            passer.hide();
            passer2.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img7, 0, 0, width, height);
            image(beau, 0, 0, width, height);
            image(ouestrose, 0, 0, width, height);
            //print(doorclicked);

        }

        if(loop == 5) {
            passer2.show();
            passer3.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img7, 0, 0, width, height);
            image(bravorose, 0, 0, width, height);
            doorclicked = undefined;
        }

        if(loop == 6) {
            passer2.show();
            passer3.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img7, 0, 0, width, height);
            image(oupsrose, 0, 0, width, height);
            doorclicked = undefined;
        }

        if(loop == 7) {
            door1.show();
            door2.show();
            door3.show();
            door4.show();
            door5.show();
            moutons.hide();
            passer.hide();
            passer2.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img7, 0, 0, width, height);
            image(beau, 0, 0, width, height);
            image(ouestnoir, 0, 0, width, height);
            print(blackDoor);
            //print(doorclicked);
        }

        if(loop == 8) {
            passer3.show();
            passer2.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img7, 0, 0, width, height);
            image(bravonoir, 0, 0, width, height);
            doorclicked = undefined;
        }

        if(loop == 9) {
            passer3.show();
            passer2.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img7, 0, 0, width, height);
            image(oupsnoir, 0, 0, width, height);
        }

        if(loop == 10) {
            passer3.hide();
            passer2.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img7, 0, 0, width, height);
            image(fin, 0, 0, width, height);
            if(nbSheep == 10) {image(taillestat10, 0, 0, width, height);}
            if(nbSheep == 15) {image(taillestat15, 0, 0, width, height);}
            if(nbSheep == 20) {image(taillestat20, 0, 0, width, height);}
            image(beaustat, 0, 0, width, height);
            image(perdusstat, 0, 0, width, height);
            image(portemoutonrose, 0, 0, width, height);
            image(portemoutonnoir, 0, 0, width, height);

            if(deletedSheeps < 10) {
                if(deletedSheeps == 0) {image(nb0, width/2 + 105, height/2 - 54.2, 53, 36);}
                if(deletedSheeps == 1) {image(nb1, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 2) {image(nb2, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 3) {image(nb3, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 4) {image(nb4, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 5) {image(nb5, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 6) {image(nb6, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 7) {image(nb7, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 8) {image(nb8, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 9) {image(nb9, width/2 + 105, height/2 - 54, 53, 36);}
            }
            
            if(deletedSheeps >= 10 && deletedSheeps < 20) {
                image(nb1, width/2 + 105, height/2 - 54, 53, 36);
                if(deletedSheeps%10 == 0) {image(nb0, width/2 + 126, height/2 - 54.2, 53, 36);}
                if(deletedSheeps%10 == 1) {image(nb1, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 2) {image(nb2, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 3) {image(nb3, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 4) {image(nb4, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 5) {image(nb5, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 6) {image(nb6, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 7) {image(nb7, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 8) {image(nb8, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 9) {image(nb9, width/2 + 126, height/2 - 54, 53, 36);}
            }

            if(deletedSheeps == 20) {
                image(nb2, width/2 + 105, height/2 - 54, 53, 36);
                image(nb0, width/2 + 130, height/2 - 54.2, 53, 36);
            }

            if(pinkDoor == 1) {image(nb1, width/2 + 190, height/2 + 18, 53, 36);}
            if(pinkDoor == 2) {image(nb2, width/2 + 190, height/2 + 18, 53, 36);}
            if(pinkDoor == 3) {image(nb3, width/2 + 190, height/2 + 18, 53, 36);}
            if(pinkDoor == 4) {image(nb4, width/2 + 190, height/2 + 18, 53, 36);}
            if(pinkDoor == 5) {image(nb5, width/2 + 190, height/2 + 18, 53, 36);}
            
            if(blackDoor == 1) {image(nb1, width/2 + 190, height/2 + 54, 53, 36);}
            if(blackDoor == 2) {image(nb2, width/2 + 190, height/2 + 54, 53, 36);}
            if(blackDoor == 3) {image(nb3, width/2 + 190, height/2 + 54, 53, 36);}
            if(blackDoor == 4) {image(nb4, width/2 + 190, height/2 + 54, 53, 36);}
            if(blackDoor == 5) {image(nb5, width/2 + 190, height/2 + 54, 53, 36);}
        }
    }
  
    if(weather == 1) {
        if(loop == 0) {
            returnbut.show();
            button10.show();
            button15.show();
            button20.show();
            buttonfaiblePluie.show();
            buttonfortePluie.show();
            buttonfaibleNeige.show();
            buttonforteNeige.show();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            passer.hide();
            passer2.hide();
            passer3.hide();
            moutons.hide();
            jouer.hide();
            options.hide();
            image(img5, 0, 0, width, height);
        }

        if(loop == 1) {
            jouer.show();
            options.show();
            passer.hide();
            passer2.hide();
            passer3.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            moutons.hide();
            returnbut.hide();
            
            for (let i = 0; i < clouds.length; i++) {
                clouds[i].move();
                clouds[i].display();
            }
        }

        if(loop == 2) {
            moutons.show();
            passer.hide();
            passer2.hide();
            passer3.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            print(deletedSheeps);
            image(img8, 0, 0, width, height);
            image(img2, 0, 0, width, height);
            image(img1, 0, 0, width, height);
            image(img4, 0, 0, width, height);
            image(img6, 0, 0, width, height);
        }

        if(loop == 3) {
            passer.show();
            passer2.hide();
            passer3.hide();
            moutons.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img8, 0, 0, width, height);
            direction = 1;
            for (let i = 0; i < nbSheep; i++) {
            //when cold !
            //herds[i].setSpeed(direction,180 * sin(frameCount * 1000));
            herds[i].setSpeed(random(3, direction),random(170, 190));
            for(let j = 0; j < nbSheep; j++) {
                herds[i].collide(herds[j]);
            }
            }
            drawSprites();
            image(img1, 0, 0, width, height);
        }

        if(loop == 4) {
            door1.show();
            door2.show();
            door3.show();
            door4.show();
            door5.show();
            moutons.hide();
            passer.hide();
            passer2.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img10, 0, 0, width, height);

            if(pluiefaible) {image(faiblerain, 0, 0, width, height);}
            if(pluieforte) {image(forterain, 0, 0, width, height);}
            
            image(ouestrose, 0, 0, width, height);
            //print(doorclicked);

        }

        if(loop == 5) {
            passer2.show();
            passer3.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img10, 0, 0, width, height);
            image(bravorose, 0, 0, width, height);
            doorclicked = undefined;
        }

        if(loop == 6) {
            passer2.show();
            passer3.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img10, 0, 0, width, height);
            image(oupsrose, 0, 0, width, height);
            doorclicked = undefined;
        }

        if(loop == 7) {
            door1.show();
            door2.show();
            door3.show();
            door4.show();
            door5.show();
            moutons.hide();
            passer.hide();
            passer2.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img10, 0, 0, width, height);
            if(pluiefaible) {image(faiblerain, 0, 0, width, height);}
            if(pluieforte) {image(forterain, 0, 0, width, height);}
            image(ouestnoir, 0, 0, width, height);
            // print(doorclicked);
            print(blackDoor);
        }

        if(loop == 8) {
            passer3.show();
            passer2.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img10, 0, 0, width, height);
            image(bravonoir, 0, 0, width, height);
            doorclicked = undefined;
        }

        if(loop == 9) {
            passer3.show();
            passer2.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img10, 0, 0, width, height);
            image(oupsnoir, 0, 0, width, height);
        }

        if(loop == 10) {
            passer3.hide();
            passer2.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img10, 0, 0, width, height);
            image(fin, 0, 0, width, height);
            if(nbSheep == 10) {image(taillestat10, 0, 0, width, height);}
            if(nbSheep == 15) {image(taillestat15, 0, 0, width, height);}
            if(nbSheep == 20) {image(taillestat20, 0, 0, width, height);}
            if(pluiefaible) {image(pluiefaiblestat, 0, 0, width, height);}
            if(pluieforte) {image(pluiefortestat, 0, 0, width, height);}
            image(glissestat, 0, 0, width, height);
            image(portemoutonrose, 0, 0, width, height);
            image(portemoutonnoir, 0, 0, width, height);
            print(deletedSheeps);

            if(deletedSheeps < 10) {
                if(deletedSheeps == 0) {image(nb0, width/2 + 105, height/2 - 54.2, 53, 36);}
                if(deletedSheeps == 1) {image(nb1, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 2) {image(nb2, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 3) {image(nb3, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 4) {image(nb4, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 5) {image(nb5, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 6) {image(nb6, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 7) {image(nb7, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 8) {image(nb8, width/2 + 105, height/2 - 54, 53, 36);}
                if(deletedSheeps == 9) {image(nb9, width/2 + 105, height/2 - 54, 53, 36);}
            }
            
            if(deletedSheeps >= 10 && deletedSheeps < 20) {
                image(nb1, width/2 + 105, height/2 - 54, 53, 36);
                if(deletedSheeps%10 == 0) {image(nb0, width/2 + 126, height/2 - 54.2, 53, 36);}
                if(deletedSheeps%10 == 1) {image(nb1, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 2) {image(nb2, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 3) {image(nb3, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 4) {image(nb4, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 5) {image(nb5, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 6) {image(nb6, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 7) {image(nb7, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 8) {image(nb8, width/2 + 126, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 9) {image(nb9, width/2 + 126, height/2 - 54, 53, 36);}
            }

            if(deletedSheeps == 20) {
                image(nb2, width/2 + 105, height/2 - 54, 53, 36);
                image(nb0, width/2 + 130, height/2 - 54.2, 53, 36);
            }

            if(pinkDoor == 1) {image(nb1, width/2 + 190, height/2 + 18, 53, 36);}
            if(pinkDoor == 2) {image(nb2, width/2 + 190, height/2 + 18, 53, 36);}
            if(pinkDoor == 3) {image(nb3, width/2 + 190, height/2 + 18, 53, 36);}
            if(pinkDoor == 4) {image(nb4, width/2 + 190, height/2 + 18, 53, 36);}
            if(pinkDoor == 5) {image(nb5, width/2 + 190, height/2 + 18, 53, 36);}
            
            if(blackDoor == 1) {image(nb1, width/2 + 190, height/2 + 54, 53, 36);}
            if(blackDoor == 2) {image(nb2, width/2 + 190, height/2 + 54, 53, 36);}
            if(blackDoor == 3) {image(nb3, width/2 + 190, height/2 + 54, 53, 36);}
            if(blackDoor == 4) {image(nb4, width/2 + 190, height/2 + 54, 53, 36);}
            if(blackDoor == 5) {image(nb5, width/2 + 190, height/2 + 54, 53, 36);}
        }
    }
  
    if(weather == 2) { 
        if(loop == 0) {
            returnbut.show();
            button10.show();
            button15.show();
            button20.show();
            buttonfaiblePluie.show();
            buttonfortePluie.show();
            buttonfaibleNeige.show();
            buttonforteNeige.show();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            passer.hide();
            passer2.hide();
            passer3.hide();
            moutons.hide();
            jouer.hide();
            options.hide();
            image(img5, 0, 0, width, height);
        }

        if(loop == 1) {
            jouer.show();
            options.show();
            passer.hide();
            passer2.hide();
            passer3.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            moutons.hide();
            returnbut.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            
            for (let i = 0; i < clouds.length; i++) {
                clouds[i].move();
                clouds[i].display();
            }
        }

        if(loop == 2) {
            moutons.show();
            passer.hide();
            passer2.hide();
            passer3.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            print(deletedSheeps);
            image(img9, 0, 0, width, height);
            image(img2, 0, 0, width, height);
            image(img1, 0, 0, width, height);
            image(img4, 0, 0, width, height);
            image(img6, 0, 0, width, height);
        }

        if(loop == 3) {
            passer.show();
            passer2.hide();
            passer3.hide();
            moutons.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img9, 0, 0, width, height);
            direction = 1;
            for (let i = 0; i < nbSheep; i++) {
            //when cold !
            //herds[i].setSpeed(direction,180 * sin(frameCount * 1000));
            herds[i].setSpeed(random(3, direction),random(170, 190));
            for(let j = 0; j < nbSheep; j++) {
                herds[i].collide(herds[j]);
            }
            }
            drawSprites();
            image(img1, 0, 0, width, height);
        }

        if(loop == 4) {
            door1.show();
            door2.show();
            door3.show();
            door4.show();
            door5.show();
            moutons.hide();
            passer.hide();
            passer2.hide();
            passer3.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img11, 0, 0, width, height);

            if(neigefaible) {image(faiblesnow, 0, 0, width, height);}
            if(neigeforte) {image(fortesnow, 0, 0, width, height);}
            
            image(ouestrose, 0, 0, width, height);
            // print(doorclicked);

        }

        if(loop == 5) {
            passer2.show();
            passer3.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img11, 0, 0, width, height);
            image(bravorose, 0, 0, width, height);
            doorclicked = undefined;
        }

        if(loop == 6) {
            passer2.show();
            passer3.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img11, 0, 0, width, height);
            image(oupsrose, 0, 0, width, height);
            doorclicked = undefined;
        }

        if(loop == 7) {
            door1.show();
            door2.show();
            door3.show();
            door4.show();
            door5.show();
            moutons.hide();
            passer.hide();
            passer2.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img11, 0, 0, width, height);
            if(neigefaible) {image(faiblesnow, 0, 0, width, height);}
            if(neigeforte) {image(fortesnow, 0, 0, width, height);}
            image(ouestnoir, 0, 0, width, height);
            // print(doorclicked);
            print(blackDoor);
        }

        if(loop == 8) {
            passer3.show();
            passer2.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img11, 0, 0, width, height);
            image(bravonoir, 0, 0, width, height);
            doorclicked = undefined;
        }

        if(loop == 9) {
            passer3.show();
            passer2.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img11, 0, 0, width, height);
            image(oupsnoir, 0, 0, width, height);
        }

        if(loop == 10) {
            passer3.hide();
            passer2.hide();
            door1.hide();
            door2.hide();
            door3.hide();
            door4.hide();
            door5.hide();
            moutons.hide();
            passer.hide();
            button10.hide();
            button15.hide();
            button20.hide();
            buttonfaiblePluie.hide();
            buttonfortePluie.hide();
            buttonfaibleNeige.hide();
            buttonforteNeige.hide();
            jouer.hide();
            options.hide();
            returnbut.hide();
            image(img11, 0, 0, width, height);
            image(fin, 0, 0, width, height);
            if(nbSheep == 10) {image(taillestat10, 0, 0, width, height);}
            if(nbSheep == 15) {image(taillestat15, 0, 0, width, height);}
            if(nbSheep == 20) {image(taillestat20, 0, 0, width, height);}
            if(neigefaible) {image(neigefaiblestat, 0, 0, width, height);}
            if(neigeforte) {image(neigefortestat, 0, 0, width, height);}
            image(gelestat, 0, 0, width, height);

            image(portemoutonrose, 0, 0, width, height);
            image(portemoutonnoir, 0, 0, width, height);
            print(deletedSheeps);

            if(deletedSheeps < 10) {
                if(deletedSheeps == 0) {image(nb0, width/2 + 105 - 30, height/2 - 54.2, 53, 36);}
                if(deletedSheeps == 1) {image(nb1, width/2 + 105 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps == 2) {image(nb2, width/2 + 105 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps == 3) {image(nb3, width/2 + 105 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps == 4) {image(nb4, width/2 + 105 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps == 5) {image(nb5, width/2 + 105 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps == 6) {image(nb6, width/2 + 105 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps == 7) {image(nb7, width/2 + 105 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps == 8) {image(nb8, width/2 + 105 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps == 9) {image(nb9, width/2 + 105 - 30, height/2 - 54, 53, 36);}
            }
            
            if(deletedSheeps >= 10 && deletedSheeps < 20) {
                image(nb1, width/2 + 105 - 30, height/2 - 54, 53, 36);
                if(deletedSheeps%10 == 0) {image(nb0, width/2 + 126 - 30, height/2 - 54.2, 53, 36);}
                if(deletedSheeps%10 == 1) {image(nb1, width/2 + 126 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 2) {image(nb2, width/2 + 126 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 3) {image(nb3, width/2 + 126 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 4) {image(nb4, width/2 + 126 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 5) {image(nb5, width/2 + 126 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 6) {image(nb6, width/2 + 126 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 7) {image(nb7, width/2 + 126 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 8) {image(nb8, width/2 + 126 - 30, height/2 - 54, 53, 36);}
                if(deletedSheeps%10 == 9) {image(nb9, width/2 + 126 - 30, height/2 - 54, 53, 36);}
            }

            if(deletedSheeps == 20) {
                image(nb2, width/2 + 105 - 30, height/2 - 54, 53, 36);
                image(nb0, width/2 + 130 - 30, height/2 - 54.2, 53, 36);
            }

            if(pinkDoor == 1) {image(nb1, width/2 + 190, height/2 + 18, 53, 36);}
            if(pinkDoor == 2) {image(nb2, width/2 + 190, height/2 + 18, 53, 36);}
            if(pinkDoor == 3) {image(nb3, width/2 + 190, height/2 + 18, 53, 36);}
            if(pinkDoor == 4) {image(nb4, width/2 + 190, height/2 + 18, 53, 36);}
            if(pinkDoor == 5) {image(nb5, width/2 + 190, height/2 + 18, 53, 36);}
            
            if(blackDoor == 1) {image(nb1, width/2 + 190, height/2 + 54, 53, 36);}
            if(blackDoor == 2) {image(nb2, width/2 + 190, height/2 + 54, 53, 36);}
            if(blackDoor == 3) {image(nb3, width/2 + 190, height/2 + 54, 53, 36);}
            if(blackDoor == 4) {image(nb4, width/2 + 190, height/2 + 54, 53, 36);}
            if(blackDoor == 5) {image(nb5, width/2 + 190, height/2 + 54, 53, 36);}
        }
    }
}