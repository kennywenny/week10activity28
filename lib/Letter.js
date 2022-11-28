class Letter {
  constructor(char) {
    this.char = char
    const isDigit = char >= '0' && char <= '9'
    const isLetter = char >= 'a' && char <= 'z'
    this.visible = !(isDigit || isLetter)
  }
  
  getSolution() {
    return this.char
  }
  
  guess(guess) {
    const correctGuess = this.char === guess
    if (correctGuess) {
      this.visible = true
    }
    return correctGuess
  }
  
  toString() {
    return this.visible ? this.char : '_'
  }
}

module.exports = Letter;
