
//Global Variables
//Heroes
const hero1 = {
    name: "Bandit",
    health: 150,
    baseAttack: 15,
    counterAttack: 10,
    currentAttack: 15
}

const hero2 = {
    name: "Draugr",
    health: 125,
    baseAttack: 20,
    counterAttack: 5,
    currentAttack: 20
}

const hero3 = {
    name: "Troll",
    health: 200,
    baseAttack: 10,
    counterAttack: 15,
    currentAttack: 10
}

const hero4 = {
    name: "Hagraven",
    health: 100,
    baseAttack: 5,
    counterAttack: 20,
    currentAttack: 5
}


const currentHero = {
    name: "",
    health: 0,
    baseAttack: 0,
    counterAttack: 0,
    currentAttack: 0
}

const currentDefender = {
    name: "",
    health: 0,
    baseAttack: 0,
    counterAttack: 0,
    currentAttack: 0
}

//Divs
const heroTitleDiv = document.getElementById("heroSelector");
const hero1Div = document.getElementById("hero1");
const hero2Div = document.getElementById("hero2");
const hero3Div = document.getElementById("hero3");
const hero4Div = document.getElementById("hero4");

const enemyTitleDiv = document.getElementById("enemySelector");
const enemy1Div = document.getElementById("enemy1");
const enemy2Div = document.getElementById("enemy2");
const enemy3Div = document.getElementById("enemy3");

const defenderTitleDiv = document.getElementById("defenderName");
const defenderDiv = document.getElementById("defenderPic");

const messageDiv = document.getElementById("message");

console.log(messageDiv + "here it is");
//Bools
let heroSelected = false;
let defenderSelected = false;
let enemy1Defeated = false;
let enemy2Defeated = false;
let enemy3Defeated = false;

//Global Functions
//Restart Gme
function restart() {
    currentHero.name = "";
    currentHero.health = 0;
    currentHero.baseAttack = 0;
    currentHero.counterAttack = 0;
    currentHero.currentAttack = 0;

    currentDefender.name = "";
    currentDefender.health = 0;
    currentDefender.baseAttack = 0;
    currentDefender.counterAttack = 0;
    currentDefender.currentAttack = 0;

    heroSelected = false;
    defenderSelected = false;
    enemy1Defeated = false;
    enemy2Defeated = false;
    enemy3Defeated = false;

    heroTitleDiv.textContent = "Select Character";
    defenderTitleDiv.textContent = "Defender";
    messageDiv.textContent = "";

    hero1Div.style.backgroundImage = "url('assets/images/BanditHero.png')";
    hero2Div.style.backgroundImage = "url('assets/images/DraugrHero.png')";
    hero3Div.style.backgroundImage = "url('assets/images/TrollHero.png')";
    hero4Div.style.backgroundImage = "url('assets/images/HagravenHero.png')";

    enemy1Div.style.backgroundImage = "url('')";
    enemy2Div.style.backgroundImage = "url('')";
    enemy3Div.style.backgroundImage = "url('')";

    defenderDiv.style.backgroundImage = "url('')";
}

//Set Hero
function setCurrentHero(hero) {
    currentHero.name = hero.name;
    currentHero.health = hero.health;
    currentHero.baseAttack = hero.baseAttack;
    currentHero.counterAttack = hero.counterAttack;
    currentHero.currentAttack = hero.currentAttack;
}

//Set Defender
function setCurrentDefender(hero) {
    currentDefender.name = hero.name;
    currentDefender.health = hero.health;
    currentDefender.baseAttack = hero.baseAttack;
    currentDefender.counterAttack = hero.counterAttack;
    currentDefender.currentAttack = hero.currentAttack;
}

//Attack
function attack() {
    if (currentHero.health > 0 && currentDefender.health > 0) {
        currentDefender.health = currentDefender.health - currentHero.currentAttack;
        currentHero.currentAttack = currentHero.counterAttack + currentHero.baseAttack;
        defenderTitleDiv.textContent = "Your Foe: " + currentDefender.name + " Your Foe's Health: " + currentDefender.health;
        currentHero.health = currentHero.health - currentDefender.counterAttack;
        heroTitleDiv.textContent = "Your Hero: " + currentHero.name + " Your Health: " + currentHero.health;
    }

    if(currentHero.health <= 0){
        messageDiv.textContent = "I am sorry your hero has been defeated.  Restart and try play again?";
    }
    else if(currentDefender.health <= 0){
        messageDiv.textContent = "You have won!  Select a new Foe!";
        if(currentHero.name === "Bandit"){
            if(currentDefender.name === "Draugr"){
                enemy1Defeated = true;
            }
            else if(currentDefender.name === "Troll"){
                enemy2Defeated = true;
            }
            else if(currentDefender.name === "Hagraven"){
                enemy3Defeated = true;
            }
        }
        else if(currentHero.name === "Draugr"){
            if(currentDefender.name === "Bandit"){
                enemy1Defeated = true;
            }
            else if(currentDefender.name === "Troll"){
                enemy2Defeated = true;
            }
            else if(currentDefender.name === "Hagraven"){
                enemy3Defeated = true;
            }
        }
        else if(currentHero.name === "Troll"){
            if(currentDefender.name === "Bandit"){
                enemy1Defeated = true;
            }
            else if(currentDefender.name === "Draugr"){
                enemy2Defeated = true;
            }
            else if(currentDefender.name === "Hagraven"){
                enemy3Defeated = true;
            }
        }
        else if(currentHero.name === "Hagraven"){
            if(currentDefender.name === "Bandit"){
                enemy1Defeated = true;
            }
            else if(currentDefender.name === "Draugr"){
                enemy2Defeated = true;
            }
            else if(currentDefender.name === "Troll"){
                enemy3Defeated = true;
            }
        }
        defenderSelected = false;
    }
}

