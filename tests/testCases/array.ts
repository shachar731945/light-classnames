import {arraytTestCase} from "../types";

export default [
    {
        name: 'one item object',
        value: [['a', 6]] as [string, any][],
        expectedResult: 'a'
    },
    {
        name: 'empty object',
        value: [] as [string, any][],
        expectedResult: ''
    },
    {
        name: 'many values object',
        value: [['a', '6'], ['b', null], ['c', 6], ['d', null]] as [string, any][],
        expectedResult: 'a c'
    }
] as arraytTestCase[];