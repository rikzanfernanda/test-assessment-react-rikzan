const { titleCase, kebabCase } = require('../logikaDanAlgoritma')

describe('Ubahlah format string tersebut menjadi format penulisan judul yang hanya menerima huruf dan angka', () => {
    test('should return title case', () => {
        expect(titleCase('SELamAt PaGi Dunia!!')).toBe('Selamat Pagi Dunia')
    })
})

describe('Ubahlah format string tersebut menjadi format penulisan biasa dengan mengkonversi spasi menjadi “-“ (strip)', () => {
    test('should return kebab case', () => {
        expect(kebabCase('SELamAt PaGi Dunia!!')).toBe('Selamat-pagi-dunia')
    })
})