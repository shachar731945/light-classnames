import {lightClassNamesTestCase} from "./types";

export default [
    {
        name: 'one item object',
        value: [{a: true}],
        expectedResult: 'a'
    },
    {
        name: 'many values object wiht literal',
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
        name: 'many values object wiht literal',
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
    }
] as lightClassNamesTestCase[];