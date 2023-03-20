const { generateSquaredNumber, generatePlusOddNumber, generateFibonacci, generatePlusFibonacciNumber } = require('../logikaDanAlgoritma')

describe('Buatlah kode pemrograman untuk menampilkan deret angka', () => {
    test('deret 1', () => {
        expect(generateSquaredNumber(11)).toEqual([0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100])
    })

    test('deret 2', () => {
        expect(generatePlusOddNumber(10)).toEqual([1, 2, 5, 10, 17, 26, 37, 50, 65, 82])
    })

    test('deret 3', () => {
        expect(generateFibonacci(11)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })

    test('deret 4', () => {
        expect(generatePlusFibonacciNumber(10)).toEqual([0, 0, 1, 2, 4, 7, 12, 20, 33, 54])
    })
})