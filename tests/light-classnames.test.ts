import lightClassNamesTestCases from "./testCases";
import lightClassNames from '../src';

test('check the function parses correctly', () => {
    lightClassNamesTestCases.forEach(testCase => {
        expect(lightClassNames(...testCase.value))
        .toEqual(testCase.expectedResult);
    })
});