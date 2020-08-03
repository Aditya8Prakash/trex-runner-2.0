var database;
var gameState = 0;
var trex, trex_running, trex_collided;
function preload() {
    device=deviceDectator();
    bg();
    loadAssect();
}
function setup () {
    var firebaseConfig = {
        apiKey: "AIzaSyDBTKkSOXQiswSTQPfoMPSR5mWg4nP0uHs",
        authDomain: "operationsearch-883d0.firebaseapp.com",
        databaseURL: "https://operationsearch-883d0.firebaseio.com",
        projectId: "operationsearch-883d0",
        storageBucket: "operationsearch-883d0.appspot.com",
        messagingSenderId: "70476201860",
        appId: "1:70476201860:web:6bb2fe0594ef801be6e7d1"
      };
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    d2 = firebase.database();
    canvas = createCanvas(window.innerWidth,window.innerHeight);
    if (gameState === 0) {
        createFormAtSetup();
    }
    changeBackgroundImageAtSetupWhenGameStateIs0();
    createMenuButtonsAtSetupWhenGameStateIs0 ();
    createButtonsOfGamesWhenGameStarts();
    gameSetup();
    g4Setup();
}
function draw() {
    background(b1);
    if (gameState === 0) {
        createFormAtDraw();
    }  else if (gameState === 1){
        hideFormButtonsAndInputs();
    }
    if (gameState===1) {
    drawSprites();
    }   else if (gameState === 2) {
        changeBackgroundImageAtSetupWhenGameStateIs2();
        drawSprites();
    }
    createMenuButtonsAtDrawWhenGameStateIs1();
    gameDraw();
    makeg4();
}
function bg () {
    if (device === "MOBILE") {
        b1 = loadImage("293301.jpg");
    } else {
        b1 = loadImage("293302.jpg");
    }
}
function loadAssect() {
    changedbackgroundImg = loadImage('b2.jpg');
    changedbackgroundImg2 = loadImage('bg4.jpg');
    selectionmenuImg = loadImage('1.png');
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    groundImage = loadImage("ground2.png");
    trex_collided = loadAnimation("trex_collided.png");
    obstacle1 = loadImage("obstacle1.png");
    obstacle2 = loadImage("obstacle2.png");
    obstacle3 = loadImage("obstacle3.png");
    obstacle4 = loadImage("obstacle4.png");
    obstacle5 = loadImage("obstacle5.png");
    obstacle6 = loadImage("obstacle6.png");
    cloudImage = loadImage("cloud.png");
}