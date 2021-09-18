const arraysClassNames = (array: [string, any][]): string => {
    return array.reduce(
        (previousValue: Array<string>, currentValue: [string, any]): Array<string> => {
            if (currentValue[1]) {
                return previousValue.concat(currentValue[0])
            }

            return previousValue;
        }
        , []
    ).join(' ');
};

export default arraysClassNames;