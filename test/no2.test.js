const { strLength } = require('../logikaDanAlgoritma')

describe('Diberikan sebuah paragraf sebagai berikut, hitunglah berapa jumlah setiap karakter yang ada dalam paragraf tersebut', () => {
    test('should return length of string', () => {
        const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        expect(strLength(str)).toBe(str.length)
    })
})