function g4Setup () {
    g4 = createSprite(window.innerWidth/2,window.innerHeight/2);
    g4.addImage(selectionmenuImg);
    g4.visible = false;
    gameoverht = createElement('h3',"Game Over !");
    gameoverht.position(-999,999);
}
function makeg4() {
    if (gameState === 3) {
        g4.visible = true;
        drawSprites();
        if (device === "MOBILE") {
            gameoverht.position(width/2-gameoverht.width/4,height/2.4);
            backToMenubtn.position(width/2-backToMenubtn.width/1,height/1.8);
        } else {
            gameoverht.position(width/2-gameoverht.width/16,height/2.4);
            backToMenubtn.position(width/2-backToMenubtn.width/1,height/1.8);
        }
    }
}