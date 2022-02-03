import lightClassNamesTestCases from "./testCases";
import lightClassNames from '../src/index';

describe('Check the function parses correctly', () => {
    lightClassNamesTestCases.forEach(testCase => {
        test(testCase.name, () => {
            expect(lightClassNames(...testCase.value)).toEqual(testCase.expectedResult);
        });
    });
});