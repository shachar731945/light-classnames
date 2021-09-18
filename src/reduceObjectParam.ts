const reduceObjectArg = (object: object): string => {
    return Object.entries(object).reduce((currentArray: string[], currentArg: [string, any]): string[] => {
        if (currentArg[0]) {
            return currentArray.concat(currentArg[1]);
        }

        return currentArray;
    }, []).join(' ');
};

export default reduceObjectArg;