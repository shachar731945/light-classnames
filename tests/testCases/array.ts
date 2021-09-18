import { arraysArgumentType } from "../../src/types";
import {arraysTestCase as arraysTestCase} from "../types";

export default [
    {
        name: 'one array item',
        value: [['a', 6]],
        expectedResult: 'a'
    },
    {
        name: 'empty params',
        value: [],
        expectedResult: ''
    },
    {
        name: 'many arrays array with literal',
        value: [['a', '6'], ['b', null], ['c', 6], ['d', null], '78'],
        expectedResult: 'a c 78'
    },
    {
        name: 'two many arrays array with two literals',
        value: [['a', '6'], 'g', ['b', null], ['c', 6], 't', ['d', null]],
        expectedResult: 'a g c t'
    }
] as arraysTestCase[];