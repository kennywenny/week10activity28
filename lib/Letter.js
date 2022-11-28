class Letter {
  constructor(letter) {
    this.letter = letter
    const isDigit = letter >= '0' && letter <= '9'
    const isLetter = letter >= 'a' && letter <= 'z'
    this.visible = !(isDigit || isLetter)
  }
  
  getSolution() {
    return this.letter
  }
  
  guess(guess) {
    const correctGuess = this.letter === guess
    if (correctGuess) {
      this.visible = true
    }
    return correctGuess
  }
  
  toString() {
    return this.visible ? this.letter : '_'
  }
}

module.exports = Letter;
