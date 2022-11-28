const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = word
      .split('')
      .map(it => new Letter(it))
  }
  
  guessLetter(guess) {
    this.letters.forEach(it => it.guess(guess))
  }

  guessedCorrectly() {
    const correctlyGuessedLetters = this.letters.filter(it => it.visible)
    return correctlyGuessedLetters.length == this.letters.length
  }
}

module.exports = Word;
