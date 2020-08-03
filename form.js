var reg,name,email,pass;
var player = {};
var m = true;
function createFormAtSetup() {
    greet = createElement('h1');
    login = createElement('h3');
    regnoInput = createElement('input');
    regnoht = createElement('h2');
    nameht = createElement('h2');
    nameInput = createElement('input');
    emailht = createElement('h2');
    emailInput = createElement('input');
    passht = createElement('h2');
    passInput = createElement('input');
    loginbtn = createElement('button',"Login");
    regbtn = createElement('button',"Register Now !");
    if (device === "MOBILE") {
        greet.position((window.innerWidth/2)-greet.width/2,(window.innerHeight/90));
        login.position((window.innerWidth/2)-login.width/4,(window.innerHeight/3.9));
        regnoInput.position((window.innerWidth/2)-regnoInput.width/2,(window.innerHeight/2.5));
        regnoht.position((window.innerWidth/2)-regnoht.width/4,(window.innerHeight/2.8));
        nameht.position((window.innerWidth/2)-regnoht.width/4,(window.innerHeight/2.3));
        nameInput.position((window.innerWidth/2)-regnoInput.width/2,(window.innerHeight/2.1));
        emailht.position((window.innerWidth/2)-regnoht.width/4,(window.innerHeight/1.95));
        emailInput.position((window.innerWidth/2)-regnoInput.width/2,(window.innerHeight/1.8));
        passht.position((window.innerWidth/2)-regnoht.width/4,(window.innerHeight/1.7));
        passInput.position((window.innerWidth/2)-regnoInput.width/2,(window.innerHeight/1.575));
        loginbtn.position((window.innerWidth/2)-loginbtn.width/2,(window.innerHeight/1.4));
        regbtn.position((window.innerWidth/2)-regbtn.width/2,(window.innerHeight/1.3));
    } else {
        greet.position((window.innerWidth/2)-greet.width/5,(window.innerHeight/9));
        login.position((window.innerWidth/2)-login.width/6,(window.innerHeight/3.9));
        regnoInput.position((window.innerWidth/2)-regnoInput.width/1.5,(window.innerHeight/2.5));
        regnoht.position((window.innerWidth/2)-regnoht.width/4.5,(window.innerHeight/2.8));
        nameht.position((window.innerWidth/2)-regnoht.width/4.5,(window.innerHeight/2.3));
        nameInput.position((window.innerWidth/2)-regnoInput.width/1.5,(window.innerHeight/2.1));
        emailht.position((window.innerWidth/2)-regnoht.width/4.5,(window.innerHeight/1.95));
        emailInput.position((window.innerWidth/2)-regnoInput.width/1.5,(window.innerHeight/1.8));
        passht.position((window.innerWidth/2)-regnoht.width/4.5,(window.innerHeight/1.7));
        passInput.position((window.innerWidth/2)-regnoInput.width/1.5,(window.innerHeight/1.575));
        loginbtn.position((window.innerWidth/2)-loginbtn.width/1.5,(window.innerHeight/1.4));
        regbtn.position((window.innerWidth/2)-regbtn.width/1.5,(window.innerHeight/1.3));
    }
}
function createFormAtDraw() {
    rectMode(CENTER);
    noStroke();
    greet.html("Trex Runner 2.0");
    if (device === "MOBILE") {
        fill(255,255,255,120);
        bacg = rect((window.innerWidth/2),(window.innerHeight/1.75),(window.innerWidth/1.2),(window.innerHeight/1.65));
        regnoht.html("Unique Tag :");
        nameht.html('Name :');
        emailht.html('Email :');
        passht.html('Password :');
        login.html('Login |');
    } else {
        fill(255,255,255,110);
        bacg = rect((window.innerWidth/2),(window.innerHeight/1.75),(window.innerWidth/1),(window.innerHeight/1.65));
        regnoht.html("Enter Your Own Unique Tag :");
        nameht.html('Enter Your Name :');
        emailht.html('Enter Your Email :');
        passht.html('Enter Your Password :');
        login.html('Login Your Account |');
    }
    regbtn.mousePressed(()=> {
        location.replace("https://aditya8prakash.github.io/REGISTER-V0.0.0.0/?min=0");
    });
    loginbtn.mousePressed(()=> {
        loginPlayer();
    });
}
function err() {
    console.log("We Encountered An Error");
    alert("We Encountered An Error");
}
function loginPlayer () {
    reg = regnoInput.value();
    name = nameInput.value();
    email = emailInput.value();
    pass = passInput.value();
    if (name !==""&&reg !== ""&&pass !== ""&&email !== "") {
            player = {
            reg:reg,
            email:email,
            name:name,
            pass:pass,
            score:''
        }
        checkForLogin();
    } else {
        notCorrect();
    }
}
function notCorrect() {
    alert("Please Enter Your Valid Info");
        reg = "";
        name = "";
        email = "";
        pass = "";
}
function checkForLogin () {
    var dataref = database.ref('/'+reg+'/data');
    dataref.on('value',gotData,err);
}
function gotData(data) {
    if (name === data.val().name && email === data.val().email && pass === data.val().pass) {
        if (m === true) {
        gameState = 1;
            m=false;
        }
    } else {
        notCorrect();
    }
}
function hideFormButtonsAndInputs() {
    login.hide();
    regnoInput.hide();
    regnoht.hide();
    nameht.hide();
    nameInput.hide();
    emailht.hide();
    emailInput.hide();
    passht.hide();
    passInput.hide();
    loginbtn.hide();
    regbtn.hide();
}