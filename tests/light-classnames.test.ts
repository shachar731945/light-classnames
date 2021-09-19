import lightClassNamesTestCases from "./testCases";
import lightClassNames from '../src/index';

test('check the function parses correctly', () => {
    lightClassNamesTestCases.forEach(testCase => {
        expect(lightClassNames(...testCase.value))
        .toEqual(testCase.expectedResult);
    })
});