//Main Functions
//Hero Selection
document.querySelectorAll(".heroSelection").forEach(function (hero) {
    hero.addEventListener("click", function () {
        if (heroSelected !== true) {
            if (hero.getAttribute("value") === "1") {
                setCurrentHero(hero1);
                heroTitleDiv.textContent = "Your Hero: " + currentHero.name + " Your Health: " + currentHero.health;
                hero2Div.style.backgroundImage = "url('')";
                hero3Div.style.backgroundImage = "url('')";
                hero4Div.style.backgroundImage = "url('')";
                enemy1Div.style.backgroundImage = "url('assets/images/DraugrHero.png')";
                enemy2Div.style.backgroundImage = "url('assets/images/TrollHero.png')";
                enemy3Div.style.backgroundImage = "url('assets/images/HagravenHero.png')";
                heroSelected = true;
            }
            else if (hero.getAttribute("value") === "2") {
                setCurrentHero(hero2);
                heroTitleDiv.textContent = "Your Hero: " + currentHero.name + " Your Health: " + currentHero.health;
                hero1Div.style.backgroundImage = "url('')";
                hero3Div.style.backgroundImage = "url('')";
                hero4Div.style.backgroundImage = "url('')";
                enemy1Div.style.backgroundImage = "url('assets/images/BanditHero.png')";
                enemy2Div.style.backgroundImage = "url('assets/images/TrollHero.png')";
                enemy3Div.style.backgroundImage = "url('assets/images/HagravenHero.png')";
                heroSelected = true;
            }
            else if (hero.getAttribute("value") === "3") {
                setCurrentHero(hero3);
                heroTitleDiv.textContent = "Your Hero: " + currentHero.name + " Your Health: " + currentHero.health;
                hero2Div.style.backgroundImage = "url('')";
                hero1Div.style.backgroundImage = "url('')";
                hero4Div.style.backgroundImage = "url('')";
                enemy1Div.style.backgroundImage = "url('assets/images/BanditHero.png')";
                enemy2Div.style.backgroundImage = "url('assets/images/DraugrHero.png')";
                enemy3Div.style.backgroundImage = "url('assets/images/HagravenHero.png')";
                heroSelected = true;
            }
            else if (hero.getAttribute("value") === "4") {
                setCurrentHero(hero4);
                heroTitleDiv.textContent = "Your Hero: " + currentHero.name + " Your Health: " + currentHero.health;
                hero2Div.style.backgroundImage = "url('')";
                hero3Div.style.backgroundImage = "url('')";
                hero1Div.style.backgroundImage = "url('')";
                enemy1Div.style.backgroundImage = "url('assets/images/BanditHero.png')";
                enemy2Div.style.backgroundImage = "url('assets/images/DraugrHero.png')";
                enemy3Div.style.backgroundImage = "url('assets/images/TrollHero.png')";
                heroSelected = true;
            }
        }
        console.log(currentHero);
    });
});

