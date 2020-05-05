import { reverseWords, reverseString, swap } from './index.new'

test('reverseWords', () => {
  expect(reverseWords('the sky is blue')).toBe('blue is sky the')
})

test('reverse string', () => {
  expect(reverseString('abc'.split(''), 0, 2)).toEqual('cba'.split(''))
  // expect(reverseString('abb')).toBe('bba')
  expect(reverseString('aabb'.split(''), 0, 3)).toEqual('bbaa'.split(''))
  // expect(reverseString('the sky is blue')).toBe('eulb si yks eht')
})

test('swap', () => {
  expect(swap([1, 2, 3], 0, 2)).toEqual([3, 2, 1])
})
