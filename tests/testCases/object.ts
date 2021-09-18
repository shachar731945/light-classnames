import {objectTestCase} from "../types";

export default [
    {
        name: 'one item object',
        value: {a: true},
        expectedResult: 'a'
    },
    {
        name: 'empty object',
        value: {},
        expectedResult: ''
    },
    {
        name: 'many values object',
        value: {a: '6', b: null, c: 6, d: null},
        expectedResult: 'a c'
    }
] as objectTestCase[];