//Defender Selection
document.querySelectorAll(".enemySelection").forEach(function (defender) {
    defender.addEventListener("click", function () {
        if (heroSelected === true && defenderSelected !== true) {
            if (currentHero.name === "Bandit") {
                if (defender.getAttribute("value") === "1" && enemy1Defeated !== true) {
                    setCurrentDefender(hero2);
                    defenderTitleDiv.textContent = "Your Foe: " + currentDefender.name + " Your Foe's Health: " + currentDefender.health;
                    defenderSelected = true;
                    defenderDiv.style.backgroundImage = "url('assets/images/DraugrHero.png')";
                    enemy1Div.style.backgroundImage = "url('')";
                }
                else if (defender.getAttribute("value") === "2" && enemy2Defeated !== true) {
                    setCurrentDefender(hero3);
                    defenderTitleDiv.textContent = "Your Foe: " + currentDefender.name + " Your Foe's Health: " + currentDefender.health;
                    defenderSelected = true;
                    defenderDiv.style.backgroundImage = "url('assets/images/TrollHero.png')";
                    enemy2Div.style.backgroundImage = "url('')";
                }
                else if (defender.getAttribute("value") === "3" && enemy3Defeated !== true) {
                    setCurrentDefender(hero4);
                    defenderTitleDiv.textContent = "Your Foe: " + currentDefender.name + " Your Foe's Health: " + currentDefender.health;
                    defenderSelected = true;
                    defenderDiv.style.backgroundImage = "url('assets/images/HagravenHero.png')";
                    enemy3Div.style.backgroundImage = "url('')";
                }
            }
            else if (currentHero.name === "Draugr") {
                if (defender.getAttribute("value") === "1" && enemy1Defeated !== true) {
                    setCurrentDefender(hero1);
                    defenderTitleDiv.textContent = "Your Foe: " + currentDefender.name + " Your Foe's Health: " + currentDefender.health;
                    defenderSelected = true;
                    defenderDiv.style.backgroundImage = "url('assets/images/BanditHero.png')";
                    enemy1Div.style.backgroundImage = "url('')";
                }
                else if (defender.getAttribute("value") === "2" && enemy2Defeated !== true) {
                    setCurrentDefender(hero3);
                    defenderTitleDiv.textContent = "Your Foe: " + currentDefender.name + " Your Foe's Health: " + currentDefender.health;
                    defenderSelected = true;
                    defenderDiv.style.backgroundImage = "url('assets/images/TrollHero.png')";
                    enemy2Div.style.backgroundImage = "url('')";
                }
                else if (defender.getAttribute("value") === "3" && enemy3Defeated !== true) {
                    setCurrentDefender(hero4);
                    defenderTitleDiv.textContent = "Your Foe: " + currentDefender.name + " Your Foe's Health: " + currentDefender.health;
                    defenderSelected = true;
                    defenderDiv.style.backgroundImage = "url('assets/images/HagravenHero.png')";
                    enemy3Div.style.backgroundImage = "url('')";
                }
            }
            else if (currentHero.name === "Troll") {
                if (defender.getAttribute("value") === "1" && enemy1Defeated !== true) {
                    setCurrentDefender(hero1);
                    defenderTitleDiv.textContent = "Your Foe: " + currentDefender.name + " Your Foe's Health: " + currentDefender.health;
                    defenderSelected = true;
                    defenderDiv.style.backgroundImage = "url('assets/images/BanditHero.png')";
                    enemy1Div.style.backgroundImage = "url('')";
                }
                else if (defender.getAttribute("value") === "2" && enemy2Defeated !== true) {
                    setCurrentDefender(hero2);
                    defenderTitleDiv.textContent = "Your Foe: " + currentDefender.name + " Your Foe's Health: " + currentDefender.health;
                    defenderSelected = true;
                    defenderDiv.style.backgroundImage = "url('assets/images/DraugrHero.png')";
                    enemy2Div.style.backgroundImage = "url('')";
                }
                else if (defender.getAttribute("value") === "3" && enemy3Defeated !== true) {
                    setCurrentDefender(hero4);
                    defenderTitleDiv.textContent = "Your Foe: " + currentDefender.name + " Your Foe's Health: " + currentDefender.health;
                    defenderSelected = true;
                    defenderDiv.style.backgroundImage = "url('assets/images/HagravenHero.png')";
                    enemy3Div.style.backgroundImage = "url('')";
                }
            }
            else if (currentHero.name === "Hagraven") {
                if (defender.getAttribute("value") === "1" && enemy1Defeated !== true) {
                    setCurrentDefender(hero1);
                    defenderTitleDiv.textContent = "Your Foe: " + currentDefender.name + " Your Foe's Health: " + currentDefender.health;
                    defenderSelected = true;
                    defenderDiv.style.backgroundImage = "url('assets/images/BanditHero.png')";
                    enemy1Div.style.backgroundImage = "url('')";
                }
                else if (defender.getAttribute("value") === "2" && enemy2Defeated !== true) {
                    setCurrentDefender(hero2);
                    defenderTitleDiv.textContent = "Your Foe: " + currentDefender.name + " Your Foe's Health: " + currentDefender.health;
                    defenderSelected = true;
                    defenderDiv.style.backgroundImage = "url('assets/images/DraugrHero.png')";
                    enemy2Div.style.backgroundImage = "url('')";
                }
                else if (defender.getAttribute("value") === "3" && enemy3Defeated !== true) {
                    setCurrentDefender(hero3);
                    defenderTitleDiv.textContent = "Your Foe: " + currentDefender.name + " Your Foe's Health: " + currentDefender.health;
                    defenderSelected = true;
                    defenderDiv.style.backgroundImage = "url('assets/images/TrollHero.png')";
                    enemy3Div.style.backgroundImage = "url('')";
                }
            }
            console.log(currentDefender);
        }
    });
});


//Attack
document.getElementById("fightButton").addEventListener("click", function () {
    attack();
});

//Reset
document.getElementById("restartButton").addEventListener("click", function () {
    restart();
});