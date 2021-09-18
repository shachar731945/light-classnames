export interface objectTestCase {
    name: string,
    value: object,
    expectedResult: string
}

export interface arraytTestCase {
    name: string,
    value: [string, any][],
    expectedResult: string
}