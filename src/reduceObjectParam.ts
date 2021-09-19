const reduceObjectArg = (object: object): string => {
    if (object.toString) {
        return object.toString();
    }
    return Object.entries(object).reduce((currentArray: string[], currentArg: [string, unknown]): string[] => {
        if (currentArg[1]) {
            return currentArray.concat(currentArg[0]);
        }

        return currentArray;
    }, []).join(' ');
};

export default reduceObjectArg;