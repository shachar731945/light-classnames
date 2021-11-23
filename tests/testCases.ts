
export default [
    // classnames own testing cases that fit the package' API
    {
        name: 'keeps object keys with truthy values',
        value: [{a: true, b: false, c: 0, d: null, e: undefined, f: 1 }],
        expectedResult: 'a f'
    },
    {
        name: 'supports heterogenous arguments',
        value: [{ a: true }, 'b'],
        expectedResult: 'a b'
    },
    {
        name: 'should be trimmed',
        value: ['', 'b', {}, ''],
        expectedResult: 'b'
    },
    {
        name: 'returns an empty string for an empty configuration',
        value: [{}],
        expectedResult: ''
    },
    {
        name: 'supports an array of class names',
        value: ['a', 'b'],
        expectedResult: 'a b'
    },
    // classnames own readme examples
    {
        name: 'foo bar literals',
        value: ['foo', 'bar'],
        expectedResult: 'foo bar'
    },
    {
        name: 'foo literal bar object true',
        value: ['foo', {bar: true}],
        expectedResult: 'foo bar'
    },
    {
        name: 'foo-bar object true',
        value: [{'foo-bar': true}],
        expectedResult: 'foo-bar'
    },
    {
        name: 'foo-bar object false',
        value: [{'foo-bar': false}],
        expectedResult: ''
    },
    {
        name: 'foo object bar object',
        value: [{foo: true}, {bar: true}],
        expectedResult: 'foo bar'
    },
    {
        name: 'foo bar object',
        value: [{foo: true, bar: true}],
        expectedResult: 'foo bar'
    },
    {
        name: 'lots of arguments',
        value: ['foo', {bar: true, duck: false}, 'baz', {quux: true}],
        expectedResult: 'foo bar baz quux'
    },
    // my own test cases
    {
        name: 'one item object',
        value: [{a: true}],
        expectedResult: 'a'
    },
    {
        name: 'many values object with literal',
        value: [{a: '6', b: null, c: 6, d: null}, '3'],
        expectedResult: 'a c 3'
    },
    {
        name: 'many values object with two literals',
        value: ['6', {a: '6', b: null, c: 6, d: null}, '3'],
        expectedResult: '6 a c 3'
    },
    {
        name: 'two objects',
        value: [{a: '6', b: null, c: 6, d: null}, {e: true, f: false}],
        expectedResult: 'a c e'
    },
    {
        name: 'two objects with literal',
        value: [{a: '6', b: null, c: 6, d: null}, 'gu', {e: true, f: false}],
        expectedResult: 'a c gu e'
    },
    {
        name: 'one item object',
        value: [{a: true}],
        expectedResult: 'a'
    },
    {
        name: 'literal',
        value: ['3'],
        expectedResult: '3'
    },
    {
        name: 'many values object with literal',
        value: [{a: '6', b: null, c: 6, d: null}, '3'],
        expectedResult: 'a c 3'
    },
    {
        name: 'many values object with two literals',
        value: ['6', {a: '6', b: null, c: 6, d: null}, '3'],
        expectedResult: '6 a c 3'
    },
    {
        name: 'two objects',
        value: [{a: '6', b: null, c: 6, d: null}, {e: true, f: false}],
        expectedResult: 'a c e'
    },
    {
        name: 'two objects with literal',
        value: [{a: '6', b: null, c: 6, d: null}, 'gu', {e: true, f: false}],
        expectedResult: 'a c gu e'
    },
    {
        name: 'remove `undefined` and `null`',
        value: [undefined, null],
        expectedResult: ''
    },
    {
        name: 'many values with `undefined` and `null`',
        value: ['a', undefined, 'b', null, 'c', 'd', undefined, undefined, 'e'],
        expectedResult: 'a b c d e'
    }
];
