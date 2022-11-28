const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = word
      .split('')
      .map(it => new Letter(it))
  }
  
  guessLetter(guess) {
    const incorrectGuess = this.letters.filter(it => it.guess(guess)).length === 0
    return !incorrectGuess
  }

  guessedCorrectly() {
    const correctlyGuessedLetters = this.letters.filter(it => it.visible)
    return correctlyGuessedLetters.length == this.letters.length
  }
}

module.exports = Word;
