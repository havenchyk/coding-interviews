// better solution was to assume that we have
// an array of characters as an input

function reverseString(input) {
  //dumb
  // return input.split('').reverse().join('')

  //smart? :D
  for (let i = 0; i < input.length >> 1; i++) {
    input =
      // untouched part
      input.slice(0, i) +
      // swap
      input[input.length - i - 1] +
      input.slice(i + 1, input.length - i - 1) +
      input[i] +
      // rest part
      input.slice(input.length - i)
  }

  return input
}

function reverseWords(input) {
  // dumb
  //      new array        new array                 new string
  // return input.split(' ').filter(Boolean).reverse().join(' ')

  // smart? :D
  // reverse string
  const reversedInput = reverseString(input.trim())

  let word = ''
  let resultedString = ''
  for (let i = 0; i < reversedInput.length; i++) {
    if (reversedInput[i] !== ' ') {
      word += reversedInput[i]
    }

    if (word && (reversedInput[i] === ' ' || i === reversedInput.length - 1)) {
      if (resultedString) {
        resultedString += ' '
      }

      resultedString += reverseString(word)
      word = ''
    }
  }

  return resultedString
}

export { reverseWords, reverseString }
