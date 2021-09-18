import objectTestCases from "./testCases/object";
import objectClassNames from '../src/object';

test('check that the object function parses the classnames correctly', () => {
    objectTestCases.forEach(objectTestCase => {
        console.log(`testing: ${objectTestCase.name}`);
        expect(objectClassNames(...objectTestCase.value))
        .toEqual(objectTestCase.expectedResult);
    })
});