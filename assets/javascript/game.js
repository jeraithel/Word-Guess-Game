
var wins = 0;

function start() {
    var lives = 12;
    guessesRemaining.innerHTML = lives;
    var solved = "-";
    var words = ["spaniel", "kittens", "testy", "coding", "wow", "homework", "boot", "camp"];

    var wordSelect = words[Math.floor(Math.random() * 8)];

    var wordSelectArray = [...wordSelect];
    var wordGuessArray = [...wordSelect];
    var lettersGuessed = [ ];
    
    console.log (wordSelect);
    console.log (wordSelect.length);
    console.log (wordSelectArray);

    wordSelectArray.forEach(functionUpdate);

// <!-- * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`. -->

    function functionUpdate(item,index,wordSelectArray) {
        wordSelectArray[index] = "_";
        currentWord.innerHTML = wordSelectArray.join(" ");
        console.log(wordSelectArray);
    }

    


    // <!-- * As the user guesses the correct letters, reveal them: `m a d o _  _ a`. -->

    function chkValues(letters) {
        return letters == "";
    }

    function guessLetter(userGuess) {
        console.log(wordSelectArray);
        console.log(wordGuessArray);
        console.log(userGuess);
        if (wordGuessArray.includes(userGuess)) {
            i = wordGuessArray.indexOf(userGuess);
            console.log(i);
            wordSelectArray[i] = wordGuessArray[i];
            wordGuessArray[i] = "";
            currentWord.innerHTML = wordSelectArray.join(" ");
            console.log (wordGuessArray);
            if (wordGuessArray.every(chkValues)) {
                console.log("Winner!");
                wins++;
                console.log(wins);
                winCount.innerHTML = wins;
                // <!-- 9. After the user wins/loses the game should automatically choose another word and make the user play it. -->
                lettersWrong.innerHTML = [""];
                start();
            } 
            
        }
        else if (lettersGuessed.includes(userGuess) || wordSelectArray.includes(userGuess)) {

        }
        // <!-- 7. Number of Guesses Remaining: (# of guesses remaining for the user). -->
        else {
            lives--;
            guessesRemaining.innerHTML = lives;
            lettersGuessed.push(userGuess);
            console.log(lettersGuessed);
            // <!-- 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`). -->
            lettersWrong.innerHTML = lettersGuessed.join(" ");
            if (lives === 0) {
                alert("LOSER!");
                start();
                lettersWrong.innerHTML = [""];
            }
        }
    }   

    document.onkeyup = function(event) {

            // Determines which key was pressed.
        var userGuess = event.key;
        guessLetter(userGuess);
    }
    }

    start();