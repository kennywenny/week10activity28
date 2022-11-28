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
    return !this.letters.filter(it => !it.visible)
  }
}

module.exports = Word;
