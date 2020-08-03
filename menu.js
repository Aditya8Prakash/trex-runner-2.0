function changeBackgroundImageAtSetupWhenGameStateIs0() {
    changedbackground = createSprite((window.innerWidth/2),(window.innerHeight/2));
    selectionmenu = createSprite((window.innerWidth/2),(window.innerHeight/1.85));
    changedbackground.addImage(changedbackgroundImg);
    selectionmenu.addImage(selectionmenuImg);
}
function changeBackgroundImageAtSetupWhenGameStateIs1 () {
    selectionmenu.visible = true;
    if (device === "MOBILE") {
        selectionmenu.scale = 0.3;
    } else {
        selectionmenu.scale = 0.35;
    }
}
function createMenuButtonsAtSetupWhenGameStateIs0 () {
    menuht = createElement('h3',"Menu |");
    if (device === "MOBILE") {
        startbtn = createElement('button',"Play");
        lederboard = createElement('button',"LeaderBoard");
        aboutme = createElement('button',"About Me");
    } else {
        startbtn = createElement('button',"Play Now !");
        lederboard = createElement('button',"Player's Statistics");
        aboutme = createElement('button',"About Developer");
    }
    menuht.position(-9999,999);
    startbtn.position(-9999,999);
    lederboard.position(-9999,999);
    aboutme.position(-9999,999);
}
function createMenuButtonsAtDrawWhenGameStateIs1() {
    changeBackgroundImageAtSetupWhenGameStateIs1();
    if (gameState === 1) {
        startbtn.position((window.innerWidth/2)-startbtn.width/2,(window.innerHeight/2));
        lederboard.position((window.innerWidth/2)-lederboard.width/2,(window.innerHeight/1.75));
        aboutme.position((window.innerWidth/2)-aboutme.width/2,(window.innerHeight/1.55));
        backToMenubtn.position(10,10);
    if (device === "MOBILE") {
        menuht.position((window.innerWidth/2)-menuht.width/4,(window.innerHeight/2.65));
    } else {
        menuht.position((window.innerWidth/2)-menuht.width/16,(window.innerHeight/2.65));
    }
}
    lederboard.mousePressed(()=> {
        location.replace("https://aditya8prakash.github.io/leaderboard/");
    });
    startbtn.mousePressed(()=> {
        startGame();
    });
}
function startGame() {
    gameState = 2;
    greet.position(-9999,999);
    menuht.position(-9999,999);
    startbtn.position(-9999,999);
    lederboard.position(-9999,999);
    aboutme.position(-9999,999);
}