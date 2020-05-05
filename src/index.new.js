function reverseWords(input) {
  input = input.split('')

  let start = 0

  for (let end = 0; end < input.length; end++) {
    if (input[end] === ' ') {
      reverseString(input, start, end - 1)
      start = end + 1
    }

    if (end === input.length - 1) {
      reverseString(input, start, end)
    }
  }

  reverseString(input, 0, input.length)

  return input.join('')
}

function swap(array, i, j) {
  ;[array[i], array[j]] = [array[j], array[i]]

  return array
}

function reverseString(input, start, end) {
  while (start < end) {
    swap(input, start, end)
    start++
    end--
  }

  return input
}

export { reverseString, reverseWords, swap }
