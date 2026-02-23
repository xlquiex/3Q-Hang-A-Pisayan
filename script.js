const wordArray = [
    "model", "graph", "method", "framework", "bias",
    "chart", "trend", "vacuole", "plant", "phylum",
    "reptile", "virus", "genus", "family", "domain",
    "xylem", "muscle", "pathogen", "vein", "gland"
];

let usedLetters = [];
let revealedLetters = [];
let playerLives = 5;
const randomIndex = generateRandomIndex();
const chosenWord = wordArray[randomIndex];

function playHangman() {
    makeBlanks();
    updateLives();
}

function keyBoardLetter(letterClicked, button) {
    letterClicked = letterClicked.toLowerCase();

    if (!usedLetters.includes(letterClicked)) {
        usedLetters.push(letterClicked);

        button.disabled = true;
        button.style.opacity = "0.5";
        button.style.cursor = "not-allowed";

        checkLetter(letterClicked);
    }
}

function generateRandomIndex() {
    return Math.floor(Math.random() * wordArray.length);
}

function makeBlanks() {
    revealedLetters = [];

    for (let i = 0; i < chosenWord.length; i++) {
        revealedLetters.push("_");
    }

    wordDisplay();
}

function checkLetter(letter) {
    let letterUsed = false;

    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) {
            revealedLetters[i] = letter;
            letterUsed = true;
        }
    }

    if (!letterUsed) {
        playerLives--;
    }

    wordDisplay();
    checkIfPlayerWin();
}

function wordDisplay() {
    document.getElementById("revealedLetters").innerText =
        revealedLetters.join(" ");

    updateLives();
}

function updateLives() {
    document.getElementById("playerLives").innerText = playerLives;
}


function checkIfPlayerWin() {
    if (!revealedLetters.includes("_")) {
        alert("W YOU WIN!");
    }

    if (playerLives <= 0) {
        alert("L YOU LOSE! The word was: " + chosenWord);
    }
}