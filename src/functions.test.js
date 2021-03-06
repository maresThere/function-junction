/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */
function max (a, b) {
  if (a >= b) {
    return a
  }
  return b
}

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree (a, b, c) {
  if (a >= b) {
    if (a >= c) {
      return a
    }
    return c
  } else {
    if (b >= c) {
      return b
    }
    return c
  }
}

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum (a, b) {
  let total = a + b
  return total
}

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

function sumOfArray (myArray) {
  let total = 0
  for (let i = 0; i < myArray.length; i++) {
    total += myArray[i]
  }
  return total
}

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel (input) {
  let char = input.toString().toLowerCase()
  if (char === 'a') {
    return true
  } else if (char === 'e') {
    return true
  } else if (char === 'i') {
    return true
  } else if (char === 'o') {
    return true
  } else if (char === 'u') {
    return true
  }
  return false
}

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

// Array has a method call `includes`

function rovarspraket (input) {
  let str = input.toString().toLowerCase()
  // let splitStr = str.split('')
  let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
  let newWord = ''
  for (let i = 0; i < str.length; i++) {
    if (consonants.includes(str[i])) {
      newWord += str[i] + 'o' + str[i]
    } else {
      newWord += str[i]
    }
  }

  return newWord
}

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse (str) {
  let splitStr = str.split('')
  let reverseArray = splitStr.reverse()
  let joinArray = reverseArray.join('')
  return joinArray
}

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord (str) {
  let strSplit = str.split(' ')
  // return strSplit returns an array of strings separated by space
  let longestWord = 0
  let longestString = ''
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length
      longestString = strSplit[i]
    }
  }
  return longestString
}

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', (t) => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', (t) => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', (t) => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', (t) => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', (t) => {
  t.is(isVowel(0), false)
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', (t) => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
  t.is(rovarspraket(0), '0')
})

test('reverse()', (t) => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', (t) => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

/* eslint-enable */
