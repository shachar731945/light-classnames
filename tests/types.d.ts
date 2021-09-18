import {arraysArgumentType, objectArgumentType} from '../src/types'

export interface objectTestCase {
    name: string,
    value: objectArgumentType[],
    expectedResult: string
}

export interface arraysTestCase {
    name: string,
    value: arraysArgumentType[],
    expectedResult: string
}