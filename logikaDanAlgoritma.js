const UPPERCASE = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E',
    f: 'F',
    g: 'G',
    h: 'H',
    i: 'I',
    j: 'J',
    k: 'K',
    l: 'L',
    m: 'M',
    n: 'N',
    o: 'O',
    p: 'P',
    q: 'Q',
    r: 'R',
    s: 'S',
    t: 'T',
    u: 'U',
    v: 'V',
    w: 'W',
    x: 'X',
    y: 'Y',
    z: 'Z',
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    E: 'E',
    F: 'F',
    G: 'G',
    H: 'H',
    I: 'I',
    J: 'J',
    K: 'K',
    L: 'L',
    M: 'M',
    N: 'N',
    O: 'O',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: 'S',
    T: 'T',
    U: 'U',
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: 'Z'
}
const LOWERCASE = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    e: 'e',
    f: 'f',
    g: 'g',
    h: 'h',
    i: 'i',
    j: 'j',
    k: 'k',
    l: 'l',
    m: 'm',
    n: 'n',
    o: 'o',
    p: 'p',
    q: 'q',
    r: 'r',
    s: 's',
    t: 't',
    u: 'u',
    v: 'v',
    w: 'w',
    x: 'x',
    y: 'y',
    z: 'z',
    A: 'a',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e',
    F: 'f',
    G: 'g',
    H: 'h',
    I: 'i',
    J: 'j',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    O: 'o',
    P: 'p',
    Q: 'q',
    R: 'r',
    S: 's',
    T: 't',
    U: 'u',
    V: 'v',
    W: 'w',
    X: 'x',
    Y: 'y',
    Z: 'z'
}

function strLength(s) {
    var length = 0
    while (s[length] !== undefined) {
        length++
    }
    return length
}

function titleCase(string) {
    let output = ''
    let length = strLength(string)

    for (let i = 0; i < length; i++) {
        if (
            UPPERCASE[string[i]] === undefined &&
            LOWERCASE[string[i]] === undefined &&
            string[i] !== ' '
        ) {
            continue
        }

        if (i === 0) {
            output += UPPERCASE[string[i]]
        } else if (string[i] === ' ') {
            output += ' '
            output += UPPERCASE[string[i + 1]]
            i++
        } else {
            output += LOWERCASE[string[i]]
        }
    }

    return output
}

function kebabCase(string) {
    let output = ''
    let length = strLength(string)

    for (let i = 0; i < length; i++) {
        if (
            UPPERCASE[string[i]] === undefined &&
            LOWERCASE[string[i]] === undefined &&
            string[i] !== ' '
        ) {
            continue
        }
        if (i === 0) {
            output += UPPERCASE[string[i]]
        } else if (string[i] === ' ') {
            output += '-'
        } else {
            output += LOWERCASE[string[i]]
        }
    }

    return output
}

function generatePlusOddNumber(n) {
    let result = []

    let last = 1
    for (let i = 0; i < n; i++) {
        result.push(last)
        last = last + (i * 2 + 1)
    }

    return result
}

function generateFibonacci(n) {
    let fib_array = [0, 1]

    for (let i = 0; i < n; i++) {
        fib_array.push(fib_array[i] + fib_array[i + 1])
    }

    return fib_array.slice(0, n)
}

function generateSquaredNumber(n) {
    let result = []

    let last = 0
    for (let i = 0; i < n; i++) {
        result.push(last)
        last = last + i * 2 + 1
    }

    return result
}

function generatePlusFibonacciNumber(n) {
    let fib_array = [0, 1]
    let result = []

    let last = 0
    for (let i = 0; i < n; i++) {
        fib_array.push(fib_array[i] + fib_array[i + 1])
        result.push(last)
        last = last + fib_array[i]
    }

    return result
}

function getValuesFromStringOfArray(string) {
    let result = []
    let temp = ''

    for (let i = 0; i < strLength(string); i++) {
        if (string[i] === ' ') {
            if (temp !== '') {
                result.push(parseInt(temp))
                temp = ''
            }
            continue
        } else if (string[i] === ',') {
            result.push(parseInt(temp))
            temp = ''
        } else {
            temp += string[i]
        }
    }

    result.push(parseInt(temp))

    return {
        array: result,
        total: getTotal(result),
        greater: getGreater(result),
        smaller: getSmaller(result),
        average: getAverage(result)
    }
}

function getTotal(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }

    return total
}

function getAverage(array) {
    let total = getTotal(array)
    return total / array.length
}

function getGreater(array) {
    let greater = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > greater) {
            greater = array[i]
        }
    }

    return greater
}

function getSmaller(array) {
    let smaller = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smaller) {
            smaller = array[i]
        }
    }

    return smaller
}

function main() {
    // 1
    console.log(titleCase('SELamAt PaGi Dunia!!'))
    console.log(kebabCase('SELamAt PaGi Dunia!!'))

    console.log('==============================')

    // 2
    console.log(
        strLength(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        )
    )

    console.log('==============================')

    // 3
    console.log(generateSquaredNumber(11))
    console.log(generatePlusOddNumber(10))
    console.log(generateFibonacci(11))
    console.log(generatePlusFibonacciNumber(10))

    console.log('==============================')

    // 4
    console.log(getValuesFromStringOfArray('20,21, 80a,21, 5d5, 31 22'))
}

// main()

module.exports = {
    titleCase,
    kebabCase,
    strLength,
    generateSquaredNumber,
    generatePlusOddNumber,
    generateFibonacci,
    generatePlusFibonacciNumber,
    getValuesFromStringOfArray
}
