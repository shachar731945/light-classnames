import { ArgumentType } from "../src/light-classnames";

type testCaseType = { name: string, value: ArgumentType[], expectedResult: string };

export const benchmarkCases: testCaseType[] = [
    {
        name: 'benchmark: measurethat',
        value: [
            'style',
            {'style-2': true, 'style-3': false, 'style-4': 9, 'style-5': null },
            6,
            'another-string',
            {a: undefined, b: 'asdf'}
        ],
        expectedResult: 'style style-2 style-4 6 another-string b'
    },
    {
        name: 'benchmark: strings',
        value: ['one', 'two', 'three'],
        expectedResult: 'one two three'
    },
    {
        name: 'benchmark: object',
        value: [{ one: true, two: true, three: false }],
        expectedResult: 'one two'
    },
    {
        name: 'benchmark: strings, object',
        value: ['one', 'two', { four: true, three: false }],
        expectedResult: 'one two four'
    },
    {
        name: 'benchmark: mix',
        value: ['one', { two: true, three: false }, { four: 'four', five: true }, 6, {}],
        expectedResult: 'one two four five 6'
    }
];

export default [
    // classnames own testing cases that fit this package' API
    {
        name: 'keeps object keys with truthy values',
        value: [{ a: true, b: false, c: 0, d: null, e: undefined, f: 1 }],
        expectedResult: 'a f'
    },
    {
        name: 'mix',
        value: ['a', 0, null, undefined, 1, 'b'],
        // we do want our package to render 0 as string (in diff to classnames)
        expectedResult: 'a 1 b'
    },
    {
        name: 'supports heterogenous arguments',
        value: [{ a: true }, 'b', 0],
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
    // classnames own readme examples
    {
        name: 'foo bar literals',
        value: ['foo', 'bar'],
        expectedResult: 'foo bar'
    },
    {
        name: 'foo literal bar object true',
        value: ['foo', { bar: true }],
        expectedResult: 'foo bar'
    },
    {
        name: 'foo-bar object true',
        value: [{ 'foo-bar': true }],
        expectedResult: 'foo-bar'
    },
    {
        name: 'foo-bar object false',
        value: [{ 'foo-bar': false }],
        expectedResult: ''
    },
    {
        name: 'foo object bar object',
        value: [{ foo: true }, { bar: true }],
        expectedResult: 'foo bar'
    },
    {
        name: 'foo bar object',
        value: [{ foo: true, bar: true }],
        expectedResult: 'foo bar'
    },
    {
        name: 'lots of arguments',
        value: ['foo', { bar: true, duck: false }, 'baz', { quux: true }],
        expectedResult: 'foo bar baz quux'
    },
    {
        name: 'lots of arguments with numbers',
        value: [null, 'bar', undefined, 0, 1, { baz: null }, ''],
        expectedResult: 'bar 1'
    },
    // classnames official benchmark fixtures that are compatible with this package' API
    ...benchmarkCases,
    // my own test cases
    {
        name: 'one item object',
        value: [{ a: true, b: false }],
        expectedResult: 'a'
    },
    {
        name: 'many values object with literal',
        value: [{ a: '6', b: null, c: 6, d: null }, '3'],
        expectedResult: 'a c 3'
    },
    {
        name: 'many values object with two literals',
        value: ['6', { a: '9', b: null, c: 6, d: null }, '3'],
        expectedResult: '6 a c 3'
    },
    {
        name: 'two objects',
        value: [{ a: '6', b: null, c: 6, d: null }, { e: true, f: false }],
        expectedResult: 'a c e'
    },
    {
        name: 'two objects with literal',
        value: [{ a: '6', b: null, c: 6, d: null }, 'gu', { e: true, f: false }],
        expectedResult: 'a c gu e'
    },
    {
        name: 'literal string',
        value: ['3'],
        expectedResult: '3'
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
    },
    {
        name: 'number literal',
        value: [6],
        expectedResult: '6'
    },
    {
        name: 'many number literals',
        value: [6, 9, 4, 2, 0],
        expectedResult: '6 9 4 2'
    },
    {
        name: 'strings with numbers',
        value: [6, '9', 4, '2', 0],
        expectedResult: '6 9 4 2'
    },
    {
        name: 'mix of every possible type',
        value: [6, undefined, {}, null, { 9: true, 'asdf': 0 }],
        expectedResult: '6 9'
    }
] as testCaseType[];
