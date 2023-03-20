const { getValuesFromStringOfArray } = require('../logikaDanAlgoritma')

describe('Diberikan sebuah deret angka acak oleh user berupa string dan angka dipisahkan oleh spasi dan atau koma, (ex. “20,21, 80a,21, 5d5, 31 22”)', () => {
    const strArray = '20,21, 80a,21, 5d5, 31 22'

    test('mendapatkan nilai total dari deret angka', () => {
        expect(getValuesFromStringOfArray(strArray).total).toEqual(
            getValuesFromStringOfArray(strArray).array.reduce(
                (a, b) => a + b,
                0
            )
        )
    })

    test('mendapatkan nilai terbesar', () => {
        expect(getValuesFromStringOfArray(strArray).greater).toEqual(
            Math.max(...getValuesFromStringOfArray(strArray).array)
        )
    })

    test('mendapatkan nilai terkecil', () => {
        expect(getValuesFromStringOfArray(strArray).smaller).toEqual(
            Math.min(...getValuesFromStringOfArray(strArray).array)
        )
    })

    test('mendapatkan nilai rata-rata', () => {
        expect(getValuesFromStringOfArray(strArray).average).toEqual(
            getValuesFromStringOfArray(strArray).array.reduce(
                (a, b) => a + b,
                0
            ) / getValuesFromStringOfArray(strArray).array.length
        )
    })
})
