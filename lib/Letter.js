class Letter {
  constructor(letter) {
    this.letter = letter
  }
  
  getSolution() {
    return this.letter
  }
  
  guess(guess) {
    return this.letter === guess
  }
}

module.exports = Letter;
