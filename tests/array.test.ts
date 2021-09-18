import arrayTestCases from "./testCases/array";
import arraysClassNames from '../src/arrays';

test('check that the array function parses the classnames correctly', () => {
    arrayTestCases.forEach(arraysTestCase => {
        console.log(`testing: ${arraysTestCase.name}`);
        expect(arraysClassNames(...arraysTestCase.value))
        .toEqual(arraysTestCase.expectedResult);
    })
});