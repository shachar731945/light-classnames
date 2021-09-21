import lightClassNamesTestCases from "./testCases";
import lightClassNames from '../src/index';

lightClassNamesTestCases.forEach((testCase) => {
    const {name, value, expectedResult} = testCase;
    test(name, () => {
        expect(lightClassNames(...value)).toEqual(expectedResult);
    })
});
