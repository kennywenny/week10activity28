class Letter {
  constructor(letter) {
    this.letter = letter
    const isDigit = letter >= '0' && letter <= '9'
    const isLetter = letter >= 'A' && letter <= 'Z'
    this.visible = !(isDigit || isLetter)
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
