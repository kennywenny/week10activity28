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
  
  toString() {
    return '_'
  }
}

module.exports = Letter;
