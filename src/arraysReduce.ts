const arraysReduce = (arrays: [string, any][]): string => {
    return arrays.reduce((previousValue: string[], currentEntry: [string, any]): string[] => {
        if (currentEntry[1]) {
            return previousValue.concat(currentEntry[0]);
        }

        return previousValue;
    }, []).join(' ')
};

export default arraysReduce;