function checkPasswordStrength(password) {
    let chars = password.split('')
    let hasUpper = false
    let hasLower = false
    let hasDigit = false
    let hasSymbol = false
    chars.forEach(char => {
      let charCode = char.charCodeAt(0)
      let zeroCode = '0'.charCodeAt(0)
      let nineCode = '9'.charCodeAt(0)
      if (char.toLowerCase() != char) {
        hasUpper = true
      } else if (char.toUpperCase() != char) {
        hasLower = true
      } else if (zeroCode <= charCode && charCode <= nineCode) {
        hasDigit = true
      } else {
        hasSymbol = true
      }
    })
    let score = 0
    if (hasUpper) {
      score = score + 1
    }
    if (hasLower) {
      score = score + 1
    }
    if (hasDigit) {
      score = score + 1
    }
    if (hasSymbol) {
      score = score + 1
    }
    if (password.length >= 8) {
      score = score + 1
    }
    return score
  }
  
  function test(expectedScore, password) {
    let actualScore = checkPasswordStrength(password)
    if (actualScore == expectedScore) {
      console.log('[pass]', expectedScore, ':', JSON.stringify(password))
    } else {
      console.log(
        '[fail]',
        { expectedScore, actualScore },
        ':',
        JSON.stringify(password),
      )
    }
  }
  
  // empty string
  test(0, '')
  
  // only digit
  test(1, '123')
  
  // only upper case
  test(1, 'ABC')
  
  // only lower case
  test(1, 'abc')
  
  // upper case and lower case
  test(2, 'Abc')
  
  // upper case and lower case, and symbol
  test(3, 'Abc ')
  
  // upper case and lower case, and symbol
  test(3, 'Abc!')
  
  // symbol before other chars
  test(3, '!Abc')
  
  // upper case and lower case, and symbol, and lengthy
  test(4, 'Password!')
  
  // upper case and lower case, and symbol, and lengthy, and digits
  test(5, 'Password!123')