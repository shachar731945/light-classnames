import {testCases} from "./testCases";
import lightClassNames from '../src/index';

describe('Check the function parses correctly', () => {
    testCases.forEach(testCase => {
        test(testCase.name, () => {
            expect(lightClassNames(...testCase.value)).toEqual(testCase.expectedResult);
        });
    });
});