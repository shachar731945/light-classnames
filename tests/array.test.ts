import arrayTestCases from "./testCases/array";
import arraysClassNames from '../src/arrays';

test('check that the array function parses the classnames correctly', () => {
    arrayTestCases.forEach(arraytTestCase => {
        console.log(`testing: ${arraytTestCase.name}`);
        expect(arraysClassNames(arraytTestCase.value))
        .toEqual(arraytTestCase.expectedResult);
    })
});