import validatorType from "./validatorType";

const arraysClassNames = (array: [string, validatorType][]): string => {
    return array.reduce(
        (previousValue: Array<string>, currentValue: [string, validatorType]): Array<string> => {
            if (currentValue[1]) {
                return previousValue.concat(currentValue[0])
            }

            return previousValue;
        }
        , []
    ).join(' ');
};

export default arraysClassNames;