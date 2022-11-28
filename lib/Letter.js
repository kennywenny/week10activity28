class Letter {
  constructor(char) {
    this.char = char
    const isDigit = char >= '0' && char <= '9'
    const isLowerCaseLetter = char >= 'a' && char <= 'z'
    const isUpperCaseLetter = char >= 'A' && char <= 'Z'
    this.visible = !(isDigit || isLowerCaseLetter || isUpperCaseLetter)
  }
  
  getSolution() {
    return this.char
  }
  
  guess(guess) {
    const correctGuess = this.char.toLowerCase() === guess.toLowerCase()
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
